import Axios from 'axios'


export const fetchUser=async ()=>{
    try {
        const {data} =await Axios.get('http://localhost:4000/user');
        return {data};
    } catch (error) {
        console.log(error);
        alert("Error")
    }
} 