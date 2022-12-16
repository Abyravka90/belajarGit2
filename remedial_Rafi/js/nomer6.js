function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("rafi", 12345);
var b = new contact("raffael", 987654321);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)