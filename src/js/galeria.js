const image = document.querySelectorAll('.img');
const containerImage = document.getElementById('container-img');
const img = document.getElementById('img-show');
const btnCerrar = document.getElementById('cerrar');
const copy = document.getElementById('copy');



image.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImg(image.getAttribute('src'),image.getAttribute('alt'))
        // Obtener el src
        // console.log(image.getAttribute('src'));
    })
})


btnCerrar.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    img.classList.toggle('show');
})

const addImg = (src, alt)=>{
    containerImage.classList.toggle('move');
    img.classList.toggle('show');
    img.src = src;
    copy.innerHTML = alt;
}