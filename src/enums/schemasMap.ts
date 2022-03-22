import services from './services'

/**
 * schemasMap is an object that contains schemas name by resource
 */
export default {
  [services.activityLogAlerts]: 'azureActivityLogAlert',
  [services.adApplication]: 'azureADApplication',
  [services.adGroup]: 'azureADGroup',
  [services.adIdentitySecurityDefaultsEnforcementPolicy]:
    'azureAdIdentitySecurityDefaultsEnforcementPolicy',
  [services.adServicePrincipal]: 'azureADServicePrincipal',
  [services.adUser]: 'azureADUser',
  [services.aksManagedCluster]: 'azureAksManagedCluster',
  // [services.appServiceKubeEnvironment]: 'azureAppServiceKubeEnvironment',
  [services.appServicePlan]: 'azureAppServicePlan',
  [services.appServiceWebApp]: 'azureAppServiceWebApp',
  [services.arcConnectedCluster]: 'azureArcConnectedCluster',
  [services.authRoleAssignment]: 'azureAuthRoleAssignment',
  [services.authRoleDefinition]: 'azureAuthRoleDefinition',
  [services.autoProvisioningSettings]: 'azureAutoProvisioningSetting',
  [services.cdnCustomDomains]: 'azureCdnCustomDomain',
  [services.cdnEndpoints]: 'azureCdnEndpoint',
  [services.cdnOriginGroups]: 'azureCdnOriginGroup',
  [services.cdnOriginGroups]: 'azureCdnOriginGroup',
  [services.cdnOrigins]: 'azureCdnOrigin',
  [services.cdnOrigins]: 'azureCdnOrigin',
  [services.cdnProfiles]: 'azureCdnProfile',
  [services.containerRegistry]: 'azureContainerRegistry',
  [services.dataFactory]: 'azureDataFactory',
  [services.databaseManagedSqlInstance]: 'azureDatabaseManagedSqlInstance',
  [services.databaseMySql]: 'azureDatabaseMySql',
  [services.databasePostgreSql]: 'azureDatabasePostgreSql',
  [services.databaseSqlVm]: 'azureDatabaseSqlVm',
  [services.databaseSql]: 'azureDatabaseSql',
  [services.disk]: 'azureDisk',
  [services.dns]: 'azureDnsZone',
  [services.eventGrid]: 'azureEventGrid',
  [services.eventHub]: 'azureEventHub',
  [services.fileShare]: 'azureFileShare',
  [services.firewall]: 'azureFirewall',
  [services.functionApp]: 'azureFunctionApp',
  [services.keyVault]: 'azureKeyVault',
  [services.loadBalancer]: 'azureLoadBalancer',
  [services.monitorInsightsActivityLogAlertRule]:
    'azureMonitorInsightsActivityLogAlertRule',
  [services.mySqlServers]: 'azureMySqlServer',
  [services.networkInterface]: 'azureNetworkInterface',
  [services.policyAssignment]: 'azurePolicyAssignment',
  [services.postgreSqlServers]: 'azurePostgreSqlServer',
  [services.privateDns]: 'azurePrivateDnsZone',
  [services.publicIp]: 'azurePublicIp',
  [services.resourceGroup]: 'azureResourceGroup',
  [services.securityAssesments]: 'azureSecurityAssesment',
  [services.securityContacts]: 'azureSecurityContact',
  [services.securityGroup]: 'azureNetworkSecurityGroup',
  [services.securityPricings]: 'azureSecurityPricing',
  [services.securitySettings]: 'azureSecuritySetting',
  [services.sqlServers]: 'azureSqlServer',
  [services.storageAccount]: 'azureStorageAccount',
  [services.storageBlob]: 'azureStorageBlob',
  [services.storageContainer]: 'azureStorageContainer',
  [services.trafficManagerProfile]: 'azureTrafficManagerProfile',
  [services.virtualMachineScaleSet]: 'azureVirtualMachineScaleSet',
  [services.virtualMachine]: 'azureVirtualMachine',
  [services.virtualNetwork]: 'azureVirtualNetwork',
  tag: 'azureTag',
}
