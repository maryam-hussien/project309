import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  const handleFacebookClick = () => {
    // Redirect to the Facebook page when clicked
    window.open('https://www.facebook.com/your-facebook-page-url', '_blank');
  };

  const handleInstagramClick = () => {
    // Redirect to the Instagram profile when clicked
    window.open('https://www.instagram.com/your-instagram-profile-url', '_blank');
  };

  const handleWhatsAppClick = () => {
    // Redirect to the WhatsApp page when clicked
    window.open('https://wa.me/your-phone-number', '_blank');
  };

  return (
    <div className='footer'>
      <h1>Arche Wood</h1>
      <div className='icon'>
        <FacebookOutlinedIcon onClick={handleFacebookClick} />
        <InstagramIcon onClick={handleInstagramClick} />
        <WhatsAppIcon onClick={handleWhatsAppClick} />
      </div>
      <div className='title'>
        <h1>All Right Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
