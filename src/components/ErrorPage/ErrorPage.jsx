
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-base md:text-xl mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <button 
        onClick={handleGoBack} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Go Back Home
      </button>
    </div>
  );
}
