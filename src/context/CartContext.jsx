import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const calculatePrice = (basePrice, size) => {
    const sizeMultipliers = {
      small: 0.8,
      medium: 1,
      large: 1.2
    }
    return basePrice * sizeMultipliers[size]
  }

  const addToCart = (pizza, size) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === pizza.id && item.size === size
      )

      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id && item.size === size
            ? { 
                ...item, 
                quantity: item.quantity + 1,
                totalPrice: calculatePrice(pizza.price, size) * (item.quantity + 1)
              }
            : item
        )
      }

      return [...prevItems, {
        ...pizza,
        size,
        quantity: 1,
        totalPrice: calculatePrice(pizza.price, size)
      }]
    })
  }

  const removeFromCart = (pizzaId, size) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === pizzaId && item.size === size))
    )
  }

  const updateQuantity = (pizzaId, size, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(pizzaId, size)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === pizzaId && item.size === size
          ? { 
              ...item, 
              quantity: newQuantity,
              totalPrice: calculatePrice(item.price, size) * newQuantity
            }
          : item
      )
    )
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + (calculatePrice(item.price, item.size) * item.quantity), 
    0
  )

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}