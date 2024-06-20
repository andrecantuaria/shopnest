import React from 'react';
import '../css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const ContactUs = () => {
    return (
        <div className="contact-us mb-3">
            <section className="contact-header mb-3">
                <iframe 
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5148.930321780636!2d-97.1901954423122!3d49.81492197159653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea756d679c1f21%3A0xd09825e5197c16da!2sManitoba%20Institute%20of%20Trades%20and%20Technology!5e0!3m2!1sar!2sca!4v1718847010365!5m2!1sar!2sca"
                    className="contact-map container"
                ></iframe>
            </section>

            <div className="container">
                <section className="contact-details">
                    <h2 className="typography-h2">Contact Information</h2>
                    <p className="typography-p"><i className="fas fa-phone"></i> 81/252142</p>
                    <p className="typography-p"><i class="fa-solid fa-fax"></i> 204-555-555</p>
                    <p className="typography-p"><i className="fas fa-envelope"></i> doryneh21@gmail.com</p>
                    <p className="typography-p"><i className="fas fa-map-marker-alt"></i> Address: UAE, Dubai, Burj Khalifa</p>
                    <div className="subscribe-container">
                        <p className="Subscribe-biggerfont"><i class="fa-solid fa-envelope-open-text"></i> Subscribe to our Newsletter</p>
                        <div className="subscribe-input">
                            <input type="email" placeholder="Email Address" />
                            <button className="ml-1">Subscribe</button>
                        </div>
                    </div>
                </section>

                <section className="contact-form">
                    <h2 className="typography-h2">Leave a Message</h2>
                    <form>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;
