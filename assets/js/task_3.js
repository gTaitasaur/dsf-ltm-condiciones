const btnPass = document.getElementById('tsk-three-btn-pass');
const mensaje = document.querySelector('label[for="pass-msj"]');

btnPass.addEventListener('click', () => {
    const numb1 = document.getElementById('pass-1').value;
    const numb2 = document.getElementById('pass-2').value;
    const numb3 = document.getElementById('pass-3').value;
    const pass = numb1 + numb2 + numb3;

    if (pass == 911) {
        mensaje.textContent = 'Password 1 correcto';
    } else if (pass == 714) {
        mensaje.textContent = 'Password 2 correcto';
    } else {
        mensaje.textContent = 'Password Incorrecta';
    }
});