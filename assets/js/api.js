async function buscarDadosDoPerfil(){
    const url = 'https://raw.githubusercontent.com/diegoalmeidaramos/portfolio/main/data/perfil.json';
    const buscar = await fetch(url) //FETCH = BUSCAR//
    return await buscar.json()
}
