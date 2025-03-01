import { useEffect } from 'react';
import './skills.css'

function Skills(){
    useEffect(() => {

          
    }, [])
    
    return (
        <section className='skills' data-scroll-section>
            <h1>Skill's</h1>
            <h3>I have experience working with the following technologies and programming languages.</h3>
            <div className="container">
                {/* FRONTEND HERE */}
                <div className="frontend">
                <h2 data-scroll data-scroll-class="project-h2" data-scroll-repeat="true">Frontend</h2>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-html5' ></i><span>HTML</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-css3' ></i><span>CSS</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxs-file-js' ></i><span>JS</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-bootstrap' ></i><span>Bootstrap</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-tailwind-css'></i><span>Tailwind CSS</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-react' ></i><span>React</span></p>
                </div>
                {/* BACKEND HERE */}
                <div className="backend">
                <h2 data-scroll data-scroll-class="project-h2" data-scroll-repeat="true">Backend</h2>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-nodejs' ></i><span>Node JS</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-php' ></i><span>PHP</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bx-data' ></i><span>My Sql</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-flask' ></i><span>Node JS</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-firebase'></i><span>Firebase</span></p>
                </div>
                {/* <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-mongodb' ></i><span>Mongo Db</span></p> */}
                {/* <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-typescript' ></i><span>Type Script</span></p> */}
                {/* LANGUAGES HERE */}
                <div className="language">
                <h2 data-scroll data-scroll-class="project-h2" data-scroll-repeat="true">Languages</h2>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-python'></i><span>Python</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-c-plus-plus' ></i><span>C++</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-java' ></i><span>Java</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-flutter' ></i><span>Flutter</span></p>
                </div>
                {/* OTHERS HERE */}
                <div className="other">
                <h2 data-scroll data-scroll-class="project-h2" data-scroll-repeat="true">Other's</h2>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-github' ></i><span>GitHub</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bx-code' ></i><span>Vs Code</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true"><i className='bx bxl-netlify' ></i><span>Netlify</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true" title='GreenSock Animation Platform'><i className='bx bx-cube-alt'></i><span>GSAP</span></p>
                <p data-scroll data-scroll-class="skill-p" data-scroll-repeat="true" title='Javascript Framework'><i className='bx bx-mouse' ></i><span>Locomotive Scroll</span></p>
                </div>
            </div> 
        </section> 
    )
}

export default Skills;