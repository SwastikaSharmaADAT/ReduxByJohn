import React, { useState } from 'react' ;
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseSquare } from "react-icons/ai";



const Nav = styled.div`
    float:right ;
    width:4rem;
    height:4rem;
    button{
        width:4rem;
        height:4rem;
    }
`;

const DROPDOWN = styled.div`
    display:block;
    width:200px;
    height:300px;
    backgroundcolor:red;
`


function Navbar(){
    const [isShowBar, setShowBar] = useState(true) ;
    function showDropDownMenu(){
        setShowBar(!isShowBar) ;
    }
    return (
        <Nav>
            <button onClick={showDropDownMenu}>
                {isShowBar?<FaBars/>:<AiFillCloseSquare />}
            </button>
        </Nav>
    ) ;

}

export default Navbar; 