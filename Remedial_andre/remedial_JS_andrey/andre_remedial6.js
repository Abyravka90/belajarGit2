function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("didi", 71287);
var b = new contact("yanto", 7386358189);

console.log(a.name+": "+a.number)
console.log(b.name+": "+b.number)