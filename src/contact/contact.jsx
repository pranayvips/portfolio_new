import emailjs from "emailjs-com";
import "./contact.css"
function Contact(){

    function contactMe(event){
        
        emailjs.send("service_47zjwto", "template_knunars", {
            name: document.querySelector(".contact input").value,
            message: document.querySelector(".contact textarea").value
          },"4t_xVcQnm2u6_Gvxo").then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );

          document.querySelector(".contact input").setAttribute("disabled",true)
        document.querySelector(".contact textarea").setAttribute("disabled",true)
        event.currentTarget.textContent = "Sent";
    }
    return <section className="contact" data-scroll-section>
        <div className="left">
            <h1>Contact Me</h1>
            <a href="mailto:prasadpranay2005@gmail.com" target="_blank">
                <span><i className='bx bxl-gmail' ></i></span>
                <p><span>E-mail</span><span>prasadpranay2005@gmail.com</span></p>
            </a>
            <a href="https://api.whatsapp.com/send?phone=916203241318&text=Hello,%20more%20information!" target="_blank">
                <span><i className='bx bxl-whatsapp'></i></span>
                <p><span>Whatsapp</span><span>Chat</span></p>
            </a>
            <a href="tel:6203241418" target="_blank">
                <span><i className='bx bx-phone-call' ></i></span>
                <p><span>Contact</span><span>+91 6203241318</span></p>
            </a>
            <nav>
                <h2>More ways to connect</h2>
                <ul>
                    <li value="Instagram"><a href="https://www.instagram.com/pranay.4862/" target="_blank"><i className='bx bxl-instagram' ></i></a></li>
                    {/* <li value="Github"><a href="" target="_blank"><i className='bx bxl-github' ></i></a></li> */}
                    <li value="Twitter"><a href="https://x.com/Pranay4862" target="_blank"><i className='bx bxl-twitter' ></i></a></li>
                    <li value="Linked In"><a href="https://www.linkedin.com/in/pranay-prasad-/" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                </ul>
            </nav>
        </div>
        <div className="right">
            <h1>Get in Touch</h1>
            <div>
                <input type="text" placeholder="Your Name" />
                <textarea name="" id="" placeholder="Your message"></textarea>
                <button onClick={contactMe}>Connect <i className='bx bx-right-arrow-alt' ></i></button>
            </div>
        </div>
    </section>
}

export default Contact;