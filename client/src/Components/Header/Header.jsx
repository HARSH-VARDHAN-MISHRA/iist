import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'

const Header = () => {
  const menuData = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Counseling", link: "/counseling" },
    { name: "Consultancy", link: "/consultancy" },
    {
      name: "Mind Wellness",
      link: "/mind-wellness",
      subMenu: [
        { name: "Daily Stress & Overthinking", link: "/mind-wellness/daily-stress" },
        { name: "Depression", link: "/mind-wellness/depression" },
        { name: "Anxiety", link: "/mind-wellness/anxiety" },
        { name: "Insomnia", link: "/mind-wellness/insomnia" },
        { name: "Mood Swings", link: "/mind-wellness/mood-swings" },
        { name: "Sexual Desire", link: "/mind-wellness/sexual-desire" },
        { name: "Anti Aging", link: "/mind-wellness/anti-aging" },
      ],
    },
    {
      name: "Mind Disease",
      link: "/mind-disease",
      subMenu: [
        { name: "Autism- ASD: Autism Spectrum Disorder", link: "/mind-disease/autism" },
        { name: "ADHD- Attention Deficit Hyperactivity Disorder", link: "/mind-disease/adhd" },
        { name: "OCD- Obsessive Compulsive Disorder", link: "/mind-disease/ocd" },
        { name: "PTSD- Post-Traumatic Stress Disorder", link: "/mind-disease/ptsd" },
        { name: "Bipolar Disorder", link: "/mind-disease/bipolar-disorder" },
        { name: "Substance abuse Disorders", link: "/mind-disease/substance-abuse" },
        { name: "Schizophrenia", link: "/mind-disease/schizophrenia" },
        { name: "Personality Disorders", link: "/mind-disease/personality-disorders" },
        { name: "Eating Disorder", link: "/mind-disease/eating-disorder" },
        { name: "Dissociative Disorders", link: "/mind-disease/dissociative-disorders" },
        { name: "Migraine", link: "/mind-disease/migraine" },
        { name: "Suicidal Thoughts", link: "/mind-disease/suicidal-thoughts" },
        { name: "Parkinson’s Disease", link: "/mind-disease/parkinsons-disease" },
        { name: "Dementia", link: "/mind-disease/dementia" },
      ],
    },
    {
      name: "Performance Enhancement",
      link: "/performance-enhancement",
      subMenu: [
        { name: "Competitive exams", link: "/performance-enhancement/competitive-exams" },
        { name: "Corporate Employees", link: "/performance-enhancement/corporate-employees" },
        { name: "Quality daily Life", link: "/performance-enhancement/quality-daily-life" },
      ],
    },
    { name: "Training", link: "/training" },
    { name: "Blogs", link: "/blogs" },
  ];

  const [menu,setmenu] = useState(false);
  const handleMenuToggle = ()=>{
    setmenu(!menu)
  }
  return (
    <>
      <header>

      <div className="above-line"></div>
        <div className="container">

          {/* -- Above Head --  */}
          <div className='head'>

            <div className="logo">
              <Link to={`/`}>
                <img src={logo} alt="Manovaidya logo" />
              </Link>
            </div>
            <div className="searchform">
              <div className="searchform-inner">
                <input type="text" placeholder='Search...' />
                <button>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

            </div>

            <div className="side-icons">
              <Link to={`/cart`} className="icon">
                <i class="fa-solid fa-briefcase"></i>
                <span className="cart-num">0</span>
              </Link>
              <Link to={`/profile`} className="icon">
                <i class="fa-solid fa-circle-user"></i>
              </Link>
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