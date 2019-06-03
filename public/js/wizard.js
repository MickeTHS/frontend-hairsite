let currentStep = 0
const steps = document.getElementsByClassName('step')
const stepCounter = document.querySelector('.wizard h1')
const popup = document.getElementById('popup')

const displayStep = index => {
  stepCounter.textContent = `Step ${currentStep + 1}/${steps.length}`
  steps[index].style.display = "block"
}

const nextStep = () => {
  if(!validate()) return
  steps[currentStep].style.display = "none"
  currentStep++
  if (currentStep >= steps.length) {
    // submit form
    return console.log('done!')
  }
  displayStep(currentStep)
}

const validate = () => {
  let valid = true
  const inputs = steps[currentStep].getElementsByTagName('input')
  for (let i = 0; i < inputs.length; i++){
    if (!inputs[i].value.length) {
      valid = false
      inputs[i].classList.add("invalid")
      popup.style.display = "block"
      setTimeout(() => {
        popup.style.display = "none"
      }, 2000)
    }
  }
  return valid
}

displayStep(currentStep)

document.querySelectorAll(".wizard .step .btn").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault()
    nextStep()
  })
})

// color themes

const themes = document.querySelectorAll('.theme span')
themes.forEach(theme => {
  theme.addEventListener('click', () => {
    themes.forEach(item =>  {
      item.classList.remove('active')
    })
    theme.classList.add('active')
  })
})