const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let validate = false
let passwordsMatch = false

function validateForm() {
    validate = form.checkValidity()
    if (!validate) {
        message.textContent = 'Please fill out all fields'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return
    }

    if (password1El.value === password2El.value) {
        passwordsMatch = true
        password1El.style.borderColor = 'green'
        password2El.style.borderColor = 'green'
    } else {
        passwordsMatch = false
        message.textContent = 'Make sure passwords match'
        message.style.color = 'red'
        messageContainer.style.color = 'red'
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red'
        return
    }

    if (validate && passwordsMatch) {
        message.textContent = 'Successfully Registered'
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}

function storeFormDate() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user)
}
function processFormData(e) {
    e.preventDefault()
    validateForm()

    if (validate && passwordsMatch) {
        storeFormDate()
    }
}

form.addEventListener('submit', processFormData)

