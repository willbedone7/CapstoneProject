// selects all elements in the document within the class panel

const panels = document.querySelectorAll('.panel')

// for each element in the panel class, as stored in the 
// panels variable, it will listen for a click. 
// it will remove active from the other elements
// in class, and will add active to the class that was clicked

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// this will take active off the rest of the classes 
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}