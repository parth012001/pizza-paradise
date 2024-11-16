import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60"
            alt="Pizza Hero"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Delicious Pizza,
            <br />
            <span className="text-red-500">Delivered Hot</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Experience the perfect blend of flavors with our handcrafted pizzas. 
            Made with fresh ingredients and baked to perfection.
          </p>
          <div className="mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition duration-300"
            >
              Order Now
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Pizza Paradise?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We're not just making pizzas, we're creating memories.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Fresh Ingredients</h3>
              <p className="mt-4 text-gray-500 text-center">
                We use only the freshest ingredients, sourced locally whenever possible.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Fast Delivery</h3>
              <p className="mt-4 text-gray-500 text-center">
                Hot and fresh pizza delivered to your doorstep in 30 minutes or less.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💝</span>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Made with Love</h3>
              <p className="mt-4 text-gray-500 text-center">
                Each pizza is handcrafted with care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Pizzas Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Most Popular Pizzas
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Try our customers' favorites and taste the difference.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sample Pizza Cards */}
            {[
              {
                name: "Margherita Supreme",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
                description: "Fresh tomatoes, mozzarella, basil, and our special sauce"
              },
              {
                name: "Pepperoni Paradise",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60",
                description: "Loaded with pepperoni and extra cheese"
              },
              {
                name: "Veggie Delight",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
                description: "A medley of fresh vegetables and herbs"
              }
            ].map((pizza, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={pizza.image}
                  alt={pizza.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{pizza.name}</h3>
                  <p className="mt-2 text-gray-600">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition duration-300"
            >
              View Full Menu
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-red-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to try our pizzas?</span>
              <span className="block text-red-200">Order now and get 10% off!</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-full shadow">
                <Link
                  to="/menu"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-red-600 bg-white hover:bg-red-50 transition duration-300"
                >
                  Order Now
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
