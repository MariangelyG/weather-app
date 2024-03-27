
export const getWeather = async(city) =>{
   
    let data = null
    let error = null

    const url = `https://api.weatherapi.com/v1/current.json?key=46cf879a21c743fa8d5192735242203&q=${city}`
    try {
       
        const response = await fetch(url)
        if(!response.ok){
       
            throw new Error("La ciudad no existe")
        }

     data = await response.json()
        
        
    } catch (er) {
        console.error('Se produjo un error durante la solicitud:', er.message);
       error = er
        
    }

    return{
    data,
    error
    }

    
}