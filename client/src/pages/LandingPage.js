import React from 'react'
import { Link } from 'react-router-dom'
import "../landing_page.css"

function Landing_page() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className="logo">
                        <h3>Stay Healthy</h3>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#carouselReview">Services</a></li>
                            <li><Link to="/login">
                                Login
                            </Link></li>
                            <li><Link to="/register">
                                Signup
                            </Link></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div id="hero">
                <div classNameName="hero_text">
                    <div className="main_text">
                        <h2>Find a Doctor & <br />Book Appointment
                        </h2>
                        <div className="main_text_para">
                            <p>Request appointments based on slots, date,consultation location. Know your Doctor to book
                                confirmed doctor Appointment
                                effortlessly with clinic details of practice location to engage with patients effortlessly.</p>
                        </div>

                        <Link to="/login"><button className="book_appo_button" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Book an appointment</button></Link>

                        <div style={{ marginTop: '30px' }}>
                            <ul>
                                <li>Advanced Technology</li>
                                <li>24/7 Availability</li>
                                <li>Best Doctors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hero_img">
                    <img src="images/Doctors/doctor.jpg" alt="Doctor_logo" />
                </div>

            </div>

            <hr />
            <div id="carouselReview" className="carousel slide" data-bs-ride="carousel">
                <h3>Services for you & your family</h3>
                <div className="carousel-inner">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/nutrient.webp" alt="Person 1" />
                                </div>
                                <div className="img-text">
                                    <h4>Nutritional Advice</h4>
                                    <p>Proper Nutrition advice plays a crucial role in health and agree that providing
                                        nutrition advice is
                                        part of Doctors role.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/aged_assessment.jpg" alt="Person2" />
                                </div>
                                <div className="img-text">
                                    <h4>Aged Assessments and care</h4>
                                    <p>Assessors visit the older person's home or hospital to: understand the person's care
                                        needs. Create a support plan based on their care needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/travel_medicine.avif" alt="Person3" />
                                </div>
                                <div className="img-text">
                                    <h4>Travel Medicine</h4>
                                    <p>Taking correct medicine while travelling helps to prevent disease early without any
                                        futher problems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/weight_control.png" alt="Person4" />
                                </div>
                                <div className="img-text">
                                    <h4>Weight Control Management</h4>
                                    <p>Weight management strategies most often focus on achieving healthy weights through slow
                                        but steady weight loss, followed
                                        by maintenance of an ideal body</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/annual_health_checkup.png" alt="Person 5" />
                                </div>
                                <div className="img-text">
                                    <h4>Health Insurance</h4>
                                    <p>Health insurance that covers medical expenses that arise due to an
                                        illness. These expenses could
                                        be related to hospitalisation costs, cost of medicines or doctor consultation fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/Diabielties.png" alt="Person 6" />
                                </div>
                                <div className="img-text">
                                    <h4>Diabetes Management</h4>
                                    <p>Managing diabetes means managing blood glucose, blood pressure, and cholesterol.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="doctors">
                <h3>Our Best Doctors</h3>
                <div className="row-1">
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor1.jpg" alt="Doctor 1" />
                        <p>Dr.John Smith</p>
                        <p className="Type">Neurologist</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/female_doctor1.avif" alt="Doctor 1" />
                        <p>Dr.Zacharie Tupaarnaq</p>
                        <p className="Type">Cardiologist</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor2.jpg" alt="Doctor 1" />
                        <p>Dr.Jeremy Brenna</p>
                        <p className="Type">Dentist</p>
                    </div>
                </div>
                <div className="row-2">
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor3.jpg" alt="Doctor 4" />
                        <p>Dr.Meredith Poppy</p>
                        <p className="Type">Orthopedic</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/male_doctor4.webp" alt="Doctor 5" />
                        <p>Dr.Jordon Das</p>
                        <p className="Type">Pediatrician</p>
                    </div>
                    <div className="doctors-div">
                        <img src="images/Doctors/female_doctor2.avif" alt="Doctor 6" />
                        <p>Dr.Ike Kingsley</p>
                        <p className="Type">Gvnaecologist</p>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="footer_divison">
                    <div className="footer_form">
                        <h5>Have some questions?</h5>
                        <h6>Fill the form below, we will get back to you.</h6>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputFirstName" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="inputLastName" />
                            </div>
                            <div className="col-12">
                                <label for="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>
                            <div className="col-12">
                                <label for="inputMobile" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" id="inputMobile" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">Ask your query here</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="col-12">
                                <button htmltype="submit" className="btn" style={{ backgroundColor: '#005555', color: 'white', }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer_text">
                    <h6>2022-2023 Copyright.All Rights Reserved. </h6>
                </div>
            </div >
        </div >

    )
}

export default Landing_page