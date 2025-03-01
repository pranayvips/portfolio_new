import "./edu.css";

function Education() {
  return (
    <section className="education" data-scroll-section>
      <h1><i className='bx bx-book-open' ></i>
Education</h1>
      <div className="container">
        <div className="college" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3">
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
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            Bachelor's In Computer Application (B.C.A)
          </h2>
          <h4>
            Vivekananda Institute of Professional Studies
            <a href="https://maps.app.goo.gl/u8zFPLbTYAdjmwDY7" target="_blank"> 
            <i className="bx bxs-map"></i>
            </a>
          </h4>
          <p>
            I am currently in my fourth semester of the second year, pursuing my
            degree as part of the 2023-2026 batch, with a strong academic record
            and a cumulative CGPA of 8.4. <a href=""><i className='bx bx-share' ></i></a>
          </p>
        </div>
        <div className="line"></div>

        <div className="school" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1">
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
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            Senior Secondary, Class 12
            <sup style={{ fontSize: ".5rem",marginRight:"20px"}}>th</sup>
             C.B.S.E
          </h2>
          <h4>
            Kendriya Vidyalaya, Thane
            <a href="https://maps.app.goo.gl/gLHMptjaZwMNtnDU7" target="_blank">
              <i className="bx bxs-map"></i>
            </a>
          </h4>
          <p>
            I completed my 12th grade in 2023, specializing in the Science
            stream (Physics, Chemistry, Math), including Computer Science,
            achieving an aggregate percentage of 75.2%.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
