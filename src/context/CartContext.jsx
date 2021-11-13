import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (product, cant) =>{
        const itemExiste=cart.find(item=>item.id===product.id)
        if(!itemExiste){
            setCart(
                [...cart, 
                    {
                        id:product.id, 
                        name:product.name, 
                        image:product.image, 
                        price:product.price, 
                        cant:cant, 
                        subtotal:(product.price*cant)
                    }
                ]
            )
            setTotal(total+(parseFloat(product.price)*cant))
            setUnidades(unidades+1)
        } else {
            const cartAux=cart.map((item)=>{
                if(item.id===product.id){
                    item.cant+=cant
                    item.subtotal+=(product.price*cant)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(product.price*cant))
        }
    } 

    const onRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        const delItem = cart.filter((item) => item.id === id)
        setCart(newCart);
        setTotal(total-(delItem[0].subtotal))
    }

    const onClear = () => {
        setCart([]);
        setUnidades(0);
        setTotal(0);
    }

    
    return <Context.Provider value={{cart, unidades, total, onAdd, onRemove, onClear}}>
        {children}
    </Context.Provider>

    }


export {CartFuncion, Context }