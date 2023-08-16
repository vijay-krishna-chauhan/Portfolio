import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Banner />
      <Features />
      <Projects />
      <Resume/>
      <Contact />
     
      
      </div>
    </div>
  );
}

export default App;
