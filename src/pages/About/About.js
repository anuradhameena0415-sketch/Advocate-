import React from "react";
import AboutArea from "../../components/AboutArea/AboutArea";
import Team from "../../components/Team/Team";
import TimelineArea from "../../components/TimelineArea/TimelineArea";

const About = () => {


    return (
        <>
             <div className="row">
		            <div className="col-md-12">
		                {/* <!--Section Title Start--> */}
                        <div className="section-title text-center mb-70">
                        <h1>About Me</h1>
                        </div>
                        {/* <!--Section Title End--> */}
		            </div>
		        </div>
                
            <AboutArea/>
            <TimelineArea/>
            <Team/>
        </>
    );
};

export default About;
