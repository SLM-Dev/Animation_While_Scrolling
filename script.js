const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
    
    // Once it is true, soon top next box trigger bottom point its going to come in
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {

            // if not true it will remove the class, it will remove the blocks
            box.classList.remove('show')
        }

    })
}



// puts it into an array node list