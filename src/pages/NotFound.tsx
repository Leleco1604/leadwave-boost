
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl font-bold text-orange-500 mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="button-primary inline-flex items-center"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 12H5M5 12L12 19M5 12L12 5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
