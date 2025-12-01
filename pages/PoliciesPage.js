const { buttons, fields } = require("./LoginPage");
const { clickSaveButton, clickOkButton } = require("./WifiConfiguration");

const { I } = inject();

module.exports = {

 buttons:{
  addPrivacyPoliciesButton : "//button[contains(., 'Add Privacy Policies')]"    ,
  newPoliciesButton : "//a[contains(., 'New') and .//i[contains(@class, 'glyphicon-plus')]]",
  androidButton  : "#device-environment-select-menu"                            ,
  nextButton : ".glyphicon.glyphicon-menu-right"                                ,
         
  saveButton : "//button[contains(., 'Save') and @data-ng-click='policyAddCtrl.upsertPolicy(policyAddCtrl.criteriaCtrl)']",
  deleteButton : "//a[@confirmed-click='policyAddCtrl.removePolicy(item)']",
  okButton : ".btn.btn-danger.accept-dialog"

 },
 fields : {
    policyNameField:"//input[@ng-model='policyAddCtrl.policyName']"             ,

 },
 checbox:{
  
  testingChexbox : "//label[contains(., 'MelikWifiTest')]//input[@type='checkbox']"
 },
  clickTestingChechbox(){
    I.waitForElement(this.checbox.testingChexbox,3);
    I.forceClick(this.checbox.testingChexbox);

  },
 clickDeleteButton(policyName) {
    const deleteButtonLocator = `//tr[contains(., '${policyName}')]//a[.//i[contains(@class, 'glyphicon-trash')]]`;
    I.click(deleteButtonLocator);
  },
  fillPolicyNameField(input){
    I.waitForElement(this.fields.policyNameField,3);
    I.fillField(this.fields.policyNameField,input);
  },
  clickSaveButton(){
     I.waitForElement(this.buttons.saveButton,3);

     I.forceClick(this.buttons.saveButton);
  },
  clickNextButton(){
      I.waitForElement(this.buttons.nextButton,3);
       I.forceClick(this.buttons.nextButton);
  },
  clickAndroidButton(){
    I.waitForElement(this.buttons.androidButton,3);
     I.forceClick(this.buttons.androidButton);

  },
  clickNewPoliciesButton(){
    I.waitForElement(this.buttons.newPoliciesButton,3);
     I.forceClick(this.buttons.newPoliciesButton);

  },
  clickAddPrivacyPoliciesButton(){
    I.waitForElement(this.buttons.addPrivacyPoliciesButton,3);
     I.forceClick(this.buttons.addPrivacyPoliciesButton);

  },
  clickOkButton(){
    I.waitForElement(this.buttons.okButton,3);
    I.forceClick(this.buttons.okButton);
  }
  
}
