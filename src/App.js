import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact'
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140",style: { width: '50%' ,justifyContent: 'center'} },
  { url: "https://i01.appmifile.com/webfile/globalimg/in/cms/97E65ECC-E105-9A20-6BD7-8A3235104C57.jpg",style: { width: '50%' } }
];
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
      <About/>
      
      <Contact/>
      <SimpleImageSlider
        width={900}
        height={504}
        images={images}
        showBullets={true} showNavs={true}
        
      />
      
    </div>
  );
}

export default App;
