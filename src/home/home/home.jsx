import { useEffect, useRef } from "react";
import "./home.css";
function Home() {
  const hasRun = useRef(false);
  useEffect(() => {
    function roleChanger(){
      hasRun.current = true;      
      const roles = [" App Developer","Frontend Developer","Backend Developer","Full Stack Developer"];
      const target = document.querySelector(".home .left h6");
      target.textContent = "";
      let textlength = 0;
      let intervalSetter;
      let role = 0;
       //  setting the text
       function setText(){
         if(role==roles.length){
           role = 0;
          }
          intervalSetter = setInterval(() => {
            if(target.textContent.length > 40){
              target.textContent = roles[3];
              return ;
            }
           if(textlength==roles[role].length-1){
             clearInterval(intervalSetter);
            }
            target.textContent += roles[role][textlength];
            textlength++;
          }, 200);
          //  clearing back the text here
          setTimeout(() => {
            intervalSetter = setInterval(() => {
              if(textlength<2){
                role ++;
                clearInterval(intervalSetter);
                setText()
              }
              target.textContent = target.textContent.slice(0,textlength);
              textlength--;
            }, 200);
          }, roles[role].length*200 + 1000);
        }
        setText()

    }
    if(!hasRun.current){
      roleChanger()
    }

  }, [])
  
  return (
    <section className="home" data-scroll-section  data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
      <div className="left">
        <h6>Web devloper</h6>
        <h1><span>Pranay</span> <span>Prasad</span></h1>
        <p>
        Aspiring software developer pursuing Bachelor’s in Computer Applications, with a passion for coding and innovation.
        </p>
        <button onClick={()=>{window.open("/Pranay_resume.pdf","_blank")}}>
          <p>
            <span>Resume</span>
            <span>Download</span>
          </p>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="right" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <div>
          <img src="/dp.png" alt="" />
        </div>
      </div>
      <img src="/box.png" alt="" className="home-bg" />
    </section>
  );
}

export default Home;
