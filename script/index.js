window.onload = () => {
    if(window.matchMedia('(prefers-color-scheme: light)').matches) {
        defineVariables()
        imgMainLogo.style.filter = 'grayscale(100%) brightness(0%)'
    } else {
        
    }
}

// FUNCTIONS

function defineVariables() {
    const imgMainLogo = document.querySelector('#imgMainLogo')
}