function contact(name, number) {
    this.name = name;
    this.number = number;
}

var d = new contact("mark", 1234789);
var h = new contact("chan", 8765430);

console.log(d.name+": "+d.number)
console.log(h.name+": "+h.number)