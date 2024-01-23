import Axios from 'axios'


export const fetchUser=async ()=>{
    try {
        const {data} =await Axios.get('http://localhost:4000/user/65aeb8b604e667afa88d7efa');
        return {data};
    } catch (error) {
        console.log(error);
        alert("Error")
    }
} 