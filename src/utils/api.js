import Axios from 'axios'

export const fetchUser=async (userid)=>{
    try {
        if(userid){

            const {data} =await Axios.get(`https://saurabh-pathak-profile-api.onrender.com/user/${userid}`);
            return {data};
        }
        return null;
    } catch (error) {
        console.log(error);
        alert(error.response.data.error.msg)
    }
} 