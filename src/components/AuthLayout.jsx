function AuthLayout({ children, title, subtitle }) {
    return (
      <div className="min-h-screen flex">
        {/* Left side - Auth Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-md w-full space-y-8">
            {children}
          </div>
        </div>
  
        {/* Right side - Pizza Image and Text */}
        <div className="hidden lg:block lg:flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60"
            alt="Delicious Pizza"
          />
          <div className="relative z-20 h-full flex flex-col justify-center px-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl">
              {subtitle}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  🔥
                </span>
                <span>Fresh from the oven to your doorstep</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  ⚡
                </span>
                <span>Fast delivery under 30 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  💝
                </span>
                <span>Made with love and premium ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AuthLayout