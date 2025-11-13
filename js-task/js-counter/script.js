var inc =document.querySelector('#increase')
var dec =document.querySelector('#decrease')
var h1 =document.querySelector('h1')
var reset =document.querySelector('#reset')

var a = 0

inc.addEventListener('click',function(){
    a++;
    h1.innerHTML =a 
})

dec.addEventListener('click', function(){
    a--;
    h1.innerHTML =a 
})

reset.addEventListener('click', function(){
    a =0;
    h1.innerHTML = a
})