import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseAcePilot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'AI Case Deck Evaluator - Consultory';
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
        src="https://lovable.dev/projects/9743a41c-9e80-4ae0-a1ba-281231bc3874"
        className="w-full h-screen fixed top-0 left-0 z-0 border-0"
        title="AI Case Deck Evaluator Platform"
        allow="fullscreen"
      />
    </>
  );
};

export default CaseAcePilot;