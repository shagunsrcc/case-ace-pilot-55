import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrendingCompetitions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'Trending Competitions - Consultory';
  }, []);

  return (
    <>
      <Button 
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-40 bg-white text-black px-4 py-2 rounded shadow-lg hover:bg-gray-200 transition"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
      
      <iframe
        src="https://preview--trendace-dash.lovable.app/"
        className="w-full h-screen fixed top-0 left-0 z-0 border-0"
        title="Trending Competitions Platform"
        allow="fullscreen"
      />
    </>
  );
};

export default TrendingCompetitions;