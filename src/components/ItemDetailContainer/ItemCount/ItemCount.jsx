import React, {useState} from 'react'

const ItemCount = ({initStock, addToCart, setCartOpen}) => {
    const [stock, setStock] = useState(initStock)
    const [unidades, setUnidades] = useState(0)

    const handleStock={
        addStock:()=>{
            setUnidades(unidades+1)
            setStock(stock-1)
        },
        lessStock:()=>{
            setUnidades(unidades-1)
            setStock(stock+1)
        }
    }
      
    return (
        <div class="flex float-right w-full pl-50">
            <div class="custom-number-input h-10 w-50 ml-20">
                <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Stock: {stock}</label>
                <div class="flex flex-row h-10 w-20 rounded-lg relative bg-transparent mt-1">
                    {!unidades == 0
                        ?   <button onClick={handleStock.lessStock} data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span class="m-auto text-2xl font-thin">−</span>
                            </button>
                        : ''
                    }
                    <input type="number" class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value={unidades}></input>
                    {!stock == 0
                        ?   <button onClick={handleStock.addStock} data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span class="m-auto text-2xl font-thin">+</span>
                            </button>
                        : ''
                    }
                </div>
            </div>
            <div class="flex ml-5 pt-7">
                <button class="flex ml-90 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({unidades});
                    setCartOpen(true);
                  }}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount
