var h3 =document.querySelector('h3')
var btn =document.querySelector('button')
var flag = 0

btn.addEventListener('click', function(){
   if(flag == 0){
        h3.innerHTML = 'Freind'
        h3.style.color = 'rgb(66, 255, 76)'
        btn.innerHTML =  'Unfollow'
        flag = 1

    }else{
        h3.innerHTML = 'Stranger'
        h3.style.color = 'red'
        btn.innerHTML =  'Add Freind'
        flag = 0
    }

})