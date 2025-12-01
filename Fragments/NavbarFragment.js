const { I } = inject();

module.exports = {

  dontSeeAuthenticatedUser(){
    
    I.dontSeeElement('#user-menu')
  },
  SeeAuthenticatedUser(){
    I.waitForElement('#user-menu',3);
    I.seeElement('#user-menu');
  },
  clickPoliciesMenu(){
    I.waitForElement('#Policies_MAIN_MENU_6',3);
    I.forceClick('#Policies_MAIN_MENU_6');

  },
  clickWifiConfig(){
    I.waitForElement('#Policieswificonfigurations_SUB_MENU');
    I.forceClick('#Policieswificonfigurations_SUB_MENU');
  },
  clickPolicies(){
    I.waitForElement('#Policiespolicies_SUB_MENU',3);
    I.forceClick('#Policiespolicies_SUB_MENU');
  },
  clickMyLocation(){
    I.waitForText('My Locations',3);
    I.click('My Locations');
  }
}
