// ===========================
// ELEMENTOS
// ===========================

// MANAGE

alert('ola mundo')

function defineVariables() {
    // VARIÁVEIS HEADER
    const imgMainLogo = document.querySelector('#imgMainLogo')
    const imgMainUser = document.querySelector('#imgMainUser')
    const imgMainConfig = document.querySelector('#imgMainConfig')
}


function changeTheme() {
    alert('ola mundo')
    if(window.matchMedia('(prefers-color-scheme: light)').matches) {
        defineVariables()
        imgMainLogo.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainUser.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainConfig.style.filter = 'grayscale(100%) brightness(0%)'
    } else {
        
    }
}

export {
    changeTheme, defineVariables
}