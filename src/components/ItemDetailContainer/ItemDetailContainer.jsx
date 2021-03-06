import React, {useState, useEffect, useContext} from 'react';
import {useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import NotFound from '../NotFound/NotFound.jsx';
import { CategoriesContext } from "../../context/CategoriesContext.jsx"
import db from '../../data/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ({setCartOpen}) => {
    const [item, setItem] = useState([]);
    const {categories} = useContext(CategoriesContext);
    const [category, setCategory] = useState('');
    const [load, setLoad] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoad(true);
        const getItem = doc(db, 'items', itemId);
        getDoc(getItem)
          .then((res) => {
            const result = { id: res.id, ...res.data() };
            setItem(result);
            setCategory(result.category);
          })
          .finally(() => {
            setLoad(false);
          });
    }, [itemId]);
    return(
        <main>            
            {load 
                ?   <div class="flex items-center justify-center ">
                        <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                    </div> 
                :
                item.category != undefined
                ?
                <div>
                    <header className="bg-white shadow">
                        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <NavLink to={"/"} exact>
                                <h1 className="text-xl font-bold text-gray-900">Inicio</h1>
                            </NavLink>
                            <span className="pl-2 pr-2 text-xl"> / </span>
                            <NavLink to={"/category/" + category} exact>
                                <h1 className="text-xl font-bold text-gray-900">{categories.length > 0 && category != undefined ? categories.filter(i => i.key == category)[0].name : ''}</h1>
                            </NavLink>
                        </div>
                    </header>
                    <section class="text-gray-700 body-font overflow-hidden bg-white mt-5">
                        <div class="container px-5 py-10 mx-auto">
                        <ItemDetail key={item.id} item={item} setCartOpen={setCartOpen}/>
                        </div>
                    </section>
                </div>
                :
                <NotFound/>
            }
        </main>
    );
}

export default ItemDetailContainer;