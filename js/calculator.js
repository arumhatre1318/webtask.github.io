function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

var inputData = document.querySelector("#input");
var equationData = document.querySelector("#equation");
var historyDiv=document.querySelector(".history");
var ansHistory=[];
var equationHistory=[];

function getNum(val)
{
    if (inputData.value == "0")
    {
       inputData.value = val; // taking single no 
    }

    else
    {
        inputData.value += val;
    }
}

function ans()

{  
    var equation;
    equation=inputData.value+" = ";
    equationData.value=equation;
    equationHistory.push(equation);
    ansHistory.push(eval(inputData.value));
    inputData.value=eval(inputData.value);
    showHistory();
}

function showHistory()
{
    historyDiv.innerHTML="";
    for(var i=0;i<equationHistory.length;i++)
    {
        // console.log(equationHistory[i]);
        // console.log(ansHistory[i]);
        historyDiv.innerHTML+="<div class='historyDiv'><p style='margin-right:5px;'>"+equationHistory[i]+"</p><p style='margin-right:5px;'>"+ansHistory[i]+"</p></div>";
        
    }
}


function reset()
{
    inputData.value = "0";  // reset value onclick c
    equationData.value = ""; //
}

function backSpace()
{
    if(inputData.value.length>1)
        inputData.value=inputData.value.slice(0,-1);
    else
        inputData.value=0;
}

function clearHistory()
{
    var state=confirm(" Are You Sure Want To Delete History ? ");
    if(state)
    {
        historyDiv.innerHTML="";
        ansHistory=[];
        equationHistory=[];
    }
}
