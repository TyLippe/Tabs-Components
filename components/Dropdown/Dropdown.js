class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = element.querySelector('.dropdown-button')
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = element.querySelector('.dropdown-content')

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent()
      // this.buttonColor()
      event.stopPropagation()
    }) 
    window.addEventListener('click', () => {
      // this.buttonColor()
      this.content.classList.add('dropdown-hidden')
    })
  }
    toggleContent() {
     // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden')
  }
  // buttonColor () {
  //   if (this.button.style.background === 'white') {
  //     this.button.style.background = '#931D25'
  //     this.button.style.color = 'white'
  //     this.button.style.border = '2.5px solid white'
  //   }  
  //   else {
  //     this.button.style.background = 'white'
  //     this.button.style.color = '#931D25'
  //   }  
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));