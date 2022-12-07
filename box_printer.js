function ultimateExample(number) 
{
    const characters = [" ", "|", "_", "X", "."];

    if(Number.isInteger(number) && number > 0){
        for (x = 0; x < number; x++){
            let row ='';
            for(y = 0; y < number; y++){
                row += characters[Math.floor(Math.random() * number)]
            }
            console.log(row);
        }
    }
    else {
        console.log("You need to enter a positive integer")
    }
}


ultimateExample(5);