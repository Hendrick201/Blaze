var number;
var color;
function GetResult()
{
    number = Math.floor(Math.random() * 15) +1;
    var div0 = document.getElementsByClassName("nextNumberProb")[0];
    var div1 = document.createElement("div");
    if(number <= 7)
    {
        div1.className = "results-red";
    }
    if((number >= 8) && (number < 15))
    {
        div1.className = "results-black";
    }
    if(number == 15)
    {
        div1.className = "results-white";
    }
    var div2 = document.createElement("div");
    div2.className = "number";
    div2.textContent = number + '';
    var div3 = document.createElement("div");
    div3.className = "border";

    div2.appendChild(div3);
    div1.appendChild(div2);
    div0.appendChild(div1);
}
function ResultListMove()
{
    if(document.getElementsByClassName("lii")[0].childElementCount >= 10)
    {
     var newLi = document.createElement("li");
     newLi.className = "lii";
     document.getElementsByClassName("ull")[0].insertBefore(newLi, document.getElementsByClassName("lii")[0]);
    }
    
    if(number <= 7)
    {
       
        document.getElementsByClassName("lii")[0].appendChild(document.getElementsByClassName("results-red")[0]);
    }
    if((number >= 8) && (number < 15))
    {
        
        document.getElementsByClassName("lii")[0].appendChild(document.getElementsByClassName("results-black")[0]);
    }
    if(number == 15)
    {
      
        document.getElementsByClassName("lii")[0].appendChild(document.getElementsByClassName("results-white")[0]);
    }

}
var inverval_timer;

//Time in milliseconds [1 second = 1000 milliseconds ]    
inverval_timer = setInterval(function() { 
    ResultListMove()
    GetResult()
}, 5000);
    
//IF you want to stop above timer
function stop_timer() {
    clearInterval(inverval_timer); 
}

function getIframeContent(frameId) {
    var frameObj = 
        document.getElementById(frameId);

    var frameContent = frameObj.
        contentWindow.document.body.innerHTML;
        
    alert("frame content : " + frameContent);
}
