import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommunityForum = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'Community Forum - Consultory';
  }, []);

  return (
    <>
      <Button 
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-40 bg-background text-foreground px-4 py-2 rounded shadow-lg hover:bg-background/80 transition border border-border"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
      
      <iframe
        src="https://preview--crimson-talk-hive.lovable.app/"
        className="w-full h-screen fixed top-0 left-0 z-0 border-0"
        title="Community Forum Platform"
        allow="fullscreen"
      />
    </>
  );
};

export default CommunityForum;