import React from "react";

const SingleService = ({ singleServiceData }) => {
    const { desc, imgURL, title, price } = singleServiceData;
    
    return (
        <div className="col-md-6">
            <div className="single-service mb-60 d-flex flex-nowrap">
                <div className="service-icon">
                    <img src={imgURL} alt="" />
                </div>
                <div className="service-content">
                    <h4>
                        <a href="single-service.html">{title}</a>
                    </h4>
                    <p>{desc}</p>
                    <span className="price">{price}</span>
                    <br></br>
                    <button className="my-btn">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
