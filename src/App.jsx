import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <>
      

      <Routes>
         <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
       
      </Route>
      </Routes>
   
    </>
  );
}

export default App;