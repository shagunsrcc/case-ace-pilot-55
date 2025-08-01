import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MockCaseInterviews = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'Mock Case Interviews - Consultory';
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
        src="https://lovable.dev/projects/af6d3da6-d644-4f83-bfe6-d345b8eb030c"
        className="w-full h-screen fixed top-0 left-0 z-0 border-0"
        title="Mock Case Interviews Platform"
        allow="fullscreen"
      />
    </>
  );
};

export default MockCaseInterviews;