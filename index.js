
//WHAT is Event Bubbling- 
//jispe click kroge wo elemrnt par event riase hoga,aur
// event listener na milne par event element k parent par listener
// raise dhudhega,wha pr bhi naa milne pr event parent k 
//parent k parent par listener dhundhega


// why we are using EVENT BUBBLING?
// hamre pass 300 bubbles hai tou hr pe listner nhi lgaskte isliye bubble
// k parent pr listner lga denge wo tou 1 hee hai 

var score=0;
function increaseScore(){
    score +=10;
    document.querySelector("#score_count").innerHTML=score;
}

var hitrn=0;
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitinternal").textContent=hitrn;
}


function makeBubble(){
    var value="";
    for(var i=1;i<=290;i++)
        {
            var rn=Math.floor(Math.random()*10)
            value += `<div class="bubble">${rn}</div>`
        }   
        document.querySelector("#pbtm").innerHTML=value;
    }
    
    var timer=30;
function runtime()
    {
        var timerint = setInterval(function(){
            if(timer>0)
                {
                    timer--;
                    document.querySelector("#timeinterval").innerHTML=timer;
                }
                else{
                    clearInterval(timerint);
                    document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
                }
        },1000);
    }
 
    //we want to find the bubble jispe click huha hai
    // -->target is used to access the current clicked element 
    // details.target gives the entire bubble details i.e 
    //<div class="bubble">2</div> but we want only text , but we are not
    // getting int we are getting the string 
 
    document.querySelector("#pbtm")
   .addEventListener("click",function(details){
      clickedNumber= Number(details.target.textContent);
    //    alert("chal rha hai");

    if(clickedNumber===hitrn)
        {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });

    getNewHit();
    makeBubble();
    runtime();
    // increaseScore();
    

