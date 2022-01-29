import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


export const GiftExpertApp = () => {

const [categories, setCategories] = useState([]);


  return (
    <>
      <h1>GiftExpertApp</h1>
      <h2>Busca los gifts que desees!</h2>
      <AddCategory 
        setCategories={setCategories}
      />

      <ol>
        {
            categories.map( category =>  ( 
                <GiftGrid 
                  key={category}
                  category={category}
                /> 
            ))
        }
      </ol>
    </>
  )
}
