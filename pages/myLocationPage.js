const { fields } = require("./LoginPage");
const { clickSaveButton, clickOkButton } = require("./WifiConfiguration");

const { I } = inject();

module.exports = {
  buttons:{
    newButton : ".btn.btn-success.btn-xs"                ,
    saveButton : ".btn.btn-primary"                      ,
    cancelButton : ".btn.btn-danger"                     ,
    editButton :".alert-success.text-nowrap.handCursor"  ,
    deleteButton:".alert-danger.text-nowrap.handCursor"  ,
    autoComplateButton:".pac-item"                       ,
    updateButton : ".glyphicon.glyphicon-floppy-disk"    ,
    okButton:".btn.btn-danger.accept-dialog"             ,

  },
  fields:{
    searchLocationFields : ".map-search-input.animate-fadeDown.pac-target-input"  ,
    distanceLocationFields :"#distance"                                           ,
    locationNameFields : '#locationName'                                          ,

  },
  details:{
       locationDetails :'#searchedLocationDetails' ,
       myLocationsPanel :locate('div.panel.panel-default').withDescendant(locate('.btn.btn-success.btn-xs').withText('New'))
  },
  tables : {
    myLocationTable :".col-md-12.top10" ,
  },
  elements: {
    wifiCOnfigurationsTableEpmtyRow: "//*[@class='align_center']",
  },

  clickNewButton(){
    I.waitForElement(this.buttons.newButton,3);
    I.forceClick(this.buttons.newButton);
  },
  clickOkButton(){
    I.waitForElement(this.buttons.okButton,3);
    I.forceClick(this.buttons.okButton);

  },
  clickUpdateButton(){
    I.waitForElement(this.buttons.updateButton,3);
    I.forceClick(this.buttons.updateButton);
  },
  clickSaveButton(){
    I.waitForElement(this.buttons.saveButton,3);
    I.forceClick(this.buttons.saveButton);
  },
  clickCancelButton(){
    I.waitForElement(this.buttons.cancelButton,3);
    I.forceClick(this.buttons.cancelButton);
    
  },
  clickEditButton(){
    I.waitForElement(this.buttons.editButton,3);
    I.forceClick(this.buttons.editButton);
  },
  clickDeleteButton(){
    I.waitForElement(this.buttons.deleteButton,3);
    I.forceClick(this.buttons.deleteButton);

  },
  clickAutoComplateButton(){
    I.waitForElement(this.buttons.autoComplateButton,3);
    I.forceClick(this.buttons.autoComplateButton)

  },
  fillsearchLocationField(input){
    I.waitForElement(this.fields.searchLocationFields,3);
    I.fillField(this.fields.searchLocationFields,input);
  },
  fillDistanceLocationFields(input){  
    I.waitForElement(this.fields.distanceLocationFields,3);
    I.fillField(this.fields.distanceLocationFields,input);
    
  },
  fillLocationNameFields(input){
    I.waitForElement(this.fields.locationNameFields,3);
    I.fillField(this.fields.locationNameFields,input);
  },
  verifyTextIsVisible(text){
    I.see(text);
  },
  clickMyLocationPanelNewButton(){
    within(this.details.myLocationsPanel, () => {
      I.waitForElement(this.buttons.newButton, 3);
      I.click(this.buttons.newButton);
    });

  },
  checkIsSaveButonDisabled(){
    I.waitForElement(this.buttons.saveButton,2);
    I.seeAttributesOnElements(this.buttons.saveButton, { disabled: true });
  },
  checkIsSaveButonEnabled(){
    I.waitForElement(this.buttons.saveButton,3);
    I.seeElement(this.buttons.saveButton);
    
  },
  checkSearchedLocationDetails(){
    I.waitForElement(this.details.locationDetails,3);
    I.seeElement(this.details.locationDetails);

  },
  checkIsDontEmptyLocatinTable(){
      I.waitForElement(this.tables.myLocationTable,3);
      I.dontSee('No Locations Added Yet');
  },
  checkIsEmptyLocationTable(){
      I.waitForElement(this.tables.myLocationTable,3);
      I.see('No Locations Added Yet');
  },
  checkUpdateButtonVisible(){
    I.waitForElement(this.buttons.editButton,3);
    I.seeElement(this.buttons.editButton);
  },
  checkIsNewLocationAdded(text){
    I.waitForText(text,3);
    I.see(text);
  },
  pressKeyEnter(){
    I.pressKey('Enter')
  }
  

  
}
