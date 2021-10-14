import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (    
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto pb-3 pt-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img className="h-14 w-14" src="logo_tienda_2.jpg" alt="La Tiendita" />
                <span class="font-semibold text-2xl tracking-tight ml-5 text-red-700">La Tiendita</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-20 flex items-baseline space-x-4">
                  <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Home </a>
                  <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Productos </a>
                  <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Categorías </a>
                  <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Outlet </a>
                  <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Feed </a>
                  <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"> Contacto </a>
                </div>               
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Abrir menú</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="p-1 text-gray-400 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" className="ml-5 p-1 text-gray-400 hover:text-gray-700 focus:outline-none">
                 <span className="sr-only">View notifications</span>
                 <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Home </a>
                <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Productos </a>
                <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Categorías </a>
                <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Outlet </a>
                <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Feed </a>
                <a href="#" className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Contacto </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
  )
}