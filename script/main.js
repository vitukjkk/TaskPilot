// ===========================
// ELEMENTOS
// ===========================

// MANAGE

function defineVariables() {
    // ===============================
    // HEADER
    // ===============================
    const header = document.querySelector('#header')
    // IMG
    const imgMainLogo = document.querySelector('#imgMainLogo')
    const imgMainUser = document.querySelector('#imgMainUser')
    const imgMainConfig = document.querySelector('#imgMainConfig')
    const imgMainPages = document.querySelector('#imgMainPages')
    const imgMainThirdSide = document.querySelector('#imgMainFirstSide')

    // INPUT 
    const inputMainSearch = document.querySelector('#inputMainSearch')
    const inputMainFeedback = document.querySelector('#inputMainFeedback')

    // BUTTON
    const buttonSendFeedback = document.querySelector('#buttonSendFeedback')

    // ===============================
    // MAIN
    // ===============================
    const h1Principios = document.querySelector('#h1Principios')
}

function setElements() {
    defineVariables()
}

function changeTheme() {
    if(window.matchMedia('(prefers-color-scheme: light)').matches) {
        defineVariables()
        
        document.body.style.backgroundColor = 'black'

        // HEADER - LIGHT
        // IMG
        imgMainLogo.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainUser.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainConfig.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainPages.style.filter = 'grayscale(100%) brightness(0%)'
        imgMainThirdSide.style.filter = 'invert(1)'

        // INPUT
        inputMainSearch.style.backgroundColor = 'black'
        inputMainSearch.style.color = 'white'
        inputMainFeedback.style.backgroundColor = 'white'
        inputMainFeedback.style.color = 'black'

        // BUTTON
        buttonSendFeedback.style.backgroundColor = 'white'
        buttonSendFeedback.style.color = 'black'
    } else {
        
    }
}

function changeMainPrincipios() {
    defineVariables()
    let counter = 0
    let principios = ['crie.', 'lembre.', 'inove...']

    setInterval(() => {
        
        h1Principios.textContent = principios[counter]
        counter++
        if(counter === 3) return counter = 0
    }, 1500)
}

export {
    changeTheme, defineVariables, setElements, changeMainPrincipios
}