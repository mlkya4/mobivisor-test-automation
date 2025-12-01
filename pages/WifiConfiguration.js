const { I } = inject();

module.exports = {
  buttons:{
    addButton      : '#addButton'                              ,
    saveButton     : '#saveButton'                             ,
    disableSaveButton :"//button[@id='saveButton'][@disabled]" ,
    cloneButton    :'.glyphicon.glyphicon-duplicate'           ,
    editButton     :".glyphicon.glyphicon-pencil"              ,
    deleteButton   : ".glyphicon.glyphicon-trash"              ,
    cancelButton   :"//button[@class='btn btn-danger' or @ng-click = 'wifiCtrl.clearWifiConfiguration()']" ,
    okButton : "//button[@ng-click='ok()' and text()='OK']",
  },
  fields : {
    nameField : '#name'                                         ,
    serviceSetIdentifierField : '#SSID'                         , 
    passwordField : '#password'                                 ,
  },
  dropdown : {
    hiddenNetworkCheckbox : '#hiddenNetwork'                    ,
    securutyTypeDropdown  : '#securityType'                     ,
    proxyTypeDropdown     : '#proxyType'                        ,
    macRandomizationSettingDropdown :'#macRandomizationSetting' , 

  },
  clickAddButton(){
    I.waitForElement(this.buttons.addButton,3);
    I.forceClick(this.buttons.addButton);
  },
  clickSaveButton(){
    I.waitForElement(this.buttons.saveButton,3);
    I.forceClick(this.buttons.saveButton);
  },
  clickCancelButton(){
    I.waitForElement(this.buttons.cancelButton,3);
    I.forceClick(this.buttons.cancelButton);
  },
  fillNameField(text){
    I.waitForElement(this.fields.nameField,3);
    I.fillField(this.fields.nameField,text);
    
  },
  fillSSIDField(text){
    I.waitForElement(this.fields.serviceSetIdentifierField,3);
    I.fillField(this.fields.serviceSetIdentifierField,text);
  },
  fillPasswordField(input){
    I.waitForElement(this.fields.passwordField,3);
    I.fillField(this.fields.passwordField,input);
  },
  clickHiddenNetworkCheckbox(){
    I.waitForElement(this.dropdown.hiddenNetworkCheckbox,3);
    I.forceClick(this.dropdown.hiddenNetworkCheckbox);

  },
  clickMacRandomizationSettingDropdown(){
        I.waitForElement(this.dropdown.macRandomizationSettingDropdown,3);
        I.selectOption(this.dropdown.macRandomizationSettingDropdown,"No Randamization");

  },
  selectSecurutyTypeDropdown(){
        I.waitForElement(this.dropdown.securutyTypeDropdown,3);
        I.selectOption(this.dropdown.securutyTypeDropdown,"WEP");
  },
  selectProxyTypeDropdown(){
    I.waitForElement(this.dropdown.proxyTypeDropdown,3);
    I.selectOption(this.dropdown.proxyTypeDropdown,"Manual");
  },
  checkIsSaveButtonDisabled(){
    I.waitForElement(this.buttons.saveButton,3);
    I.seeElement(this.buttons.disableSaveButton);

  },
  checkIsSaveButtonEnabled(){
    I.waitForElement(this.buttons.saveButton,3);
    I.dontSeeElement(this.buttons.disableSaveButton);


  },
  clickEditButtonForWifi(wifiName) {
    
  
    
    const editButtonLocator = `//tr[contains(., '${wifiName}')]//a[.//i[contains(@class, 'glyphicon-pencil')]]`;
    I.click(editButtonLocator);
  },
  clearAndFillNameField(text){
    I.waitForElement(this.fields.nameField,3);
    I.clearField(this.fields.nameField);
    I.fillField(this.fields.nameField,text);
    
  },
clickCloneButtonForWifi(wifiName) {
    const cloneButtonLocator = `//tr[contains(., '${wifiName}')]//a[.//i[contains(@class, 'glyphicon-duplicate')]]`;
    I.click(cloneButtonLocator);
  },
  clickDeleteButtonForWifi(wifiName) {
    const deleteButtonLocator = `//tr[contains(., '${wifiName}')]//a[.//i[contains(@class, 'glyphicon-trash')]]`;
    I.click(deleteButtonLocator);
  },
  clickOkButton(){
    I.waitForElement(this.buttons.okButton,3);
    I.forceClick(this.buttons.okButton);
  },
  verifyItemCannotBeDeleted(){
    I.see('MelikWifiTest');
  },
  verifyItemIsDeleted(){
    I.dontSee('MelikWifiTest');

  },
 checkItemWasUpdated(){
  I.see('testing')
 }



  
}
