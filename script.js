let rangerpassword = document.getElementById('ranger')
let size = document.getElementById('size')
let checkbox_az = document.getElementById('az_minuscula')
let checkbox_AZ = document.getElementById('az_maiuscula')
let checkbox_09 = document.getElementById('dezeroanove')
let checkbox_characterspc = document.getElementById('characterspecial')
let password = document.getElementById('cont')

size.innerHTML = rangerpassword.value

document.getElementById('ranger').addEventListener('input', function rangerpssw() {
    size.innerHTML = rangerpassword.value
})

function generatepassword() {
    let passwordchar = ''
    let newpassword = ''

    if (checkbox_characterspc.checked) {
        passwordchar += '!@$&!@$&!@$&'
    }
    if (checkbox_az.checked) {
        passwordchar += 'abcdefghijklmnopqrstuvxwyz'
    }
    if (checkbox_AZ.checked) {
        passwordchar += 'abcdefghijklmnopqrstuvxwyz'.toUpperCase()
    }
    if (checkbox_09.checked) {
        passwordchar += '1234567890'
    }

    if (passwordchar !== '') {
        newpassword = '';
        for (let i = 0, n = passwordchar.length; i < rangerpassword.value; i++) {
            newpassword += passwordchar.charAt(Math.floor(Math.random() * n))
        }

        password.innerHTML = `<div class="transition-opacity opacity-0 duration-300 ease-in-out">
          <span class="text-3xl text-white">SUA SENHA FOI GERADA!</span>
          <div class="rounded-lg w-full p-4 h-13 mt-4 text-white bg-zinc-800 text-center">${newpassword}</div>
          </div>`
    }
    else {
        password.innerHTML = `<div class="transition-opacity opacity-0 duration-300 ease-in-out">
        <div class="flex justify-center"><span class="text-3xl text-white ">OPS!</span></div>
        <div class="rounded-lg w-full p-4 h-13 mt-4 text-white bg-zinc-800 text-center">Acho que você não selecionou nenhuma das opções acima</div>
        </div>`
    }
    const newElement = password.querySelector('div')
    setTimeout(() => {
        newElement.classList.remove('opacity-0')
        newElement.classList.add('opacity-100')
    })
}
function clipboard() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(password.innerText)
    }
}