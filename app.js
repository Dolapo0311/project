var weight = document.querySelector("#weight");
var height = document.querySelector("#height");
var btn = document.querySelector("button");
var out = document.querySelector("h2");
var out2 = document.querySelector("h1");

btn.addEventListener("click",function(){
    var x = Math.round(weight.value/(height.value * height.value));
    if(x <18.5){
out2.innerHTML = "Your BMI is Underweight"
    }
    else if(x >= 18.5 && x <= 24.9){
out2.innerHTML = " Your BMI is normal"
    }
    else if(x >= 25 && x <= 39.9){
out2.innerHTML = " Your BMI is Overweight"

    }
    else{
        out2.innerHTML = "Your BMI is obese, you need to contact your doctor for medical checkup!"
    }
    out.innerHTML =x ;
})