import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Toast from './Toast'

function PizzaCard({ id, name, description, price, image, category }) {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [showToast, setShowToast] = useState(false)
  const { addToCart } = useCart()
  
  const sizeMultipliers = {
    small: 0.8,
    medium: 1,
    large: 1.2
  }

  const calculatePrice = () => {
    return (price * sizeMultipliers[selectedSize]).toFixed(2)
  }

  const handleAddToCart = () => {
    const pizzaWithPrice = {
      id,
      name,
      description,
      price,
      image,
      category
    }
    addToCart(pizzaWithPrice, selectedSize)
    
    // Show toast notification
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex justify-center space-x-2 mb-4">
            <button 
              onClick={() => setSelectedSize('small')}
              className={`px-4 py-1 rounded-full text-sm ${
                selectedSize === 'small' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Small
            </button>
            <button 
              onClick={() => setSelectedSize('medium')}
              className={`px-4 py-1 rounded-full text-sm ${
                selectedSize === 'medium' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Medium
            </button>
            <button 
              onClick={() => setSelectedSize('large')}
              className={`px-4 py-1 rounded-full text-sm ${
                selectedSize === 'large' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Large
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">
              ${calculatePrice()}
            </span>
            <button 
              onClick={handleAddToCart}
              className="bg-red-600 text-white px-4 py-2 rounded-full 
                hover:bg-red-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {showToast && <Toast message={`${name} (${selectedSize}) added to cart!`} />}
    </>
  )
}

export default PizzaCard