
var depth = 5*100;
    
i = 0;

for (; depth > 0;) {
    i++;
    
    depth -= 50
    if (depth > 0) {
        depth += 15
    }
}
console.log(i);