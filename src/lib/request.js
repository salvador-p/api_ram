const URL = "https://rickandmortyapi.com/api/character/?page=10";



class Http{
    static instance = new Http()

    get_characters = async () =>{
        try {
            const request = await fetch(`${URL}`);
            const response = await request.json();
            return response
            
        } catch (err){
            throw Error(err);
        }
    }
}

export default Http;