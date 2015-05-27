var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var score = 0;
var questionNumber = 0;
var answer = "JA";
button1.addEventListener("click", function (){
    
    if(questionNumber == 0)
    {

            document.getElementById("question").innerHTML = "Vet Leiny hur man smokear CT-spawn på Mirran som T?";
            document.getElementById("points").innerHTML = score = score + 1;
    }

        if(questionNumber == 1)
    {
        
            document.getElementById("points").innerHTML = score = score + 1;
            document.getElementById("question").innerHTML = "Är vår JavaScript-kod galet snygg?";
    }
    
    if(questionNumber == 2)
    {
            document.getElementById("points").innerHTML = score = score + 1;
        
    }
        console.log(questionNumber);
    questionNumber = questionNumber + 1;
    
        if(questionNumber > 3)
{
     var el = document.getElementById("bigAssRuta");
    el.classList.remove("displayNone");
    el.style.opacity = "1";
}
})

button2.addEventListener("click", function (){
    if(questionNumber == 0)
    {
            document.getElementById("points").innerHTML = score;
           document.getElementById("question").innerHTML = "Vet Leiny hur man smokear CT-spawn på Mirran som T?";
    }
        if(questionNumber == 1)
    {
            document.getElementById("points").innerHTML = score;
             document.getElementById("question").innerHTML = "Är vår JavaScript-kod galet snygg?";
        }
        
        if(questionNumber == 2)
    {
            document.getElementById("points").innerHTML = score;
    }
    
    questionNumber = questionNumber + 1;
        console.log(questionNumber);
    
    if(questionNumber > 3)
{
     var el = document.getElementById("bigAssRuta");
    el.classList.remove("displayNone");
    
}
})
console.log(questionNumber);

  

    