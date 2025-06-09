// About.js
import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/user.jpg" alt="User" />
          </div>
          <div className="about-col-2">
            <h1>About Me</h1>
            <p>
              I’m Peter David Aringo, a 23-year-old graduate of Strathmore University, holding a Bachelor of Business Information Technology (BBIT). Passionate about the intersection of technology and business, I specialize in building modern, scalable web applications using Laravel and React.js—the same stack I used to build this portfolio.
My experience spans across business intelligence, digital marketing, and full-stack development, with a focus on creating solutions that are both intuitive and impactful. I’m also deeply interested in artificial intelligence.
Away from the screen, I enjoy CrossFit, rugby, and connecting with like-minded creators. I believe in continuous growth, clear communication, and using tech to solve real-world problems.
Let’s build something remarkable.
</p>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick={() => opentab('skills')}>Skills</p>
              <p className="tab-links" onClick={() => opentab('experience')}>Experience</p>
              <p className="tab-links" onClick={() => opentab('education')}>Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web Applications</li>
                <li><span>Web Development</span><br />Web Application Development</li>
                <li><span>Network Device Configuration</span><br />Configuration of Network Devices</li>
              </ul>
            </div>
              <div className="tab-contents" id="experience">
  <ul>
    <li>
      <span>March 2021 – April 2021</span><br />
      Administrative Intern National Hospital Insurance Fund/
    </li>
    <li>
      <span>January 2023 – April 2023</span><br />
      Web Technologies Trainee at Huawei Technologies Kenya
    </li>
    <li>
      <span>February 2024 – October 2024</span><br />
      Intern at the Strathmore Office of Graduate Studies
    </li>
    <li>
      <span>January 2025 – May 2025</span><br />
      Digital Media Coordinator at Genesis Marketing Solutions
    </li>
    <li>
      <span>2023 – Present</span><br />
      Freelance Full-Stack Developer – Laravel & React (Projects include CPST Accounting System, Portfolio Website)
    </li>
  </ul>
</div>

            <div className="tab-contents" id="education">
              <ul>
                <li><span>2019</span><br />Graduation From Nova Pioneer High School</li>
                <li><span>2024</span><br />Bachelor in Business Information Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
