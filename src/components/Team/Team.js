import React from 'react'
import './Team.css'

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Smith",
            position: "Senior Lawyer",
            image: "img/about/about.jpg",
            description: "Experienced lawyer with 15+ years in corporate law and litigation."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            position: "Associate Lawyer",
            image: "img/about/about.jpg",
            description: "Specialized in family law and estate planning with excellent track record."
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "Legal Consultant",
            image: "img/about/about.jpg",
            description: "Expert in criminal defense and personal injury cases."
        },
        {
            id: 4,
            name: "Emily Davis",
            position: "Junior Lawyer",
            image: "img/about/about.jpg",
            description: "Fresh perspective on modern legal challenges and client advocacy."
        }
    ];

    return (
        <div className="team-area pt-100 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!--Section Title Start--> */}
                        <div className="section-title text-center mb-70">
                            <img src="img/icon/icon1.png" alt=""/>
                            <h4>Our Team</h4>
                            <h2>Meet Our Legal Experts</h2>
                            <p>Our dedicated team of experienced lawyers is committed to providing exceptional legal services and achieving the best outcomes for our clients.</p>
                        </div>
                        {/* <!--Section Title End--> */}
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map(member => (
                        <div key={member.id} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-member">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name}/>
                                    <div className="team-overlay">
                                        <div className="team-social">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h4>{member.name}</h4>
                                    <p className="team-position">{member.position}</p>
                                    <p className="team-description">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
