var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

var buttonArray = [button1, button2, button3, button4];

var answer = "TobbeP";
var score;
var questionNumber = 0;
var questionList = ["asd", "Vad heter Tobbe-Ps favorit hockey-lag?", "asfffffffffd", "FIAKASSAAS", "asaaaad"];
for(var i = 0; i < buttonArray.length; i++)
{
buttonArray[i].addEventListener("click", function()
{
    if(questionNumber == 0)
    {
    var tempq = questionList[questionNumber];
    answer = "Fisk";
    button1.innerHTML = "TobbeP";
    button2.innerHTML = "Fiske";
    button3.innerHTML = "Hejhej";
    button4.innerHTML = "CsNoob";
    document.getElementById("question").innerHTML = tempq;
    questionNumber++;
    }
    
        if(questionNumber == 1)
    {
    
    var tempq = questionList[questionNumber];
    answer = "Fisk";
    button1.innerHTML = "TobbeP";
    button2.innerHTML = "Fiske";
    button3.innerHTML = "Hejhej";
    button4.innerHTML = "CsNoob";
    document.getElementById("question").innerHTML = tempq;
    questionNumber++;
    }
    
    if(questionNumber == 2)
    { 
    var tempq = questionList[questionNumber];
    answer = "Fisk";
    button1.innerHTML = "TobbeP";
    button2.innerHTML = "Fiske";
    button3.innerHTML = "Hejhej";
    button4.innerHTML = "CsNoob";
    document.getElementById("question").innerHTML = tempq;
    questionNumber++;
    }

    
        if(questionNumber == 3)
    {
   if(answer == button1.value)
   {
        score++;
       questionNumber++;
       
   }
    else
    {
        questionNumber++;
    }
    
    var tempq = questionList[questionNumber];
    answer = "Fisk";
    button1.innerHTML = "TobbeP";
    button2.innerHTML = "Fiske";
    button3.innerHTML = "Hejhej";
    button4.innerHTML = "CsNoob";
    document.getElementById("question").innerHTML = tempq;
    }
    
        if(questionNumber == 4)
    {
   if(answer == button1.value)
   {
        score++;
       questionNumber++;
       
   }
    else
    {
        questionNumber++;
    }
    
    var tempq = questionList[questionNumber];
    answer = "Fisk";
    button1.innerHTML = "TobbeP";
    button2.innerHTML = "Fiske";
    button3.innerHTML = "Hejhej";
    button4.innerHTML = "CsNoob";
    document.getElementById("question").innerHTML = tempq;
    }
})
}
console.log(answer);
console.log(questionNumber);
console.log(answer);