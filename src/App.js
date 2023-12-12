import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src="saleem.jpg" alt="profile_pic" />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info pt-0 text-center">
            <div className="title">
              <p className="bold">Saleem Shaikh</p>
              <p className="regular">Project / Tech Lead</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fa fa-map-signs"></i>
                </div>
                <div className="data">
                  Nashik, Maharashtra, India
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-mobile"></i>
                </div>
                <div className="data">
                  +91 9921947783
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="data">
                  <a href="mailto:saleem.shaikh003@gmail.com" className="cl-white">saleem.shaikh003@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="data">
                  <a href="https://codeoptima.in" className="cl-white">codeoptima.in</a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-linkedin"></i>
                </div>
                <div className="data">
                  <a href="https://www.linkedin.com/in/saleem-shaikh-9ba348121" className="cl-white">saleem-shaikh-9ba348121</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">MCA - Pune University</p>
                  <p>2013 - 2016 (80% - Distinction)</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Personal Details</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fa fa-language"></i>
                </div>
                <div className="data">
                  <p>Languages</p>
                  <p className="semi-bold">English, Hindi & Marathi</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-birthday-cake"></i>
                </div>
                <div className="data">
                  <p>Date Of Birth</p>
                  <p className="semi-bold">21<sup>st</sup> Oct 1991</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="data">
                  <p>Marital Status</p>
                  <p className="semi-bold">Married</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="resume_item resume_social">
            <div class="title">
              <p class="bold">Achievements</p>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <i class="fa fa-trophy"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Top Performer Award</p>
                  <p>6 Times</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="fa fa-users"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Best Leadership Award</p>
                  <p>3 Times</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_about pt-0">
          <div className="title">
            <p className="bold">About me</p>
          </div>
          <p className="tb-1">&#32;&#32;&#32;&#32;&#32;&#32;I have honed my skills in developing and maintaining .NET
            applications, ensuring high performance and scalability. My expertise extends to the full stack, encompassing
            both front-end and back-end technologies. </p>
          <p className="tb-1">&#32;&#32;&#32;&#32;&#32;&#32;My journey has also led me to embrace leadership roles, where I've
            excelled in guiding cross-functional teams, fostering collaboration, and delivering projects on time.</p>
          <p className="tb-1">&#32;&#32;&#32;&#32;&#32;&#32;I am excited about the prospect of contributing my skills and
            leadership to a dynamic organization that values innovation, collaboration, and a relentless pursuit of
            technical excellence.</p>
        </div>
        <div className="resume_item resume_work pt-0">
          <div className="title">
            <p className="bold">Work Experience (8 Years)</p>
          </div>
          <ul>
            <li className="tpline">
              <div className="date">Aress Software, Nashik</div>
              <div className="info">
                <p className="semi-bold">Project Leader - 1 Yrs 4 mo</p>
                <p>Oct 2022 - Present </p>
              </div>
            </li>
            <li>
              <div className="date mb-0">Team Lead - 2 yrs 7 mos</div>
              <div className="info">
                <p>Mar 2020 - Sept 2022</p>
              </div>
            </li>
            <li>
              <div className="date mb-0">Sr. Software Engineer - 2 yrs</div>
              <div className="info">
                <p>Mar 2018 - Feb 2020</p>
              </div>
            </li>
            <li>
              <div className="date mb-0">Trainee Software Engineer - 2 yrs 1 mo</div>
              <div className="info">
                <p>Feb 2016 - Feb 2018</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item hz-line pb-0 pt-0">
          <div className="title">
            <p className="bold">Skills</p>
          </div>
          <ul className="ml-20">
            <li className="lst-disc">Proficiency in front-end technologies such as <b> HTML5, CSS3, Javascript, Ajax, jQuery and
              Bootstrap</b>.</li>
            <li className="lst-disc">Expertise in <b>C#, .NET MVC, .NET Core, Entity Framework</b>.</li>
            <li className="lst-disc">Good command in database design and management specifically <b> MS SQL Server and Cosmos
              DB, Mongo DB</b>.</li>
            <li className="lst-disc">Strong cloud knowledge - <b>Azure Entra ID, Web App Service, API Management Service,
              Function Apps, Storage accounts, Cosmos DB, Event Trigger </b>, etc.</li>
            <li className="lst-disc">Strong development experince in <b>Web/REST APIs, Microservices</b> using Azure functions.
            </li>
            <li className="lst-disc">Good experience in <b>DevOps, CI/CD Pipeline, Deployment, Design pattern, Serverless
              structure and Solid Principles</b>.</li>
            <li className="lst-disc">Hands on experience in <b> Angular & React </b>.</li>
            <li className="lst-disc">Experience in working in an <b>Agile or Scrum</b> Team.</li>
            <li className="lst-disc">Excellent <b>Problem-Solving</b> skills and a demonstrated ability to navigate complex
              challenges.</li>
            <li className="lst-disc">Proven track record of delivering high-quality software projects on time and <b>Leadership</b> experience
              in managing various technologies such as ASP.NET MVC, Core, Blazor, React, Angular,
              MS Dynamic 365 across multiple teams.</li>
            <li className="lst-disc">Good knowledge of Code Review, Optimization & Estimation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
