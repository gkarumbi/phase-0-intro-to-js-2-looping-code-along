// Code your solutions in this file

const  gifts = ["teddy bear","drone", "doll"];

function wrapGift(gift){
    console.log(`Wrapped ${gift} and added a bow!`);



}


wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[1]);


for(let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;

}

function wrapGifts(gifts){
    for(let i=0; i<gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow`);
    //debugger;


    }

    return gifts
}



function writeCards(names,event){
    const newArray =[];
    for(let i=0;i<names.length; i++){
       // console.log(`Thank you ${names[i]},${event}`);
        newArray.push(`Thank you ${names[i]},${event}`);
        

    }
    return newArray
}

wrapGifts(gifts)

writeCards(["Ada","brendan","Ali"],"birthday")

console.log(writeCards(["Ada","brendan","Ali"],"birthday"))


function countDown(startPosition){
    while(0<startPosition){
        console.log(startPosition--);

    }
}

countDown(10);