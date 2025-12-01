Feature('Wifi Config Test')

Before(async({I})=>{
    I.amOnPage('/');
    await I.loginAsAdmin();
    
})
//npx codeceptjs run tests/WifiConfig_test.js

let _wifiConfigName = "melikTest"

Scenario(
    'Should be able to add new wifi configuration',
    ({I,navbarFragment,wifiConfigurationPage}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
        
        wifiConfigurationPage.clickAddButton();
        wifiConfigurationPage.fillNameField('testing')
        wifiConfigurationPage.checkIsSaveButtonDisabled();
        wifiConfigurationPage.fillSSIDField('testSSID');
        wifiConfigurationPage.checkIsSaveButtonEnabled();
        wifiConfigurationPage.selectSecurutyTypeDropdown();
        wifiConfigurationPage.clickHiddenNetworkCheckbox();
        wifiConfigurationPage.clickSaveButton();
       
        
         

    }

);
Scenario(
    'Should be able to edit wifi configuration',
    ({I,navbarFragment,wifiConfigurationPage}) =>{
         navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
       wifiConfigurationPage.clickEditButtonForWifi('testing');
        wifiConfigurationPage.clearAndFillNameField('MelikWifiTest');
        wifiConfigurationPage.clickSaveButton();
        wifiConfigurationPage.checkItemWasUpdated();

        
    }
);
Scenario(
    'Should be able to clone wifi configuration',
    ({I,navbarFragment,wifiConfigurationPage}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
        wifiConfigurationPage.clickCloneButtonForWifi('MelikWifiTest')
        wifiConfigurationPage.clearAndFillNameField('MelikTestCopy')
        wifiConfigurationPage.clickSaveButton();

    }
);Scenario(
    'Should be able to delete clone and existing wifi configuration',
    ({I,navbarFragment,wifiConfigurationPage}) =>{
        
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
        wifiConfigurationPage.clickDeleteButtonForWifi('MelikTestCopy');
        wifiConfigurationPage.clickOkButton();
    }
);
Scenario(
    'Should be able to add wifi configuration to a policy and should see it cannot be deleted',
    ({I,navbarFragment,wifiConfigurationPage,policiesPage}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickPolicies();
        policiesPage.clickNewPoliciesButton();
        policiesPage.fillPolicyNameField('Melik Test');
        policiesPage.clickAndroidButton();
        policiesPage.clickNextButton();
        policiesPage.clickTestingChechbox();
        policiesPage.clickNextButton();
        policiesPage.clickSaveButton();
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
        wifiConfigurationPage.clickDeleteButtonForWifi('MelikWifiTest');
        wifiConfigurationPage.verifyItemCannotBeDeleted();



        
      //npx codeceptjs run tests/WifiConfig_test.js

    }
);Scenario(
    'Should be able to delete policy and should see wifi conifguration can be deleted',
    ({I,navbarFragment,wifiConfigurationPage,policiesPage}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickPolicies();
        policiesPage.clickDeleteButton('Melik Test');
        policiesPage.clickOkButton();
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickWifiConfig();
        wifiConfigurationPage.clickDeleteButtonForWifi('MelikWifiTest');
        wifiConfigurationPage.clickOkButton();
        wifiConfigurationPage.verifyItemIsDeleted();

    }
)