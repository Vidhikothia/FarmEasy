import React from 'react';
import './AboutUs.css'; 
import farmertech from './farmertech.jpeg'; 
import team1 from './team1.jpg'; 
// import team2 from './team2.jpg'; 
// import team3 from './team3.jpg'; 

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="heading">About Us</h2>
        <div className="content">
          <div className="text">
            <p>
              <strong>FarmEasy</strong> was created with a single mission in mind: 
              to empower farmers by connecting them with the right resources, 
              government schemes, and expert guidance to improve their livelihoods.
            </p>
            <p>
              In the ever-changing world of agriculture, we strive to provide farmers 
              with the tools and knowledge they need to succeed. Our platform acts as a 
              bridge, bringing advanced farming techniques, expert insights, and critical 
              government support right to your fingertips.
            </p>
            <p>
              Our vision is simple: to ensure that every farmer, regardless of their location, 
              has access to the best agricultural practices, tools, and resources. We believe 
              that through technology and information, we can make a positive, lasting impact on farming communities.
            </p>
          </div>
          <div className="image">
            <img src={farmertech} alt="Farmers working with technology" />
          </div>
        </div>

        <div className="meet-the-team">
          <h3>Meet the Team Behind This</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={team1} alt="Team Member 1" />
              <h4>Vidhi Kothia</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={team1} alt="Team Member 2" />
              <h4>Jane Smith</h4>
              <p>Agriculture Expert</p>
            </div>
            <div className="team-member">
              <img src={team1} alt="Team Member 3" />
              <h4>Mike Johnson</h4>
              <p>Technical Lead</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
