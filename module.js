// module

var superModule = (function(){
  var secret = 'mysecretcode';
  var password = 12345;

  function getSecret(){
    console.log(secret);
  }

  function getPassword(){
    console.log(password);
  }

  return {
    getSecret: getSecret,
    getPassword: getPassword
  };

})();


superModule.getSecret();

superModule.getPassword();
