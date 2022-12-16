function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(){
        console(this.name+": "+this.number);

    }
}
var a = new contact("David", 12347);
var b = new contact("Amy",899757589);
a.print();
b.print();