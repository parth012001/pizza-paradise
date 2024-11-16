function Logo({ className = "h-8 w-8" }) {
    return (
      <div className="flex items-center space-x-2">
        <svg 
          className={className} 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2z" 
            fill="#FFA500"
          />
          <path 
            d="M32 7C18.193 7 7 18.193 7 32s11.193 25 25 25 25-11.193 25-25S45.807 7 32 7z" 
            fill="#FF6B6B"
          />
          {/* Pepperoni */}
          <circle cx="22" cy="24" r="4" fill="#8B0000" />
          <circle cx="38" cy="28" r="4" fill="#8B0000" />
          <circle cx="30" cy="42" r="4" fill="#8B0000" />
          {/* Herbs */}
          <circle cx="26" cy="32" r="2" fill="#228B22" />
          <circle cx="42" cy="38" r="2" fill="#228B22" />
          <circle cx="34" cy="20" r="2" fill="#228B22" />
        </svg>
        <span className="text-xl font-bold text-gray-800">Pizza Paradise</span>
      </div>
    )
  }
  
  export default Logo