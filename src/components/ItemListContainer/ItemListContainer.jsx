import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.jsx'
import categories from '../../data/categories.js'

import db from '../../data/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoad(true);
    const listItems = categoryId
      ? query(collection(db, 'items'), where('category', '==', parseInt(categoryId)))
      : collection(db, 'items');
      
    getDocs(listItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });        
        setProducts(results);
      })
      .finally(() => setLoad(false));
  }, [categoryId]);

  return(
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-900">{props.title ? props.title : categoryId ? categories.filter(i => i.category == categoryId)[0].desc : categories.filter(i => i.category == categoryId)[0].desc}</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
            {load ? <div class="flex items-center justify-center ">
                        <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                    </div> 
                  : <ItemList products={products}/>}
        </div>
      </div>
    </main>
  );
}

export default ItemListContainer;