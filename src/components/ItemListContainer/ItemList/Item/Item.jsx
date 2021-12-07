import React from 'react'
import { NavLink } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <NavLink to={"/item/" + product.id} exact className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src={product.image} alt="" />
                </div>
                <div class="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"></span>
                    <h2 class="mt-2 mb-2  font-bold">{product.name}</h2>
                    <p class="text-sm">{product.desc}</p>
                    <div class="mt-3 flex items-center">
                        <span class="font-bold text-xl">$ {product.price}</span>
                    </div>
                </div>
                <div class="p-4 border-t border-b text-xs text-gray-700">
                     
                </div>
            </NavLink>
        </div>
    )
}

export default Item
