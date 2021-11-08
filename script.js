let member=document.getElementById("mem");
let mon=document.getElementById("mon");
let today_member=0;
function count_maker(num,element){

setTimeout(() => {
    
let called=setInterval(() => {
    if(today_member>num){
        clearInterval(called)
    }
    else{
        element.innerText=today_member;
        today_member++
    }
}, 20);

}, 100);

    
}

count_maker(500,member);
count_maker(1234,mon);