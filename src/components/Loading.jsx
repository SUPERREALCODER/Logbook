import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust timing as needed)
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 animate-fadeOut">
        <div className="h-16 w-16 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      </div>
    )
  );
};

export default LoadingScreen;
