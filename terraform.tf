c# Specify the provider and version
provider "azurerm" {
  features {}
  version = "~>2.0"
}

# Create a Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = "East US"
}

# Create a Storage Account
resource "azurerm_storage_account" "sa" {
  name                     = "examplestorageaccount"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = "Terraform Demo"
  }
}