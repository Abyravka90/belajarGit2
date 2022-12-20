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

var a = new contact("Rhodesia", 12345);
var b = new contact("Tatang", 987654321)
var c = new contact("Imran Zakhaev", 921387654321)
a.print();
b.print();
c.print();