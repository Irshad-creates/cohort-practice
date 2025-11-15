var div =document.querySelector('.bulb')
var btn =document.querySelector('button')
var flag = 0 

btn.addEventListener('click', function(){
    
    if(flag == 0){   
        div.style.backgroundColor = "yellow"
        btn.innerHTML = "OFF"
        flag = 1
    }else{
        div.style.backgroundColor = "whitesmoke"
        btn.innerHTML = "ON"
        flag = 0
    }
})