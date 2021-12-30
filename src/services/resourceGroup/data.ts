import { ResourceManagementClient } from '@azure/arm-resources'
import {
  ResourceGroup,
  ResourceGroupListResult,
  ResourceGroupsListNextResponse,
  ResourceGroupsListResponse,
} from '@azure/arm-resources/esm/models'
import CloudGraph from '@cloudgraph/sdk'
import isEmpty from 'lodash/isEmpty'

import services from '../../enums/services'
import azureLoggerText from '../../properties/logger'
import { AzureServiceInput, TagMap } from '../../types'
import { getAllResources } from '../../utils/apiUtils'
import { lowerCaseLocation } from '../../utils/format'
import { getResourceGroupFromEntity } from '../../utils/idParserUtils'

const { logger } = CloudGraph
const lt = { ...azureLoggerText }
const serviceName = 'ResourceGroup'

export interface RawAzureResourceGroup
  extends Omit<ResourceGroup, 'tags' | 'location'> {
  region: string
  resourceGroup: string
  Tags: TagMap
}

export default async ({
  regions,
  config,
  rawData,
}: AzureServiceInput): Promise<{
  [property: string]: RawAzureResourceGroup[]
}> => {
  try {
    const existingData: { [property: string]: RawAzureResourceGroup[] } =
      rawData.find(({ name }) => name === services.resourceGroup)?.data || {}
    if (isEmpty(existingData)) {
      // Refresh data
      const { credentials, subscriptionId } = config
      const client = new ResourceManagementClient(credentials, subscriptionId)

      const resourceGroupData: ResourceGroupListResult = await getAllResources({
        listCall: async (): Promise<ResourceGroupsListResponse> =>
          client.resourceGroups.list(),
        listNextCall: async (
          nextLink: string
        ): Promise<ResourceGroupsListNextResponse> =>
          client.resourceGroups.listNext(nextLink),
        debugScope: { service: serviceName, client, scope: 'resourceGroups' },
      })

      const result = {}
      let numOfGroups = 0
      resourceGroupData.map(({ tags, location, ...rest }) => {
        const region = lowerCaseLocation(location)
        if (regions.includes(region)) {
          if (!result[region]) {
            result[region] = []
          }
          const resourceGroup = getResourceGroupFromEntity(rest)
          result[region].push({
            ...rest,
            region,
            resourceGroup,
            Tags: tags || {},
          })
          numOfGroups += 1
        }
      })
      logger.debug(lt.foundResourceGroups(numOfGroups))

      return result
    }
    return existingData
  } catch (e) {
    logger.error(e)
    return {}
  }
}
