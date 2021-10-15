import React from 'react';

const ItemListContainer = (props) => {
    return(
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-40 h-96 flex justify-center">
              <h2 className="text-xl font-bold text-gray-900">{props.mensaje}</h2>
            </div>
          </div>
        </div>
    );
}

export default ItemListContainer;