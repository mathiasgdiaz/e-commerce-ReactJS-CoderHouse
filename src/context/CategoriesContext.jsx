import React, {useState, useEffect} from "react";
import db from '../data/firebase.js';
import { collection, getDocs, query, orderBy} from 'firebase/firestore';

const CategoriesContext = React.createContext()

const Categories = ({children}) =>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const listCategories = query(collection(db, "categories"), orderBy("order"));
      getDocs(listCategories)
        .then((res) => {
          const results = res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });        
          setCategories(results);
      });
    }, []);
    
    return <CategoriesContext.Provider value={{categories}}>
        {children}
    </CategoriesContext.Provider>

}

export {Categories, CategoriesContext }