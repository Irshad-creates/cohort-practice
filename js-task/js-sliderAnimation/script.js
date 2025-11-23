var main = document.querySelector('main')
var elem = document.querySelectorAll('.box')
// var elem1Imange = document.querySelector('#elem1 img')

// elem1.addEventListener('mousemove', function(e){
//     elem1Imange.style.left = e.x + 'px'
//     elem1Imange.style.top = e.y + 'px'
// })
// elem1.addEventListener('mouseenter', function(e){
//     elem1Imange.style.opacity = 1
// })
// elem1.addEventListener('mouseleave', function(e){
//     elem1Imange.style.opacity = 0
// })
elem.forEach(function(val){
    var vimg =val.querySelector('img')

    val.addEventListener('mousemove', function(e){
        vimg.style.left = e.offsetX + 'px'
        vimg.style.top = e.offsetY + 'px'
    })

    val.addEventListener('mouseenter', function(e){
        vimg.style.opacity = 1
    })
    val.addEventListener('mouseleave', function(e){
        vimg.style.opacity = 0
    })
})