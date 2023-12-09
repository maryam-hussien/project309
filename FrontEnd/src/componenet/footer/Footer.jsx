import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  const handleFacebookClick = () => {
  
    window.open('https://www.facebook.com/archywoody?mibextid=vk8aRt', '_blank');
  };

  const handleInstagramClick = () => {
  
    window.open('https://instagram.com/archiwoo_d?igshid=YTQwZjQ0NmI0OA==', '_blank');
  };

  const handleWhatsAppClick = () => {
   
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
