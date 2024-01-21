import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import { certificateList, educationData, experienceData, otherWorkList, projectList, skillsSet, userData } from "../Data/data";

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
useEffect(() => {
  setData((prevdata)=>{
    return{
      ...prevdata,
      user:userData,
      experience:experienceData,
      education:educationData,
      skillsSet:skillsSet,
      projectList:projectList,
      otherWorkList:otherWorkList,
      certificateList:certificateList
    }
  })

  return () => {
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

  return (
    <AppContext.Provider value={{ isOpen,isMobile,isDesktop, toggleSidebar, setIsOpen, data }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
