import React from 'react'

function Banner() {
    return (
        <div>
            <div className="content">
                <div className="item">
                    <div className="content_text">
                        <i className="fas fa-truck"></i>
                        <h2>Free Delivery</h2>
                        <p>Free delivery on all your Orders</p>
                    </div>
                    <div className="content_text">
                        <i className="fas fa-sync"></i>
                        <h2>Return Policy</h2>
                        <p>We offer seamless and easy return policy</p>
                    </div>
                    <div className="content_text">
                        <i className="fas fa-headphones"></i>
                        <h2>24/7 Support</h2>
                        <p>Customers services available at all times </p>
                    </div>
                    <div className="content_text">
                        <i className="fab fa-amazon-pay"></i>
                        <h2>Secure Payment</h2>
                        <p>Pay Securely with Debit/Credit cards or UPI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
