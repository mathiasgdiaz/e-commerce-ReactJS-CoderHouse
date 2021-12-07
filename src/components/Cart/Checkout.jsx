import React, {useContext, useState} from "react";
import CartConfirm from '../Cart/CartConfirm.jsx';
import { Context } from "../../context/CartContext";
import db from '../../data/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const {cart, unidades, total, onRemove, onClear} = useContext(Context)
    const [confirm, setConfirm] = useState('');
    const [load, setLoad] = useState(false);

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [phone, setPhone] = useState("");
    const [dir, setDir] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;
    
        //name
        if(name == ''){
          formIsValid = false;
          errors["name"] = "Debe completar su nombre";
        }

        //email
        if(email == ''){
            formIsValid = false;
            errors["email"] = "Debe completar su e-mail";
        }

        //phone
        if(phone == ''){
            formIsValid = false;
            errors["phone"] = "Debe completar su teléfono";
        }

        //email2
        if(email2 == ''){
            formIsValid = false;
            errors["email2"] = "Debe confirmar su e-mail";
        }
           
        //format e-mail
        if(email !== ''){
          let lastAtPos = email.lastIndexOf('@');
          let lastDotPos = email.lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "El e-mail no es válido";
          } else{
            if(email2 !== ''){
                if(email !== email2){
                    formIsValid = false;
                    errors["email2"] = "Su e-mail no coincide con la confirmación";
                }
            }
          }
        }
    
        setErrors(errors);
        return formIsValid;
      }

    const addOrder = (e) =>{
        e.preventDefault();
        if(handleValidation()){
            setLoad(true);
            const setCollection = collection(db, 'orders');
            addDoc(setCollection, {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    dir: dir,
                    city: city,
                    state: state,
                    zip: zip
                },
                items: cart?.map((item) => item),
                total: total
            })
            .then(function(docRef) {
                setLoad(false);
                onClear();
                setConfirm(docRef.id);
            })
            .catch(function(error) {
                console.error("Error: ", error);
            });
        }
    }

    return (
        <main>
             {load ? 
                <div class="flex items-center justify-center ">
                    <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin items-center"></div>
                </div> 
                :
                confirm == '' ?
                    <div  class="h-screen grid grid-cols-3">
                        <div class="lg:col-span-2 col-span-3 space-y-8 px-12">
                            <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                                <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                                    <div class="text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div class="text-sm font-medium ml-3">Checkout</div>
                                </div>
                                <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Completa tus datos a continuación, para finalizar la compra</div>
                            </div>
                            <div class="rounded-md">
                                <form id="payment-form" method="POST" action="">
                                    <section>
                                        <h2 class="capitalize tracking-wide text-lg font-semibold text-gray-700 my-2">Información de compra y facturación</h2>
                                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span class="text-right px-2">Apellido y Nombre *</span>
                                                <input name="name" class="focus:outline-none px-3 w-1/4" placeholder="Ingrese aquí su apellido y nombre" required="" onChange={evt => setName(evt.target.value)}/>
                                                <span class="error block sm:inline bg-red-100 border-red-400 text-red-700 rounded relative" role="alert">{errors["name"]}</span>
                                            </label>
                                            <label class="inline-flex w-2/4 border-b border-gray-200 h-12 py-3 items-center">
                                                <span class="text-right px-2">E-mail *</span>
                                                <input name="email" type="email" class="focus:outline-none px-3 w-1/2" placeholder="sucorreo@ejemplo.com" required="" onChange={evt => setEmail(evt.target.value)}/>
                                                <span class="error block sm:inline bg-red-100 border-red-400 text-red-700 rounded relative" role="alert">{errors["email"]}</span>
                                            </label>
                                            <label class="inline-flex w-2/4 border-b border-gray-200 h-12 py-3 items-center">
                                                <span class="text-right px-2">Teléfono *</span>
                                                <input name="email" type="number" class="focus:outline-none px-3 w-1/2" placeholder="Su número de teléfono" required="" onChange={evt => setPhone(evt.target.value)}/>
                                                <span class="error block sm:inline bg-red-100 border-red-400 text-red-700 rounded relative" role="alert">{errors["phone"]}</span>
                                            </label>
                                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span class="text-right px-2">Dirección</span>
                                                <input name="address" class="focus:outline-none px-3 w-1/2" placeholder="Indique su dirección completa" onChange={evt => setDir(evt.target.value)}/>
                                            </label>
                                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span class="text-right px-2">Ciudad</span>
                                                <input name="city" class="focus:outline-none px-3 w-1/2" placeholder="Aquí coloque la ciudad" onChange={evt => setCity(evt.target.value)}/>
                                            </label>
                                            <label class="inline-flex w-2/4 border-gray-200 py-3">
                                                <span class="text-right px-2">Provincia</span>
                                                <input name="state" class="focus:outline-none px-3 w-1/2" placeholder="Aquí la provincia" onChange={evt => setState(evt.target.value)}/>
                                            </label>
                                            <label class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                                <span class="text-right px-2 xl:px-0 xl:text-none">CP</span>
                                                <input name="postal_code" class="focus:outline-none px-3 w-full" placeholder="Puede indicar su Código Postal" onChange={evt => setZip(evt.target.value)}/>
                                            </label>
                                        </fieldset>
                                    </section>
                                </form>
                            </div>
                            <div class="rounded-md">
                                <section>
                                    <h2 class="capitalize tracking-wide text-lg font-semibold text-gray-700 my-2">Confirme su E-mail</h2>
                                    <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                            <span class="text-right px-2">E-mail *</span>
                                            <input name="email2" type="email" class="focus:outline-none px-3 w-1/4" placeholder="sucorreo@ejemplo.com" required="" onChange={evt => setEmail2(evt.target.value)}/>
                                            <span class="error block sm:inline bg-red-100 border-red-400 text-red-700 rounded relative" role="alert">{errors["email2"]}</span>
                                        </label>
                                    </fieldset>
                                </section>
                            </div>
                        </div>
                        <div className="w-screen max-w-md">
                            <div className="flex flex-col bg-white shadow-xl ">
                                <div className="flex-1 py-6 px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h1 className="text-lg font-medium text-gray-900">Carrito de La Tiendita</h1>
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
                                </div>
                                {total > 0 ?
                                    <button onClick={evt => addOrder(evt)} class="flex justify-center mt-4 items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-500 w-full">
                                    Confirmar Orden
                                    </button>
                                    :
                                    <span></span>
                                }
                            </div>
                        </div>
                    </div>
                :
                <CartConfirm id={confirm}/>
            }
        </main>
    )
}

export default Checkout