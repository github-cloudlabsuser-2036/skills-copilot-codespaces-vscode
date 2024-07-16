# PowerShell Script to Deploy an Azure Storage Account

# Step 1: Login to Azure
Write-Host "Logging in to Azure..."
az login

# Step 2: Set the subscription where the storage account will be created
$subscriptionId = "your-subscription-id"
Write-Host "Setting subscription to $subscriptionId..."
az account set --subscription $subscriptionId

# Step 3: Create a resource group if it doesn't exist
$resourceGroupName = "yourResourceGroupName"
$location = "yourLocation" # e.g., eastus
Write-Host "Creating resource group '$resourceGroupName' in $location..."
az group create --name $resourceGroupName --location $location

# Step 4: Create the storage account
$storageAccountName = "yourstorageaccountname" # Must be unique across Azure
$sku = "Standard_LRS" # Change as needed
Write-Host "Creating storage account '$storageAccountName'..."
az storage account create --name $storageAccountName --resource-group $resourceGroupName --location $location --sku $sku

Write-Host "Storage account '$storageAccountName' created successfully."