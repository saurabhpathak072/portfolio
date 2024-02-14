import React, { useContext, useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Components/App/Home/Home";
import { Icon } from "../Components/UI/Icon/Icon";
import Skills from "../Components/App/Skills/Skills";
import Experience from "../Components/App/Experience/Experience";
import Education from "../Components/App/Education/Education";
import Feedback from "../Components/App/Feedback/Feedback";
import Contact from "../Components/App/Contact/Contact";
import Project from "../Components/App/Project/Project";
import Certifications from "../Components/App/Certifications/Certifications";
import OtherWork from "../Components/App/OtherWork/OtherWork";
import PageLoader from "../Components/UI/Loader/PageLoader";
import HeaderTitle from "../Components/UI/HeaderTitle/HeaderTitle";
import { AppContext } from "../Context/Context";
import { fetchUser } from "../utils/api";
import { getUserData } from "../Components/App/Home/reducer/homeSlice";

import {useParams, useNavigate} from 'react-router-dom'

const Main = () => {
  const { isDesktop } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.home.user);
  const {userid} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('userid',userid);
  useEffect(() => {
    const fetchData = async () => {
      const user = userid || 'saurabh-pathak';
      if(user){
        try {
          const { data } = await fetchUser(user).catch((err)=>{
            console.log(err);
          });
          dispatch(getUserData(data.data.user));
        } catch (error) {
          console.log(error);
          navigate('/')
        }

        
      }
    };
  

      fetchData();
    
  }, [dispatch, navigate, userid]);

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
    }
    return () => {
      setIsLoading(false);
    };
  }, [user]);

 


  if (isLoading || !user) {
    return <PageLoader />;
  }

  return (
    <>
      {user && (
        <HeaderTitle className="headerTitle" isHeader={isDesktop} sticky={true}>
          {user._id && isDesktop && (
            <div>
              <div className={"smallfontSize"}>
                <Icon iconName={"Telephone"} /> {user.mob}
              </div>
              <div className={"smallfontSize"}>
                <Icon iconName={"Envelope"} /> {user.email}
              </div>
            </div>
          )}
          <div> {user.name}</div>
        </HeaderTitle>
      )}
      <Element id="aboutMe" name="section2" className="section">
        <Home user={user} />
      </Element>
      {user?.skillsSet && (
        <Element id="skills" name="skills" className="section">
          <Skills skillsSet={user.skillsSet} />
        </Element>
      )}
      {user?.experienceData && (
        <Element id="experience" name="experience" className="section">
          <Experience experience={user.experienceData} />
        </Element>
      )}
      {user?.educationData && (
        <Element id="education" name="education" className="section">
          <Education education={user.educationData} />
        </Element>
      )}
      <Element id="feedback" name="feedback" className="section">
        <Feedback />
      </Element>
      <Element id="contactMe" name="section3" className="section">
        <Contact user={user} />
      </Element>
      {user?.projectList && (
        <Element id="projects" name="projects" className="section">
          <Project projectList={user.projectList} />
        </Element>
      )}
      {user?.certificate && (
        <Element id="certifications" name="certifications" className="section">
          <Certifications certificateList={user.certificate} />
        </Element>
      )}
      {user?.otherWorkList && (
        <Element id="otherwork" name="otherwork" className="section">
          <OtherWork otherWorkList={user.otherWorkList} />
        </Element>
      )}
    </>
  );
};

export default Main;
