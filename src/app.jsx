import { useEffect, useState } from "react";
import './index.css'

let scroll;

export const init = ()=>{
  if (scroll) {scroll.destroy()}

  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  setTimeout(() => {
    // scroll.on("scroll", () => {
      scroll.update();
    // });
  }, 2000);
}
export const update = ()=>{
  scroll.update()
}
export const scrollPos = ()=>{
  return scroll.scroll.instance.scroll.y;
}

export const scrollTo = (position)=>{
  scroll.scrollTo(position,{
    duration: 3000,
    easing: [0.22, 1, 0.36, 1], 
    disableLerp: true, 
  });
}

export const stopScroll = () => {
  scroll.stop()
}
export const startScroll = () => {
  scroll.start()
}

const App = () => {
  let currLoc;
  function scrollTop(){
    currLoc = window.location.pathname;
    scroll.scrollTo((currLoc=="/project")?0:".home",{
      duration: 3000,
      easing: [0.22, 1, 0.36, 1], 
      disableLerp: true, 
    });
  }
  const [scrollDisplay,setScrollDisplay] = useState(false); 
  useEffect(() => {
        currLoc = window.location.pathname;
        init();
          let isscrolling;
          let oldHeight = 0;
          scroll.on("scroll", (instance) => {
            clearTimeout(isscrolling);
            isscrolling = setTimeout(() => {
              if(instance.scroll.y > oldHeight){
                document.querySelector("header").classList.add("header")
              }else{
                document.querySelector("header").classList.remove("header")
              }
              oldHeight = instance.scroll.y;
            }, 10);
            if(instance.scroll.y > 100 && !scrollDisplay){
              setScrollDisplay(()=>true);
            }else if(instance.scroll.y < 100 ){
              setScrollDisplay(()=>false);
            }
          });
          return () => {
            if (scroll) scroll.destroy();
          };
    }, []);
    return <div className="top" onClick={scrollTop} style={{display:scrollDisplay?"block":"none"}}><i className='bx bxs-up-arrow-alt'></i></div>
}

export default App;