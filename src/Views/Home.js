import './Home.css';
import React from 'react'
import Navbar from '../Layouts/Navbar';
import DefineImage from '../Layouts/DefineImage';
import VerticalLine from '../Layouts/VerticalLine';
import VerticalLine1 from '../Layouts/VerticalLine1';
import ImageTwo from '../Layouts/ImageTwo';
import Welcome from '../Layouts/Welcome';
import Explore from '../Layouts/Explore';
import Blog from '../Layouts/Blog';
import Contributors from '../Layouts/Contributors';
import SignUp from '../Layouts/SignUp';
import Footer from '../Layouts/Footer';

const Home = () => {


  return (
    <div>
    <Navbar/>
    <DefineImage />
    <VerticalLine />
    <Welcome />
    <VerticalLine1 />
    <ImageTwo />
    <VerticalLine1 />
    <Explore />
    <VerticalLine1 />
    <Blog />
    <VerticalLine1 />
    <Contributors />
    <VerticalLine1 />
    <SignUp/>
    <Footer/>

    
    

    </div>
  )
}

export default Home;