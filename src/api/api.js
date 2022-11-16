export const obtenerPeliculasPorTitulo = async(titulo) => {
    const fech = await fetch(`http://www.omdbapi.com?s=${titulo}&apiKey=60e0cb2a`);
    const data = await fech.json();
    if(data.response){
        return data.Search
    }else{
        return data.Error
    }
   
} 

export const obtenerPeliculaPorId = async(id) => {
    const fech = await fetch(`http://www.omdbapi.com?s=${id}&apiKey=60e0cb2a`);
    const data = await fech.json();
    return data
}