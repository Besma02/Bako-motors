import React from 'react';
import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactinfo">
        <div>
          <i className="ri-map-pin-5-line"></i>
          <span>2082 Rue de Beja, Fouchanaa</span>
        </div>
        <div>
          <i className="ri-phone-fill"></i>
          <span>50222820</span>
        </div>
        <div>
          <i className="ri-mail-line"></i>
          <span>info@bakomotors.com</span>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Bako Motors Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4867537141618!2d10.17130717564086!3d36.710869472272655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3707c994a6b9%3A0x7b79dbe982fb45f0!2sBako%20Motors!5e0!3m2!1sfr!2stn!4v1745415769605!5m2!1sfr!2stn"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
