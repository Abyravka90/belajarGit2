function contact(name, number) 
{
    this.name = name;
    this.number = number;
    this.print = print;
}

function print()
{
    console.log(this.name + ": " + this.number);
}

var a = new contact("didi", 77777);
var b = new contact("abiel", 090007)
var c = new contact("romi", 1234578900)
a.print();
b.print();
c.print();
