// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    loginAsAdmin: function(){
      this.amOnPage('/');
      this.fillField('#username', 'admin');
      this.fillField('#password', 'testpass');
      this.forceClick({xpath : "//button[@class='btn bg-color-navbar btn-sm form-control' or @type ='submit']"});
      
    }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
