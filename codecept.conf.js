const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// const LoginPage = require('./pages/LoginPage'); // HATA 1: BU SATIR SİLİNDİ

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
 
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://tefo.mobivisor.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/LoginPage.js",
    navbarFragment: "./fragments/NavbarFragment.js",

    
    wifiConfigurationPage: "./pages/WifiConfiguration.js",

    policiesPage: "./pages/PoliciesPage.js",

    myLocationPage: "./pages/myLocationPage.js",
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'mobivisorTestOtomasyonu'
}