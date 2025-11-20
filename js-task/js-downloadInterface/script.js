var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
var num = 50 + Math.floor(Math.random()*50)

var grow = 0
btn.addEventListener('click', function(){
    
    var  int =setInterval(() => {
        grow++
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
        btn.style.pointerEvents = 'none'
        
    }, num);
    
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        
    }, num*100);
    console.log(`will be downloaded in ${num/10} seconds`)

})