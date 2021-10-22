import React from 'react'
import Item from './Item/Item.jsx'

const ItemList = ({products}) => {
    const productsList = products.map((product) =>
        <Item key={product.id} product={product}/>
    )
    return (
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
                {productsList}
            </div>
        </div>
    )
}

export default ItemList
  