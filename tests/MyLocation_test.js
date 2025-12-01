
const { tryTo } = require('codeceptjs/effects');
const myLocationPage = require('../pages/myLocationPage');
Feature('My Location Test')
let _location ='Bingöl' ;
let _editlocation ='Malatya' ;
Before(async({I})=>{
    I.amOnPage('/');
    await I.loginAsAdmin();
    
})

Scenario(
    'The user should be able to add a new location.' ,
    async({I,myLocationPage,navbarFragment}) =>{
        
       
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickMyLocation();
        await tryTo (()=> I.click('Accept Cookies'));
        myLocationPage.verifyTextIsVisible('My Locations');
        myLocationPage.clickMyLocationPanelNewButton();
        myLocationPage.checkIsSaveButonDisabled();
        myLocationPage.fillsearchLocationField(_location);
        myLocationPage.clickAutoComplateButton();
        myLocationPage.pressKeyEnter();
        
        myLocationPage.checkSearchedLocationDetails();
        myLocationPage.fillDistanceLocationFields('12');
        myLocationPage.checkIsSaveButonEnabled();
        myLocationPage.clickSaveButton();
        myLocationPage.verifyTextIsVisible(_location);
        myLocationPage.checkIsDontEmptyLocatinTable();
        
    }),
Scenario(
    'Should be able to edit existing location' ,
    ({I,myLocationPage,navbarFragment}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickMyLocation();
        myLocationPage.checkIsDontEmptyLocatinTable();
        myLocationPage.clickEditButton();
        myLocationPage.fillsearchLocationField(_editlocation);
        myLocationPage.pressKeyEnter();
        myLocationPage.checkUpdateButtonVisible();
        myLocationPage.clickUpdateButton();
        myLocationPage.checkIsNewLocationAdded(_editlocation);
        
        
    }

);
Scenario(
    "Should be able to delete existing location",
    ({I,myLocationPage,navbarFragment}) =>{
        navbarFragment.clickPoliciesMenu();
        navbarFragment.clickMyLocation();
        myLocationPage.clickDeleteButton();
        myLocationPage.clickOkButton();
        myLocationPage.checkIsDontEmptyLocatinTable();

           
    
    
    }
)

