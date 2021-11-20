import React, {useContext} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Context } from "../../../context/CartContext";

export default function CartWidget({setCartOpen}) {
    const {unidades} = useContext(Context)  
    return(
        <div className="hidden md:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 relative">            
            <button type="button" className="ml-5 p-1 text-gray-400 hover:text-gray-700 focus:outline-none"
            onClick={(e) => {
                e.preventDefault();
                setCartOpen(true);
              }}>
                <div class="absolute text-xs rounded-full font-bold bg-red-700 text-white" style={{position: "absolute",marginLeft: "25px",marginTop: "0px",padding: "5px 10px"}}>{unidades}</div>
                <span className="sr-only">Ver Carrito de Compras</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    );
}