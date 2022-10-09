var inputData=document.querySelector("#input");
var equationData=document.querySelector("#equation");
var ansHistory=[];
var equationHistory=[];
var historyDiv=document.querySelector(".historybox");
var flag=true;
var power=true;
function getNum(val)
{
    if (inputData.value==0)
    {
        inputData.value=val;
    }
    else{
        inputData.value+=val;
    }
}
function answer()
{
    var equation=inputData.value+"=";
    equationData.value=equation;
    ansHistory.push(equation);
    equationHistory.push(eval(inputData.value));
    inputData.value=eval(inputData.value);
    getHistory();
}
function getHistory()
{   
    historyDiv.innerHTML="";
    for(i=0;i<ansHistory.length;i++)
    {
        historyDiv.innerHTML+="<div class='historycontent'><div>"+ansHistory[i]+"</div><div>"+equationHistory[i]+"</div></div>";
    }
}
function reset()
{
    inputData.value="0";
    equationData.value="";
}
function showHideHistory()
{
    if (flag)
    {
        document.querySelector(".main").style.display="block";
        document.querySelector(".calculatorGrid").style.display="none";
        document.querySelector(".history").style.color="#a161fc";
        document.querySelector(".historybox").style.display="block";
        document.querySelector(".switch").style.visibility="hidden";
    }
    else
    {
        document.querySelector(".main").style.display="none";
        document.querySelector(".calculatorGrid").style.display="block";
        document.querySelector(".history").style.color="#9d9d9d";
        document.querySelector(".historybox").style.display="none";
        document.querySelector(".switch").style.visibility="visible";
    }
    flag=!flag;
}
function clearHistory()
{
    var state=confirm("Are you sure you want to delete history?");
    if (state)
    {
        historyDiv.innerHTML="";
        ansHistory=[];
        equationHistory=[];
    }
}
function backspace()
{
    if (inputData.value.length>1)
    {
        inputData.value=inputData.value.slice(0,-1);
    }
    else
    {
        inputData.value=0;
    }
}
function onOff()
{
    var calculatorGridData=document.querySelector(".calculatorGrid");
    var historyData=document.querySelector(".history");
    if (power)
    {
        inputData.value="0";
        equationData.value="";
        calculatorGridData.style.display="block";
        historyData.style.visibility="visible";
        document.querySelector(".switch").style.color="#a161fc";
    }
    else
    {
        inputData.value="";
        equationData.value="";
        calculatorGridData.style.display="none";
        historyData.style.visibility="hidden";
        document.querySelector(".switch").style.color="#9d9d9d";
    }
    power=!power;
}