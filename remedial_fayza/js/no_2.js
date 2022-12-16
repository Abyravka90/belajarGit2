var dalem = 500;
var manjat= 50;
var kepeleset = 15;
var hari = 0;
var progress = 0
    while(progress<=dalem){
        hari = hari + 1;
        progress = progress + manjat;
        if(progress<dalem){
            progress = progress - kepeleset;
        }else{
            break;
        }
    
    console.log("Hari ke-", hari, "=", progress)
    }
    console.log("Hari ke-", hari, "=", progress)