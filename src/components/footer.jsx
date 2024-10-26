import '../css/style.css'
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export default function Footer(){
    const nav = useNavigate()
    return (
        
        <footer id="footer" >
        <div id="footer-container">
            <div id="footer-up">
                <div id="footer-up-left">
                    <img src="./Horizontal _Neo CFO_ Logo _ White@2x 1 (1).png" alt="logo"/>
                    <p>Empowering India's Businesses ,<br /> One Click at a Time.</p>
                    <img src="./Property 1=Default.png" alt="email"/>
                </div>
                <div id="footer-up-right" className='flex  text-white sm:flex-row flex-col w-[200px] justify-between items-start ml-3 '>
                    <div >
                        <li  style={{fontSize:'12px' }} className='text-slate-400'>Products</li>
                        <li  ><a href="#"  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                           nav( '/feature')
                        }}>Features</a></li>
                    </div>
                    <div>
                        <li  style={{fontSize:'12px'}} className='text-slate-400'>Company</li>
                        <li><a  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                            nav('/story')
                        }} href="#">Our Story</a></li>
                        <li><a  style={{fontSize:'12px',color:'white',marginTop:'10px'}} className='cursor-pointer' onClick={(e)=>{
                            e.preventDefault();
                            nav('/blogpage')
                        }} href="#">Blogs</a></li>
                        <li><a style={{fontSize:'12px',color:'white',marginTop:'10px'}}  href="#">Contact</a></li>
                    </div>
                </div>
            </div>
            <div id="footer-social-media" className='text-2xl  text-white' style={{marginLeft:'10px'}}>
                <li id="footer-mobile-list">Social</li>
               <div className='flex gap-5'>
               <FaInstagram/>
               <FaSquareXTwitter/>
               <FaLinkedin/>
               </div>
              
            </div>
            
          <div style={{width:'100%',border:'0.5px solid gray'}}>

          </div>

            <div  id="footer-down" style={{marginLeft:'10px'}}>
                <div   id="footer-down-left">
                    <p style={{fontSize:'12px'}}>All Rights Reserved</p>
                </div>
                <div id="footer-down-right" >
                    <p className='cursor-pointer' style={{fontSize:'12px'}} onClick={()=>{
                        nav('/privacy')
                    }}>Privacy Policy</p>
                    <p className='cursor-pointer' style={{fontSize:'12px'}} onClick={()=>{
                         nav('/terms')
                    }}>Terms & Conditions</p>
                </div>
            </div>
        </div>
    </footer>

    
)
        
    
}