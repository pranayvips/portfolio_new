import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home/home'
import Navbar from './navbar/navbar'
import About from './home/about/about'
import Education from './home/education/edu'
import Project from './home/project/project'
import App from './app'
import Skills from './home/skills/skills'
import Contact from './contact/contact'
import PrjScr from './project/prjScr'

createRoot(document.body).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<>
            <Home />
            <About />
            <Education />
            <Skills />
            <Project />
            <Contact />
            <App />
          </>} />
          
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/project" element={<Navbar />}>
          <Route index element={
            <>
            <PrjScr />
            <Contact />
            <App />
            </>
        } />
            
        </Route>
      </Routes>
    </BrowserRouter>
)
