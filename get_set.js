var person = {
  first: "david",
  last: "bowie",

  setFirst: function(_first){
    this.first = _first;
  },
  setLast: function(_last){
    this.last = _last;
  },
  getFullName: function(){
    return this.first + ' ' + this.last;
  }
};

console.log(person.getFullName());

person.setFirst("leonard")
person.setLast("cohen")

console.log(person.getFullName());
