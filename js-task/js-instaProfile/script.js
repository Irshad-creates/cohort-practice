    var h3 =document.querySelector('h3')
    var btn =document.querySelector('button')
    var flag = 0

    btn.addEventListener('click', function(){
    if(flag == 0){
            h3.innerHTML = 'Friend'
            h3.style.color = 'rgb(66, 255, 76)'
            btn.innerHTML =  'Unfollow'
            btn.style.backgroundColor = "red";
            flag = 1

        }else{
            h3.innerHTML = 'Stranger'
            h3.style.color = 'red'
            btn.innerHTML =  'Add Friend'
            btn.style.backgroundColor = "rgb(68, 155, 242)";
            flag = 0
        }

    })

    var img =document.querySelector('.img')
    var heart = document.querySelector('.bigheart')
    var captionHeart =document.querySelector('.caption-heart')

    function likeEffect(){
        heart.style.transform = "scale(1)"
        heart.style.opacity = "0.9"
        
        
        setTimeout(function(){
            heart.style.transform = "scale(0)"
            heart.style.opacity = "0"
        },1000)

        captionHeart.classList.remove('ri-heart-3-line');
        captionHeart.classList.add('ri-heart-3-fill');
        captionHeart.style.color ='red'
    }

    var liked =false
    function likePost(){
        if(liked){
            captionHeart.classList.remove("ri-heart-3-fill");
            captionHeart.classList.add("ri-heart-3-line");
            captionHeart.style.color = "white";
            liked = false;
        }else{
            captionHeart.classList.remove("ri-heart-3-line");
            captionHeart.classList.add("ri-heart-3-fill");
            captionHeart.style.color = "red";
            likeEffect();
            liked = true;
        }
    }


    img.addEventListener('dblclick', likePost);
    captionHeart.addEventListener('click', likePost);
