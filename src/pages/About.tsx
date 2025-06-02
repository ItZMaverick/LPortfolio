import DownloadCV from "../components/Cv";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 5 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 5 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h1 className="text-center">About Me</h1>
            </div>
            <div className="card-body position-relative">
              {/* Left Arrow Button */}
              <button 
                className="position-absolute start-0 top-50 translate-middle-y btn btn-outline-primary rounded-circle p-3 d-none d-md-block"
                onClick={handlePrev}
                style={{ left: '-40px', zIndex: 1 }}
              >
                <FaArrowLeft size={20} />
              </button>

              {/* Right Arrow Button */}
              <button 
                className="position-absolute end-0 top-50 translate-middle-y btn btn-outline-primary rounded-circle p-3 d-none d-md-block"
                onClick={handleNext}
                style={{ right: '-40px', zIndex: 1 }}
              >
                <FaArrowRight size={20} />
              </button>

              <div id="cvCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  {["Profile", "Skills", "Education 1", "Education 2", "Experience", "Hobbies"].map((label, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#cvCarousel"
                      data-bs-slide-to={index}
                      className={activeIndex === index ? "active" : ""}
                      aria-current={activeIndex === index ? "true" : ""}
                      aria-label={label}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>

                <div className="carousel-inner">
                  {/* Personal Info Slide */}
                  <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                    <section className="mb-4 text-center py-4">
                      <h2>Luke Livingston</h2>
                      <p className="lead">Software Development Student</p>
                      <p>Paisley | Phone: 07453394350 | Email: lukelukewl@gmail.com</p>
                      <div className="py-4 px-md-5">
                        <p className="fs-5">
                          Motivated and disciplined Software Development student currently pursuing a BSc in Software Development at Glasgow Caledonian University.
                        </p>
                      </div>
                    </section>
                  </div>

                  {/* Technical Skills Slide */}
                  <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                    <section className="mb-4 py-4">
                      <h3 className="border-bottom pb-2 text-center">Technical Skills</h3>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="p-3 bg-light rounded mb-3">
                            <h5>Languages</h5>
                            <ul>
                              <li>Python, Java, C#, JavaScript, HTML/CSS, Scala</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-light rounded">
                            <h5>Frameworks/Tools</h5>
                            <ul>
                              <li>Git, SQL, React, Visual Studio, IntelliJ</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="p-3 bg-light rounded mb-3">
                            <h5>Software</h5>
                            <ul>
                              <li>Adobe Premier Pro, Photoshop, Microsoft apps</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-light rounded">
                            <h5>Concepts</h5>
                            <ul>
                              <li>Object Oriented/Functional/Procedural Programming</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
                        <span className="badge bg-primary me-2">Problem-Solving</span>
                        <span className="badge bg-primary me-2">Team Player</span>
                        <span className="badge bg-primary me-2">Adaptable</span>
                        <span className="badge bg-primary">Communication</span>
                      </div>
                    </section>
                  </div>

                  {/* Education Slide 1 */}
                  <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                    <section className="mb-4 py-4">
                      <h3 className="border-bottom pb-2 text-center">Education</h3>
                      <div className="p-4 bg-light rounded mt-4">
                        <h5>Secondary School (St Andrews Academy) - 2019-2021</h5>
                        <ul className="mt-3">
                          <li>Nat5 <strong>English</strong> - A</li>
                          <li>Higher <strong>English</strong>, Higher <strong>History</strong>, Higher <strong>Computer Science</strong> – B</li>
                          <li>Higher <strong>Math</strong>, Nat5 <strong>History</strong>, Nat5 <strong>Math</strong> – C</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-light rounded mt-3">
                        <h5>City Of Glasgow College - 2022 - 2024</h5>
                        <ul className="mt-3">
                          <li>HNC <strong>Software Development</strong></li>
                          <li>HND <strong>Software Development</strong></li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* Education Slide 2 */}
                  <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
                    <section className="mb-4 py-4">
                      <h3 className="border-bottom pb-2 text-center">Education (Continued)</h3>
                      <div className="p-4 bg-light rounded mt-4">
                        <h5>Glasgow Caledonian University - 2024 – Present</h5>
                        <ul className="mt-3">
                          <li>3rd Year BSc <strong>Software Development</strong></li>
                        </ul>
                      </div>
                      <div className="p-4 bg-light rounded mt-3">
                        <h5>Additional Qualifications</h5>
                        <ul className="mt-3">
                          <li>Level 5 <strong>Computer Games Development</strong></li>
                          <li>Performing Engineering Operations</li>
                          <li>National units – physics, chemistry, numeracy</li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* Work Experience Slide */}
                  <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
                    <section className="mb-4 py-4">
                      <h3 className="border-bottom pb-2 text-center">Work Experience</h3>
                      <div className="p-4 bg-light rounded mt-4">
                        <h5>JD Sports (Paisley) - Seasonal-Temp – November 2021 - January 2022</h5>
                        <ul className="mt-3">
                          <li>Part-Time Sales Assistant</li>
                          <li>Retail Experience, Team Working, Storage Management.</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-light rounded mt-3">
                        <h5>Five Guys(Brachead) - Seasonal-Temp- July 2022 - October 2022</h5>
                        <ul className="mt-3">
                          <li>Hospitality Experience</li>
                          <li>Communication, Customer Service</li>
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* Hobbies Slide */}
                  <div className={`carousel-item ${activeIndex === 5 ? "active" : ""}`}>
                    <section className="mb-4 py-4">
                      <h3 className="border-bottom pb-2 text-center">Hobbies and Interests</h3>
                      <div className="p-4 bg-light rounded mt-4">
                        <h5>Linwood Boxing Club</h5>
                        <p className="mt-3">
                          Amateur fighter training 3 times a week and traveling to train with different clubs.
                        </p>
                        <ul className="mt-3">
                          <li>Looking to compete in major competitions</li>
                          <li>Skills: leadership, motivation, discipline, communication</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-light rounded mt-3">
                        <h5>Fitness/Exercise</h5>
                        <p className="mt-3">
                          Gym 3 times a week focusing on strength, conditioning and health improvement.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Download Button below carousel */}
              <div className="text-center mt-4">
                <DownloadCV />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;