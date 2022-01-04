import React from 'react';

const CartContext = React.createContext({
    items:[{name:'', amount:0}],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;