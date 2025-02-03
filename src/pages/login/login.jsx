import React , {useState} from 'react'

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!username || !password) {
        setError('Both fields are required!');
      } else {
        setError('');
        // Proceed with form submission or authentication logic here
        console.log('Form submitted', { username, password });
        const credentials = {
            username_dress: username,
            password_dress: password,
          };
    
          // Store the credentials dictionary as a string in localStorage
          localStorage.setItem('credentials', JSON.stringify(credentials));
    
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100  text-sky-400  font-bold">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome back</h2>
  
          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
  
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-4 ">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
              <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
export default login