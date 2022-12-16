function Contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

function print() {
  console.log(this.name);
  console.log(this.number);
}

var a = new Contact("abiel", 089531570230);
var b = new Contact("andri", 081211848801);
var c = new Contact("SFR", 085894363843);

a.print();
b.print();
c.print();
