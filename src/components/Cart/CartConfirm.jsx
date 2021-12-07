import React from 'react';

const CartConfirm = ({id}) => {
    return(
        <div class="bg-gradient-to-r from-purple-300 to-blue-200">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-200 text-center pt-8">
                        <h1 class="text-9xl font-bold text-purple-400">Genial!</h1>
                        <h1 class="text-6xl font-medium py-8">Su orden fue confirmada</h1>
                        <p class="text-2xl pb-8 px-12 font-medium">El identificador de su orden es : {id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartConfirm;