import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([ newCategory, ...categories]);

    console.log(newCategory);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
        // setCategories = {setCategories} 
          // onNewValue = {(value) => onAddCategory(value)}
          onNewCategory = {onAddCategory}
        />

        { 
          categories.map((category) => (
            <GifGrid key={category} 
                      category = {category}/>
          )) 
        }
        
    </>
  )
}
 