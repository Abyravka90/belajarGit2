function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("fay", 13739471);
var b = new contact("suva", 36875964);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)