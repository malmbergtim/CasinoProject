import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Card from '../components/Card';
import Games from "./Games"
import {Outlet} from 'react-router-dom'

const Wrapper = styled.section`

  padding: 2em;
  background: #FFC300;  
  width: 100%;
`;


const Container = styled.div`

height: 100vh;
margin-top: 15px;
padding-right: 100px;
padding-left: 100px;
margin-right: auto;
margin-left: auto;
  
`

const Layout = () => {
    return(
        <>
        <Wrapper>
          <Navbar/>
          </Wrapper>
       <Container><Outlet/></Container>
        </>
    )
}


export default Layout