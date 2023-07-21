import React,{useRef} from 'react'
import { Link,NavLink } from 'react-router-dom'
import{Container,Row,Col} from 'reactstrap'
import '../styles/header.css' 
const Header = () => {
  const navLinks=[
    {
      path:'/',
      display:'Home'
    },
    {
      path:'/bakoB1',
      display:'BakoB1'
    },
    {
      path:'/services',
      display:'Services'
    },
    {
      path:'/blog',
      display:'Blog'
    },
    {
      path:'/contact',
      display:'Contact'
    },

  ]
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu-active");

  return (
   <div className="header">
    {/* header--top
    <div className="header-top">
      <Container>
        <Row>
        <Col lg='6' md='6' sm='6'>
            <div className="header-top-right">
              <Link to='/'>logo</Link>

            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="header-top-left f-flex align-items-center justify-content-end gap-3 ">
              <span ><i class="ri-phone-fill"></i>50222820</span>
              <span><i class="ri-user-line"></i>register</span>
            </div>
          </Col>
          
        </Row>
        

      </Container>
    </div> */}
    {/* main--navigation */}
    <div className="main-nav">
      <div className="navigation-wrapper">
       <span className="mobile-menu">
       <i class="ri-menu-line" onClick={toggleMenu}></i>
       </span>
      </div>
      <div className="navigation"  ref={menuRef} onClick={toggleMenu}>
        <div className="menu">
        {navLinks.map((item,index)=>
          <NavLink to={item.path} key={index} className={navClass=>navClass.isActive ? 'nav-Active nav-item':'nav-item'}>{item.display}</NavLink>
        )}
        </div>
      </div>
    </div>
   </div>
  )
}

export default Header