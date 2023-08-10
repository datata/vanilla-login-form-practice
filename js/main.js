const password = document.getElementById('password')
const checkbox = document.getElementById('checkbox')
const passwordError = document.getElementById('password-error')


// checkbox.addEventListener('change', () => {
//   checkbox.checked ? password.type = 'text' : password.type = 'password'
// })

checkbox.onchange = (e) => {
  checkbox.checked ? password.type = 'text' : password.type = 'password'
}

password.onblur = (e) => {
  if( password.value.length <= 4) {
    passwordError.innerText= 'Password must be at least 5 characters'
  } else {
    passwordError.innerText= ''
  }
}
