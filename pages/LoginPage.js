const { I } = inject(); 
module.exports = {
  fields:{
    usernameField : '#username' ,
    passwordField : '#password',
},
buttons : {
  signInButton : {xpath : "//button[@class='btn bg-color-navbar btn-sm form-control' or @type ='submit']"}
},
fillUsernameField(username){
  I.waitForElement(this.fields.usernameField,3);
  I.fillField(this.fields.usernameField,username);
},
fillPasswordField(password){
  I.waitForElement(this.fields.passwordField,3);
  I.fillField(this.fields.passwordField,password);
},
clickSignInButton(){
    I.waitForElement(this.buttons.signInButton,3);
    I.forceClick(this.buttons.signInButton)
},

  
}
