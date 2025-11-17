var main = document.querySelector("main");
var btn = document.querySelector("button");

var imgsArr = [
    "csk-imgs/csk1.jpg",
    "csk-imgs/csk2.jpg",
    "csk-imgs/csk3.jpg",
    "csk-imgs/csk4.jpg",
    "csk-imgs/csk5.jpg",
    "csk-imgs/csk6.jpg",
    "csk-imgs/csk7.jpg",
    "csk-imgs/csk8.jpg",
    "csk-imgs/csk9.jpg",
    "csk-imgs/csk10.jpg",
    "csk-imgs/csk11.jpg",
    "csk-imgs/csk12.jpg",
    "csk-imgs/csk13.jpg",
    "csk-imgs/csk14.jpg",
    "csk-imgs/csk15.jpg",
    "csk-imgs/csk16.jpg",
    "csk-imgs/csk19.jpg",
    "csk-imgs/csk20.jpg",
    "csk-imgs/csk21.jpg",
    "csk-imgs/csk22.jpg",
    "csk-imgs/csk23.jpg",
    "csk-imgs/csk24.jpg",
    "csk-imgs/csk25.jpg",
    "csk-imgs/csk27.jpg",
    "csk-imgs/csk28.jpg",
    "csk-imgs/csk29.jpg",
    "csk-imgs/csk30.jpg",
    "csk-imgs/csk31.jpg",
    "csk-imgs/csk32.jpg",
    "csk-imgs/csk33.jpg",
    "csk-imgs/csk34.jpg",
    "csk-imgs/csk35.jpg"
];

 function imgGenerater() {

    var img = document.createElement("img");

    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    var z = Math.floor(Math.random() * 180);
    var size = Math.floor(Math.random() * 120) + 80; // 80-200px

    var randomIndex = Math.floor(Math.random() * imgsArr.length);
    img.src = imgsArr[randomIndex];

    img.style.height = size + "px";
    img.style.width = size + "px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "15px";

    img.style.position = "absolute";
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.rotate = z + "deg";

    img.style.boxShadow = "0px 0px 20px yellow";

    main.appendChild(img);
};



var interval;
var running = false;

btn.addEventListener('click', function(){

    if(!running){
        interval = setInterval(imgGenerater, 200);
        running = true;
        btn.innerHTML = "Stop";
    } else {
        clearInterval(interval);
        running = false;
        btn.innerHTML = "Generate";
    }

});
