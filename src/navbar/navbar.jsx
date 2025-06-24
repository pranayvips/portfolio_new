import { useEffect, useState } from "react";
import "./navbar.css";
import { Outlet } from "react-router-dom";
// import gsap from "gsap";
import { scrollTo } from "../app";
function Navbar() {
  const [currentPage, setCurrentPage] = useState("abcd")
  useEffect(() => {
    setCurrentPage(()=>window.location.pathname)
  },  []);

  function scroller(position){
    scrollTo(position);
    document.activeElement.blur();
  }

  function changeLoc(args){
    if (currentPage != args){
      window.location.href = args;
    }
  }
 
  return <>
    <header>
      <div>
        <h1>Pranay</h1>
      </div>
      <nav>
          <button onClick={() => changeLoc("/")} className={currentPage=="/"?"active":""}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Home</span>
              <div className="drop-down">
                <p onClick={()=>scroller(".home")}><i className='bx bx-home-alt' ></i> <span>Home</span></p>
                <p onClick={()=>scroller(".about")}><i className='bx bx-info-circle' ></i> <span>About</span></p>
                <p onClick={()=>scroller(".education")}><i className='bx bx-book-reader'></i> <span>Education</span></p>
                <p onClick={()=>scroller(".skills")}><i className='bx bx-bullseye' ></i> <span>Skills</span></p>
                <p onClick={()=>scroller(".project")}><i className='bx bx-briefcase'></i> <span>Project</span></p>
                <p onClick={()=>scroller(".contact")}><i className='bx bx-phone-call' ></i> <span>Contact</span></p>
              </div>
          </button>
      <button onClick={() => changeLoc("/project")} className={currentPage=="/project"?"active":""}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <span>Project</span>
            </button>
      <button>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>Social</span>
              <nav>
                <i className='bx bxl-instagram' onClick={()=>{window.open("https://www.instagram.com/pranay.4862/","_blank")}} ></i>
                <i className='bx bxl-twitter' onClick={()=>{window.open("https://x.com/Pranay4862","_blank")}}></i>
                <i className='bx bxl-whatsapp' onClick={()=>{window.open("https://api.whatsapp.com/send?phone=916203241318&text=Hello,%20more%20information!","_blank")}}></i>
                <i className='bx bxl-linkedin' onClick={()=>{window.open("https://www.linkedin.com/in/pranay-prasad-/","_blank")}}></i>
                <i className='bx bxl-github' onClick={()=>{window.open("https://github.com/pranayvips","_blank")}}></i>
                <i className='bx bxl-codepen' onClick={()=>{window.open("https://leetcode.com/u/pranay_4862/","_blank")}}></i>
              </nav>
         </button>
      <button onClick={()=>scroller(".contact")}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span>Contact</span>
         </button>
    
      </nav>
      <div>
        <button className="resume" onClick={()=>{window.open("/Pranay_resume.pdf","_blank")}}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>Resume</span>
        </button>
      </div>
    </header>
    <Outlet /> 
  </>;
}

export default Navbar;
