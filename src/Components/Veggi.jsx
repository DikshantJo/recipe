

import { useEffect,useState } from "react";

import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


const Veggi = () => {

  const [Veggi,setVeggi] = useState([]);

  useEffect (()=>{
    getVeggi();
  },[])

  const getVeggi = async () => {

    const check =localStorage.getItem('Veggie');

    if(check) {
      setVeggi(JSON.parse(check));
    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`);
      const data = await api.json();
      console.log(data)
      localStorage.setItem('Veggie',JSON.stringify(data.recipes));
      setVeggi(data.recipes);
    }
   
  }
  return (
   <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
          <Splide options={{
            perPage:3,pagination:false,drag:'free',
            gap: '5rem'
          }}>
              {Veggi.map((recipe) =>{
                return (
                  <SplideSlide key={recipe.id}>
                      <Card>
                        <Link to = {'/recipe/'+recipe.id}>
                          <p>{recipe.title}</p>
                          <img src={recipe.image} alt={recipe.title} />
                          <Gradient />
                        </Link>
                      </Card> 
                  </SplideSlide>
                )
              })}
          </Splide>
      </Wrapper>
   </div>
  )
}


const Wrapper = styled.div`
  margin:4rem 0rem;
`;
const Card = styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;

  img {
    border-radius:2rem;
    height:100%;
    width:100%;
    position:absolute;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:999;
    left:50%;
    bottom:0;
    transform:translate(-50%,0%);
    color:#fff;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
  }
`;
const Gradient = styled.div `
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggi