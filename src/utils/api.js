import Axios from 'axios'

export const fetchUser=async (userid)=>{
    try {
        if(userid){

            const {data} =await Axios.get(`/user/${userid}`);
            return {data};
        }
        return null;
    } catch (error) {
        console.log(error);
        alert(error.response.data.error.msg)
    }
} 