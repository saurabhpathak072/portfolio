import Axios from 'axios'


export const fetchUser=async ()=>{
    try {
        const {data} =await Axios.get('http://localhost:4000/user/65afb21b9b966e194c7705cd');
        return {data};
    } catch (error) {
        console.log(error);
        alert("Error")
    }
} 