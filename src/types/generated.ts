export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Int64: number;
};

export type AzureAdApplication = {
  apiAcceptMappedClaims?: Maybe<Scalars['Boolean']>;
  apiKnownClientApplications?: Maybe<Array<Maybe<Scalars['String']>>>;
  apiPreAuthorizedApplications?: Maybe<Array<Maybe<Scalars['String']>>>;
  appId?: Maybe<Scalars['String']>;
  appRoles?: Maybe<Array<Maybe<AzureAdApplicationRole>>>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  authRoleAssignments?: Maybe<Array<Maybe<AzureAuthRoleAssignment>>>;
  createdDateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabledByMicrosoftStatus?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  groupMembershipClaims?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  identifierUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  instancedBy?: Maybe<Array<Maybe<AzureAdServicePrincipal>>>;
  isDeviceOnlyAuthSupported?: Maybe<Scalars['Boolean']>;
  isFallbackPublicClient?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  oauth2RequirePostResponse?: Maybe<Scalars['Boolean']>;
  ownerGroups?: Maybe<Array<Maybe<AzureAdGroup>>>;
  ownerServicePrincipals?: Maybe<Array<Maybe<AzureAdServicePrincipal>>>;
  ownerUsers?: Maybe<Array<Maybe<AzureAdUser>>>;
  publicClientRedirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  publisherDomain?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  signInAudience?: Maybe<Scalars['String']>;
  spaApplicationRedirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  webAppHomePageUrl?: Maybe<Scalars['String']>;
  webAppRedirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureAdApplicationRole = {
  allowedMemberTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureAdApplicationRoleAssignment = {
  appRoleId?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  principalDisplayName?: Maybe<Scalars['String']>;
  principalId?: Maybe<Scalars['String']>;
  principalType?: Maybe<Scalars['String']>;
  resourceDisplayName?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
};

export type AzureAdGroup = {
  allowExternalSenders?: Maybe<Scalars['Boolean']>;
  appOwnerOf?: Maybe<Array<Maybe<AzureAdApplication>>>;
  appRoleAssignments?: Maybe<Array<Maybe<AzureAdApplicationRoleAssignment>>>;
  authRoleAssignments?: Maybe<Array<Maybe<AzureAuthRoleAssignment>>>;
  classification?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['String']>;
  deletedDateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expirationDateTime?: Maybe<Scalars['String']>;
  groupTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  isArchived?: Maybe<Scalars['Boolean']>;
  isAssignableToRole?: Maybe<Scalars['Boolean']>;
  isSubscribedByMail?: Maybe<Scalars['Boolean']>;
  mail?: Maybe<Scalars['String']>;
  mailEnabled?: Maybe<Scalars['Boolean']>;
  mailNickname?: Maybe<Scalars['String']>;
  membershipRule?: Maybe<Scalars['String']>;
  membershipRuleProcessingState?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['String']>;
  onPremisesNetBiosName?: Maybe<Scalars['String']>;
  onPremisesSamAccountName?: Maybe<Scalars['String']>;
  onPremisesSecurityIdentifier?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  permissionGrants?: Maybe<Array<Maybe<AzureAdGroupResourceSpecificPermissionGrant>>>;
  preferredDataLocation?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  proxyAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  renewedDateTime?: Maybe<Scalars['String']>;
  securityEnabled?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Array<Maybe<AzureAdGroupSetting>>>;
  visibility?: Maybe<Scalars['String']>;
};

export type AzureAdGroupResourceSpecificPermissionGrant = {
  clientAppId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  permission?: Maybe<Scalars['String']>;
  permissionType?: Maybe<Scalars['String']>;
  resourceAppId?: Maybe<Scalars['String']>;
};

export type AzureAdGroupSetting = {
  deletedDateTime?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  templateId?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<AzureAdSettingValue>>>;
};

export type AzureAdServicePrincipal = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  alternativeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  appDescription?: Maybe<Scalars['String']>;
  appDisplayName?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  appOwnerOf?: Maybe<Array<Maybe<AzureAdApplication>>>;
  appOwnerOrganizationId?: Maybe<Scalars['String']>;
  appRoleAssignedTo?: Maybe<Array<Maybe<AzureAdApplicationRoleAssignment>>>;
  appRoleAssignmentRequired?: Maybe<Scalars['Boolean']>;
  appRoleAssignments?: Maybe<Array<Maybe<AzureAdApplicationRoleAssignment>>>;
  appRoles?: Maybe<Array<Maybe<AzureAdApplicationRole>>>;
  applicationTemplateId?: Maybe<Scalars['String']>;
  authRoleAssignments?: Maybe<Array<Maybe<AzureAuthRoleAssignment>>>;
  deletedDateTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabledByMicrosoftStatus?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  endpoints?: Maybe<Array<Maybe<AzureAdServicePrincipalEndpoint>>>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instanceOf?: Maybe<Array<Maybe<AzureAdApplication>>>;
  loginUrl?: Maybe<Scalars['String']>;
  logoutUrl?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  notificationEmailAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  preferredSingleSignOnMode?: Maybe<Scalars['String']>;
  replyUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  servicePrincipalNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  servicePrincipalType?: Maybe<Scalars['String']>;
  signInAudience?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  tokenEncryptionKeyId?: Maybe<Scalars['String']>;
};

export type AzureAdServicePrincipalEndpoint = {
  capability?: Maybe<Scalars['String']>;
  deletedDateTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  providerResourceId?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type AzureAdSettingValue = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureAdUser = {
  accountEnabled?: Maybe<Scalars['Boolean']>;
  ageGroup?: Maybe<Scalars['String']>;
  appOwnerOf?: Maybe<Array<Maybe<AzureAdApplication>>>;
  appRoleAssignments?: Maybe<Array<Maybe<AzureAdApplicationRoleAssignment>>>;
  authRoleAssignments?: Maybe<Array<Maybe<AzureAuthRoleAssignment>>>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdDateTime?: Maybe<Scalars['String']>;
  creationType?: Maybe<Scalars['String']>;
  deletedDateTime?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  employeeHireDate?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  employeeType?: Maybe<Scalars['String']>;
  externalUserState?: Maybe<Scalars['String']>;
  externalUserStateChangeDateTime?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isResourceAccount?: Maybe<Scalars['Boolean']>;
  lastPasswordChangeDateTime?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  mailNickname?: Maybe<Scalars['String']>;
  officeLocation?: Maybe<Scalars['String']>;
  onPremisesDistinguishedName?: Maybe<Scalars['String']>;
  onPremisesDomainName?: Maybe<Scalars['String']>;
  onPremisesImmutableId?: Maybe<Scalars['String']>;
  onPremisesLastSyncDateTime?: Maybe<Scalars['String']>;
  onPremisesSyncEnabled?: Maybe<Scalars['Boolean']>;
  onPremisesUserPrincipalName?: Maybe<Scalars['String']>;
  otherMails?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordPolicies?: Maybe<Scalars['String']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  preferredName?: Maybe<Scalars['String']>;
  proxyAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  responsibilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  usageLocation?: Maybe<Scalars['String']>;
  userPrincipalName?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
};

export type AzureActivityLogAlert = AzureBaseResource & {
  actions?: Maybe<AzureActivityLogAlertActionList>;
  condition?: Maybe<AzureActivityLogAlertAllOfCondition>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscriptionId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
};

export type AzureActivityLogAlertActionGroup = {
  actionGroupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  webhookProperties?: Maybe<Array<Maybe<AzureKeyValueProperty>>>;
};

export type AzureActivityLogAlertActionList = {
  actionGroups?: Maybe<Array<Maybe<AzureActivityLogAlertActionGroup>>>;
};

export type AzureActivityLogAlertAllOfCondition = {
  allOf?: Maybe<Array<Maybe<AzureActivityLogAlertLeafCondition>>>;
};

export type AzureActivityLogAlertLeafCondition = {
  equals?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AzureAdIdentitySecurityDefaultsEnforcementPolicy = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
};

export type AzureAksManagedCluster = AzureResource & {
  aadProfile?: Maybe<AzureAksManagedClusterAadProfile>;
  agentPoolProfiles?: Maybe<Array<Maybe<AzureAksManagedClusterAgentPoolProfile>>>;
  apiServerAccessProfile?: Maybe<AzureAksManagedClusterApiServerAccessProfile>;
  autoScalerProfile?: Maybe<AzureAksManagedClusterPropertiesAutoScalerProfile>;
  autoUpgradeChannel?: Maybe<Scalars['String']>;
  azureDefenderEnabled?: Maybe<Scalars['Boolean']>;
  azurePortalFqdn?: Maybe<Scalars['String']>;
  disableLocalAccounts?: Maybe<Scalars['Boolean']>;
  diskEncryptionSetID?: Maybe<Scalars['String']>;
  dnsPrefix?: Maybe<Scalars['String']>;
  enableRbac?: Maybe<Scalars['Boolean']>;
  fqdn?: Maybe<Scalars['String']>;
  fqdnSubdomain?: Maybe<Scalars['String']>;
  httpProxyConfig?: Maybe<AzureAksManagedClusterHttpProxyConfig>;
  identity?: Maybe<AzureAksManagedClusterManagedIdentity>;
  kubernetesVersion?: Maybe<Scalars['String']>;
  maxAgentPools?: Maybe<Scalars['Int']>;
  networkProfile?: Maybe<AzureAksManagedClusterNetworkProfile>;
  nodeResourceGroup?: Maybe<Scalars['String']>;
  podIdentityProfileAllowNetworkPluginKubenet?: Maybe<Scalars['Boolean']>;
  podIdentityProfileEnabled?: Maybe<Scalars['Boolean']>;
  powerStateCode?: Maybe<Scalars['String']>;
  privateFqdn?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  servicePrincipalProfileClientId?: Maybe<Scalars['String']>;
  skuName?: Maybe<Scalars['String']>;
  skuTier?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterAadProfile = {
  adminGroupObjectIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientAppID?: Maybe<Scalars['String']>;
  enableAzureRbac?: Maybe<Scalars['Boolean']>;
  managed?: Maybe<Scalars['Boolean']>;
  serverAppID?: Maybe<Scalars['String']>;
  tenantID?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterApiServerAccessProfile = {
  authorizedIPRanges?: Maybe<Array<Maybe<Scalars['String']>>>;
  disableRunCommand?: Maybe<Scalars['Boolean']>;
  enablePrivateCluster?: Maybe<Scalars['Boolean']>;
  enablePrivateClusterPublicFqdn?: Maybe<Scalars['Boolean']>;
  privateDNSZone?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterAgentPoolKubeletConfig = {
  allowedUnsafeSysctls?: Maybe<Array<Maybe<Scalars['String']>>>;
  containerLogMaxFiles?: Maybe<Scalars['Int']>;
  containerLogMaxSizeMB?: Maybe<Scalars['Int']>;
  cpuCfsQuota?: Maybe<Scalars['Boolean']>;
  cpuCfsQuotaPeriod?: Maybe<Scalars['String']>;
  cpuManagerPolicy?: Maybe<Scalars['String']>;
  failSwapOn?: Maybe<Scalars['Boolean']>;
  imageGcHighThreshold?: Maybe<Scalars['Int']>;
  imageGcLowThreshold?: Maybe<Scalars['Int']>;
  podMaxPids?: Maybe<Scalars['Int']>;
  topologyManagerPolicy?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterAgentPoolLinuxOsConfig = {
  swapFileSizeMB?: Maybe<Scalars['Int']>;
  transparentHugePageDefrag?: Maybe<Scalars['String']>;
  transparentHugePageEnabled?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterAgentPoolProfile = {
  availabilityZones?: Maybe<Array<Maybe<Scalars['String']>>>;
  count?: Maybe<Scalars['Int']>;
  enableAutoScaling?: Maybe<Scalars['Boolean']>;
  enableEncryptionAtHost?: Maybe<Scalars['Boolean']>;
  enableFips?: Maybe<Scalars['Boolean']>;
  enableNodePublicIP?: Maybe<Scalars['Boolean']>;
  enableUltraSSD?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  kubeletConfig?: Maybe<AzureAksManagedClusterAgentPoolKubeletConfig>;
  kubeletDiskType?: Maybe<Scalars['String']>;
  linuxOSConfig?: Maybe<AzureAksManagedClusterAgentPoolLinuxOsConfig>;
  maxCount?: Maybe<Scalars['Int']>;
  maxPods?: Maybe<Scalars['Int']>;
  minCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeImageVersion?: Maybe<Scalars['String']>;
  nodePublicIPPrefixID?: Maybe<Scalars['String']>;
  nodeTaints?: Maybe<Array<Maybe<Scalars['String']>>>;
  orchestratorVersion?: Maybe<Scalars['String']>;
  osDiskSizeGB?: Maybe<Scalars['Int']>;
  osDiskType?: Maybe<Scalars['String']>;
  osSKU?: Maybe<Scalars['String']>;
  osType?: Maybe<Scalars['String']>;
  podSubnetID?: Maybe<Scalars['String']>;
  powerStateCode?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  proximityPlacementGroupID?: Maybe<Scalars['String']>;
  scaleDownMode?: Maybe<Scalars['String']>;
  scaleSetEvictionPolicy?: Maybe<Scalars['String']>;
  scaleSetPriority?: Maybe<Scalars['String']>;
  spotMaxPrice?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  upgradeMaxSurge?: Maybe<Scalars['String']>;
  vmSize?: Maybe<Scalars['String']>;
  vnetSubnetID?: Maybe<Scalars['String']>;
  workloadRuntime?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterHttpProxyConfig = {
  httpProxy?: Maybe<Scalars['String']>;
  httpsProxy?: Maybe<Scalars['String']>;
  noProxy?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureAksManagedClusterManagedIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureAksManagedClusterNetworkProfile = {
  dnsServiceIP?: Maybe<Scalars['String']>;
  dockerBridgeCidr?: Maybe<Scalars['String']>;
  ipFamilies?: Maybe<Array<Maybe<Scalars['String']>>>;
  loadBalancerSku?: Maybe<Scalars['String']>;
  networkMode?: Maybe<Scalars['String']>;
  networkPlugin?: Maybe<Scalars['String']>;
  networkPolicy?: Maybe<Scalars['String']>;
  outboundType?: Maybe<Scalars['String']>;
  podCidr?: Maybe<Scalars['String']>;
  podCidrs?: Maybe<Array<Maybe<Scalars['String']>>>;
  serviceCidr?: Maybe<Scalars['String']>;
  serviceCidrs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureAksManagedClusterPropertiesAutoScalerProfile = {
  balanceSimilarNodeGroups?: Maybe<Scalars['String']>;
  expander?: Maybe<Scalars['String']>;
  maxEmptyBulkDelete?: Maybe<Scalars['String']>;
  maxGracefulTerminationSec?: Maybe<Scalars['String']>;
  maxNodeProvisionTime?: Maybe<Scalars['String']>;
  maxTotalUnreadyPercentage?: Maybe<Scalars['String']>;
  newPodScaleUpDelay?: Maybe<Scalars['String']>;
  okTotalUnreadyCount?: Maybe<Scalars['String']>;
  scaleDownDelayAfterAdd?: Maybe<Scalars['String']>;
  scaleDownDelayAfterDelete?: Maybe<Scalars['String']>;
  scaleDownDelayAfterFailure?: Maybe<Scalars['String']>;
  scaleDownUnneededTime?: Maybe<Scalars['String']>;
  scaleDownUnreadyTime?: Maybe<Scalars['String']>;
  scaleDownUtilizationThreshold?: Maybe<Scalars['String']>;
  scanInterval?: Maybe<Scalars['String']>;
  skipNodesWithLocalStorage?: Maybe<Scalars['String']>;
  skipNodesWithSystemPods?: Maybe<Scalars['String']>;
};

export type AzureAppServicePlan = AzureResource & {
  appServiceWebApps?: Maybe<Array<Maybe<AzureAppServiceWebApp>>>;
  elasticScaleEnabled?: Maybe<Scalars['Boolean']>;
  freeOfferExpirationTime?: Maybe<Scalars['String']>;
  geoRegion?: Maybe<Scalars['String']>;
  hyperV?: Maybe<Scalars['Boolean']>;
  isSpot?: Maybe<Scalars['Boolean']>;
  isXenon?: Maybe<Scalars['Boolean']>;
  maximumElasticWorkerCount?: Maybe<Scalars['Int']>;
  maximumNumberOfWorkers?: Maybe<Scalars['Int']>;
  numberOfSites?: Maybe<Scalars['Int']>;
  perSiteScaling?: Maybe<Scalars['Boolean']>;
  provisioningState?: Maybe<Scalars['String']>;
  reserved?: Maybe<Scalars['Boolean']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  skuDescription?: Maybe<AzureAppServicePlanSkuDescription>;
  spotExpirationTime?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subscription?: Maybe<Scalars['String']>;
  targetWorkerCount?: Maybe<Scalars['Int']>;
  targetWorkerSizeId?: Maybe<Scalars['Int']>;
  workerTierName?: Maybe<Scalars['String']>;
  zoneRedundant?: Maybe<Scalars['Boolean']>;
};

export type AzureAppServicePlanSkuCapability = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureAppServicePlanSkuCapacity = {
  default?: Maybe<Scalars['Int']>;
  elasticMaximum?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['Int']>;
  minimum?: Maybe<Scalars['Int']>;
  scaleType?: Maybe<Scalars['String']>;
};

export type AzureAppServicePlanSkuDescription = {
  capabilities?: Maybe<Array<Maybe<AzureAppServicePlanSkuCapability>>>;
  capacity?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  skuCapacity?: Maybe<AzureAppServicePlanSkuCapacity>;
  tier?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebApp = AzureResource & {
  appServicePlan?: Maybe<Array<Maybe<AzureAppServicePlan>>>;
  authEnabled?: Maybe<Scalars['Boolean']>;
  availabilityState?: Maybe<Scalars['String']>;
  clientAffinityEnabled?: Maybe<Scalars['Boolean']>;
  clientCertEnabled?: Maybe<Scalars['Boolean']>;
  clientCertExclusionPaths?: Maybe<Scalars['String']>;
  clientCertMode?: Maybe<Scalars['String']>;
  containerSize?: Maybe<Scalars['Int']>;
  customDomainVerificationId?: Maybe<Scalars['String']>;
  dailyMemoryTimeQuota?: Maybe<Scalars['Int']>;
  defaultHostName?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabledHostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  hostNameSslStates?: Maybe<Array<Maybe<AzureAppServiceWebAppHostNameSslState>>>;
  hostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  hostNamesDisabled?: Maybe<Scalars['Boolean']>;
  hostingEnvironmentProfile?: Maybe<AzureOptionalResource>;
  httpsOnly?: Maybe<Scalars['Boolean']>;
  hyperV?: Maybe<Scalars['Boolean']>;
  inProgressOperationId?: Maybe<Scalars['String']>;
  isDefaultContainer?: Maybe<Scalars['Boolean']>;
  isXenon?: Maybe<Scalars['Boolean']>;
  keyVaultReferenceIdentity?: Maybe<Scalars['String']>;
  lastModifiedTimeUtc?: Maybe<Scalars['String']>;
  maxNumberOfWorkers?: Maybe<Scalars['Int']>;
  outboundIpAddresses?: Maybe<Scalars['String']>;
  possibleOutboundIpAddresses?: Maybe<Scalars['String']>;
  redundancyMode?: Maybe<Scalars['String']>;
  repositorySiteName?: Maybe<Scalars['String']>;
  reserved?: Maybe<Scalars['Boolean']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  scmSiteAlsoStopped?: Maybe<Scalars['Boolean']>;
  serverFarmId?: Maybe<Scalars['String']>;
  siteConfig?: Maybe<AzureAppServiceWebAppSiteConfig>;
  state?: Maybe<Scalars['String']>;
  storageAccountRequired?: Maybe<Scalars['Boolean']>;
  storageAccounts?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  suspendedTill?: Maybe<Scalars['String']>;
  targetSwapSlot?: Maybe<Scalars['String']>;
  trafficManagerHostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  usageState?: Maybe<Scalars['String']>;
  virtualNetworkSubnetId?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppHostNameSslState = {
  hostType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipBasedSslResult?: Maybe<Scalars['String']>;
  ipBasedSslState?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sslState?: Maybe<Scalars['String']>;
  thumbprint?: Maybe<Scalars['String']>;
  toUpdate?: Maybe<Scalars['Boolean']>;
  toUpdateIpBasedSsl?: Maybe<Scalars['Boolean']>;
  virtualIP?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfig = {
  acrUseManagedIdentityCreds?: Maybe<Scalars['Boolean']>;
  acrUserManagedIdentityID?: Maybe<Scalars['String']>;
  alwaysOn?: Maybe<Scalars['Boolean']>;
  apiDefinitionInfoUrl?: Maybe<Scalars['String']>;
  apiManagementConfigId?: Maybe<Scalars['String']>;
  appCommandLine?: Maybe<Scalars['String']>;
  appSettings?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigAppSettings>>>;
  autoHealEnabled?: Maybe<Scalars['Boolean']>;
  autoHealRules?: Maybe<AzureAppServiceWebAppSiteConfigAutoHealRules>;
  autoSwapSlotName?: Maybe<Scalars['String']>;
  azureStorageAccounts?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigAzureStorageInfoValue>>>;
  connectionStrings?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigDatabaseConnectionInfo>>>;
  cors?: Maybe<AzureAppServiceWebAppSiteConfigCorsSettings>;
  defaultDocuments?: Maybe<Array<Maybe<Scalars['String']>>>;
  detailedErrorLoggingEnabled?: Maybe<Scalars['Boolean']>;
  documentRoot?: Maybe<Scalars['String']>;
  experiments?: Maybe<AzureAppServiceWebAppSiteConfigExperiments>;
  ftpsState?: Maybe<Scalars['String']>;
  functionAppScaleLimit?: Maybe<Scalars['Int']>;
  functionsRuntimeScaleMonitoringEnabled?: Maybe<Scalars['Boolean']>;
  handlerMappings?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigHandlerMapping>>>;
  healthCheckPath?: Maybe<Scalars['String']>;
  http20Enabled?: Maybe<Scalars['Boolean']>;
  http20ProxyFlag?: Maybe<Scalars['String']>;
  httpLoggingEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  ipSecurityRestrictions?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigIpSecurityRestriction>>>;
  isPushEnabled?: Maybe<Scalars['Boolean']>;
  javaContainer?: Maybe<Scalars['String']>;
  javaContainerVersion?: Maybe<Scalars['String']>;
  javaVersion?: Maybe<Scalars['String']>;
  keyVaultReferenceIdentity?: Maybe<Scalars['String']>;
  limits?: Maybe<AzureAppServiceWebAppSiteConfigLimits>;
  linuxFxVersion?: Maybe<Scalars['String']>;
  loadBalancing?: Maybe<Scalars['String']>;
  localMySqlEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  logsDirectorySizeLimit?: Maybe<Scalars['Int']>;
  managedPipelineMode?: Maybe<Scalars['String']>;
  managedServiceIdentityId?: Maybe<Scalars['Int']>;
  minTlsVersion?: Maybe<Scalars['String']>;
  minimumElasticInstanceCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  netFrameworkVersion?: Maybe<Scalars['String']>;
  nodeVersion?: Maybe<Scalars['String']>;
  numberOfWorkers?: Maybe<Scalars['Int']>;
  phpVersion?: Maybe<Scalars['String']>;
  powerShellVersion?: Maybe<Scalars['String']>;
  preWarmedInstanceCount?: Maybe<Scalars['Int']>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  publishingUsername?: Maybe<Scalars['String']>;
  pythonVersion?: Maybe<Scalars['String']>;
  remoteDebuggingEnabled?: Maybe<Scalars['Boolean']>;
  remoteDebuggingVersion?: Maybe<Scalars['String']>;
  requestTracingEnabled?: Maybe<Scalars['Boolean']>;
  requestTracingExpirationTime?: Maybe<Scalars['String']>;
  scmIpSecurityRestrictions?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigIpSecurityRestriction>>>;
  scmIpSecurityRestrictionsUseMain?: Maybe<Scalars['Boolean']>;
  scmMinTlsVersion?: Maybe<Scalars['String']>;
  scmType?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  tracingOptions?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  use32BitWorkerProcess?: Maybe<Scalars['Boolean']>;
  virtualApplications?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigVirtualApplication>>>;
  vnetName?: Maybe<Scalars['String']>;
  vnetPrivatePortsCount?: Maybe<Scalars['Int']>;
  vnetRouteAllEnabled?: Maybe<Scalars['Boolean']>;
  webSocketsEnabled?: Maybe<Scalars['Boolean']>;
  websiteTimeZone?: Maybe<Scalars['String']>;
  windowsFxVersion?: Maybe<Scalars['String']>;
  xManagedServiceIdentityId?: Maybe<Scalars['Int']>;
};

export type AzureAppServiceWebAppSiteConfigARequestsBasedTrigger = {
  count?: Maybe<Scalars['Int']>;
  timeInterval?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigAppSettings = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigAutoHealActions = {
  actionType?: Maybe<Scalars['String']>;
  customAction?: Maybe<AzureAppServiceWebAppSiteConfigAutoHealCustomAction>;
  minProcessExecutionTime?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigAutoHealCustomAction = {
  exe?: Maybe<Scalars['String']>;
  parameters?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigAutoHealRules = {
  actions?: Maybe<AzureAppServiceWebAppSiteConfigAutoHealActions>;
  triggers?: Maybe<AzureAppServiceWebAppSiteConfigAutoHealTriggers>;
};

export type AzureAppServiceWebAppSiteConfigAutoHealTriggers = {
  privateBytesInKB?: Maybe<Scalars['Int64']>;
  requests?: Maybe<AzureAppServiceWebAppSiteConfigARequestsBasedTrigger>;
  slowRequests?: Maybe<AzureAppServiceWebAppSiteConfigSlowRequestsBasedTrigger>;
  slowRequestsWithPath?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigSlowRequestsBasedTriggers>>>;
  statusCodes?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigStatusCodesBasedTrigger>>>;
  statusCodesRange?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigStatusCodesRangeBasedTrigger>>>;
};

export type AzureAppServiceWebAppSiteConfigAzureStorageInfoValue = {
  accessKey?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mountPath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shareName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigCorsSettings = {
  allowedOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  supportCredentials?: Maybe<Scalars['Boolean']>;
};

export type AzureAppServiceWebAppSiteConfigDatabaseConnectionInfo = {
  connectionString?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigExperiments = {
  rampUpRules?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigRampUpRule>>>;
};

export type AzureAppServiceWebAppSiteConfigHandlerMapping = {
  arguments?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  scriptProcessor?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigHeaders = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureAppServiceWebAppSiteConfigIpSecurityRestriction = {
  action?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headers?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigHeaders>>>;
  id: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  subnetMask?: Maybe<Scalars['String']>;
  subnetTrafficTag?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  vnetSubnetResourceId?: Maybe<Scalars['String']>;
  vnetTrafficTag?: Maybe<Scalars['Int']>;
};

export type AzureAppServiceWebAppSiteConfigLimits = {
  maxDiskSizeInMb?: Maybe<Scalars['Int']>;
  maxMemoryInMb?: Maybe<Scalars['Int']>;
  maxPercentageCpu?: Maybe<Scalars['Int']>;
};

export type AzureAppServiceWebAppSiteConfigRampUpRule = {
  actionHostName?: Maybe<Scalars['String']>;
  changeDecisionCallbackUrl?: Maybe<Scalars['String']>;
  changeIntervalInMinutes?: Maybe<Scalars['Int']>;
  changeStep?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  maxReroutePercentage?: Maybe<Scalars['Int']>;
  minReroutePercentage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  reroutePercentage?: Maybe<Scalars['Int']>;
};

export type AzureAppServiceWebAppSiteConfigSlowRequestsBasedTrigger = {
  count?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  timeInterval?: Maybe<Scalars['String']>;
  timeTaken?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigSlowRequestsBasedTriggers = {
  count?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  timeInterval?: Maybe<Scalars['String']>;
  timeTaken?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigStatusCodesBasedTrigger = {
  count?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  subStatus?: Maybe<Scalars['Int']>;
  timeInterval?: Maybe<Scalars['String']>;
  win32Status?: Maybe<Scalars['Int']>;
};

export type AzureAppServiceWebAppSiteConfigStatusCodesRangeBasedTrigger = {
  count?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  statusCodes?: Maybe<Scalars['String']>;
  timeInterval?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigVirtualApplication = {
  id: Scalars['String'];
  physicalPath?: Maybe<Scalars['String']>;
  preloadEnabled?: Maybe<Scalars['Boolean']>;
  virtualDirectories?: Maybe<Array<Maybe<AzureAppServiceWebAppSiteConfigVirtualDirectory>>>;
  virtualPath?: Maybe<Scalars['String']>;
};

export type AzureAppServiceWebAppSiteConfigVirtualDirectory = {
  id: Scalars['String'];
  physicalPath?: Maybe<Scalars['String']>;
  virtualPath?: Maybe<Scalars['String']>;
};

export type AzureArcConnectedCluster = AzureResource & {
  agentPublicKeyCertificate?: Maybe<Scalars['String']>;
  agentVersion?: Maybe<Scalars['String']>;
  connectivityStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  distribution?: Maybe<Scalars['String']>;
  identity?: Maybe<AzureArcConnectedClusterIdentity>;
  infrastructure?: Maybe<Scalars['String']>;
  kubernetesVersion?: Maybe<Scalars['String']>;
  lastConnectivityTime?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  managedIdentityCertificateExpirationTime?: Maybe<Scalars['String']>;
  offering?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  totalCoreCount?: Maybe<Scalars['Int']>;
  totalNodeCount?: Maybe<Scalars['Int']>;
};

export type AzureArcConnectedClusterIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureArmResourceSku = {
  capacity?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

export type AzureAuthRoleAssignment = AzureBaseResource & {
  applications?: Maybe<Array<Maybe<AzureAdApplication>>>;
  canDelegate?: Maybe<Scalars['Boolean']>;
  groups?: Maybe<Array<Maybe<AzureAdGroup>>>;
  principalId?: Maybe<Scalars['String']>;
  principalType?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  roleDefinition?: Maybe<Array<Maybe<AzureAuthRoleDefinition>>>;
  roleDefinitionId?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  servicePrincipals?: Maybe<Array<Maybe<AzureAdServicePrincipal>>>;
  subscriptionId?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<AzureAdUser>>>;
};

export type AzureAuthRoleDefinition = AzureBaseResource & {
  assignableScopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  authRoleAssignments?: Maybe<Array<Maybe<AzureAuthRoleAssignment>>>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<AzureAuthRoleDefinitionPermission>>>;
  region?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
  roleType?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureAuthRoleDefinitionPermission = {
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataActions?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  notActions?: Maybe<Array<Maybe<Scalars['String']>>>;
  notDataActions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureAutoProvisioningSetting = AzureBaseResource & {
  autoProvision?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureBaseResource = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureCdnCertificateSourceParameters = {
  certificateType?: Maybe<Scalars['String']>;
  deleteRule?: Maybe<Scalars['String']>;
  odataType?: Maybe<Scalars['String']>;
  resourceGroupName?: Maybe<Scalars['String']>;
  secretName?: Maybe<Scalars['String']>;
  secretVersion?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  updateRule?: Maybe<Scalars['String']>;
  vaultName?: Maybe<Scalars['String']>;
};

export type AzureCdnCustomDomain = AzureResource & {
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  customHttpsParameters?: Maybe<AzureCdnCustomDomainHttpsParametersUnion>;
  customHttpsProvisioningState?: Maybe<Scalars['String']>;
  customHttpsProvisioningSubstate?: Maybe<Scalars['String']>;
  hostName?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceState?: Maybe<Scalars['String']>;
  validationData?: Maybe<Scalars['String']>;
};

export type AzureCdnCustomDomainHttpsParametersUnion = {
  certificateSource?: Maybe<Scalars['String']>;
  certificateSourceParameters?: Maybe<AzureCdnCertificateSourceParameters>;
  minimumTlsVersion?: Maybe<Scalars['String']>;
  protocolType?: Maybe<Scalars['String']>;
};

export type AzureCdnDeliveryRule = {
  actions?: Maybe<Array<Maybe<AzureCdnDeliveryRuleActionAutoGeneratedUnion>>>;
  conditions?: Maybe<Array<Maybe<AzureCdnDeliveryRuleConditionUnion>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type AzureCdnDeliveryRuleActionAutoGeneratedUnion = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<AzureCdnDeliveryRuleActionParameter>;
};

export type AzureCdnDeliveryRuleActionParameter = {
  algorithm?: Maybe<Scalars['String']>;
  cacheBehavior?: Maybe<Scalars['String']>;
  cacheDuration?: Maybe<Scalars['String']>;
  cacheType?: Maybe<Scalars['String']>;
  customFragment?: Maybe<Scalars['String']>;
  customHostname?: Maybe<Scalars['String']>;
  customPath?: Maybe<Scalars['String']>;
  customQueryString?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  destinationProtocol?: Maybe<Scalars['String']>;
  headerAction?: Maybe<Scalars['String']>;
  headerName?: Maybe<Scalars['String']>;
  odataType?: Maybe<Scalars['String']>;
  originGroup?: Maybe<AzureCdnResourceReference>;
  parameterNameOverride?: Maybe<Array<Maybe<AzureCdnSigningParamIdentifier>>>;
  preserveUnmatchedPath?: Maybe<Scalars['Boolean']>;
  queryParameters?: Maybe<Scalars['String']>;
  queryStringBehavior?: Maybe<Scalars['String']>;
  redirectType?: Maybe<Scalars['String']>;
  sourcePattern?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureCdnDeliveryRuleConditionParameter = {
  matchValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  negateCondition?: Maybe<Scalars['Boolean']>;
  odataType?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  selector?: Maybe<Scalars['String']>;
  transforms?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureCdnDeliveryRuleConditionUnion = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<AzureCdnDeliveryRuleConditionParameter>;
};

export type AzureCdnEndpoint = AzureResource & {
  cdnCustomDomains?: Maybe<Array<Maybe<AzureCdnCustomDomain>>>;
  cdnOriginGroups?: Maybe<Array<Maybe<AzureCdnOriginGroup>>>;
  cdnOrigins?: Maybe<Array<Maybe<AzureCdnOrigin>>>;
  cdnProfiles?: Maybe<Array<Maybe<AzureCdnProfile>>>;
  contentTypesToCompress?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultOriginGroupId?: Maybe<Scalars['String']>;
  deliveryPolicy?: Maybe<AzureCdnEndpointPropertiesUpdateParametersDeliveryPolicy>;
  geoFilters?: Maybe<Array<Maybe<AzureCdnGeoFilter>>>;
  hostName?: Maybe<Scalars['String']>;
  isCompressionEnabled?: Maybe<Scalars['Boolean']>;
  isHttpAllowed?: Maybe<Scalars['Boolean']>;
  isHttpsAllowed?: Maybe<Scalars['Boolean']>;
  optimizationType?: Maybe<Scalars['String']>;
  originHostHeader?: Maybe<Scalars['String']>;
  originPath?: Maybe<Scalars['String']>;
  probePath?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  queryStringCachingBehavior?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceState?: Maybe<Scalars['String']>;
  urlSigningKeys?: Maybe<Array<Maybe<AzureCdnUrlSigningKey>>>;
  webApplicationFirewallPolicyLinkId?: Maybe<Scalars['String']>;
};

export type AzureCdnEndpointPropertiesUpdateParametersDeliveryPolicy = {
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AzureCdnDeliveryRule>>>;
};

export type AzureCdnGeoFilter = {
  action?: Maybe<Scalars['String']>;
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  relativePath?: Maybe<Scalars['String']>;
};

export type AzureCdnHealthProbeParameters = {
  probeIntervalInSeconds?: Maybe<Scalars['Int']>;
  probePath?: Maybe<Scalars['String']>;
  probeProtocol?: Maybe<Scalars['String']>;
  probeRequestType?: Maybe<Scalars['String']>;
};

export type AzureCdnHttpErrorRangeParameters = {
  begin?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
};

export type AzureCdnKeyVaultSigningKeyParameters = {
  odataType?: Maybe<Scalars['String']>;
  resourceGroupName?: Maybe<Scalars['String']>;
  secretName?: Maybe<Scalars['String']>;
  secretVersion?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  vaultName?: Maybe<Scalars['String']>;
};

export type AzureCdnOrigin = AzureResource & {
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  cdnOriginGroups?: Maybe<Array<Maybe<AzureCdnOriginGroup>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  hostName?: Maybe<Scalars['String']>;
  httpPort?: Maybe<Scalars['Int']>;
  httpsPort?: Maybe<Scalars['Int']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  originHostHeader?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  privateEndpointStatus?: Maybe<Scalars['String']>;
  privateLinkAlias?: Maybe<Scalars['String']>;
  privateLinkApprovalMessage?: Maybe<Scalars['String']>;
  privateLinkLocation?: Maybe<Scalars['String']>;
  privateLinkResourceId?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceState?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type AzureCdnOriginGroup = AzureResource & {
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  cdnOrigins?: Maybe<Array<Maybe<AzureCdnOrigin>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  healthProbeSettings?: Maybe<AzureCdnHealthProbeParameters>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceState?: Maybe<Scalars['String']>;
  responseBasedOriginErrorDetectionSettings?: Maybe<AzureCdnResponseBasedOriginErrorDetectionParameters>;
  trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: Maybe<Scalars['Int']>;
};

export type AzureCdnProfile = AzureResource & {
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  frontdoorId?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceState?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type AzureCdnResourceReference = {
  id: Scalars['String'];
};

export type AzureCdnResponseBasedOriginErrorDetectionParameters = {
  httpErrorRanges?: Maybe<Array<Maybe<AzureCdnHttpErrorRangeParameters>>>;
  responseBasedDetectedErrorTypes?: Maybe<Scalars['String']>;
  responseBasedFailoverThresholdPercentage?: Maybe<Scalars['Int']>;
};

export type AzureCdnSigningParamIdentifier = {
  id: Scalars['String'];
  paramIndicator?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
};

export type AzureCdnUrlSigningKey = {
  id: Scalars['String'];
  keySourceParameters?: Maybe<AzureCdnKeyVaultSigningKeyParameters>;
};

export type AzureContainerRegistry = AzureResource & {
  adminUserEnabled?: Maybe<Scalars['Boolean']>;
  creationDate?: Maybe<Scalars['String']>;
  dataEndpointEnabled?: Maybe<Scalars['Boolean']>;
  dataEndpointHostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  encryption?: Maybe<AzureContainerRegistryEncryption>;
  identity?: Maybe<AzureContainerRegistryIdentity>;
  keyVault?: Maybe<Array<Maybe<AzureKeyVault>>>;
  loginServer?: Maybe<Scalars['String']>;
  networkRuleBypassOptions?: Maybe<Scalars['String']>;
  networkRuleSet?: Maybe<AzureContainerRegistryNetworkRuleSet>;
  policies?: Maybe<AzureContainerRegistryPolicies>;
  privateEndpointConnections?: Maybe<Array<Maybe<AzureContainerRegistryPrivateEndpointConnection>>>;
  provisioningState?: Maybe<Scalars['String']>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  sku?: Maybe<AzureContainerRegistrySku>;
  status?: Maybe<AzureContainerRegistryStatus>;
  zoneRedundancy?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryEncryption = {
  keyVaultProperties?: Maybe<AzureContainerRegistryKeyVaultProperties>;
  status?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryKeyVaultProperties = {
  identity?: Maybe<Scalars['String']>;
  keyIdentifier?: Maybe<Scalars['String']>;
  keyRotationEnabled?: Maybe<Scalars['Boolean']>;
  lastKeyRotationTimestamp?: Maybe<Scalars['String']>;
  versionedKeyIdentifier?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryNetworkRuleIpSetRule = {
  action?: Maybe<Scalars['String']>;
  iPAddressOrRange?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryNetworkRuleSet = {
  defaultAction?: Maybe<Scalars['String']>;
  ipRules?: Maybe<Array<Maybe<AzureContainerRegistryNetworkRuleIpSetRule>>>;
};

export type AzureContainerRegistryPolicies = {
  exportPolicy?: Maybe<AzureContainerRegistryPolicyInfo>;
  quarantinePolicy?: Maybe<AzureContainerRegistryPolicyInfo>;
  retentionPolicy?: Maybe<AzureContainerRegistryPolicyInfo>;
  trustPolicy?: Maybe<AzureContainerRegistryPolicyInfo>;
};

export type AzureContainerRegistryPolicyInfo = {
  days?: Maybe<Scalars['Int']>;
  lastUpdatedTime?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryPrivateEndpointConnection = {
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privateEndpointId?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateActionsRequired?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateDescription?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateStatus?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistrySku = {
  name?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

export type AzureContainerRegistryStatus = {
  displayStatus?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type AzureDataFactory = AzureResource & {
  createTime?: Maybe<Scalars['String']>;
  eTag?: Maybe<Scalars['String']>;
  identity?: Maybe<AzureDataFactoryIdentity>;
  provisioningState?: Maybe<Scalars['String']>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  version?: Maybe<Scalars['String']>;
};

export type AzureDataFactoryIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureDatabaseManagedSqlInstance = AzureResource & {
  collation?: Maybe<Scalars['String']>;
  currentBackupStorageRedundancy?: Maybe<Scalars['String']>;
  dnsZone?: Maybe<Scalars['String']>;
  dnsZonePartner?: Maybe<Scalars['String']>;
  fullyQualifiedDomainName?: Maybe<Scalars['String']>;
  identity?: Maybe<AzureDatabaseManagedSqlInstanceIdentity>;
  instancePoolId?: Maybe<Scalars['String']>;
  keyId?: Maybe<Scalars['String']>;
  licenseType?: Maybe<Scalars['String']>;
  maintenanceConfigurationId?: Maybe<Scalars['String']>;
  minimalTlsVersion?: Maybe<Scalars['String']>;
  primaryUserAssignedIdentityId?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  proxyOverride?: Maybe<Scalars['String']>;
  publicDataEndpointEnabled?: Maybe<Scalars['Boolean']>;
  requestedBackupStorageRedundancy?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  restorePointInTime?: Maybe<Scalars['String']>;
  skuName?: Maybe<Scalars['String']>;
  skuTier?: Maybe<Scalars['String']>;
  sourceManagedInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  storageSizeInGB?: Maybe<Scalars['Int']>;
  subnetId?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['String']>;
  vCores?: Maybe<Scalars['Int']>;
  zoneRedundant?: Maybe<Scalars['Boolean']>;
};

export type AzureDatabaseManagedSqlInstanceIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userAssignedIdentities?: Maybe<Array<Maybe<AzureDatabaseSqlUserAssignedIdentity>>>;
};

export type AzureDatabaseMySql = AzureResource & {
  charset?: Maybe<Scalars['String']>;
  collation?: Maybe<Scalars['String']>;
  mySqlServer?: Maybe<Array<Maybe<AzureMySqlServer>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
};

export type AzureDatabasePostgreSql = AzureResource & {
  charset?: Maybe<Scalars['String']>;
  collation?: Maybe<Scalars['String']>;
  postgreSqlServer?: Maybe<Array<Maybe<AzurePostgreSqlServer>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
};

export type AzureDatabaseSql = AzureResource & {
  autoPauseDelay?: Maybe<Scalars['Int']>;
  catalogCollation?: Maybe<Scalars['String']>;
  collation?: Maybe<Scalars['String']>;
  createMode?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['String']>;
  currentBackupStorageRedundancy?: Maybe<Scalars['String']>;
  currentServiceObjectiveName?: Maybe<Scalars['String']>;
  currentSku?: Maybe<AzureDatabaseSqlSku>;
  databaseId?: Maybe<Scalars['String']>;
  defaultSecondaryLocation?: Maybe<Scalars['String']>;
  earliestRestoreDate?: Maybe<Scalars['String']>;
  elasticPoolId?: Maybe<Scalars['String']>;
  failoverGroupId?: Maybe<Scalars['String']>;
  federatedClientId?: Maybe<Scalars['String']>;
  highAvailabilityReplicaCount?: Maybe<Scalars['Int']>;
  identity?: Maybe<AzureDatabaseSqlDatabaseIdentity>;
  isInfraEncryptionEnabled?: Maybe<Scalars['Boolean']>;
  isLedgerOn?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  licenseType?: Maybe<Scalars['String']>;
  longTermRetentionBackupResourceId?: Maybe<Scalars['String']>;
  maintenanceConfigurationId?: Maybe<Scalars['String']>;
  managedBy?: Maybe<Scalars['String']>;
  maxLogSizeBytes?: Maybe<Scalars['Int64']>;
  maxSizeBytes?: Maybe<Scalars['String']>;
  minCapacity?: Maybe<Scalars['Int']>;
  pausedDate?: Maybe<Scalars['String']>;
  primaryDelegatedIdentityClientId?: Maybe<Scalars['String']>;
  readScale?: Maybe<Scalars['String']>;
  recoverableDatabaseId?: Maybe<Scalars['String']>;
  recoveryServicesRecoveryPointId?: Maybe<Scalars['String']>;
  requestedBackupStorageRedundancy?: Maybe<Scalars['String']>;
  requestedServiceObjectiveName?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  restorableDroppedDatabaseId?: Maybe<Scalars['String']>;
  restorePointInTime?: Maybe<Scalars['String']>;
  resumedDate?: Maybe<Scalars['String']>;
  sampleName?: Maybe<Scalars['String']>;
  secondaryType?: Maybe<Scalars['String']>;
  sku?: Maybe<AzureDatabaseSqlDiskSku>;
  sourceDatabaseDeletionDate?: Maybe<Scalars['String']>;
  sourceDatabaseId?: Maybe<Scalars['String']>;
  sqlServers?: Maybe<Array<Maybe<AzureSqlServer>>>;
  status?: Maybe<Scalars['String']>;
  transparentDataEncryptions?: Maybe<Array<Maybe<AzureDatabaseSqlLogicalDatabaseTransparentDataEncryption>>>;
  zoneRedundant?: Maybe<Scalars['Boolean']>;
};

export type AzureDatabaseSqlDatabaseIdentity = {
  delegatedResources?: Maybe<Array<Maybe<AzureDatabaseSqldelegatedResource>>>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userAssignedIdentities?: Maybe<Array<Maybe<AzureDatabaseSqlUserAssignedIdentity>>>;
};

export type AzureDatabaseSqlDatabaseUserIdentity = {
  clientId?: Maybe<Scalars['String']>;
  principalId?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlDelegation = {
  resourceId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlDiskSku = {
  capacity?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlLogicalDatabaseTransparentDataEncryption = AzureResource & {
  state?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlSku = {
  capacity?: Maybe<Scalars['Int']>;
  family?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlUserAssignedIdentity = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<AzureDatabaseSqlDatabaseUserIdentity>;
};

export type AzureDatabaseSqlVm = AzureResource & {
  autoBackupSettings?: Maybe<AzureDatabaseSqlVmAutoBackupSettings>;
  autoPatchingSettings?: Maybe<AzureDatabaseSqlVmAutoPatchingSettings>;
  identity?: Maybe<AzureDatabaseSqlVmResourceIdentity>;
  keyVaultCredentialSettings?: Maybe<AzureDatabaseSqlVmKeyVaultCredentialSettings>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  serverConfigurationsManagementSettings?: Maybe<AzureDatabaseSqlVmServerConfigurationsManagementSettings>;
  sqlImageOffer?: Maybe<Scalars['String']>;
  sqlImageSku?: Maybe<Scalars['String']>;
  sqlManagement?: Maybe<Scalars['String']>;
  sqlServerLicenseType?: Maybe<Scalars['String']>;
  sqlVirtualMachineGroupResourceId?: Maybe<Scalars['String']>;
  storageConfigurationSettings?: Maybe<AzureDatabaseSqlVmStorageConfigurationSettings>;
  virtualMachineResourceId?: Maybe<Scalars['String']>;
  wsfcDomainCredentials?: Maybe<AzureDatabaseSqlVmWsfcDomainCredentials>;
};

export type AzureDatabaseSqlVmAdditionalFeaturesServerConfigurations = {
  isRServicesEnabled?: Maybe<Scalars['Boolean']>;
};

export type AzureDatabaseSqlVmAutoBackupSettings = {
  backupScheduleType?: Maybe<Scalars['String']>;
  backupSystemDbs?: Maybe<Scalars['Boolean']>;
  enable?: Maybe<Scalars['Boolean']>;
  enableEncryption?: Maybe<Scalars['Boolean']>;
  fullBackupFrequency?: Maybe<Scalars['String']>;
  fullBackupStartTime?: Maybe<Scalars['Int']>;
  fullBackupWindowHours?: Maybe<Scalars['Int']>;
  logBackupFrequency?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  retentionPeriod?: Maybe<Scalars['Int']>;
  storageAccessKey?: Maybe<Scalars['String']>;
  storageAccountUrl?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmAutoPatchingSettings = {
  dayOfWeek?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  maintenanceWindowDuration?: Maybe<Scalars['Int']>;
  maintenanceWindowStartingHour?: Maybe<Scalars['Int']>;
};

export type AzureDatabaseSqlVmKeyVaultCredentialSettings = {
  azureKeyVaultUrl?: Maybe<Scalars['String']>;
  credentialName?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  servicePrincipalName?: Maybe<Scalars['String']>;
  servicePrincipalSecret?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmResourceIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmSqlStorageSettings = {
  defaultFilePath?: Maybe<Scalars['String']>;
  luns?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type AzureDatabaseSqlVmServerConfigurationsManagementSettings = {
  additionalFeaturesServerConfigurations?: Maybe<AzureDatabaseSqlVmAdditionalFeaturesServerConfigurations>;
  sqlConnectivityUpdateSettings?: Maybe<AzureDatabaseSqlVmSqlConnectivityUpdateSettings>;
  sqlStorageUpdateSettings?: Maybe<AzureDatabaseSqlVmSqlStorageUpdateSettings>;
  sqlWorkloadTypeUpdateSettings?: Maybe<AzureDatabaseSqlVmSqlWorkloadTypeUpdateSettings>;
};

export type AzureDatabaseSqlVmSqlConnectivityUpdateSettings = {
  connectivityType?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  sqlAuthUpdatePassword?: Maybe<Scalars['String']>;
  sqlAuthUpdateUserName?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmSqlStorageUpdateSettings = {
  diskConfigurationType?: Maybe<Scalars['String']>;
  diskCount?: Maybe<Scalars['Int']>;
  startingDeviceId?: Maybe<Scalars['Int']>;
};

export type AzureDatabaseSqlVmSqlWorkloadTypeUpdateSettings = {
  sqlWorkloadType?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmStorageConfigurationSettings = {
  diskConfigurationType?: Maybe<Scalars['String']>;
  sqlDataSettings?: Maybe<AzureDatabaseSqlVmSqlStorageSettings>;
  sqlLogSettings?: Maybe<AzureDatabaseSqlVmSqlStorageSettings>;
  sqlTempDbSettings?: Maybe<AzureDatabaseSqlVmSqlStorageSettings>;
  storageWorkloadType?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqlVmWsfcDomainCredentials = {
  clusterBootstrapAccountPassword?: Maybe<Scalars['String']>;
  clusterOperatorAccountPassword?: Maybe<Scalars['String']>;
  sqlServiceAccountPassword?: Maybe<Scalars['String']>;
};

export type AzureDatabaseSqldelegatedResource = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<AzureDatabaseSqlDelegation>;
};

export type AzureDisk = AzureResource & {
  createOption?: Maybe<Scalars['String']>;
  diskIopsReadWrite?: Maybe<Scalars['Int']>;
  diskMbpsReadWrite?: Maybe<Scalars['Int']>;
  diskSizeBytes?: Maybe<Scalars['Int64']>;
  diskSizeGb?: Maybe<Scalars['Int']>;
  diskState?: Maybe<Scalars['String']>;
  encryptionSettings?: Maybe<Scalars['String']>;
  hyperVGeneration?: Maybe<Scalars['String']>;
  imageReferenceId?: Maybe<Scalars['String']>;
  managedBy?: Maybe<Scalars['String']>;
  networkAccessPolicy?: Maybe<Scalars['String']>;
  osType?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  tier?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  virtualMachine?: Maybe<Array<Maybe<AzureVirtualMachine>>>;
  zones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureDnsZone = AzureResource & {
  maxNumberOfRecordSets?: Maybe<Scalars['Int']>;
  nameServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  numberOfRecordSets?: Maybe<Scalars['Int']>;
  recordSets?: Maybe<Array<Maybe<AzureDnsZoneRecordSet>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  zoneType?: Maybe<Scalars['String']>;
};

export type AzureDnsZoneRecordSet = AzureResource & {
  aRecords?: Maybe<Array<Maybe<Scalars['String']>>>;
  aaaaRecords?: Maybe<Array<Maybe<Scalars['String']>>>;
  caaRecords?: Maybe<Array<Maybe<AzureDnsZoneRecordSetCaaRecord>>>;
  cnameRecord?: Maybe<Scalars['String']>;
  fqdn?: Maybe<Scalars['String']>;
  mxRecords?: Maybe<Array<Maybe<AzureDnsZoneRecordSetMxRecord>>>;
  nsRecords?: Maybe<Array<Maybe<Scalars['String']>>>;
  provisioningState?: Maybe<Scalars['String']>;
  ptrRecords?: Maybe<Array<Maybe<Scalars['String']>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  soaRecord?: Maybe<AzureDnsZoneRecordSetSoaRecord>;
  srvRecords?: Maybe<Array<Maybe<AzureDnsZoneRecordSetSrvRecord>>>;
  targetResourceId?: Maybe<Scalars['String']>;
  ttl?: Maybe<Scalars['Int']>;
  txtRecords?: Maybe<Array<Maybe<AzureDnsZoneRecordSetTxtRecord>>>;
};

export type AzureDnsZoneRecordSetCaaRecord = {
  flags?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  tag?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureDnsZoneRecordSetMxRecord = {
  exchange?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  preference?: Maybe<Scalars['Int']>;
};

export type AzureDnsZoneRecordSetSoaRecord = {
  email?: Maybe<Scalars['String']>;
  expireTime?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  minimumTtl?: Maybe<Scalars['Int']>;
  refreshTime?: Maybe<Scalars['Int']>;
  retryTime?: Maybe<Scalars['Int']>;
  serialNumber?: Maybe<Scalars['Int']>;
};

export type AzureDnsZoneRecordSetSrvRecord = {
  id: Scalars['String'];
  port?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type AzureDnsZoneRecordSetTxtRecord = {
  id: Scalars['String'];
  value?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureEventGrid = AzureBaseResource & {
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  domainName?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureEventHub = AzureBaseResource & {
  captureDescription?: Maybe<AzureEventHubCaptureDescription>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
  messageRetentionInDays?: Maybe<Scalars['Int']>;
  partitionCount?: Maybe<Scalars['Int']>;
  partitionIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  region?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  storageAccount?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  subscriptionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AzureEventHubCaptureDescription = {
  destination?: Maybe<AzureEventHubCaptureDestination>;
  enabled?: Maybe<Scalars['Boolean']>;
  encoding?: Maybe<Scalars['String']>;
  intervalInSeconds?: Maybe<Scalars['Int']>;
  sizeLimitInBytes?: Maybe<Scalars['Int64']>;
  skipEmptyArchives?: Maybe<Scalars['Boolean']>;
};

export type AzureEventHubCaptureDestination = {
  archiveNameFormat?: Maybe<Scalars['String']>;
  blobContainer?: Maybe<Scalars['String']>;
  dataLakeAccountName?: Maybe<Scalars['String']>;
  dataLakeFolderPath?: Maybe<Scalars['String']>;
  dataLakeSubscriptionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  storageAccountResourceId?: Maybe<Scalars['String']>;
};

export type AzureExtendedLocation = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureFileShare = AzureBaseResource & {
  accessTier?: Maybe<Scalars['String']>;
  accessTierChangeTime?: Maybe<Scalars['DateTime']>;
  accessTierStatus?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  deletedTime?: Maybe<Scalars['DateTime']>;
  enabledProtocols?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  lastModifiedTime?: Maybe<Scalars['DateTime']>;
  leaseDuration?: Maybe<Scalars['String']>;
  leaseState?: Maybe<Scalars['String']>;
  leaseStatus?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  remainingRetentionDays?: Maybe<Scalars['Int']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  rootSquash?: Maybe<Scalars['String']>;
  shareQuota?: Maybe<Scalars['Int']>;
  shareUsageBytes?: Maybe<Scalars['Int']>;
  snapshotTime?: Maybe<Scalars['DateTime']>;
  storageAccount?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  storageAccountName?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AzureFilesIdentityBasedAuthenticationAdProperties = {
  azureStorageSid?: Maybe<Scalars['String']>;
  domainGuid?: Maybe<Scalars['String']>;
  domainName?: Maybe<Scalars['String']>;
  domainSid?: Maybe<Scalars['String']>;
  forestName?: Maybe<Scalars['String']>;
  netBiosDomainName?: Maybe<Scalars['String']>;
};

export type AzureFirewall = AzureResource & {
  additionalProperties?: Maybe<Array<Maybe<AzureFirewallAdditionalProperty>>>;
  applicationRuleCollections?: Maybe<Array<Maybe<AzureFirewallApplicationRuleCollection>>>;
  firewallPolicy?: Maybe<Scalars['String']>;
  hubIPAddresses?: Maybe<AzureFirewallHubIpAddresses>;
  ipConfigurations?: Maybe<Array<Maybe<AzureFirewallIpConfiguration>>>;
  ipGroups?: Maybe<Array<Maybe<AzureFirewallIpGroup>>>;
  managementIpConfiguration?: Maybe<AzureFirewallManagementIpConfiguration>;
  natRuleCollections?: Maybe<Array<Maybe<AzureFirewallNatRuleCollection>>>;
  networkRuleCollections?: Maybe<Array<Maybe<AzureFirewallNetworkRuleCollection>>>;
  provisioningState?: Maybe<Scalars['String']>;
  publicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  threatIntelMode?: Maybe<Scalars['String']>;
  virtualHub?: Maybe<Scalars['String']>;
  virtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
  zones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureFirewallAdditionalProperty = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureFirewallApplicationRule = {
  description?: Maybe<Scalars['String']>;
  fqdnTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  protocols?: Maybe<Array<Maybe<AzureFirewallApplicationRuleProtocol>>>;
  sourceAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceIpGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  targetFqdns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureFirewallApplicationRuleCollection = {
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  provisioningState?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AzureFirewallApplicationRule>>>;
};

export type AzureFirewallApplicationRuleProtocol = {
  id: Scalars['String'];
  port?: Maybe<Scalars['Int']>;
  protocolType?: Maybe<Scalars['String']>;
};

export type AzureFirewallHubIpAddresses = {
  privateIPAddress?: Maybe<Scalars['String']>;
  publicIPs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureFirewallIpConfiguration = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  privateIPAddress?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  publicIPAddress?: Maybe<Scalars['String']>;
  subnet?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureFirewallIpGroup = {
  changeNumber?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AzureFirewallManagementIpConfiguration = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  privateIPAddress?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  publicIPAddress?: Maybe<Scalars['String']>;
  subnet?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureFirewallNatRule = {
  description?: Maybe<Scalars['String']>;
  destinationAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  destinationPorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  protocols?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceIpGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  translatedAddress?: Maybe<Scalars['String']>;
  translatedFqdn?: Maybe<Scalars['String']>;
  translatedPort?: Maybe<Scalars['String']>;
};

export type AzureFirewallNatRuleCollection = {
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  provisioningState?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AzureFirewallNatRule>>>;
};

export type AzureFirewallNetworkRule = {
  description?: Maybe<Scalars['String']>;
  destinationAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  destinationFqdns?: Maybe<Array<Maybe<Scalars['String']>>>;
  destinationIpGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  destinationPorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  protocols?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceIpGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureFirewallNetworkRuleCollection = {
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  provisioningState?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AzureFirewallNetworkRule>>>;
};

export type AzureFunctionApp = AzureResource & {
  availabilityState?: Maybe<Scalars['String']>;
  clientAffinityEnabled?: Maybe<Scalars['Boolean']>;
  clientCertEnabled?: Maybe<Scalars['Boolean']>;
  clientCertExclusionPaths?: Maybe<Scalars['String']>;
  clientCertMode?: Maybe<Scalars['String']>;
  configuration?: Maybe<AzureFunctionAppConfiguration>;
  containerSize?: Maybe<Scalars['Int']>;
  customDomainVerificationId?: Maybe<Scalars['String']>;
  dailyMemoryTimeQuota?: Maybe<Scalars['Int']>;
  defaultHostName?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  enabledHostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  extendedLocation?: Maybe<AzureExtendedLocation>;
  functions?: Maybe<Array<Maybe<AzureWebSiteFunction>>>;
  hostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  hostNamesDisabled?: Maybe<Scalars['Boolean']>;
  hostingEnvironmentProfile?: Maybe<AzureHostingEnvironmentProfile>;
  httpsOnly?: Maybe<Scalars['Boolean']>;
  hyperV?: Maybe<Scalars['Boolean']>;
  inProgressOperationId?: Maybe<Scalars['String']>;
  isDefaultContainer?: Maybe<Scalars['Boolean']>;
  isXenon?: Maybe<Scalars['Boolean']>;
  keyVaultReferenceIdentity?: Maybe<Scalars['String']>;
  lastModifiedTimeUtc?: Maybe<Scalars['String']>;
  maxNumberOfWorkers?: Maybe<Scalars['Int']>;
  outboundIpAddresses?: Maybe<Scalars['String']>;
  possibleOutboundIpAddresses?: Maybe<Scalars['String']>;
  redundancyMode?: Maybe<Scalars['String']>;
  repositorySiteName?: Maybe<Scalars['String']>;
  reserved?: Maybe<Scalars['Boolean']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  scmSiteAlsoStopped?: Maybe<Scalars['Boolean']>;
  serverFarmId?: Maybe<Scalars['String']>;
  siteConfig?: Maybe<AzureAppServiceWebAppSiteConfig>;
  state?: Maybe<Scalars['String']>;
  storageAccountRequired?: Maybe<Scalars['Boolean']>;
  suspendedTill?: Maybe<Scalars['String']>;
  targetSwapSlot?: Maybe<Scalars['String']>;
  trafficManagerHostNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  usageState?: Maybe<Scalars['String']>;
  virtualNetworkSubnetId?: Maybe<Scalars['String']>;
};

export type AzureFunctionAppConfiguration = {
  ftpsState?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureHostingEnvironmentProfile = {
  id?: Maybe<Scalars['String']>;
};

export type AzureKeyValueProperty = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureKeyVault = AzureResource & {
  accessPolicies?: Maybe<Array<Maybe<AzureKeyVaultAccessPolicy>>>;
  containerRegistries?: Maybe<Array<Maybe<AzureContainerRegistry>>>;
  createMode?: Maybe<Scalars['String']>;
  enablePurgeProtection?: Maybe<Scalars['Boolean']>;
  enableRbacAuthorization?: Maybe<Scalars['Boolean']>;
  enableSoftDelete?: Maybe<Scalars['Boolean']>;
  enabledForDeployment?: Maybe<Scalars['Boolean']>;
  enabledForDiskEncryption?: Maybe<Scalars['Boolean']>;
  enabledForTemplateDeployment?: Maybe<Scalars['Boolean']>;
  keys?: Maybe<Array<Maybe<AzureKeyVaultKey>>>;
  networkAclBypass?: Maybe<Scalars['String']>;
  networkAclDefaultAction?: Maybe<Scalars['String']>;
  networkAclIpRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  networkAclVirtualNetworkRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  provisioningState?: Maybe<Scalars['String']>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  secrets?: Maybe<Array<Maybe<AzureKeyVaultSecret>>>;
  softDeleteRetentionInDays?: Maybe<Scalars['Int']>;
  tenantId?: Maybe<Scalars['String']>;
  vaultUri?: Maybe<Scalars['String']>;
};

export type AzureKeyVaultAccessPolicy = {
  applicationId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  objectId?: Maybe<Scalars['String']>;
  permissionCertificates?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissionKeys?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissionSecrets?: Maybe<Array<Maybe<Scalars['String']>>>;
  permissionStorage?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureKeyVaultKey = {
  attributes?: Maybe<AzureKeyVaultKeyAttributes>;
  id: Scalars['String'];
  keyUri?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type AzureKeyVaultKeyAttributes = {
  created?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expires?: Maybe<Scalars['String']>;
  exportable?: Maybe<Scalars['Boolean']>;
  notBefore?: Maybe<Scalars['String']>;
  recoveryLevel?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type AzureKeyVaultSecret = {
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<AzureKeyVaultSecretProperties>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type AzureKeyVaultSecretAttributes = {
  created?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  expires?: Maybe<Scalars['String']>;
  notBefore?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type AzureKeyVaultSecretProperties = {
  attributes?: Maybe<AzureKeyVaultSecretAttributes>;
  contentType?: Maybe<Scalars['String']>;
  secretUri?: Maybe<Scalars['String']>;
  secretUriWithVersion?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureLbBackendAddressPool = AzureBaseResource & {
  etag?: Maybe<Scalars['String']>;
  inboundNatRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  loadBalancingRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  location?: Maybe<Scalars['String']>;
  outboundRule?: Maybe<Scalars['String']>;
  outboundRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureLbFrontendIpConfiguration = AzureBaseResource & {
  etag?: Maybe<Scalars['String']>;
  inboundNatPools?: Maybe<Array<Maybe<Scalars['String']>>>;
  inboundNatRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  loadBalancingRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  outboundRules?: Maybe<Array<Maybe<Scalars['String']>>>;
  privateIPAddress?: Maybe<Scalars['String']>;
  privateIPAddressVersion?: Maybe<Scalars['String']>;
  privateIPAllocationMethod?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  zones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureLbInboundNatPool = AzureBaseResource & {
  backendPort?: Maybe<Scalars['Int']>;
  enableFloatingIP?: Maybe<Scalars['Boolean']>;
  enableTcpReset?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  frontendPortRangeEnd?: Maybe<Scalars['Int']>;
  frontendPortRangeStart?: Maybe<Scalars['Int']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureLbInboundNatRule = AzureBaseResource & {
  backendPort?: Maybe<Scalars['Int']>;
  enableFloatingIP?: Maybe<Scalars['Boolean']>;
  enableTcpReset?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  frontendPort?: Maybe<Scalars['Int']>;
  frontendPortRangeEnd?: Maybe<Scalars['Int']>;
  frontendPortRangeStart?: Maybe<Scalars['Int']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureLbLoadBalancingRule = AzureBaseResource & {
  backendPort?: Maybe<Scalars['Int']>;
  disableOutboundSnat?: Maybe<Scalars['Boolean']>;
  enableFloatingIP?: Maybe<Scalars['Boolean']>;
  enableTcpReset?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  frontendPort?: Maybe<Scalars['Int']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  loadDistribution?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureLbOutboundRule = AzureBaseResource & {
  allocatedOutboundPorts?: Maybe<Scalars['Int']>;
  enableTcpReset?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureLbProbe = AzureBaseResource & {
  etag?: Maybe<Scalars['String']>;
  intervalInSeconds?: Maybe<Scalars['Int']>;
  numberOfProbes?: Maybe<Scalars['Int']>;
  port?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  requestPath?: Maybe<Scalars['String']>;
};

export type AzureLoadBalancer = AzureResource & {
  backendAddressPools?: Maybe<Array<Maybe<AzureLbBackendAddressPool>>>;
  backendPublicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  etag?: Maybe<Scalars['String']>;
  frontendIPConfigurations?: Maybe<Array<Maybe<AzureLbFrontendIpConfiguration>>>;
  frontendPublicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  gatewayLoadBalancerOf?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  gatewayLoadBalancers?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  inboundNatPools?: Maybe<Array<Maybe<AzureLbInboundNatPool>>>;
  inboundNatRules?: Maybe<Array<Maybe<AzureLbInboundNatRule>>>;
  loadBalancerBackendVirtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
  loadBalancingRules?: Maybe<Array<Maybe<AzureLbLoadBalancingRule>>>;
  outboundRules?: Maybe<Array<Maybe<AzureLbOutboundRule>>>;
  probes?: Maybe<Array<Maybe<AzureLbProbe>>>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  skuName?: Maybe<Scalars['String']>;
  skuTier?: Maybe<Scalars['String']>;
};

export type AzureLogAnalyticsWorkspace = AzureBaseResource & {
  createdDate?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  features?: Maybe<AzureLogAnalyticsWorkspaceFeature>;
  modifiedDate?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  publicNetworkAccessForIngestion?: Maybe<Scalars['String']>;
  publicNetworkAccessForQuery?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGroupId?: Maybe<Scalars['String']>;
  retentionInDays?: Maybe<Scalars['Int']>;
  sku?: Maybe<AzureLogAnalyticsWorkspaceSku>;
  subscriptionId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  workspaceCapping?: Maybe<AzureLogAnalyticsWorkspaceCapping>;
};

export type AzureLogAnalyticsWorkspaceCapping = {
  dailyQuotaGb?: Maybe<Scalars['Int']>;
  dataIngestionStatus?: Maybe<Scalars['String']>;
  quotaNextResetTime?: Maybe<Scalars['String']>;
};

export type AzureLogAnalyticsWorkspaceFeature = {
  enableLogAccessUsingOnlyResourcePermissions?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Int']>;
  searchVersion?: Maybe<Scalars['Int']>;
};

export type AzureLogAnalyticsWorkspaceSku = {
  lastSkuUpdate?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AzureMonitorInsightsActivityLogAlertRule = AzureBaseResource & {
  actionGroups?: Maybe<Array<Maybe<AzureMonitorInsightsActivityLogAlertRuleActionGroup>>>;
  condition?: Maybe<AzureMonitorInsightsActivityLogAlertRuleCondition>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
  resourceGroupId?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscriptionId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
};

export type AzureMonitorInsightsActivityLogAlertRuleActionGroup = {
  actionGroupId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  webhookProperties?: Maybe<Array<Maybe<AzureMonitorInsightsActivityLogAlertRuleWebhookProperty>>>;
};

export type AzureMonitorInsightsActivityLogAlertRuleBaseCondition = AzureMonitorInsightsActivityLogAlertRuleConditionInterface & {
  id: Scalars['String'];
};

export type AzureMonitorInsightsActivityLogAlertRuleCondition = AzureMonitorInsightsActivityLogAlertRuleConditionInterface & {
  allOf?: Maybe<Array<Maybe<AzureMonitorInsightsActivityLogAlertRuleBaseCondition>>>;
};

export type AzureMonitorInsightsActivityLogAlertRuleConditionInterface = {
  containsAny?: Maybe<Array<Maybe<Scalars['String']>>>;
  equals?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  odataType?: Maybe<Scalars['String']>;
};

export type AzureMonitorInsightsActivityLogAlertRuleWebhookProperty = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureMySqlServer = AzureResource & {
  administratorLogin?: Maybe<Scalars['String']>;
  byokEnforcement?: Maybe<Scalars['String']>;
  databaseMySql?: Maybe<Array<Maybe<AzureDatabaseMySql>>>;
  earliestRestoreDate?: Maybe<Scalars['String']>;
  fullyQualifiedDomainName?: Maybe<Scalars['String']>;
  identity?: Maybe<AzureMySqlServerResourceIdentity>;
  infrastructureEncryption?: Maybe<Scalars['String']>;
  masterServerId?: Maybe<Scalars['String']>;
  minimalTlsVersion?: Maybe<Scalars['String']>;
  privateEndpointConnections?: Maybe<Array<Maybe<AzureMySqlServerServerPrivateEndpointConnection>>>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  replicaCapacity?: Maybe<Scalars['Int']>;
  replicationRole?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  sslEnforcement?: Maybe<Scalars['String']>;
  storageProfile?: Maybe<AzureMySqlServerStorageProfile>;
  userVisibleState?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AzureMySqlServerPrivateEndpointProperty = {
  id?: Maybe<Scalars['String']>;
};

export type AzureMySqlServerResourceIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureMySqlServerServerPrivateEndpointConnection = {
  id: Scalars['String'];
  properties?: Maybe<AzureMySqlServerServerPrivateEndpointConnectionProperties>;
};

export type AzureMySqlServerServerPrivateEndpointConnectionProperties = {
  privateEndpoint?: Maybe<AzureMySqlServerPrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Maybe<AzureMySqlServerServerPrivateLinkServiceConnectionStateProperty>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureMySqlServerServerPrivateLinkServiceConnectionStateProperty = {
  actionsRequired?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AzureMySqlServerStorageProfile = {
  backupRetentionDays?: Maybe<Scalars['Int']>;
  geoRedundantBackup?: Maybe<Scalars['String']>;
  storageAutogrow?: Maybe<Scalars['String']>;
  storageMB?: Maybe<Scalars['Int']>;
};

export type AzureNetworkInterface = AzureResource & {
  appliedDnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  dnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableAcceleratedNetworking?: Maybe<Scalars['Boolean']>;
  enableIpForwarding?: Maybe<Scalars['Boolean']>;
  internalDnsNameLabel?: Maybe<Scalars['String']>;
  internalDomainNameSuffix?: Maybe<Scalars['String']>;
  ipConfiguration?: Maybe<AzureNetworkInterfaceIpConfiguration>;
  macAddress?: Maybe<Scalars['String']>;
  privateIpAddress?: Maybe<Scalars['String']>;
  publicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  securityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroup>>>;
  virtualMachineId?: Maybe<Scalars['String']>;
  virtualMachines?: Maybe<Array<Maybe<AzureVirtualMachine>>>;
  virtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
};

export type AzureNetworkInterfaceIpConfiguration = {
  etag?: Maybe<Scalars['String']>;
  gatewayLoadBalancer?: Maybe<AzureSubResource>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  privateIPAddress?: Maybe<Scalars['String']>;
  privateIPAddressVersion?: Maybe<Scalars['String']>;
  privateIPAllocationMethod?: Maybe<Scalars['String']>;
  privateLinkConnectionProperties?: Maybe<AzureNetworkInterfaceIpConfigurationPrivateLinkConnectionProperties>;
  provisioningState?: Maybe<Scalars['String']>;
  subnetId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureNetworkInterfaceIpConfigurationPrivateLinkConnectionProperties = {
  fqdns?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Scalars['String']>;
  requiredMemberName?: Maybe<Scalars['String']>;
};

export type AzureNetworkSecurityGroup = AzureResource & {
  defaultSecurityRules?: Maybe<Array<Maybe<AzureNetworkSecurityGroupRule>>>;
  etag?: Maybe<Scalars['String']>;
  flowLogs?: Maybe<Array<Maybe<AzureNetworkSecurityGroupFlowLog>>>;
  networkInterfaces?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGuid?: Maybe<Scalars['String']>;
  securityRules?: Maybe<Array<Maybe<AzureNetworkSecurityGroupRule>>>;
};

export type AzureNetworkSecurityGroupApplication = AzureBaseResource & {
  etag?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureNetworkSecurityGroupFlowLog = AzureResource & {
  enabled?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  formatVersion?: Maybe<Scalars['Int']>;
  networkWatcherFlowAnalyticsConfiguration?: Maybe<AzureNetworkWatcherFlowAnalyticsConfiguration>;
  provisioningState?: Maybe<Scalars['String']>;
  retentionPolicyDays?: Maybe<Scalars['Int']>;
  retentionPolicyEnabled?: Maybe<Scalars['Boolean']>;
  storageId?: Maybe<Scalars['String']>;
  targetResourceGuid?: Maybe<Scalars['String']>;
  targetResourceId?: Maybe<Scalars['String']>;
};

export type AzureNetworkSecurityGroupRule = AzureBaseResource & {
  access?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destinationAddressPrefix?: Maybe<Scalars['String']>;
  destinationAddressPrefixes?: Maybe<Array<Maybe<Scalars['String']>>>;
  destinationApplicationSecurityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroupApplication>>>;
  destinationPortRange?: Maybe<Scalars['String']>;
  destinationPortRanges?: Maybe<Array<Maybe<Scalars['String']>>>;
  direction?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  protocol?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
  sourceAddressPrefix?: Maybe<Scalars['String']>;
  sourceAddressPrefixes?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceApplicationSecurityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroupApplication>>>;
  sourcePortRange?: Maybe<Scalars['String']>;
  sourcePortRanges?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type AzureNetworkWatcherFlowAnalyticsConfiguration = {
  enabled?: Maybe<Scalars['Boolean']>;
  trafficAnalyticsInterval?: Maybe<Scalars['Int']>;
  workspaceId?: Maybe<Scalars['String']>;
  workspaceRegion?: Maybe<Scalars['String']>;
  workspaceResourceId?: Maybe<Scalars['String']>;
};

export type AzureOptionalResource = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzurePolicyAssignment = AzureBaseResource & {
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  enforcementMode?: Maybe<Scalars['String']>;
  identity?: Maybe<AzurePolicyAssignmentIdentity>;
  nonComplianceMessages?: Maybe<Array<Maybe<AzurePolicyAssignmentNonComplianceMessages>>>;
  notScopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  parameters?: Maybe<Array<Maybe<AzurePolicyAssignmentParameters>>>;
  policyDefinitionId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resourceGroupId?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzurePolicyAssignmentIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzurePolicyAssignmentNonComplianceMessages = {
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  policyDefinitionReferenceId?: Maybe<Scalars['String']>;
};

export type AzurePolicyAssignmentParameterValue = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzurePolicyAssignmentParameters = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Array<Maybe<AzurePolicyAssignmentParameterValue>>>;
};

export type AzurePostgreSqlServer = AzureResource & {
  administratorLogin?: Maybe<Scalars['String']>;
  byokEnforcement?: Maybe<Scalars['String']>;
  configurations?: Maybe<Array<Maybe<AzurePostgreSqlServerConfiguration>>>;
  databasePostgreSql?: Maybe<Array<Maybe<AzureDatabasePostgreSql>>>;
  earliestRestoreDate?: Maybe<Scalars['String']>;
  firewallRules?: Maybe<Array<Maybe<AzurePostgreSqlServerFirewallRule>>>;
  fullyQualifiedDomainName?: Maybe<Scalars['String']>;
  identity?: Maybe<AzurePostgreSqlServerResourceIdentity>;
  infrastructureEncryption?: Maybe<Scalars['String']>;
  masterServerId?: Maybe<Scalars['String']>;
  minimalTlsVersion?: Maybe<Scalars['String']>;
  privateEndpointConnections?: Maybe<Array<Maybe<AzurePostgreSqlServerPrivateEndpointConnection>>>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  replicaCapacity?: Maybe<Scalars['Int']>;
  replicationRole?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  sslEnforcement?: Maybe<Scalars['String']>;
  storageProfile?: Maybe<AzurePostgreSqlServerStorageProfile>;
  userVisibleState?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerConfiguration = {
  allowedValues?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerFirewallRule = {
  endIpAddress?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  startIpAddress?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerPrivateEndpointConnection = {
  id: Scalars['String'];
  properties?: Maybe<AzurePostgreSqlServerServerPrivateEndpointConnectionProperties>;
};

export type AzurePostgreSqlServerPrivateEndpointProperty = {
  id?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerPrivateLinkServiceConnectionStateProperty = {
  actionsRequired?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerResourceIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerServerPrivateEndpointConnectionProperties = {
  privateEndpoint?: Maybe<AzurePostgreSqlServerPrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Maybe<AzurePostgreSqlServerPrivateLinkServiceConnectionStateProperty>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzurePostgreSqlServerStorageProfile = {
  backupRetentionDays?: Maybe<Scalars['Int']>;
  geoRedundantBackup?: Maybe<Scalars['String']>;
  storageAutogrow?: Maybe<Scalars['String']>;
  storageMB?: Maybe<Scalars['Int']>;
};

export type AzurePrivateDnsZone = AzureResource & {
  etag?: Maybe<Scalars['String']>;
  internalId?: Maybe<Scalars['String']>;
  maxNumberOfRecordSets?: Maybe<Scalars['Int']>;
  maxNumberOfVirtualNetworkLinks?: Maybe<Scalars['Int']>;
  maxNumberOfVirtualNetworkLinksWithRegistration?: Maybe<Scalars['Int']>;
  numberOfRecordSets?: Maybe<Scalars['Int']>;
  numberOfVirtualNetworkLinks?: Maybe<Scalars['Int']>;
  numberOfVirtualNetworkLinksWithRegistration?: Maybe<Scalars['Int']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
};

export type AzurePublicIp = AzureResource & {
  allocationMethod?: Maybe<Scalars['String']>;
  dnsSettings?: Maybe<AzurePublicIpDnsSettings>;
  firewalls?: Maybe<Array<Maybe<AzureFirewall>>>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  ipAddress?: Maybe<Scalars['String']>;
  ipTags?: Maybe<Array<Maybe<AzurePublicIpTags>>>;
  ipVersion?: Maybe<Scalars['String']>;
  lbBackendOf?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  lbFrontendOf?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  networkInterface?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGuid?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  zones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzurePublicIpDnsSettings = {
  domainNameLabel?: Maybe<Scalars['String']>;
  fqdn?: Maybe<Scalars['String']>;
  reverseFqdn?: Maybe<Scalars['String']>;
};

export type AzurePublicIpTags = {
  ipTagType?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

export type AzureRawTag = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureResource = {
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resourceGroupId?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AzureRawTag>>>;
  type?: Maybe<Scalars['String']>;
};

export type AzureResourceGroup = AzureResource & {
  activityLogAlerts?: Maybe<Array<Maybe<AzureActivityLogAlert>>>;
  aksManagedClusters?: Maybe<Array<Maybe<AzureAksManagedCluster>>>;
  appServicePlans?: Maybe<Array<Maybe<AzureAppServicePlan>>>;
  appServiceWebApps?: Maybe<Array<Maybe<AzureAppServiceWebApp>>>;
  arcConnectedClusters?: Maybe<Array<Maybe<AzureArcConnectedCluster>>>;
  cdnCustomDomains?: Maybe<Array<Maybe<AzureCdnCustomDomain>>>;
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  cdnOriginGroups?: Maybe<Array<Maybe<AzureCdnOriginGroup>>>;
  cdnOrigins?: Maybe<Array<Maybe<AzureCdnOrigin>>>;
  cdnProfiles?: Maybe<Array<Maybe<AzureCdnProfile>>>;
  containerRegistries?: Maybe<Array<Maybe<AzureContainerRegistry>>>;
  dataFactories?: Maybe<Array<Maybe<AzureDataFactory>>>;
  databaseManagedSqlInstances?: Maybe<Array<Maybe<AzureDatabaseManagedSqlInstance>>>;
  databaseMySql?: Maybe<Array<Maybe<AzureDatabaseMySql>>>;
  databasePostgreSql?: Maybe<Array<Maybe<AzureDatabasePostgreSql>>>;
  databaseSql?: Maybe<Array<Maybe<AzureDatabaseSql>>>;
  databaseSqlVm?: Maybe<Array<Maybe<AzureDatabaseSqlVm>>>;
  disks?: Maybe<Array<Maybe<AzureDisk>>>;
  dns?: Maybe<Array<Maybe<AzureDnsZone>>>;
  eventGrids?: Maybe<Array<Maybe<AzureEventGrid>>>;
  eventHubs?: Maybe<Array<Maybe<AzureEventHub>>>;
  fileShares?: Maybe<Array<Maybe<AzureFileShare>>>;
  firewalls?: Maybe<Array<Maybe<AzureFirewall>>>;
  functionApps?: Maybe<Array<Maybe<AzureFunctionApp>>>;
  keyVaults?: Maybe<Array<Maybe<AzureKeyVault>>>;
  loadBalancers?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  logAnalyticsWorkspaces?: Maybe<Array<Maybe<AzureLogAnalyticsWorkspace>>>;
  managedBy?: Maybe<Scalars['String']>;
  mySqlServer?: Maybe<Array<Maybe<AzureMySqlServer>>>;
  networkInterfaces?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  postgreSqlServer?: Maybe<Array<Maybe<AzurePostgreSqlServer>>>;
  privateDns?: Maybe<Array<Maybe<AzurePrivateDnsZone>>>;
  publicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  securityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroup>>>;
  sqlServers?: Maybe<Array<Maybe<AzureSqlServer>>>;
  storageAccounts?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  storageBlobs?: Maybe<Array<Maybe<AzureStorageBlob>>>;
  storageContainers?: Maybe<Array<Maybe<AzureStorageContainer>>>;
  trafficManagerProfiles?: Maybe<Array<Maybe<AzureTrafficManagerProfile>>>;
  virtualMachineScaleSets?: Maybe<Array<Maybe<AzureVirtualMachineScaleSet>>>;
  virtualMachines?: Maybe<Array<Maybe<AzureVirtualMachine>>>;
  virtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
};

export type AzureResourceSystemData = {
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  createdByType?: Maybe<Scalars['String']>;
  lastModifiedAt?: Maybe<Scalars['String']>;
  lastModifiedBy?: Maybe<Scalars['String']>;
  lastModifiedByType?: Maybe<Scalars['String']>;
};

export type AzureSecurityAssesment = AzureBaseResource & {
  additionalData?: Maybe<Array<Maybe<AzureSecurityAssesmentAdditionalData>>>;
  displayName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  metadata?: Maybe<AzureSecurityAssesmentMetadata>;
  partnerName?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  resourceDetails?: Maybe<AzureSecurityAssesmentResourceDetails>;
  resourceGroupId?: Maybe<Scalars['String']>;
  status?: Maybe<AzureSecurityAssesmentStatus>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureSecurityAssesmentAdditionalData = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureSecurityAssesmentMetadata = {
  assessmentType?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  implementationEffort?: Maybe<Scalars['String']>;
  partnerName?: Maybe<Scalars['String']>;
  policyDefinitionId?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  remediationDescription?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  threats?: Maybe<Array<Maybe<Scalars['String']>>>;
  userImpact?: Maybe<Scalars['String']>;
};

export type AzureSecurityAssesmentResourceDetails = {
  databaseName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  machineName?: Maybe<Scalars['String']>;
  serverName?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourceComputerId?: Maybe<Scalars['String']>;
  vmuuid?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['String']>;
};

export type AzureSecurityAssesmentStatus = {
  cause?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  firstEvaluationDate?: Maybe<Scalars['String']>;
  statusChangeDate?: Maybe<Scalars['String']>;
};

export type AzureSecurityContact = AzureBaseResource & {
  alertNotifications?: Maybe<Scalars['String']>;
  alertsToAdmins?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureSecurityPricing = AzureResource & {
  freeTrialRemainingTime?: Maybe<Scalars['String']>;
  pricingTier?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureSecuritySetting = AzureBaseResource & {
  enabled?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  subscriptionId?: Maybe<Scalars['String']>;
};

export type AzureSqlServer = AzureResource & {
  adAdministrators?: Maybe<Array<Maybe<AzureSqlServerAdAdministrator>>>;
  administratorLogin?: Maybe<Scalars['String']>;
  administratorLoginPassword?: Maybe<Scalars['String']>;
  administrators?: Maybe<AzureSqlServerExternalAdministrator>;
  databaseSql?: Maybe<Array<Maybe<AzureDatabaseSql>>>;
  encryptionProtectors?: Maybe<Array<Maybe<AzureSqlServerEncryptionProtector>>>;
  federatedClientId?: Maybe<Scalars['String']>;
  firewallRules?: Maybe<Array<Maybe<AzureSqlServerFirewallRule>>>;
  fullyQualifiedDomainName?: Maybe<Scalars['String']>;
  identity?: Maybe<AzureSqlServerIdentity>;
  keyId?: Maybe<Scalars['String']>;
  minimalTlsVersion?: Maybe<Scalars['String']>;
  primaryUserAssignedIdentityId?: Maybe<Scalars['String']>;
  privateEndpointConnections?: Maybe<Array<Maybe<AzureSqlServerPrivateEndpointConnection>>>;
  publicNetworkAccess?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  restrictOutboundNetworkAccess?: Maybe<Scalars['String']>;
  serverBlobAuditingPolicies?: Maybe<Array<Maybe<AzureSqlServerBlobAuditingPolicy>>>;
  serverSecurityAlertPolicies?: Maybe<Array<Maybe<AzureSqlServerSecurityAlertPolicy>>>;
  state?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  vulnerabilityAssessments?: Maybe<Array<Maybe<AzureSqlServerVulnerabilityAssessment>>>;
  workspaceFeature?: Maybe<Scalars['String']>;
};

export type AzureSqlServerAdAdministrator = {
  administratorType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  login?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureSqlServerBlobAuditingPolicy = {
  auditActionsAndGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  isAzureMonitorTargetEnabled?: Maybe<Scalars['Boolean']>;
  isDevopsAuditEnabled?: Maybe<Scalars['Boolean']>;
  isStorageSecondaryKeyInUse?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  queueDelayMs?: Maybe<Scalars['Int']>;
  retentionDays?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  storageAccountAccessKey?: Maybe<Scalars['String']>;
  storageAccountSubscriptionId?: Maybe<Scalars['String']>;
  storageEndpoint?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureSqlServerEncryptionProtector = {
  autoRotationEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serverKeyName?: Maybe<Scalars['String']>;
  serverKeyType?: Maybe<Scalars['String']>;
  subregion?: Maybe<Scalars['String']>;
  thumbprint?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type AzureSqlServerExternalAdministrator = {
  administratorType?: Maybe<Scalars['String']>;
  azureADOnlyAuthentication?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  principalType?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
};

export type AzureSqlServerFirewallRule = {
  endIpAddress?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  startIpAddress?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureSqlServerIdentity = {
  principalId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userAssignedIdentities?: Maybe<Array<Maybe<AzureSqlServerUserAssignedIdentity>>>;
};

export type AzureSqlServerPrivateEndpointConnection = {
  id: Scalars['String'];
  properties?: Maybe<AzureSqlServerPrivateEndpointConnectionProperties>;
};

export type AzureSqlServerPrivateEndpointConnectionProperties = {
  privateEndpointId?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionState?: Maybe<AzureSqlServerPrivateLinkServiceConnectionStateProperty>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureSqlServerPrivateLinkServiceConnectionStateProperty = {
  actionsRequired?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type AzureSqlServerSecurityAlertPolicy = {
  creationTime?: Maybe<Scalars['String']>;
  disabledAlerts?: Maybe<Array<Maybe<Scalars['String']>>>;
  emailAccountAdmins?: Maybe<Scalars['Boolean']>;
  emailAddresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  retentionDays?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  storageAccountAccessKey?: Maybe<Scalars['String']>;
  storageEndpoint?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureSqlServerUserAssignedIdentity = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<AzureSqlServerUserIdentity>;
};

export type AzureSqlServerUserIdentity = {
  clientId?: Maybe<Scalars['String']>;
  principalId?: Maybe<Scalars['String']>;
};

export type AzureSqlServerVulnerabilityAssessment = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  recurringScans?: Maybe<AzureSqlServerVulnerabilityAssessmentRecurringScansProperties>;
  storageAccountAccessKey?: Maybe<Scalars['String']>;
  storageContainerPath?: Maybe<Scalars['String']>;
  storageContainerSasKey?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureSqlServerVulnerabilityAssessmentRecurringScansProperties = {
  emailSubscriptionAdmins?: Maybe<Scalars['Boolean']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type AzureSshConfiguration = {
  publicKeys?: Maybe<Array<Maybe<AzureSshPublicKey>>>;
};

export type AzureSshPublicKey = {
  keyData?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type AzureStorageAccount = AzureResource & {
  accessTier?: Maybe<Scalars['String']>;
  allowBlobPublicAccess?: Maybe<Scalars['String']>;
  allowSharedKeyAccess?: Maybe<Scalars['String']>;
  appServiceWebApp?: Maybe<Array<Maybe<AzureAppServiceWebApp>>>;
  azureFilesIdentityBasedAuthenticationADProperties?: Maybe<AzureFilesIdentityBasedAuthenticationAdProperties>;
  azureFilesIdentityBasedAuthenticationDirectoryServiceOptions?: Maybe<Scalars['String']>;
  blobServiceProperties?: Maybe<AzureStorageAccountServiceProperties>;
  customDomainName?: Maybe<Scalars['String']>;
  customDomainUseSubDomainName?: Maybe<Scalars['String']>;
  enableHttpsTrafficOnly?: Maybe<Scalars['String']>;
  enableNfsV3?: Maybe<Scalars['String']>;
  encryptionKeySource?: Maybe<Scalars['String']>;
  encryptionKeyVaultPropertyCurrentVersionedKeyIdentifier?: Maybe<Scalars['String']>;
  encryptionKeyVaultPropertyKeyName?: Maybe<Scalars['String']>;
  encryptionKeyVaultPropertyKeyVaultUri?: Maybe<Scalars['String']>;
  encryptionKeyVaultPropertyKeyVersion?: Maybe<Scalars['String']>;
  encryptionKeyVaultPropertyLastKeyRotationTimestamp?: Maybe<Scalars['String']>;
  encryptionRequireInfrastructureEncryption?: Maybe<Scalars['String']>;
  encryptionServiceBlob?: Maybe<AzureStorageAccountEncryptionService>;
  encryptionServiceFile?: Maybe<AzureStorageAccountEncryptionService>;
  encryptionServiceQueue?: Maybe<AzureStorageAccountEncryptionService>;
  encryptionServiceTable?: Maybe<AzureStorageAccountEncryptionService>;
  encryptionUserAssignedIdentity?: Maybe<Scalars['String']>;
  eventHubs?: Maybe<Array<Maybe<AzureEventHub>>>;
  extendedLocationName?: Maybe<Scalars['String']>;
  extendedLocationType?: Maybe<Scalars['String']>;
  failoverInProgress?: Maybe<Scalars['String']>;
  fileShares?: Maybe<Array<Maybe<AzureFileShare>>>;
  geoReplicationStatsCanFailover?: Maybe<Scalars['String']>;
  geoReplicationStatsLastSyncTime?: Maybe<Scalars['String']>;
  geoReplicationStatsStatus?: Maybe<Scalars['String']>;
  isHnsEnabled?: Maybe<Scalars['String']>;
  keyCreationTimeKey1?: Maybe<Scalars['String']>;
  keyCreationTimeKey2?: Maybe<Scalars['String']>;
  keyPolicyExpirationPeriodInDays?: Maybe<Scalars['Int']>;
  largeFileSharesState?: Maybe<Scalars['String']>;
  lastGeoFailoverTime?: Maybe<Scalars['String']>;
  minimumTlsVersion?: Maybe<Scalars['String']>;
  networkRuleIpRules?: Maybe<Array<Maybe<AzureStorageAccountIpRule>>>;
  networkRuleResourceAccessRules?: Maybe<Array<Maybe<AzureStorageAccountResourceAccessRule>>>;
  networkRuleSetByPass?: Maybe<Scalars['String']>;
  networkRuleSetDefaultAction?: Maybe<Scalars['String']>;
  networkRuleVirtualNetworkRules?: Maybe<Array<Maybe<AzureStorageAccountVirtualNetworkRule>>>;
  primaryEndpoints?: Maybe<AzureStorageAccountPrimaryEndpoints>;
  primaryInternetEndpoints?: Maybe<AzureStorageAccountPrimaryInternetEndpoints>;
  primaryLocation?: Maybe<Scalars['String']>;
  primaryMicrosoftEndpoints?: Maybe<AzureStorageAccountPrimaryMicrosoftEndpoints>;
  privateEndpointConnections?: Maybe<Array<Maybe<AzureStorageAccountPrivateEndpointConnection>>>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  routingPreferenceChoice?: Maybe<Scalars['String']>;
  routingPreferencePublishInternetEndpoints?: Maybe<Scalars['String']>;
  routingPreferencePublishMicrosoftEndpoints?: Maybe<Scalars['String']>;
  sasPolicyExpirationPeriod?: Maybe<Scalars['String']>;
  secondaryLocation?: Maybe<Scalars['String']>;
  statusOfPrimary?: Maybe<Scalars['String']>;
  statusOfSecondary?: Maybe<Scalars['String']>;
  storageContainers?: Maybe<Array<Maybe<AzureStorageContainer>>>;
};

export type AzureStorageAccountEncryptionService = {
  enabled?: Maybe<Scalars['String']>;
  keyType?: Maybe<Scalars['String']>;
  lastEnabledTime?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountIpRule = {
  action?: Maybe<Scalars['String']>;
  iPAddressOrRange?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AzureStorageAccountPrimaryEndpoints = {
  blob?: Maybe<Scalars['String']>;
  dfs?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  queue?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountPrimaryInternetEndpoints = {
  blob?: Maybe<Scalars['String']>;
  dfs?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountPrimaryMicrosoftEndpoints = {
  blob?: Maybe<Scalars['String']>;
  dfs?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  queue?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountPrivateEndpointConnection = {
  id: Scalars['String'];
  privateEndpointId?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateActionRequired?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateDescription?: Maybe<Scalars['String']>;
  privateLinkServiceConnectionStateStatus?: Maybe<Scalars['String']>;
  provisioningState?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountResourceAccessRule = {
  id: Scalars['String'];
  resourceId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountServiceProperties = {
  corsRules?: Maybe<Array<Maybe<AzureStorageAccountServicePropertiesCorsRules>>>;
  deleteRetentionPolicyDays?: Maybe<Scalars['Int']>;
  deleteRetentionPolicyEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  skuName?: Maybe<Scalars['String']>;
  skuTier?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AzureStorageAccountServicePropertiesCorsRules = {
  allowedHeaders?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  exposedHeaders?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  maxAgeInSeconds?: Maybe<Scalars['Int']>;
};

export type AzureStorageAccountVirtualNetworkRule = {
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  virtualNetworkResourceId?: Maybe<Scalars['String']>;
};

export type AzureStorageBlob = AzureResource & {
  deleted?: Maybe<Scalars['String']>;
  hasVersionsOnly?: Maybe<Scalars['Boolean']>;
  isCurrentVersion?: Maybe<Scalars['Boolean']>;
  objectReplicationSourceProperties?: Maybe<Array<Maybe<AzureStorageBlobReplicationPolicy>>>;
  properties?: Maybe<AzureStorageBlobProperties>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  snapshot?: Maybe<Scalars['String']>;
  storageContainer?: Maybe<Array<Maybe<AzureStorageContainer>>>;
  versionId?: Maybe<Scalars['String']>;
};

export type AzureStorageBlobProperties = {
  accessTier?: Maybe<Scalars['String']>;
  accessTierChangedOn?: Maybe<Scalars['String']>;
  accessTierInferred?: Maybe<Scalars['Boolean']>;
  archiveStatus?: Maybe<Scalars['String']>;
  blobSequenceNumber?: Maybe<Scalars['Int']>;
  blobType?: Maybe<Scalars['String']>;
  cacheControl?: Maybe<Scalars['String']>;
  contentCRC64?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  contentEncoding?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentLength?: Maybe<Scalars['Int']>;
  contentType?: Maybe<Scalars['String']>;
  copyCompletedOn?: Maybe<Scalars['String']>;
  copyId?: Maybe<Scalars['String']>;
  copyProgress?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  copyStatus?: Maybe<Scalars['String']>;
  copyStatusDescription?: Maybe<Scalars['String']>;
  createdOn?: Maybe<Scalars['String']>;
  customerProvidedKeySha256?: Maybe<Scalars['String']>;
  deletedOn?: Maybe<Scalars['String']>;
  destinationSnapshot?: Maybe<Scalars['String']>;
  encryptionScope?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  expiresOn?: Maybe<Scalars['String']>;
  immutabilityPolicyExpiresOn?: Maybe<Scalars['String']>;
  immutabilityPolicyMode?: Maybe<Scalars['String']>;
  incrementalCopy?: Maybe<Scalars['Boolean']>;
  isSealed?: Maybe<Scalars['Boolean']>;
  lastAccessedOn?: Maybe<Scalars['String']>;
  lastModified?: Maybe<Scalars['String']>;
  leaseDuration?: Maybe<Scalars['String']>;
  leaseState?: Maybe<Scalars['String']>;
  leaseStatus?: Maybe<Scalars['String']>;
  legalHold?: Maybe<Scalars['Boolean']>;
  rehydratePriority?: Maybe<Scalars['String']>;
  remainingRetentionDays?: Maybe<Scalars['Int']>;
  serverEncrypted?: Maybe<Scalars['Boolean']>;
  tagCount?: Maybe<Scalars['Int']>;
};

export type AzureStorageBlobReplicationPolicy = {
  id: Scalars['String'];
  policyId?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<AzureStorageBlobReplicationRule>>>;
};

export type AzureStorageBlobReplicationRule = {
  replicationStatus?: Maybe<Scalars['String']>;
  ruleId: Scalars['String'];
};

export type AzureStorageContainer = AzureResource & {
  deleted?: Maybe<Scalars['String']>;
  deletedTime?: Maybe<Scalars['String']>;
  denyEncryptionScopeOverride?: Maybe<Scalars['String']>;
  hasImmutabilityPolicy?: Maybe<Scalars['String']>;
  hasLegalHold?: Maybe<Scalars['String']>;
  immutabilityPolicyAllowProtectedAppendWrites?: Maybe<Scalars['String']>;
  immutabilityPolicyPeriodSinceCreationInDays?: Maybe<Scalars['Int']>;
  immutabilityPolicyState?: Maybe<Scalars['String']>;
  immutabilityPolicyUpdateHistory?: Maybe<Array<Maybe<AzureStorageContainerImmutabilityPolicyUpdateHistory>>>;
  lastModifiedTime?: Maybe<Scalars['String']>;
  leaseDuration?: Maybe<Scalars['String']>;
  leaseStatus?: Maybe<Scalars['String']>;
  legalHoldTags?: Maybe<Array<Maybe<AzureStorageContainerLegalHoldTag>>>;
  publicAccess?: Maybe<Scalars['String']>;
  remainingRetentionDays?: Maybe<Scalars['Int']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  storageAccount?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  storageBlobs?: Maybe<Array<Maybe<AzureStorageBlob>>>;
  version?: Maybe<Scalars['String']>;
};

export type AzureStorageContainerImmutabilityPolicyUpdateHistory = {
  id: Scalars['String'];
  immutabilityPeriodSinceCreationInDays?: Maybe<Scalars['Int']>;
  objectIdentifier?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  upn?: Maybe<Scalars['String']>;
};

export type AzureStorageContainerLegalHoldTag = {
  id: Scalars['String'];
  objectIdentifier?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  upn?: Maybe<Scalars['String']>;
};

export type AzureSubResource = {
  id: Scalars['String'];
};

export type AzureTag = {
  activityLogAlerts?: Maybe<Array<Maybe<AzureActivityLogAlert>>>;
  adApplications?: Maybe<Array<Maybe<AzureAdApplication>>>;
  adServicePrincipals?: Maybe<Array<Maybe<AzureAdServicePrincipal>>>;
  aksManagedClusters?: Maybe<Array<Maybe<AzureAksManagedCluster>>>;
  appServicePlans?: Maybe<Array<Maybe<AzureAppServicePlan>>>;
  appServiceWebApps?: Maybe<Array<Maybe<AzureAppServiceWebApp>>>;
  arcConnectedClusters?: Maybe<Array<Maybe<AzureArcConnectedCluster>>>;
  cdnEndpoints?: Maybe<Array<Maybe<AzureCdnEndpoint>>>;
  cdnProfiles?: Maybe<Array<Maybe<AzureCdnProfile>>>;
  containerRegistries?: Maybe<Array<Maybe<AzureContainerRegistry>>>;
  dataFactories?: Maybe<Array<Maybe<AzureDataFactory>>>;
  databaseManagedSqlInstances?: Maybe<Array<Maybe<AzureDatabaseManagedSqlInstance>>>;
  disks?: Maybe<Array<Maybe<AzureDisk>>>;
  dns?: Maybe<Array<Maybe<AzureDnsZone>>>;
  firewalls?: Maybe<Array<Maybe<AzureFirewall>>>;
  functionApps?: Maybe<Array<Maybe<AzureFunctionApp>>>;
  id: Scalars['String'];
  key: Scalars['String'];
  keyVaults?: Maybe<Array<Maybe<AzureKeyVault>>>;
  loadBalancers?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  logAnalyticsWorkspaces?: Maybe<Array<Maybe<AzureLogAnalyticsWorkspace>>>;
  mySqlServers?: Maybe<Array<Maybe<AzureMySqlServer>>>;
  networkInterfaces?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  postgreSqlServers?: Maybe<Array<Maybe<AzurePostgreSqlServer>>>;
  publicIps?: Maybe<Array<Maybe<AzurePublicIp>>>;
  resourceGroups?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  securityGroups?: Maybe<Array<Maybe<AzureNetworkSecurityGroup>>>;
  sqlServers?: Maybe<Array<Maybe<AzureSqlServer>>>;
  storageAccounts?: Maybe<Array<Maybe<AzureStorageAccount>>>;
  trafficManagerProfiles?: Maybe<Array<Maybe<AzureTrafficManagerProfile>>>;
  value: Scalars['String'];
  virtualMachines?: Maybe<Array<Maybe<AzureVirtualMachine>>>;
  virtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
};

export type AzureTrafficManagerProfile = AzureResource & {
  allowedEndpointRecordTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  dnsConfig?: Maybe<AzureTrafficManagerProfileDnsConfig>;
  endpoints?: Maybe<Array<Maybe<AzureTrafficManagerProfileEndpoint>>>;
  maxReturn?: Maybe<Scalars['Int']>;
  monitorConfig?: Maybe<AzureTrafficManagerProfileMonitorConfig>;
  profileStatus?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  trafficRoutingMethod?: Maybe<Scalars['String']>;
  trafficViewEnrollmentStatus?: Maybe<Scalars['String']>;
};

export type AzureTrafficManagerProfileCustomHeadersItem = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AzureTrafficManagerProfileDnsConfig = {
  fqdn?: Maybe<Scalars['String']>;
  relativeName?: Maybe<Scalars['String']>;
  ttl?: Maybe<Scalars['Int']>;
};

export type AzureTrafficManagerProfileEndpoint = {
  customHeaders?: Maybe<Array<Maybe<AzureTrafficManagerProfileCustomHeadersItem>>>;
  endpointLocation?: Maybe<Scalars['String']>;
  endpointMonitorStatus?: Maybe<Scalars['String']>;
  endpointStatus?: Maybe<Scalars['String']>;
  geoMapping?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  minChildEndpoints?: Maybe<Scalars['Int']>;
  minChildEndpointsIPv4?: Maybe<Scalars['Int']>;
  minChildEndpointsIPv6?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  subnets?: Maybe<Array<Maybe<AzureTrafficManagerProfileEndpointPropertiesSubnetsItem>>>;
  target?: Maybe<Scalars['String']>;
  targetResourceId?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type AzureTrafficManagerProfileEndpointPropertiesSubnetsItem = {
  first?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['Int']>;
};

export type AzureTrafficManagerProfileMonitorConfig = {
  customHeaders?: Maybe<Array<Maybe<AzureTrafficManagerProfileCustomHeadersItem>>>;
  expectedStatusCodeRanges?: Maybe<Array<Maybe<AzureTrafficManagerProfileMonitorConfigExpectedStatusCodeRangesItem>>>;
  intervalInSeconds?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  profileMonitorStatus?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  timeoutInSeconds?: Maybe<Scalars['Int']>;
  toleratedNumberOfFailures?: Maybe<Scalars['Int']>;
};

export type AzureTrafficManagerProfileMonitorConfigExpectedStatusCodeRangesItem = {
  id: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type AzureVaultCertificate = {
  certificateStore?: Maybe<Scalars['String']>;
  certificateUrl?: Maybe<Scalars['String']>;
};

export type AzureVaultSecretGroup = {
  sourceVault?: Maybe<AzureSubResource>;
  vaultCertificates?: Maybe<Array<Maybe<AzureVaultCertificate>>>;
};

export type AzureVirtualMachine = AzureResource & {
  bootDiagnostics?: Maybe<Scalars['Boolean']>;
  disks?: Maybe<Array<Maybe<AzureDisk>>>;
  licenseType?: Maybe<Scalars['String']>;
  managedBy?: Maybe<Scalars['String']>;
  networkInterfaces?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  osProfile?: Maybe<AzureVirtualMachineOsProfile>;
  osType?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  storageImageReference?: Maybe<AzureVirtualMachineStorageImageReference>;
  virtualNetworks?: Maybe<Array<Maybe<AzureVirtualNetwork>>>;
  vmSize?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineOsProfile = {
  allowExtensionOperations?: Maybe<Scalars['Boolean']>;
  computerName?: Maybe<Scalars['String']>;
  linuxConfiguration?: Maybe<AzureVirtualMachineOsProfileLinuxConfiguration>;
  requireGuestProvisionSignal?: Maybe<Scalars['Boolean']>;
  windowsConfiguration?: Maybe<AzureVirtualMachineOsProfileWindowsConfiguration>;
};

export type AzureVirtualMachineOsProfileLinuxConfiguration = {
  disablePasswordAuthentication?: Maybe<Scalars['Boolean']>;
  provisionVMAgent?: Maybe<Scalars['Boolean']>;
};

export type AzureVirtualMachineOsProfileWindowsConfiguration = {
  enableAutomaticUpdates?: Maybe<Scalars['Boolean']>;
  provisionVMAgent?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSet = AzureResource & {
  doNotRunExtensionsOnOverprovisionedVMs?: Maybe<Scalars['Boolean']>;
  overprovision?: Maybe<Scalars['Boolean']>;
  platformFaultDomainCount?: Maybe<Scalars['Int']>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  scaleInPolicy?: Maybe<AzureVirtualMachineScaleSetScaleInPolicy>;
  singlePlacementGroup?: Maybe<Scalars['Boolean']>;
  uniqueId?: Maybe<Scalars['String']>;
  virtualMachineProfile?: Maybe<AzureVirtualMachineScaleSetProfile>;
};

export type AzureVirtualMachineScaleSetDiagnosticsProfile = {
  bootDiagnostics?: Maybe<AzureVirtualMachineScaleSetDiagnosticsProfileBoot>;
};

export type AzureVirtualMachineScaleSetDiagnosticsProfileBoot = {
  enabled?: Maybe<Scalars['Boolean']>;
};

export type AzureVirtualMachineScaleSetExtension = {
  autoUpgradeMinorVersion?: Maybe<Scalars['Boolean']>;
  enableAutomaticUpgrade?: Maybe<Scalars['Boolean']>;
  forceUpdateTag?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  provisionAfterExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  provisioningState?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type1?: Maybe<Scalars['String']>;
  typeHandlerVersion?: Maybe<Scalars['String']>;
  typePropertiesType?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetExtensionProfile = {
  extensions?: Maybe<Array<Maybe<AzureVirtualMachineScaleSetExtension>>>;
};

export type AzureVirtualMachineScaleSetIpTag = {
  ipTagType?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetNetworkIpConfiguration = {
  applicationGatewayBackendAddressPools?: Maybe<Array<Maybe<AzureSubResource>>>;
  applicationSecurityGroups?: Maybe<Array<Maybe<AzureSubResource>>>;
  id: Scalars['String'];
  loadBalancerBackendAddressPools?: Maybe<Array<Maybe<AzureSubResource>>>;
  loadBalancerInboundNatPools?: Maybe<Array<Maybe<AzureSubResource>>>;
  name?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  privateIPAddressVersion?: Maybe<Scalars['String']>;
  subnetId?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetNetworkProfile = {
  networkInterfaceConfigurations?: Maybe<Array<Maybe<AzureVirtualMachineScaleSetNetworkProfileConfiguration>>>;
};

export type AzureVirtualMachineScaleSetNetworkProfileConfiguration = {
  deleteOption?: Maybe<Scalars['String']>;
  dnsSettings?: Maybe<AzureVirtualMachineScaleSetNetworkProfileConfigurationDnsSettings>;
  enableAcceleratedNetworking?: Maybe<Scalars['Boolean']>;
  enableFpga?: Maybe<Scalars['Boolean']>;
  enableIPForwarding?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  ipConfigurations?: Maybe<Array<Maybe<AzureVirtualMachineScaleSetNetworkIpConfiguration>>>;
  name?: Maybe<Scalars['String']>;
  networkSecurityGroup?: Maybe<AzureSubResource>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type AzureVirtualMachineScaleSetNetworkProfileConfigurationDnsSettings = {
  dnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureVirtualMachineScaleSetNetworkPublicIpAddresssConfiguration = {
  deleteOption?: Maybe<Scalars['String']>;
  dnsSettings?: Maybe<AzureVirtualMachineScaleSetPublicIpAddressConfigurationDnsSettings>;
  idleTimeoutInMinutes?: Maybe<Scalars['Int']>;
  ipTags?: Maybe<Array<Maybe<AzureVirtualMachineScaleSetIpTag>>>;
  name?: Maybe<Scalars['String']>;
  publicIPAddressVersion?: Maybe<Scalars['String']>;
  publicIPPrefix?: Maybe<AzureSubResource>;
};

export type AzureVirtualMachineScaleSetOsProfile = {
  adminUsername?: Maybe<Scalars['String']>;
  allowExtensionOperations?: Maybe<Scalars['Boolean']>;
  computerNamePrefix?: Maybe<Scalars['String']>;
  linuxConfiguration?: Maybe<AzureVirtualMachineScaleSetOsProfileLinuxConfiguration>;
  requireGuestProvisionSignal?: Maybe<Scalars['Boolean']>;
  secrets?: Maybe<Array<Maybe<AzureVaultSecretGroup>>>;
  windowsConfiguration?: Maybe<AzureVirtualMachineScaleSetOsProfileWindowsConfiguration>;
};

export type AzureVirtualMachineScaleSetOsProfileLinuxConfiguration = {
  disablePasswordAuthentication?: Maybe<Scalars['Boolean']>;
  provisionVMAgent?: Maybe<Scalars['Boolean']>;
  ssh?: Maybe<AzureSshConfiguration>;
};

export type AzureVirtualMachineScaleSetOsProfileWindowsConfiguration = {
  enableAutomaticUpdates?: Maybe<Scalars['Boolean']>;
  provisionVMAgent?: Maybe<Scalars['Boolean']>;
  ssh?: Maybe<AzureSshConfiguration>;
  timeZone?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetProfile = {
  diagnosticsProfile?: Maybe<AzureVirtualMachineScaleSetDiagnosticsProfile>;
  extensionProfile?: Maybe<AzureVirtualMachineScaleSetExtensionProfile>;
  networkProfile?: Maybe<AzureVirtualMachineScaleSetNetworkProfile>;
  osProfile?: Maybe<AzureVirtualMachineScaleSetOsProfile>;
  storageProfile?: Maybe<AzureVirtualMachineScaleSetStorageProfile>;
};

export type AzureVirtualMachineScaleSetPublicIpAddressConfigurationDnsSettings = {
  domainNameLabel?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetScaleInPolicy = {
  rules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AzureVirtualMachineScaleSetStorageProfile = {
  imageReference?: Maybe<AzureVirtualMachineScaleSetStorageProfileImageReference>;
  osDisk?: Maybe<AzureVirtualMachineScaleSetStorageProfileOsDisk>;
};

export type AzureVirtualMachineScaleSetStorageProfileImageReference = {
  id?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetStorageProfileManagedDisk = {
  storageAccountType?: Maybe<Scalars['String']>;
};

export type AzureVirtualMachineScaleSetStorageProfileOsDisk = {
  caching?: Maybe<Scalars['String']>;
  createOption?: Maybe<Scalars['String']>;
  diskSizeGB?: Maybe<Scalars['Int']>;
  managedDisk?: Maybe<AzureVirtualMachineScaleSetStorageProfileManagedDisk>;
  osType?: Maybe<Scalars['String']>;
  writeAcceleratorEnabled?: Maybe<Scalars['Boolean']>;
};

export type AzureVirtualMachineScaleSetSubResource = {
  id: Scalars['String'];
};

export type AzureVirtualMachineStorageImageReference = {
  exactVersion?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  sharedGalleryImageId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type AzureVirtualNetwork = AzureResource & {
  addressSpacePrefixes?: Maybe<Array<Maybe<Scalars['String']>>>;
  ddosProtectionPlans?: Maybe<Array<Maybe<AzureVirtualNetworkDdosProtectionPlan>>>;
  dnsServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableDdosProtection?: Maybe<Scalars['Boolean']>;
  enableVmProtection?: Maybe<Scalars['Boolean']>;
  firewalls?: Maybe<Array<Maybe<AzureFirewall>>>;
  flowTimeoutInMinutes?: Maybe<Scalars['Int']>;
  lbVirtualNetworkOf?: Maybe<Array<Maybe<AzureLoadBalancer>>>;
  networkInterfaces?: Maybe<Array<Maybe<AzureNetworkInterface>>>;
  provisioningState?: Maybe<Scalars['String']>;
  resourceGroup?: Maybe<Array<Maybe<AzureResourceGroup>>>;
  resourceGuid?: Maybe<Scalars['String']>;
  virtualMachines?: Maybe<Array<Maybe<AzureVirtualMachine>>>;
};

export type AzureVirtualNetworkDdosProtectionPlan = AzureBaseResource & {
  etag?: Maybe<Scalars['String']>;
  resourceGuid?: Maybe<Scalars['String']>;
};

export type AzureWebSiteFunction = AzureBaseResource & {
  configHref?: Maybe<Scalars['String']>;
  functionAppId?: Maybe<Scalars['String']>;
  functionAppName?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  invokeUrlTemplate?: Maybe<Scalars['String']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  resourceGroupId?: Maybe<Scalars['String']>;
  scriptHref?: Maybe<Scalars['String']>;
  scriptRootPathHref?: Maybe<Scalars['String']>;
  secretsFileHref?: Maybe<Scalars['String']>;
  testData?: Maybe<Scalars['String']>;
  testDataHref?: Maybe<Scalars['String']>;
};
