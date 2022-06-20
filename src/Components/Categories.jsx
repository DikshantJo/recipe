import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

const Categories = () => {
  return (
    <List>
       {/*  <div>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </div>
        <div>
            <FaHamburger />
            <h4>American</h4>
        </div>
        <div>
            <GiNoodles />
            <h4>Thai Food</h4>
        </div>
        <div>
            <GiChopsticks />
            <h4>Japanese</h4>
        </div> */}

        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai Food</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}


const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0;`

const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background: linear-gradient(35deg,#494949, #313131);
width:6rem;
height:6rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color:#fff;
    font-size:0.8rem;
}

svg {
    color:#fff;
    font-size:1.4rem;
}

&.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
        color:#fff;
    }
    h4{
        color:#fff;
    }
}

`
export default Categories