const imgMainLogo = document.querySelector('#imgMainLogo')

window.onload = () => {

    if(window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.querySelector('#imgMainLogo').style.filter = 'grayscale(100%) brightness(0%)'
    } else {
        
    }
}