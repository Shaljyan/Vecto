import React, {useState} from 'react';
import styled from 'styled-components';

function Sidebar() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen); 

  return (
   <Nav  style={{width: isOpen ? "666px": "0"}}>
    <ul>
<li>
    <a href="#">
        <img src="/icons/ICON - Search.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>Search</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/icons/Group 46.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>Home</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/icons/Group 56.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>TV Shows</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/icons/Group 54.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>Movies</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/icons/Group 53.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>Genres</span>
    </a>
</li>
<li>
    <a href="#">
        <img src="/icons/Group 47.png" onMouseOver={toggle}/>
     <span style={{display: isOpen ? "block" : "none"}}>Watch Later</span>
    </a>
</li>
</ul>
<Div>
    <span style={{display: isOpen ? "block" : "none"}}>
        <CloseIcon>
    LANGUAGE
    </CloseIcon>
    </span>
    <span style={{display: isOpen ? "block" : "none"}}>
    <CloseIcon>
        GET HELP
    </CloseIcon>
    </span>
    <span style={{marginLeft: isOpen ? "50px" : "0px"}}>
        <CloseIcon style={{display: isOpen ? "block" : "none"}} onClick={toggle}>
         EXIT
         </CloseIcon>
         </span>
</Div>
   </Nav>

  )
  
}

  
export default Sidebar

const Nav = styled.div`

position:fixed;
top:0;
left:-50px;
height:100%;
background: linear-gradient(to right, black 23%, transparent 100%);
padding: 6px 14px;

ul{
    margin-top:134px;
}

ul li{
    position:relative;
    height:50px;
    width:30%;
    margin: 0 5px;
    list-style:none;
    line-height:50px;
}

ul li a{
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    transition:all 0.4s ease;
    border-radius: 5px;
    height:40px;
    font-size:20px;
    
}

ul li a img{
    padding:20px;
    width:15px;
    
}

ul li a:hover{
    color:#fff;
    background:rgba(43, 52, 85, 0.8);
    }

`
const Div = styled.div`
position relative;
bottom:-60px;
left:67px;
color:rgba(211, 215, 231, 0.8);
font-size:15px;
font-family: 'Montserrat', sans-serif;
height:30px;

`
const CloseIcon = styled.div`
height:30px;
`