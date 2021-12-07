import React, {Fragment, useContext} from "react";
import { NavLink } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Context } from "../../context/CartContext";

const Cart = ({cartOpen, setCartOpen}) => {
  const {cart, unidades, total, onRemove, onClear} = useContext(Context)

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => setCartOpen(false)}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Carrito de La Tiendita</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {unidades == 0 ? <h2 class="text-s title-font text-gray-500 tracking-widest text-center">No tiene productos en el carrito</h2> : ''}
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((item)=> (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.image}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={"/item/" + item.id}>{item.name}</a>
                                    </h3>
                                    <p className="ml-4">$ {item.subtotal}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Cantidad: {item.cant}</p>

                                  <div className="flex">
                                    <button type="button" className="font-medium text-red-600 hover:text-red-500" onClick={() => onRemove(item.id)}>
                                      Quitar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>$ {total}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Envío a calcular en el checkout</p>
                    <div className="mt-6">
                         <NavLink to={"/checkout"} exact onClick={() => setCartOpen(false)} className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-500">
                            Checkout
                         </NavLink>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        <button type="button" className="font-medium text-red-600 hover:text-red-500" onClick={() => onClear()}>
                            Vaciar carrito
                        </button>
                        {' '} o {' '}
                        <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" onClick={() => setCartOpen(false)}>
                            Continuar comprando<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Cart