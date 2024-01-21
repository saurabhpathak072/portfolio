import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";
// import { certificateList, educationData, experienceData, otherWorkList, projectList, skillsSet } from "../Data/data";
import { fetchUser } from "../utils/api";

export const AppContext = createContext({
  isOpen: true,
  setIsOpen: () => {},
  isMobile: false,
  isDesktop:false,
  data:{
    user:{},
    experience:[],
    education:[],
    skillsSet:[],
    projectList:[],
    otherWorkList:[],
    certificateList:[]
  }
});

const AppContextProvider = ({ children }) => {
  const { width } = useWindowDimensions();
const [data, setData] = useState({
  user:{},
  experience:[],
  education:[],
  skillsSet:[],
  projectList:[],
  otherWorkList:[],
  certificateList:[]
})

  const [isOpen, setIsOpen] = useState(width > 575 ? true : false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((open) => {
      return !open;
    });
  };

  useEffect(() => {
    const isDesktop = width > 575 ? true : false;
    setIsOpen(isDesktop);
    setIsDesktop(isDesktop);
    setIsMobile(!isDesktop);
   
  }, [width]);

  useEffect(() => {
    const fetchData=async ()=>{
      const {data} = await fetchUser();
      console.log('====================================');
      console.log(data.data);
      const {user,experience, skills,education,certificate,projects,otherWork} = data?.data
      setData((prevData)=>{
        return{
          ...prevData,
          user:{
            ...user,
          },
          experience:[...experience],
          education:[...education],
          skillsSet:[...skills],
          projectList:[...projects],
          certificateList:[...certificate],
          otherWorkList:[...otherWork]
        }
      })
      console.log('===================================='); 
    }
    
    fetchData()

    return ()=>{
      setData({
        user:{},
        experience:[],
        education:[],
        skillsSet:[],
        projectList:[],
        otherWorkList:[],
        certificateList:[]
      })
    }
  
  }, [])
  

  return (
    <AppContext.Provider value={{ isOpen,isMobile,isDesktop, toggleSidebar, setIsOpen, data }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
