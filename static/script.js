window.onload = function() { 
    sizeHeader()
    
    window.addEventListener('resize', sizeHeader, false)
}


function sizeHeader() {
    // Sets the header height (CSS `height: 100%;` doesn't work if the body's height isn't set to 100%)
    
    var header = document.getElementsByTagName('header')[0]
    if (window.innerHeight > window.innerWidth) {
        // Changes some image properties, so that it renders nicer
        var img = document.getElementById('banner').children[0]
        img.style.height = "100%"
        img.style.width = "auto"
        img.style.marginLeft = "-40%"
        
        header.style.height = (window.innerHeight * .75) + "px"
    } else {
       header.style.height = (window.innerHeight * 1) + "px"
    }
}