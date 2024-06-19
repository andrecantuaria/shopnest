import React from 'react';
import '../css/index.css';


const ContactUs = () => {
    return (
        <div className="contact-us mb-3">
            <section className="contact-header mb-3">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7415243050497!2d55.27078231500201!3d25.197197983896847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a96782d2d%3A0x3e5f434a96782d2d!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1599987039372!5m2!1sen!2sae"
                    className="contact-map"
                    style={{ width: '100%', height: '500px', border: '0' }}
                ></iframe>
            </section>

            <div className="container">
            <section className="contact-details">
    <h2 className="typography-h2">Contact Information</h2>
    <p className="typography-p"><i className="fas fa-phone"></i> 81/252142</p>
    <p className="typography-p"><i className="fas fa-envelope"></i> doryneh21@gmail.com</p>
    <p className="typography-p"><i className="fas fa-map-marker-alt"></i> Address: UAE, Dubai, Burj Khalifa</p>
    <div className="subscribe-container">
        <p className="typography-p"><i className="fas fa-envelope"></i> Subscribe to our Newsletter</p>
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
