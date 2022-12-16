function contact(name, number) {
  this.name = name;
  this.number = number;
}

var a = new contact("Kyle", 8654566);
var b = new contact("Jun", 4792750);

console.log(a.name + ": " + a.number);
console.log(b.name + ": " + b.number);
