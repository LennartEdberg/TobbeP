var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
var answer = "";
var score;
var questionNumber = 0;
var questionList = ["", "", "", "", ""];


button1.addEventListener("click", function()
{
   if(answer = button1.value)
   {
        score++;
       questionNumber++;
   }
    else
    {
        questionNumber++;
    }
    
})


button2.addEventListener("click", function()
{
   if(answer = button2.value)
   {
        score++;
       questionNumber++;
   }
    else
    {
        questionNumber++;
    }
    
})


button3.addEventListener("click", function()
{
   if(answer = button3.value)
   {
        score++;
       questionNumber++;
   }
    else
    {
        questionNumber++;
    }
    
})


button4.addEventListener("click", function()
{
   if(answer = button4.value)
   {
        score++;
       questionNumber++;
   }
    else
    {
        questionNumber++;
    }
    
})


if(questionNumber = 4)
{
    answer = "TobbeP";
    button1.value = "TobbeP";
    button2.value = "Fiske";
    button3.value = "Hejhej";
    button4.value = "CsNoob";
    document.getElementById("question").value = "Test";
}

if(questionNumber = 1)
{
   answer = "TobbeP2";
}

if(questionNumber = 2)
{
   answer = "TobbeP3";
}

if(questionNumber = 3)
{
   answer = "TobbeP4";
}

if(questionNumber = 4)
{
   answer = "TobbeP5";
}
console.log(questionNumber);
console.log(answer);