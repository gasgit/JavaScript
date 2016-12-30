function StarFactory(){}

StarFactory.prototype.info = function(){
  console.log("This star has " + this.albums + " albums and " + this.singles + " singles");
};

StarFactory.make = function(type){
  var constr = type;
  var star;
  StarFactory[constr].prototype = new StarFactory();
  star = new StarFactory[constr]();
  return star;

};

StarFactory.Legend = function(){
  this.albums = 100;
  this.singles = 1000;

};

StarFactory.Current = function(){
  this.albums = 50;
  this.singles = 25;
};

StarFactory.UpComing = function(){
  this.albums = 0;
  this.singles = 10;
};

var prince = StarFactory.make('Legend');

prince.info();
