import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function ProjectTwo() {
  return (
    <div className="resume">
      <div className="resume_left">
        <div className="resume_content">
          <div className="resume_item resume_info pt-63 mt-10">
            <ul>
              <li>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Project Title
                </div>
              </li>
              <li>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Project Synopsis
                </div>
              </li>
              <li className='mt-55'>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Role and Responsibilities
                </div>
              </li>
              <li className='mt-55'>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Technology Used
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_info mt-10">
            <ul>
              <li>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Project Title
                </div>
              </li>
              <li>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Project Synopsis
                </div>
              </li>
              <li className='mt-55'>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Role and Responsibilities
                </div>
              </li>
              <li className='mt-55'>
                <div className="icon wd-ht-5">
                </div>
                <div className="regular">
                  Technology Used
                </div>
              </li>
            </ul>
          </div>
          <div className="ht-3pg-empty">
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_about pt-0">
          <div className="title">
            <p className="bold">Project Summary</p>
          </div>
          <p className="tb-1 semi-bold pt-3"><b>LFS - Gen2 (UK)</b><span className="fn-sz-13"> Apr 2018 - Jan 2019</span></p>
          <p className="tb-1 mt-12 ht-75">
            Employers can use this system to handle their employees' tasks, daily allotments, pay stub administration, and Holidays, Rota Tasks, other details.
          </p>
          <p className="tb-1 ht-77">
            Worked on UI Design, Written REST APIs, Worked on Shadow Resource(Login), Implemented Multi-Tenant Functionality, Azure Entra Id - User Management, Time Trigger.
          </p>
          <p className="tb-1">
            Angular, Bootstrap, .NET Core APIs, Clean Architecture, Azure Functions, Service Bus, DevOps, Mongo DB.
          </p>
        </div>
        <div className="resume_item resume_about pt-3">
          <p className="tb-1 semi-bold"><b>ESCT - Healthcare (US)</b><span className="fn-sz-13"> Feb 2016 - Mar 2018</span></p>
          <p className="tb-1 mt-12 ht-75">
            The program was created for a hospital to handle patient and hospital information, including information on visiting physicians, patient feedback, and room detection.
          </p>
          <p className="tb-1 ht-77">
            Written REST APIs, iOS and Web sync mechanism, Store Procedures, 600+ Database Migration to Rackspace, Web Development from VB to ASP.NET.
          </p>
          <p className="tb-1">
            HTML, CSS, Telerik Kendo UI, ADO.NET, Web Services, iOS, MS SQL Server, IIS Web Server
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwo;
