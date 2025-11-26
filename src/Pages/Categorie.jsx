import React from 'react'
import Nav_bare from '../Components/NavBare'
import './Categorie.css'
import FlipCard  from '../Components/FlipCard';
import BooksAPI from '../Components/Books.JSX';
import MathBooks from '../Components/Math';
import PhysiqueBooks from '../Components/Physique';
import PhysicsBooks from '../Components/Math';
const data = {
  name: 'ENSAF Library',
  location: 'Bâtiment A',
  image: 'https://cdn-icons-png.flaticon.com/512/29/29302.png',
  bio: 'Vous pouvez déposer vos livres ici.',
};
function Categorie() {
  return (
    <div className='contenaire'>
      <Nav_bare/>
      {/* <MathBooks/> */}
      <PhysicsBooks/>

      
    </div>
  )
}

export default Categorie;
