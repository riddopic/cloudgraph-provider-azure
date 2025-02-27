# CloudGraph Azure Provider

Scan cloud infrastructure via the [Azure SDK](https://github.com/Azure/azure-sdk-for-js)

<!-- toc -->

- [Install](#install)
- [Authentication](#authentication)
- [Supported Services](#supported-services)
<!-- tocstop -->

## Docs

⭐ [CloudGraph Readme](https://github.com/cloudgraphdev/cli)

💻 [Full CloudGraph Documentation Including Azure Examples](https://docs.cloudgraph.dev)

## Install

Install the aws provider in CloudGraph

```console
cg init azure
```

## Authentication

Authenticate the CloudGraph Azure Provider any of the following ways:

- Credentials added using the init command

CloudGraph needs read permissions in order to ingest your data. To keep things easy you can use the same permissions that we use internally when we run CloudGraph to power AutoCloud. Here are the [Azure Docs](https://docs.autocloud.dev/connect-an-environment/azure) for generating the correct Service Principal with a Client Secret (feel free to leave out AutoCloud specific configuration).

## Supported Services

| Service                                     | Relations                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------- |
| activityLogAlerts                           | resourceGroup                                                             |
| adApplication                               | authRoleAssignment, adGroup, adServicePrincipal, adUser                   |
| adGroup                                     | adApplication, authRoleAssignment                                         |
| adIdentitySecurityDefaultsEnforcementPolicy |                                                                           |
| adServicePrincipal                          | adApplication, authRoleAssignment                                         |
| adUser                                      | adApplication, authRoleAssignment                                         |
| aksManagedCluster                           | resourceGroup                                                             |
| appServicePlan                              | resourceGroup, appServiceWebApp                                           |
| appServiceWebApp                            | resourceGroup, appServicePlan, storageAccount                             |
| arcConnectedCluster                         | resourceGroup                                                             |
| authRoleAssignment                          | adApplication, adGroup, adServicePrincipal, adUser, authRoleDefinition    |
| authRoleDefinition                          | authRoleAssignment                                                        |
| autoProvisioningSettings                    |                                                                           |
| containerRegistry                           | keyVault, resourceGroup                                                   |
| cdnCustomDomains                            | cdnEndpoints, resourceGroup                                               |
| cdnEndpoints                                | cdnCustomDomains, cdnOrigins, cdnOriginGroups, cdnProfiles, resourceGroup |
| cdnProfiles                                 | cdnEndpoints, resourceGroup                                               |
| cdnOrigins                                  | cdnEndpoints, cdnOriginGroups, resourceGroup                              |
| cdnOriginGroups                             | cdnEndpoints, cdnOrigins, resourceGroup                                   |
| dataFactory                                 | resourceGroup                                                             |
| databaseManagedSqlInstance                  | resourceGroup                                                             |
| databaseMySql                               | resourceGroup, mySqlServers                                               |
| databasePostgreSql                          | resourceGroup, postgreSqlServers                                          |
| databaseSql                                 | resourceGroup, sqlServers                                                 |
| databaseSqlVm                               | resourceGroup                                                             |
| disk                                        | resourceGroup, virtualMachine                                             |
| dns                                         | resourceGroup                                                             |
| eventGrid                                   | resourceGroup                                                             |
| eventHub                                    | resourceGroup, storageAccount                                             |
| fileShare                                   | resourceGroup, storageAccount                                             |
| firewall                                    | publicIp, virtualNetwork                                                  |
| functionApp                                 | resourceGroup                                                             |
| keyVault                                    | resourceGroup                                                             |
| monitorInsightsActivityLogAlertRule         |                                                                           |
| mySqlServers                                | resourceGroup, databaseMySql                                              |
| loadBalancer                                | loadBalancer, publicIp, resourceGroup, virtualNetwork                     |
| logAnalyticsWorkspace                       | resourceGroup                                                             |
| networkInterface                            | publicIp, resourceGroup, securityGroup, virtualMachine, virtualNetwork    |
| policyAssignment                            |                                                                           |
| postgreSqlServers                           | resourceGroup, databasePostgreSql                                         |
| privateDns                                  | resourceGroup                                                             |
| publicIp                                    | networkInterface, resourceGroup                                           |
| resourceGroup                               | **all services**                                                          |
| securityAssessments                         |                                                                           |
| securityContacts                            |                                                                           |
| securityGroup                               | networkInterface, resourceGroup                                           |
| securityPricings                            |                                                                           |
| securitySettings                            |                                                                           |
| sqlServers                                  | databaseSql, resourceGroup                                                |
| storageAccount                              | resourceGroup, storageContainer                                           |
| storageBlob                                 | resourceGroup, storageContainer                                           |
| storageContainer                            | resourceGroup, storageAccount                                             |
| trafficManager                              | resourceGroup                                                             |
| virtualMachine                              | disk, networkInterface, resourceGroup, virtualNetwork                     |
| virtualMachineScaleSet                      | resourceGroup                                                             |
| virtualNetwork                              | networkInterface, resourceGroup virtualMachine                            |

## Development

Install all the dependencies:

```console
yarn
```

Generate types and compile:

```console
yarn build
```

## Testing

<!-- testing -->

<!-- testingstop -->
