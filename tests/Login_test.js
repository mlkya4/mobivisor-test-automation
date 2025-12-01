Feature('Login');
const username = 'admin' ;
const password = 'admin' ;
Before(({I})=>{
    I.amOnPage('/')
})

Scenario(
    "The user should not be able to sig in with the wrong password",  
    ({ I,loginPage,navbarFragment}) => {
        loginPage.fillUsernameField(username);
        loginPage.fillPasswordField('wrong password');
        loginPage.clickSignInButton();
        navbarFragment.dontSeeAuthenticatedUser();
       //npx codeceptjs run tests/Login_test.js


});
Scenario(
    "Should not sign in with the wrong username",
    ({I,loginPage,navbarFragment}) =>{
        loginPage.fillUsernameField('wrong username')
        loginPage.fillPasswordField(password)
        loginPage.clickSignInButton();
        navbarFragment.dontSeeAuthenticatedUser();
        

    }
);
Scenario(
    "The user should be able to sign in with the correct username and password.",
    ({I,loginPage,navbarFragment})=>{
        loginPage.fillUsernameField(username);
        loginPage.fillPasswordField(password);
        loginPage.clickSignInButton();
        navbarFragment.SeeAuthenticatedUser();

    }
);
