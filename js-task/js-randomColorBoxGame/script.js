var main =document.querySelector('main')
var btn =document.querySelector('button')

// btn.addEventListener('click',function(){

//     var  div =document.createElement('div')

//     var x = Math.floor(Math.random()*100)
//     var y = Math.floor(Math.random()*100)
//     var z = Math.floor(Math.random()*360)
//     var c1 = Math.floor(Math.random()*266)
//     var c2 = Math.floor(Math.random()*266)
//     var c3 = Math.floor(Math.random()*266)
    
//     // div.innerHTML = 'div'
//     div.style.height = '100px'
//     div.style.width = '100px'
//     div.style.backgroundColor = `rgb(${c1},${c2} ,${c3})`
//     div.style.boxShadow = `0 0 25px rgb(${c1}, ${c2}, ${c3})`;


//     div.style.position = 'absolute'
//     div.style.left = x+'%'
//     div.style.top = y+'%'
//     div.style.rotate = z+'deg'

//     main.appendChild(div)
    
// })


function generateBox(){

    var div = document.createElement('div');

    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    var z = Math.floor(Math.random() * 360);

    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.position = 'absolute';
    div.style.left = x + '%';
    div.style.top = y + '%';
    div.style.rotate = z + 'deg';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.boxShadow = `0 0 25px rgb(${c1}, ${c2}, ${c3})`;

    main.appendChild(div);
}


var interval;
var running = false;

btn.addEventListener('click', function(){

    if(!running){
        interval = setInterval(generateBox, 100);
        running = true;
        btn.innerHTML = "Stop";
    } else {
        clearInterval(interval);
        running = false;
        btn.innerHTML = "Generate";
    }

});
