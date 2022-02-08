import services from './services'

/**
 * schemasMap is an object that contains schemas name by resource
 */
export default {
  [services.appServicePlan]: 'azureAppServicePlan',
  [services.appServiceWebApp]: 'azureAppServiceWebApp',
  [services.authRoleAssignment]: 'azureAuthRoleAssignment',
  [services.authRoleDefinition]: 'azureAuthRoleDefinition',
  [services.disk]: 'azureDisk',
  [services.dns]: 'azureDnsZone',
  [services.eventGrid]: 'azureEventGrid',
  [services.eventHub]: 'azureEventHub',
  [services.firewall]: 'azureFirewall',
  [services.functionApp]: 'azureFunctionApp',
  [services.keyVault]: 'azureKeyVault',
  [services.monitorInsightsActivityLogAlertRule]: 'azureMonitorInsightsActivityLogAlertRule',
  [services.networkInterface]: 'azureNetworkInterface',
  [services.policyAssignment]: 'azurePolicyAssignment',
  [services.publicIp]: 'azurePublicIp',
  [services.resourceGroup]: 'azureResourceGroup',
  [services.securityAssesments]: 'azureSecurityAssesments',
  [services.securityGroup]: 'azureNetworkSecurityGroup',
  [services.securityPricings]: 'azureSecurityPricings',
  [services.securitySettings]: 'azureSecuritySettings',
  [services.storageAccount]: 'azureStorageAccount',
  [services.storageContainer]: 'azureStorageContainer',
  [services.virtualMachine]: 'azureVirtualMachine',
  [services.virtualMachineScaleSet]: 'azureVirtualMachineScaleSet',
  [services.virtualNetwork]: 'azureVirtualNetwork',
  tag: 'azureTag',
}
