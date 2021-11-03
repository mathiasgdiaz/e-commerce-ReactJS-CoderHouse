import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import data from '../../data/data.js'
import categories from '../../data/categories.js'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState('');
    const [load, setLoad] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoad(true);
        const getItem = new Promise((res)=>
        {
        setTimeout(()=>{
            res(data);
        },1000);
        });
        getItem.then((data) => {
            setItem(data.filter((i) => i.id === itemId))
            setCategory(data.filter((i) => i.id === itemId)[0].category);
        }).finally(() => setLoad(false));
    },[itemId]);

    const itemDetail = item.map((item) =>
        <ItemDetail key={item.id} item={item}/>
    )
    
    return(
        <main>            
            {load 
                ?   <div class="flex items-center justify-center ">
                        <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                    </div> 
                :
                <div>
                    <header className="bg-white shadow">
                        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <NavLink to={"/"} exact>
                                <h1 className="text-xl font-bold text-gray-900">Inicio</h1>
                            </NavLink>
                            <span className="pl-2 pr-2 text-xl"> / </span>
                            <NavLink to={"/category/" + category} exact>
                                <h1 className="text-xl font-bold text-gray-900">{categories.filter((i) => i.category === category)[0].text}</h1>
                            </NavLink>
                        </div>
                    </header>
                    <section class="text-gray-700 body-font overflow-hidden bg-white mt-5">
                        <div class="container px-5 py-10 mx-auto">
                            {itemDetail}
                        </div>
                    </section>
                </div>
            }
        </main>
    );
}

export default ItemDetailContainer;