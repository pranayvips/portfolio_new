import { useEffect } from "react";
import "./about.css";
import gsap from "gsap";
import { scrollTo } from "../../app";

function About() {
  function scrollContact(){
    scrollTo(".contact")
  }
  useEffect(() => {
    const string = document.querySelector(".about .string");
    string.addEventListener("mousemove", (event) => {
      if (event.y - string.getBoundingClientRect().y < 45) {
        gsap.to(".about .string svg path", {
          // M 10 25 Q 250 25 990 25
          attr: {
            d: `M 0 25 Q ${event.x - string.getBoundingClientRect().x} ${
              event.y - string.getBoundingClientRect().y - 30
            } 990 25`,
          },
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(".about .string svg path", {
          attr: {
            d: `M 0 25 Q ${event.x - string.getBoundingClientRect().x} ${
              event.y - string.getBoundingClientRect().y
            } 990 25`,
          },
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
    string.addEventListener("mouseleave", () => {
      gsap.to(".about .string svg path", {
        attr: { d: "M 0 25 Q 450 25 990 25" },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    });

    gsap.to(".about .left .tech i", {
      x: "-1700%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      className="about"
      data-scroll-section
    >
      <h1
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        <i className="bx bx-user"></i> About Me
      </h1>
     
      <div className="string">
        <svg viewBox="10 10 990 50">
          <path
            fill="transparent"
            stroke="#787586"
            d="M 0 25 Q 450 25 990 25"
          ></path>
        </svg>
      </div>
      <h5> 
        As a 4th-semester BCA student at{" "}
        <a href="https://vips.edu/" target="_blank">
          VIPS
        </a>{" "}
        of batch 2023-2026, I have a deep interest in technology, focusing on
        full stack, web & app development, always eager to learn and innovate.
      </h5>
      <div
        className="contain"
        data-scroll
        data-scroll-class="about-show"
        data-scroll-repeat="true"
      >
        <div className="left">
          <div className="circle"></div>
          <h2>
            <span>30+</span>
            <span>Completed Project's</span>
          </h2>
          <div className="tech">
            <i className="bx bxl-html5"></i>
            <i className="bx bxl-css3"></i>
            <i className="bx bxs-file-js"></i>
            <i className="bx bxl-react"></i>
            <i className="bx bxl-nodejs"></i>
            <i className="bx bxl-python"></i>
            <i className="bx bxl-mongodb"></i>
            <i className="bx bx-data"></i>
            <i className="bx bxl-java"></i>
            <i className="bx bxl-flutter"></i>
            <i className="bx bxl-flask"></i>
            <i className="bx bxl-c-plus-plus"></i>
            <i className="bx bxl-php"></i>
            <i className="bx bxl-tailwind-css"></i>
            <i className="bx bxl-bootstrap"></i>
            <i className="bx bxl-firebase"></i>
          </div>
        </div>
        <div className="right">
          {/* <p>
            I enjoy problem-solving through efficient coding and creative
            solutions. With hands-on experience in Python, C, C++, and Java.
          </p> */}
          <h3>Extracurricular Activities</h3>
          <ul>
            <li>
              I love playing Badminton
              <div className="show-case">
                <svg fill="#000000" viewBox="0 0 330 330">
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M325.525,71.248c-0.003-0.009-0.005-0.018-0.007-0.026c-4.775-16.267-13.089-30.406-24.709-42.026 c-11.62-11.62-25.76-19.934-42.026-24.709c-0.011-0.003-0.022-0.006-0.032-0.008C248.617,1.508,237.84,0,226.72,0 c-23.876,0-48.459,6.874-71.094,19.881c-0.005,0.002-0.011,0.005-0.016,0.008c-12.687,7.293-24.5,16.371-35.113,26.983 c-10.613,10.612-19.691,22.427-26.984,35.115C74.301,115.412,68.686,153,78.102,185.122c0.004,0.012,0.006,0.022,0.009,0.034 c3.305,11.262,8.309,21.502,14.931,30.596L4.398,304.394c-5.858,5.857-5.858,15.355,0,21.213c2.929,2.93,6.767,4.394,10.606,4.394 c3.838,0,7.678-1.465,10.606-4.394l88.644-88.643c9.092,6.62,19.332,11.624,30.594,14.93c0.005,0.001,0.01,0.003,0.015,0.004 c10.137,2.974,20.919,4.482,32.046,4.482c0.003,0,0.002,0,0.005,0c23.876,0,48.467-6.878,71.104-19.889 c12.685-7.291,24.499-16.369,35.116-26.984c10.613-10.615,19.691-22.43,26.982-35.114 C329.328,140.964,334.945,103.371,325.525,71.248z M292.721,141.315l-13.125-13.125l6.645-6.645l13.67-13.671 C299.384,118.851,296.96,130.17,292.721,141.315z M124.032,205.973c-6.05-6.05-10.814-13.132-14.226-21.13l35.44-35.439 l35.355,35.355l-35.439,35.439C137.164,216.786,130.081,212.021,124.032,205.973z M110.906,115.064l13.127,13.126l-20.315,20.316 C104.243,137.528,106.667,126.211,110.906,115.064z M201.815,163.546l-35.355-35.355l35.355-35.355l35.355,35.355L201.815,163.546z M293.822,71.537l-35.439,35.439l-35.356-35.355l35.439-35.439c7.998,3.412,15.079,8.177,21.129,14.226 C285.645,56.458,290.409,63.539,293.822,71.537z M222.112,30.111l-20.297,20.297L188.687,37.28 C199.75,33.072,211.036,30.642,222.112,30.111z M141.71,68.086c5.993-5.993,12.438-11.385,19.247-16.108l8.727,8.726l10.918,10.918 l-17.678,17.678l-17.678,17.679l-19.645-19.646C130.325,80.522,135.717,74.079,141.71,68.086z M181.518,226.27l20.297-20.298 l13.128,13.128C203.877,223.308,192.592,225.739,181.518,226.27z M261.92,188.294c-5.995,5.994-12.44,11.386-19.249,16.108 l-19.644-19.643l35.356-35.355l19.644,19.644C273.304,175.855,267.912,182.3,261.92,188.294z"></path>
                  </g>
                </svg>
                <span>Qualified for regional-level in badminton.</span>
              </div>
            </li>
            <li>
              Play chess
              <a href="https://www.chess.com" target="_blank">
                (<i className="bx bxs-chess"></i>)
              </a>
              .
              <div className="show-case">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C12.5523 0 13 0.447715 13 1V2H14C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4H13L13 6.13426C14.1873 6.46304 15.1164 7.36761 15.6095 8.53557C16.7887 7.70672 18.0146 7.33092 19.1893 7.38765C20.8173 7.46629 22.1801 8.37142 22.9824 9.70379C24.5267 12.2682 23.9536 16.1461 20.2565 19.277L21.1708 21.1056C21.8357 22.4354 20.8688 24 19.382 24H4.61805C3.13129 24 2.1643 22.4354 2.82919 21.1056L3.74347 19.277C0.0464058 16.1461 -0.526611 12.2682 1.01767 9.70378C1.82002 8.37141 3.18278 7.46628 4.8108 7.38766C5.9855 7.33093 7.21132 7.70675 8.3906 8.5356C8.88363 7.36763 9.81271 6.46305 11 6.13427L11 4H10C9.44771 4 9 3.55228 9 3C9 2.44772 9.44771 2 10 2H11V1C11 0.447715 11.4477 0 12 0ZM8.01285 10.8098C6.84088 9.69153 5.74956 9.34466 4.90727 9.38533C4.0034 9.42898 3.2202 9.92317 2.73099 10.7355C1.80208 12.2781 1.87787 15.2648 5.34014 18H10.4437C10.1872 17.422 9.88055 16.7115 9.57338 15.9543C9.19326 15.0173 8.80704 13.9956 8.51427 13.0583C8.27053 12.2779 8.06505 11.476 8.01285 10.8098ZM13.5564 18H18.6599C22.1222 15.2648 22.198 12.2781 21.2691 10.7355C20.7799 9.92318 19.9967 9.42898 19.0928 9.38533C18.2505 9.34464 17.1592 9.6915 15.9872 10.8097C15.935 11.4759 15.7296 12.2779 15.4858 13.0583C15.193 13.9956 14.8068 15.0173 14.4267 15.9543C14.1195 16.7115 13.8129 17.422 13.5564 18ZM18.382 20H12H5.61804L4.61805 22H19.382L18.382 20ZM12 16.5687C12.1822 16.1478 12.3779 15.6844 12.5734 15.2025C12.9433 14.2907 13.307 13.3255 13.5768 12.462C13.8564 11.5668 14 10.8867 14 10.5C14 10.4699 13.9996 10.4401 13.9989 10.4105C13.959 8.87922 12.9603 8 12 8C11.0398 8 10.0411 8.87924 10.0012 10.4105C10.0004 10.4401 10 10.47 10 10.5C10 10.8867 10.1437 11.5668 10.4233 12.462C10.693 13.3255 11.0568 14.2907 11.4267 15.2025C11.6222 15.6844 11.8179 16.1478 12 16.5687Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
                <span>Currently hold an Elo rating of 1050 in chess.</span>
              </div>
            </li>
            <li>Typing. 
                <div className="show-case">
                <i className='bx bxs-keyboard' ></i>
                <span>Achieved a top typing speed of 99 WPM, with an average of 75 WPM.</span>
                </div>
            </li>
            <li>Drawing.
                <div className="show-case">
                <i className='bx bx-paint' ></i>
                <span>Checkout my Drawing's</span>
                <a href="">here</a>
                </div>
            </li>
            <li>Travelling. 
                <div className="show-case">
                <i className='bx bx-globe' ></i>
                <span>Traveled to various destinations across India.</span>
                </div>
            </li>
          </ul>
          <p>Feel free to explore my projects and connect with me.</p>
          <div className="links">
            <button
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
              onClick={scrollContact}
            >
              Contact <i className="bx bxs-contact"></i>
            </button>
            <div>
              <div
                val="Leetcode"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-5"
                onClick={()=>{window.open("https://leetcode.com/u/pranay_4862/","_blank")}}
              >
                <i className="bx bxl-codepen"></i>
              </div>
              <div
                val="Github"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-10"
                onClick={()=>{window.open("https://github.com/pranayvips","_blank")}}
              >
                <i className="bx bxl-github"></i>
              </div>
              <div
                val="Linked in"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-15"
                onClick={()=>{window.open("https://www.linkedin.com/in/pranay-prasad-/","_blank")}}
              >
                <i className="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
