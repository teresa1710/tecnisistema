document.addEventListener('DOMContentLoaded', function(){
    navegacionfija();
});

function navegacionfija(){
    const barra = document.getElementById("menu");
    const observer = new IntersectionObserver (function (entries){
        //entries nos da la informacion del elemento a observar
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    });

    observer.observe(document.querySelector('.carrusel'));  
}
