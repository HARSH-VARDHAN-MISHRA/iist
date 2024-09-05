import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.jpg'
import headImg from './IIST-HEADER.png'

const Header = () => {
  const menuData = [
    { name: "Home", link: "/" },
    {
      name: "Skill Training Programs",
      link: "#",
      subMenu: [
        { name: "Hospital & Paramedical", link: "/skill-training/hospital-paramedical" },
        { name: "Teacher Training", link: "/skill-training/teacher-training" },
        { name: "Technical Skill", link: "/skill-training/technical-skill" },
        { name: "Cutting & Tailoring", link: "/skill-training/cutting-tailoring" },
        { name: "Safety Management", link: "/skill-training/safety-management" },
        { name: "Industrial Skill Training", link: "/skill-training/industrial-skill-training" },
        { name: "Engineering Training Programs", link: "/skill-training/engineering-training" },
        { name: "Spoken English & Personality Development", link: "/skill-training/spoken-english-personality-development" },
      ],
    },
    {
      name: "Vocational Programs",
      link: "#",
      subMenu: [
        { name: "Hotel/Tour & Travel Management", link: "/vocational-programs/hotel-tour-travel-management" },
        { name: "Business Management", link: "/vocational-programs/business-management" },
        { name: "Fashion/Interior/Textile Designing", link: "/vocational-programs/fashion-interior-textile-designing" },
        { name: "Beauty & Wellness", link: "/vocational-programs/beauty-wellness" },
        { name: "Computer & Information Technology", link: "/vocational-programs/computer-information-technology" },
        { name: "Arts & Painting", link: "/vocational-programs/arts-painting" },
      ],
    },
    {
      name: "Student Services",
      link: "#",
      subMenu: [
        { name: "Placement Cell", link: "/student-services/placement-cell" },
        { name: "Centre Login", link: "/student-services/centre-login" },
        { name: "Online Results", link: "/student-services/online-results" },
        { name: "Centre Invitation", link: "/student-services/centre-invitation" },
      ],
    },
    { name: "Our Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact" },
    { name: "Updates", link: "/updates" },
  ];

  const [menu, setmenu] = useState(false);
  const handleMenuToggle = () => {
    setmenu(!menu)
  }
  return (
    <>
      <header>

        <div className="above-line container-fluid">

          <div className="contact-info">
            <div className="single-info">
              <i class="fa-solid fa-phone-volume"></i>
              <a href="tel:+918130543714">+91-8130543714</a>
            </div>
            <div className="single-info">
              <i class="fa-solid fa-envelope-open-text"></i>
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a>
          </div>

          <div className="login-links">
            <Link to={`/student-services/centre-login`}>Centre Login</Link>
            <Link to={`/student-services/online-results`}>Online Results</Link>
            <Link to={`/student-services/centre-invitation`}>Centre Invitation</Link>
          </div>
        </div>

        <div className="">

          {/* -- Above Head --  */}
          <div className='head'>

            <div className="logo">
              <Link to={`/`}>
                <img src={logo} alt="Manovaidya logo" />
              </Link>
              <div className="poster">
                <img src={headImg} alt="IIST Header" />
              </div>
            </div>


            <div className="side-icons">

              <div className="icon hamburger" onClick={handleMenuToggle}>
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>

          </div>

          {/* Nav Links */}
          <div className={`nav-links ${menu ? "active" : ""}`}>
            <ul>
              {menuData.map((item, index) => (
                <li
                  key={index}
                  className={item.subMenu ? "dropdown" : ""}
                  onClick={!item.subMenu ? handleMenuToggle : undefined}
                >
                  <Link to={item.link}>{item.name}</Link>
                  {item.subMenu && (
                    <ul className="dropdown-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.link} onClick={handleMenuToggle}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>



        </div>

      </header>

    </>
  )
}

export default Header