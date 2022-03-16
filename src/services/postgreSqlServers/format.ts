import cuid from 'cuid'
import { formatTagsFromMap } from '../../utils/format'
import { RawAzurePostgreSqlServer } from './data'
import { AzurePostgreSqlServer } from '../../types/generated'

export default ({
  service,
  account,
  region,
}: {
  service: RawAzurePostgreSqlServer
  account: string
  region: string
}): AzurePostgreSqlServer => {
  const {
    id,
    name,
    type,
    identity,
    administratorLogin,
    version,
    sslEnforcement,
    minimalTlsVersion,
    byokEnforcement,
    infrastructureEncryption,
    userVisibleState,
    fullyQualifiedDomainName,
    earliestRestoreDate,
    storageProfile,
    replicationRole,
    masterServerId,
    replicaCapacity,
    publicNetworkAccess,
    privateEndpointConnections,  
    resourceGroupId,
    Tags,
  } = service

  return {
    id: id || cuid(),
    subscriptionId: account,
    name,
    type,
    region,
    resourceGroupId,
    identity,
    administratorLogin,
    version,
    sslEnforcement,
    minimalTlsVersion,
    byokEnforcement,
    infrastructureEncryption,
    userVisibleState,
    fullyQualifiedDomainName,
    earliestRestoreDate: earliestRestoreDate?.toISOString(),
    storageProfile,
    replicationRole,
    masterServerId,
    replicaCapacity,
    publicNetworkAccess,
    privateEndpointConnections: privateEndpointConnections?.map(connection => ({
      ...connection,
      id: connection.id || cuid(),
    })), 
    tags: formatTagsFromMap(Tags),
  }
}
