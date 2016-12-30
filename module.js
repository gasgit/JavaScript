// module

var superModule = (function(){
  var email = 'mymail@web.com';
  var password = 'guessme';

  function getMail(){
    console.log(email);
  }

  function getPassword(){
    console.log(password);
  }

  return {
    getMail: getMail,
    getPassword: getPassword
  };

})();


superModule.getMail();

superModule.getPassword();
