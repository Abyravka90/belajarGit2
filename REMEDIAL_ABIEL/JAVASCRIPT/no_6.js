/** @format */

function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

function print() {
  console.log(this.name + ": " + this.number);
}

var a = new contact("didi", 12345);
var b = new contact("abiel", 987654321);
var c = new contact("romi", 921387654321);
a.print();
b.print();
c.print();
