const acordeonAcionar = document.querySelectorAll('.acordeon.acionar')

acordeonAcionar.forEach((acionar)=> {
    acionar.addEventListener('Click',(e) =>{
        console.log('show')

    })
})