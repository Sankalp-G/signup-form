let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  let passwd = document.querySelector('#password')
  let confirm = document.querySelector('#pass_confirm')

  if (passwd.value != confirm.value) {
    passwd.setCustomValidity("* Passwords do not match")
    confirm.setCustomValidity("* Passwords do not match")
  } else {
    passwd.setCustomValidity("")
    confirm.setCustomValidity("")
    form.reset()
  }
})