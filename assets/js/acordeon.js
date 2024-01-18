const acordeonAcionar = document.querySelectorAll('.acordeon.acionar')

acordeonAcionar.forEach((acionar)=> {
    acionar.addEventListener('click',(e) =>{
        console.log('show')

    })
})