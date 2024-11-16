import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some delicious pizzas to get started!</p>
          <Link 
            to="/menu" 
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
          >
            View Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div 
              key={`${item.id}-${item.size}`}
              className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-green-600 font-bold">${item.totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <MinusIcon className="h-5 w-5 text-gray-600" />
                </button>
                
                <span className="w-8 text-center">{item.quantity}</span>
                
                <button 
                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <PlusIcon className="h-5 w-5 text-gray-600" />
                </button>

                <button 
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="p-1 rounded-full hover:bg-gray-100 ml-2"
                >
                  <TrashIcon className="h-5 w-5 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>${(cartTotal + 5).toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="w-full bg-red-600 text-white py-2 rounded-full mt-6 hover:bg-red-700"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
