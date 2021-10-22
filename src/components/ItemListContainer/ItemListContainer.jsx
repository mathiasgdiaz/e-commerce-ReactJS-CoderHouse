import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList.jsx'
import data from '../../data/data.js'

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

    useEffect(() => {
        const listProducts = new Promise((res, rej)=>
        {
          setTimeout(()=>{
            res(data);
          },3000);
        });
        listProducts.then((data) => {
          setProducts(data);
          setLoad(false);
        });
    },[products]);

    return(
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              {load ? <div class="flex items-center justify-center ">
                          <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                      </div> 
                    : <ItemList products={products}/>}
          </div>
        </div>
    );
}

export default ItemListContainer;