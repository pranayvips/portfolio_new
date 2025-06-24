import { useEffect, useState } from "react";
import "./prjScr.css";
import gsap from "gsap";
import { startScroll, stopScroll } from "../app";
// import { update } from "../../app";

const lang = {
  Html: "bxl-html5",
  Css: "bxl-css3",
  Javascript: "bxs-file-js",
  Python: "bxl-python",
  Flask: "bxl-flask",
  "Data Science": "bx-data",
  Flutter: "bxl-flutter",
  Firebase: "bxl-firebase",
};
// function itemMake(image, title, tech, description) {
//   // update()
//   return (
//     <>
//       <div
//         className="up"
//         data={description}
//         style={{ backgroundImage: `url(${"./img/" + image})` }}
//       >
//         <img src={"./img/" + image} alt="" />
//       </div>
//       <div className="bottom">
//         <h3>{title}</h3>
//         <div className="tech">
//           {tech.map((val) => {
//             return (
//               <p>
//                 <i className={"bx " + lang[val[0]]}></i>
//                 <span>{val[0]}</span>
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
function PrjScr() {

  const [item, setItem] = useState([]);
  const colors = ["#e34c26","#f1e05a","#663399","#6CAA9C","#A68265"];
  const [prjList, setPrjList] = useState({
    title: "",
    size: "",
    year: "",
    shortDesc: "",
    image: [],
    language: [],
    feature: ["", "", "", "", "", ""],
    future: [],
    bug: [],
    review: [],
    live: "",
    source: "",
  });
  const [filter, setFilter] = useState(true);
  function filterState() {
    if (!filter) {
      setFilter((prev) => !prev);
      gsap.to(".prjScreen .link p", {
        x: "0",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
    } else {
      setTimeout(() => {
        setFilter((prev) => !prev);
      }, 1000);
      gsap.to(".prjScreen .link p", {
        opacity: 0,
        x: "-100%",
        duration: 1,
        ease: "power1.out",
      });
    }
  }

  function itemMake(image, title, tech, description, id) {
    return (
      <>
        <div
          className="up"
          data={description}
          style={{ backgroundImage: `url(${"./img/" + image})` }}
          onClick={() => projectDisplay(id)}
          val = {id}
        >
          <img src={"./img/" + image} alt="" />
        </div>
        <div className="bottom">
          <h3>{title}</h3>
          <div className="tech">
            {tech.map((val) => {
              return (
                <p>
                  <i className={"bx " + lang[val[0]]}></i>
                  <span>{val[0]}</span>
                </p>
              );
            })}
          </div>
        </div>
      </>
    );
  }
function projectDisplay(projectId) {
    fetch("/content.json")
      .then((response) => response.json())
      .then((text) => {
        setPrjList(() => {
          return {
            title: text[projectId]["title"],
            size: text[projectId]["size"],
            year: text[projectId]["year"],
            shortDesc: text[projectId]["shortDesc"],
            image: text[projectId]["images"],
            language: text[projectId]["language"],
            feature: text[projectId]["features"],
            future: text[projectId]["future"],
            bug: text[projectId]["bugs"],
            review: text[projectId]["review"],
            source: text[projectId]["source"],
            live: text[projectId]["live"],
          };
        });
        setTimeout(() => {
            var swiperTestimonial = new Swiper(".testimonial__container", {
              spaceBetween: 24,
              loop: true,
              grabCursor: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          }, 1000);
          stopScroll()
          document.querySelector(".prjScreen .blackout").style.display = "block";
          document.querySelector(".prjScreen .item-display").style.display = "block";
          if(window.innerWidth<600){
          }
          else if(document.querySelector(".prjScreen").getBoundingClientRect().top>0){
              document.querySelector(".prjScreen .blackout").style.top = `-${document.querySelector(".prjScreen").getBoundingClientRect().top}px`;
              document.querySelector(".prjScreen .item-display").style.top = `-${document.querySelector(".prjScreen").getBoundingClientRect().top}px`;
          }else{
              document.querySelector(".prjScreen .blackout").style.top = `${Math.abs(document.querySelector(".prjScreen").getBoundingClientRect().top)}px`;
              document.querySelector(".prjScreen .item-display").style.top = `${Math.abs(document.querySelector(".prjScreen").getBoundingClientRect().top)}px`;
            }
      });
  }
  useEffect(() => {
    function loader() {
      fetch("/content.json")
        .then((response) => response.json())
        .then((text) => {
          setItem(() => []);
          for (let key in text) {
            setItem((prev) => [
              ...prev,
              [
                text[key]["images"][0][0],
                text[key]["title"],
                text[key]["language"],
                text[key]["shortDesc"],
                key
              ],
            ]);
          }
        });
    }
    loader();
        // setTimeout(() => {
    //     updateScroll()
    // }, 1500);
  }, []);

  return (
    <section className="prjScreen" data-scroll-section>
      <div className="tops" data-scroll data-scroll-sticky>
        <h1>
          <i className="bx bx-briefcase"></i> Project's
        </h1>
        <button onClick={filterState}>
          Filter <i className="bx bx-filter-alt"></i>
        </button>
      </div>
      <div className="link">
        <p style={{ display: filter ? "block" : "none" }}>Web</p>
        <p style={{ display: filter ? "block" : "none" }}>React</p>
        <p style={{ display: filter ? "block" : "none" }}>Python</p>
        <p style={{ display: filter ? "block" : "none" }}>Flutter</p>
        <p style={{ display: filter ? "block" : "none" }}>Flask</p>
      </div>
      <h6>
        Showing results for <span>All Project's</span>
      </h6>

      <h2>Loading...</h2>
      <div className="display" id="display">
        {item.map((items, index) => {
          return (
            <div
              className="item"
              key={index}
              data-scroll
              data-scroll-class={index % 2 == 0 ? "item1" : "item2"}
              data-scroll-repeat="true"
            >
              {itemMake(items[0], items[1], items[2], items[3], items[4])}
            </div>
          );
        })}
      </div>

        <div className="item-display">
                <div className="first">
                  <h6>{prjList["year"]}</h6>
                  <h1>{prjList["title"]}</h1>
                  <div className="links">
                    {prjList["language"].map((ele) => {
                      return <i className={"bx " + lang[ele[0]]}></i>;
                    })}
                    {/* <i className="bx bxl-html5"></i>
                    <i className="bx bxl-html5"></i> */}
                  </div>
                  <h2>{prjList["shortDesc"]}</h2>
                  <div className="testimonial__container container swiper">
                    <div className="swiper-wrapper">
                      {prjList["image"].map((ele) => {
                        return (
                          <img src={"/img/" + ele[0]} alt="" className="swiper-slide" />
                        );
                      })}
                      {/* <img src="/3.png" alt="" className="swiper-slide"/>
                                <img src="/3.png" alt="" className="swiper-slide"/>
                                <img src="/3.png" alt="" className="swiper-slide"/>
                                <img src="/3.png" alt="" className="swiper-slide"/>
                                <img src="/3.png" alt="" className="swiper-slide"/> */}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                  {/* <div className="image">
                    <img src="/3.png" alt="" id="slider-1" />
                    <img src="/3.png" alt="" id="slider-2"/>
                    <img src="/3.png" alt="" id="slider-3"/>
                    <img src="/3.png" alt="" id="slider-4"/> */}
                  {/* <div className="slider-nav">
                        <a href="#slider-1"></a>
                        <a href="#slider-2"></a>
                        <a href="#slider-3"></a>
                    </div> */}
                  {/* </div> */}
                </div>
                <div className="second">
                  <div className="language">
                    <h2>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                        />
                      </svg>
                      Languages
                    </h2>
                    {prjList["language"].map((ele,index) => {
                      return (
                        <>
                          <p>{ele[0]}</p>
                          <h6 style={{backgroundColor: colors[index],width: `${ele[1]}%`}} data={ele[1]}></h6>
                        </>
                      );
                    })}
                    {/* <p>Html</p>
                    <h6></h6>
                    <p>css</p>
                    <h6></h6>
                    <p>js</p>
                    <h6></h6>
                    <p>python</p>
                    <h6></h6> */}
                  </div>
                  <div className="features">
                    <h2>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                      Features
                    </h2>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][0][0]}
                    </p>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][1][0]}
                    </p>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][2][0]}
                    </p>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][3][0]}
                    </p>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][4][0]}
                    </p>
                    <p>
                      <i className="bx bxs-badge-check"></i> {prjList["feature"][5][0]}
                    </p>
                  </div>
                </div>
                <div className="future">
                  <div className="fut">
                    <h2>
                      <i className="bx bx-time-five"></i> Future Improvement
                    </h2>
                    {prjList["future"].map((ele) => {
                      return (
                        <p className="left">
                          <i className="bx bx-timer"></i> {ele}
                        </p>
                      );
                    })}
                  </div>
                  <div className="bug">
                    <h2>
                      <i className="bx bxs-bug"></i> Bugs
                    </h2>
                    {prjList["bug"].map((ele) => {
                      return (
                        <p className="right">
                          <i className="bx bx-bug"></i> {ele}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="review">
                  <h2>
                    <i className="bx bxs-star-half"></i> Reviews
                  </h2>
                  <div className="total">
                    <h3>Total Review</h3>
                    <h4>{prjList["review"].length}</h4>
                  </div>
                  <div className="rating">
                    <h3>Average Rating</h3>
                    <h4>{prjList["review"].reduce((acc,curr)=>acc+parseInt(curr[1]),0)/prjList["review"].length} {prjList["review"].map(()=>{return <i className='bx bxs-star' ></i>;})}</h4>
                  </div>
                  <div className="rate">
                    <fieldset className="rating-container">
                      <input type="radio" name="rating" id="rate5" />
                      <label htmlFor="rate5" className="user-rate" val="5">
                        <svg id="Object" viewBox="0 0 1122 1122">
                          <defs>
                            {/* <style>.cls-1{fill:#f7db5e;}.cls-2{fill:#f3cc30;}.cls-3{fill:#edbd31;}</style> */}
                          </defs>
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name="rating" id="rate4" />
                      <label htmlFor="rate4" className="user-rate" val="4">
                        <svg id="Object" viewBox="0 0 1122 1122">
                          <defs>
                            {/* <style>.cls-1{fill:#f7db5e;}.cls-2{fill:#f3cc30;}.cls-3{fill:#edbd31;}</style> */}
                          </defs>
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name="rating" id="rate3" />
                      <label htmlFor="rate3" className="user-rate" val="3">
                        <svg id="Object" viewBox="0 0 1122 1122">
                          <defs>
                            {/* <style>.cls-1{fill:#f7db5e;}.cls-2{fill:#f3cc30;}.cls-3{fill:#edbd31;}</style> */}
                          </defs>
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name="rating" id="rate2" />
                      <label htmlFor="rate2" className="user-rate" val="2">
                        <svg id="Object" viewBox="0 0 1122 1122">
                          <defs>
                            {/* <style>.cls-1{fill:#f7db5e;}.cls-2{fill:#f3cc30;}.cls-3{fill:#edbd31;}</style> */}
                          </defs>
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <input type="radio" name="rating" id="rate1" />
                      <label htmlFor="rate1" className="user-rate" val="1">
                        <svg id="Object" viewBox="0 0 1122 1122">
                          <defs>
                            {/* <style>.cls-1{fill:#f7db5e;}.cls-2{fill:#f3cc30;}.cls-3{fill:#edbd31;}</style> */}
                          </defs>
                          <path
                            className="cls-2"
                            d="m570.497,252.536l93.771,190c1.543,3.126,4.525,5.292,7.974,5.794l209.678,30.468c8.687,1.262,12.156,11.938,5.87,18.065l-151.724,147.895c-2.496,2.433-3.635,5.939-3.046,9.374l35.817,208.831c1.484,8.652-7.597,15.25-15.367,11.165l-187.542-98.596c-3.085-1.622-6.771-1.622-9.857,0l-187.542,98.596c-7.77,4.085-16.851-2.513-15.367-11.165l35.817-208.831c.589-3.436-.55-6.941-3.046-9.374l-151.724-147.895c-6.286-6.127-2.817-16.803,5.87-18.065l209.678-30.468c3.45-.501,6.432-2.668,7.974-5.794l93.771-190c3.885-7.872,15.11-7.872,18.995,0Z"
                          />
                          <path
                            className="cls-1"
                            d="m561,296.423l-83.563,161.857c-4.383,8.49-12.797,14.155-22.312,15.024l-181.433,16.562,191.688,8.964c12.175.569,23.317-6.81,27.543-18.243l68.077-184.164Z"
                          />
                          <path
                            className="cls-3"
                            d="m357.284,838.933l-4.121,24.03c-1.484,8.652,7.597,15.25,15.367,11.165l187.541-98.596c3.086-1.622,6.771-1.622,9.857,0l187.541,98.596c7.77,4.085,16.851-2.513,15.367-11.165l-35.817-208.831c-.589-3.435.55-6.941,3.046-9.374l151.724-147.894c6.287-6.127,2.818-16.802-5.87-18.065l-70.23-10.205c-113.59,203.853-287.527,311.181-454.405,370.34Z"
                          />
                        </svg>
                      </label>
                      <div className="rating-value"></div>
                    </fieldset>
                    <button>Submit</button>
                  </div>
                </div>
                <div className="bottom">
                  <button onClick={()=>{
                    if(prjList["source"]!=""){   
                        window.open(prjList["source"],"_blank")
                    }
                  }}>
                    <i className="bx bx-code-alt"></i> Source Code
                  </button>
                  <button onClick={()=>{
                document.querySelector(".prjScreen .blackout").style.display = "none";
                document.querySelector(".prjScreen .item-display").style.display = "none";
                startScroll()
              }}><i className='bx bx-x-circle' ></i></button>
                  <button className={(prjList["live"]!="")?"active":"not"} onClick={()=>{
                    if(prjList["live"]!=""){   
                        window.open(prjList["live"],"_blank")
                    }
                  }}>
                    <i className="bx bx-broadcast"></i> Live App
                  </button>
                </div>
              </div>
              <div className="blackout" onClick={()=>{
                document.querySelector(".prjScreen .blackout").style.display = "none";
                document.querySelector(".prjScreen .item-display").style.display = "none";
                startScroll()
              }}></div>
      
    </section>
  );
}

export default PrjScr;
