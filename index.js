function calculateFunction(){
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    if((weight === "" || isNaN(weight)) || (height === "" || isNaN(height))){
        return document.querySelector("h3").innerHTML="You should enter your values.";
    }
 
    else{
        if(weight>=30 && weight<=500 && height>=100 && height<=300){
            var bmi = (weight/(height * height)).toFixed(2);
        var interpretation;
        if(bmi>24.9){
            interpretation =("Your BMI is "+bmi+", so you are overweight.");
        }
        else if(bmi>=18.5 && bmi<=24.9){
            interpretation =("Your BMI is "+bmi+", so you have a normal weight.");
        }
        else{
            interpretation =("Your BMI is "+bmi+", so you are underweight.");
        }
 
        return document.querySelector("h3").innerHTML=interpretation;

        }

        else{
            return document.querySelector("h3").innerHTML="Invalid values.";
        }
        
    }


}



