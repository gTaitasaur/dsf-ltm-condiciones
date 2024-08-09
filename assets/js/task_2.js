const btnLlevarStickers = document.getElementById('tsk-two-btn-stickers');
const sticker1 = document.getElementById('sticker-1');
const sticker2 = document.getElementById('sticker-2');
const sticker3 = document.getElementById('sticker-3');
const mensaje = document.querySelector('label[for="stickers"]')

btnLlevarStickers.addEventListener('click', () => {
    const valor1 = parseInt(sticker1.value);
    const valor2 = parseInt(sticker2.value);
    const valor3 = parseInt(sticker3.value);
    
    const suma = valor1 + valor2 + valor3; 
    if (sticker1.value === '' || sticker2.value === '' || sticker3.value === '') {
        mensaje.textContent = "Debes llenar todos los campos";
    } else if (suma < 1) {
        mensaje.textContent = "Debes llevar al menos 1 sticker";
    } else if (suma > 10) {
        mensaje.textContent = "No puedes llevar más de 10 stickers";
    } else {
        mensaje.textContent = "Llevas " + suma + " stickers";
    }
});