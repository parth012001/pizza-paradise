import { useState } from 'react'
import PizzaCard from '../components/PizzaCard'

// Sample pizza data (we can move this to a separate file later)
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil, and extra virgin olive oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop&q=60",
    category: "vegetarian"
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60",
    category: "meat"
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
    category: "vegetarian"
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60",
    category: "meat"
  },
  {
    id: 5,
    name: "Supreme",
    description: "Pepperoni, sausage, bell peppers, onions, olives, and mushrooms",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=800&auto=format&fit=crop&q=60",
    category: "specialty"
  },
  {
    id: 6,
    name: "Mediterranean",
    description: "Feta cheese, spinach, olives, sun-dried tomatoes, and herbs",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
    category: "vegetarian"
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and ground beef",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=60",
    category: "meat"
  },
  {
    id: 8,
    name: "Hawaiian",
    description: "Ham, pineapple, and extra mozzarella cheese",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60",
    category: "specialty"
  },
  {
    id: 9,
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken, ranch sauce, and blue cheese crumbles",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=60",
    category: "specialty"
  }
]

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPizzas = selectedCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      {/* Pizza Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'all' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedCategory('vegetarian')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'vegetarian' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700'
          }`}
        >
          Vegetarian
        </button>
        <button 
          onClick={() => setSelectedCategory('meat')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'meat' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700'
          }`}
        >
          Meat Lovers
        </button>
        <button 
          onClick={() => setSelectedCategory('specialty')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'specialty' 
              ? 'bg-red-600 text-white' 
              : 'bg-white text-gray-700'
          }`}
        >
          Specialty
        </button>
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPizzas.map(pizza => (
          <PizzaCard 
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
