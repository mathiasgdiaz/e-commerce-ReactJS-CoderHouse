import React, {useState, useEffect, useContext} from 'react';
import {useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.jsx'
import NotFound from '../NotFound/NotFound.jsx';
import { CategoriesContext } from "../../context/CategoriesContext.jsx"

import db from '../../data/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const {categories} = useContext(CategoriesContext);
  const [load, setLoad] = useState(true);
  const { categoryKey } = useParams();

  useEffect(() => {
    setLoad(true);    

    const listItems = categoryKey
      ? query(collection(db, 'items'), where('category', '==', categoryKey))
      : collection(db, 'items');
      
    getDocs(listItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });        
        setProducts(results);
      })
      .finally(() => setLoad(false));
  }, [categoryKey]);
  console.log(categories);
  return(
    <main>
      {
        load ? 
            <div class="flex items-center justify-center ">
                <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin items-center"></div>
            </div> 
          : 
          products.length > 0 ?
            <div>
              <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-xl font-bold text-gray-900">{props.title ? props.title : categories.length > 0 && categoryKey != undefined ? categories.filter(i => i.key == categoryKey)[0].desc : ''}</h1>
                </div>
              </header>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                  <ItemList products={products}/>
                </div>
              </div>
            </div>
          :
          <NotFound/>
    }
    </main>
  );
}

export default ItemListContainer;