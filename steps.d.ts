/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/LoginPage.js');
type navbarFragment = typeof import('./fragments/NavbarFragment.js');
type wifiConfigurationPage = typeof import('./pages/WifiConfiguration.js');
type policiesPage = typeof import('./pages/PoliciesPage.js');
type myLocationPage = typeof import('./pages/myLocationPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, navbarFragment: navbarFragment, wifiConfigurationPage: wifiConfigurationPage, policiesPage: policiesPage, myLocationPage: myLocationPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
