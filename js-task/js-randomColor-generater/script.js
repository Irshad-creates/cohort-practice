var div = document.querySelector('#color')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    c1 =Math.floor(Math.random()*255)
    c2 =Math.floor(Math.random()*255)
    c3 =Math.floor(Math.random()*255)

    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    
})

