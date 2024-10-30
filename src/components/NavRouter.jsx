import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import ContactMain from './ContactMain'
import ContactSecondary from './ContactSecondary'
import Home from './Home'
import PostDetail from './PostDetail'


const NavRouter = () => {
    // const location=useLocation();
  return (
    <div>
       <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          {/* Redirect to the default nested route */}
          {/* use navigate to replace as soon we hit contact page one of the nested rout will be displayed by default */}
          <Route index element={<Navigate to="main" replace />} />
             <Route path="main" element={<ContactMain/>} />
             <Route path="secondarycontact" element={<ContactSecondary/>} />
        </Route>

            {/* Parameter input through url */}
        <Route path="/posts/:id" element={<PostDetail />} />
       
    </Routes>
    </div>
  )
}

export default NavRouter
