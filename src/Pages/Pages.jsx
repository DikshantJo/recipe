
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

import {Routes,Route,BrowserRouter} from 'react-router-dom'
const Pages = () => {
  return (
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cuisine/:type" element={<Cuisine />}/>
            <Route path="/Searched/:search" element={<Searched />}/>
            <Route path="/Recipe/:id" element={<Recipe />}/>
        </Routes>
    
  )
}

export default Pages