import React from 'react'
import { NavLink } from 'react-router-dom'
import CentalBlogs from '../components/CentalBlogs'
import FactCounter from '../components/FactCounter'
import Banner from '../components/Banner'

const Blog = () => {
  return (
<>
<div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{maxWidth: 900}}>
    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Blog &amp; News</h4>
    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><navlink to="/">Home</navlink></li>
      <li className="breadcrumb-item"><a href="#">Pages</a></li>
      <li className="breadcrumb-item active text-primary">Blog &amp; News</li>
    </ol>    
  </div>
</div>
<CentalBlogs />
<FactCounter />
<Banner />

</>
  )
}

export default Blog
