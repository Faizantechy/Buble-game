




let timer=8;


function runTimer(){


   

    

     setInterval(function(){

        if(timer>0){

        timer--;
        document.querySelector('.timer').innerHTML=timer;

        } else{

document.querySelector('.pbtm').innerHTML="<h1> Game Over!</h1>";
        }

    },1000)

}

    



runTimer();






function bubble(){

    let clutter='';

for(let i=1; i<=158; i++){

    let rn= Math.floor(Math.random()*10)

    clutter+= `<div class="bubble"> ${rn} </div>`
}

document.querySelector('.pbtm').innerHTML=clutter;
}

bubble();




var hit=1;

function newHit(){

    hit=Math.floor(Math.random()*10)
    document.querySelector(`.hit`).innerHTML=hit;


}


newHit();



var Score=0;

function increaseScore(){

    Score+=10;
    document.querySelector('.score').innerHTML=Score;

}

document.querySelector('.pbtm').addEventListener('click',function(dets){

    var clickNum=(Number(dets.target.textContent));


    if(clickNum==hit){

        increaseScore();
        newHit();
        bubble();
    }

})

