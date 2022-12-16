function contact(name, number){
    this.name = name;
    this.number = number;
    this.print = print;
}

function print(){
    console.log('Nama: '+this.name+'\nNumber: '+this.number+'\n')
}

var a = new contact('Romi', '0858');
var b = new contact('Reza', '0821');
var c = new contact('Jeka', '0869');

a.print();
b.print();
c.print();