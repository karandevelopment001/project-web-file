import React from 'react';

// import Mycard from './components/mycard';
// import Cardslide from './components/Cardslide';
// import Mytablat from './components/Mytablat';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Plans from './components/pages/Plans';
import Livedata from './components/pages/Mydata/Livedata';
import Feachers from './components/pages/Mydata/Feachers'
import About from './components/pages/About';
// import Aboutus from './components/pages/Mydata/Aboutus';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/Plans' element={<Plans/>}/>
          
      </Routes>
      </BrowserRouter>
      <div style={{display:'flex'}} >
      <Livedata
      count="500+"
      title="Actve users"/>

       <Livedata
      count="900+"
      title="Good Reviews"/>


       <Livedata
      count="600+"
      title="work completed"/>
</div>
    
    <Feachers/>
  
  <About/>
    

    </div>
  )
}

export default App;