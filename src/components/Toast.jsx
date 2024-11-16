function Toast({ message }) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
        {message}
      </div>
    )
  }
  
  export default Toast