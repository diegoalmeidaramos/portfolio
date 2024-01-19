const acordeonAcionar = document.querySelectorAll('.acordeon .acionar')
acordeonAcionar.forEach((acionar) => {
    acionar.addEventListener('click', (e) => {
    
        const acordeon = acionar.parentElement

        const estaAberto = acordeon.classList.contains('aberto')

        if (estaAberto){

            acordeon.classList.remove('aberto')}
            else{
            acordeon.classList.add('aberto')
            }
        
    })
})