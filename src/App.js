import './App.css';
import About from './Components/About/About';
import Academic from './Components/Academic/Academic';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import SmallHeader from './Components/Header/SmallHeader';
import Project from './Components/Projects/Project';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <div className='sm:hidden'>
        <Header />
      </div>
      <div className='hidden sm:block'>
        <SmallHeader />
      </div>
      <Body />
      <About />
      <Academic />
      <Project />
      <Skills />
      <Footer />
        <div className="stear relative w-10 h-10 bg-amber-800 right-0">
          <a href='#' style={{border: "none", display: "flex", alignItems: "center", justifyContent: "center"}} className="w-10 h-10"><i class="fa fa-caret-up"></i></a>
        </div>
      {/* <div className='navigate absolute z-999'>
      </div> */}
    </div>
  );
}

export default App;
