import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import Header2 from './Header2';
import Fooder from '../components/fooder';
import img1 from '../images/project1.png'
import img2 from '../images/project2.png'
import img3 from '../images/project3.png'
import img4 from '../images/project4.png'
import img5 from '../images/project5.png'
import img6 from '../images/project6.png'
import img7 from '../images/project7.png'
import img8 from '../images/project8.png'
import img9 from '../images/project9.png'
import img10 from '../images/project10.png'
import img11 from '../images/project11.png'
import img12 from '../images/project12.png'

function Work() {
  return (
    <div>
       <div className='work-container'>
           <div className='headerpage'><Header2/></div>
           <div className='banner'>
                  <div className='banner-txt og'>
                       <h1>WORK</h1>
                       <p>Portfolio  <FaArrowUpLong  className='work-icon'/><span>Work</span></p>
                  </div>
           </div>
           <h1 className='side-text'>Portfolio</h1>
           <div className='back-white'>

              <div> <h2>SOME OF MY LATEST <span style={{color:"black"}}>WORK</span></h2></div>
                <div className='imges'>
                  <img src={img1} alt=''></img>
                  <img src={img2} alt='' className='img2'></img>
                  <img src={img3} alt=''></img>
                  <img src={img4} alt='' ></img>
                  <img src={img5} alt='' className='img5'></img>
                   <img src={img6} alt=''></img>
                   
                   <img src={img7} alt=''></img>
                  <img src={img12} alt=''></img>
                  <img src={img8} alt='' className='img8'></img>
                  <img src={img9} alt=''></img>
                  <img src={img10} alt=''></img>
                  <img src={img11} alt=''></img>
              </div>
           </div>
               <div className='fooder-page'><Fooder /></div>
           </div>
    </div>
  )
}

export default Work