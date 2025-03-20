import React from 'react';
import "./home.css";
import  portfolio  from "../Srinivas.jpg";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <section id="home" className="min-vh-100 d-flex align-items-center bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm Srinivasarao Bagam
              </h1>
              <p className="lead mb-4">
                Full-Stack Developer skilled in the MERN stack, creating responsive front-end designs and robust back-end solutions using React.js, Node.js, and MongoDB.
              </p>
              <div className="d-flex gap-3">
                <a href="#contact" className=" px-4">
                <a href="#contact" class="btn btn-light px-4 bi bi-telephone-outbound-fill fs-4">Contact Me </a>
                </a>
              </div> 
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
            <img id='d10' src={portfolio} alt="Profile" className="img-fluid shadow" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-6 ">
        <div className="container ">
          <h2 className="text-center mb-5">My Skills</h2>
          <div className="row g-4">
            {/* Languages */}
            <div className="col-md-4 ">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body" >
                  <center><h4 >Languages</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li  className="mb-1"><span className="badge text-white me-2 fs-6"id='skillshover'>HTML</span></li>
                    <li  className="mb-1"><span className="badge text-white me-2 fs-6"id='skillshover'>CSS</span></li>
                    <li  className="mb-1"><span className="badge text-white me-2 fs-6"id='skillshover'>JavaScript</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Libraries */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Libraries</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">React.JS</span></li>
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">Formik</span></li>
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">Redux Toolkit</span></li>
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">Socket.io</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-2">
                <center><h4>Framework</h4></center>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Bootstrap</span></li>
                  {/* <li className="mb-1"><span className="badge text-white me-2 fs-6">Node.js</span></li>
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Express.js</span></li>
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Pug</span></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section><br /> <br /> <br />
      <section id="skills" className="py-6 ">
        <div className="container">
          <h2 className="text-center mb-5">Backend Technologies </h2>
          <div className="row g-4">
            {/* Languages */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Database</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">JSON Server</span></li>
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">MongoDB</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Libraries */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <center><h4>Libraries</h4></center>
                  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">JSON Web Token Management</span></li>
                    <li className="mb-1"><span className="badge text-white me-2 fs-6">Session management</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-2">
                <center><h4>Framework</h4></center>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Node.js</span></li>
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Express.js</span></li>
                  <li className="mb-1"><span className="badge text-white me-2 fs-6">Pug</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Qualification Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Qualification</h2>
        <div className="qualification-container">
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>Bachelor Techonology</h5>
              <p>Universal COllege of engineering & techonology 2017 - 2023</p>
            </div>
          </div>
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>InterMediate</h5>
              <p>Srikrishnachaitanyajunior College 2015 - 2017</p>
            </div>
          </div>
          <div className="qualification-item">
            <div className="circle"></div>
            <div className="content">
              <h5>S.S.C</h5>
              <p>Z.P.High School 2014 - 2015</p>
            </div>
          </div>
       
        </div>
        
      </div>
      

      {/* Projects Section */}
      <section id="projects" className="py-6 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">My Projects</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img style={{height:"250px"}}src="" alt="E-commerce Website" className="card-img-top project-img" />
                <div className="card-body">
                  <h5 className="card-title">Construction Mart Web App</h5>
                  <p className="card-text text-muted">Designed and developed a web application for a construction materials marketplace, allowing customers to browse and purchase materials from multiple suppliers. The platform features an intuitive user interface with seamless navigation and dynamic interactions.</p>
                  <div className=' d-flex justify-content-between'>
                  <button className='btn btn-outline-warning justify-content-start'><Link  to="" className='text-decoration-none nav-link active'>Git-hub</Link></button> 
                  <button className='btn btn-outline-success justify-content-end'>Live Demo</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
                <img style={{height:"250px"}} src="https://img.freepik.com/premium-photo/online-loan-application-form-modish-digital-information-collection_31965-49609.jpg" alt="E-commerce Website" className="card-img-top project-img" />
                <div className="card-body">
                  <h5 className="card-title">Loan Application Web Platform</h5>
                  <p className="card-text text-muted">Engineered a robust web platform to streamline the loan application process for customers seeking financing for new vehi-cles, houses, or mobile phones. The platform enables agents to gather customer information, complete application forms, and submit them to managers for approval and fund disbursement.</p>
                  <div className='d-flex justify-content-between'>
                    <button className='btn btn-outline-warning'><Link to="https://github.com/srikanthminde/Loan-Application-Frontend" className='text-decoration-none nav-link active"'>Git-hub</Link></button> 
                    <button className='btn btn-outline-success'><Link to="https://lucky-pegasus-623a5a.netlify.app" className='text-decoration-none nav-link active'>Live Demo</Link></button>
                  </div>
                </div>
            </div>
            </div>  
            <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
                <img style={{height:"250px"}} src="" alt="E-commerce Website" className="card-img-top project-img" />
                <div className="card-body">
                  <h5 className="card-title">Resume</h5>
                  <p className="card-text text-muted"></p>
                  <div className='d-flex justify-content-between'>
                    <button className='btn btn-outline-warning'><Link to="" className='text-decoration-none nav-link active"'>Git-hub</Link></button> 
                    <button className='btn btn-outline-success'><Link to="" className='text-decoration-none nav-link active'>Live Demo</Link></button>
                  </div>
                </div>
            </div>
            </div>  
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-6 text-center ">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="text-muted mb-5">Available for freelance projects and full-time opportunities.</p>
              <div className="d-flex justify-content-center gap-4">
                <a href="mail:srinivasaraobagam@gmail.com" className="text-dark">
                <i class="fs-4 bi bi-envelope-at"></i>
                </a>
                <a href="https://github.com/Srinivasarao245" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <i className="fs-4 bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/srinivasa-rao-bagam-a98a91264/" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <i  className=" fs-4 bi bi-linkedin"></i>
                </a>
                <a href="https://wa.me/9182189245?text=Hello%20I%20need%20help%20with%20your%20services" className="text-dark">
                  <i className="fs-4 bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
