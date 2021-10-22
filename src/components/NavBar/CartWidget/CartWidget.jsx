import React from 'react';
import { BellIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export default function CartWidget() {
    return(
        <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="ml-5 p-1 text-gray-400 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">Ver Carrito de Compras</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    );
}