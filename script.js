// arrows will be links
//  the links href will change each time  you press

// we will get all the sections in a list
const linkArr = document.querySelectorAll('.section')
console.log(linkArr)
const linkArrId = [...linkArr].map(section => section.id)
console.log(linkArrId)
const arrowLeft = document.querySelector('#leftArrow')
const arrowRight =  document.querySelector('#rightArrow')

let onstart = () => {
    console.log(linkArrId.indexOf( window.location.href.split("#")[1]) || 0)
    let currentSlide
    initiate = () => {
        currentSlide = linkArrId.indexOf(window.location.href.split("#")[1]) || 0
        currentSlide = currentSlide == -1 ? 0 : currentSlide
        changeSlide(currentSlide)
    }
    initiate()
    onRight = () => {
        
        changeSlide(currentSlide)
        currentSlide = (currentSlide < linkArr.length - 1)? (currentSlide + 1) : currentSlide 
        console.log(currentSlide)
    }
    onLeft = ()=>{
        changeSlide(currentSlide)
        currentSlide = (currentSlide <= 0)?  0 : (currentSlide - 1)
        console.log(currentSlide)
    }
    
    arrowLeft.addEventListener('click',onLeft)
    arrowRight.addEventListener('click',onRight)
    document.addEventListener('keydown', (e) => {
        // left arrooww key
        console.log(e.code)
        if (e.code == "ArrowLeft") {
            onLeft()
            window.location.href = window.location.href.split("#")[0] + '#'+ linkArrId[currentSlide]
        }
        // right arrow key
        else if (e.code == "ArrowRight") {
            onRight()
            window.location.href = window.location.href.split("#")[0] +'#' +linkArrId[currentSlide]
        }
    })
    window.addEventListener('hashchange', initiate)
    window.addEventListener('resize', ()=>{
        a = document.createElement('a')
        a.setAttribute('href', `#${window.location.href.split("#")[1]}`)
        a.click()
    });
    window.addEventListener('load', ()=>{
        a = document.createElement('a')
        a.setAttribute('href', `#${window.location.href.split("#")[1]}`)
        a.click()
    });


}


changeSlide = (currentSlide) => {
    if (currentSlide  == 0){
        
        arrowLeft.setAttribute('href', `#${linkArrId[currentSlide]}`)
        arrowRight.setAttribute('href', `#${linkArrId[currentSlide + 1]}`)
    }
    else if(currentSlide == linkArr.length - 1){
        arrowLeft.setAttribute('href', `#${linkArrId[currentSlide - 1]}`)
        arrowRight.setAttribute('href', `#${linkArrId[currentSlide]}`)
    }
    else{
        arrowLeft.setAttribute('href', `#${linkArrId[currentSlide - 1]}`)
        arrowRight.setAttribute('href', `#${linkArrId[currentSlide + 1]}`)
    }
}

onstart()
window.addEventListener('resize', function(event){
    initiate()
});

// when the functin triggers 

// makes the right arrow href = next section id
// left arrow href = last section id


// presentation = {
//     currentSlide: 0,
//     changeSlied(index = 0) {
//         current = index
//         let slide = $('#imgCont img')
//         image.fadeOut('fast',()=>{
//             image.attr('src', imgSrcArr[index])
//             image.fadeIn('fast')
//         })    
//     },    
//     nextSlide: function(e){
//         this.currentSlide = (this.currentSlide + 1) % linkArr.length

//     },    
//     previousSlide: function(e){
//         this.currentSlide -= 1
//         if (this.currentSlide == -1) this.currentSlide = imgSrcArr.length - 1
//     }    

// }    
