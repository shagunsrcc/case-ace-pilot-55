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
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">AI Case Deck Evaluator</h1>
          <p className="text-muted-foreground">
            Upload your decks and get instant AI-powered feedback on structure and logic
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              AI Evaluation Platform
              <ExternalLink className="w-4 h-4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[600px] border rounded-lg overflow-hidden">
              <iframe
                src="https://lovable.dev/projects/9743a41c-9e80-4ae0-a1ba-281231bc3874"
                width="100%"
                height="100%"
                className="border-0"
                title="AI Case Deck Evaluator Platform"
                allow="fullscreen"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseAcePilot;