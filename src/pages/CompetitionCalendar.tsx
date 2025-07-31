import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompetitionCalendar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title
    document.title = 'Competition Calendar - Consultory';
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
          
          <h1 className="text-3xl font-bold mb-2">Competition Calendar</h1>
          <p className="text-muted-foreground">
            Never miss a deadline with our comprehensive corporate case competition tracker
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Calendar Platform
              <ExternalLink className="w-4 h-4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[600px] border rounded-lg overflow-hidden">
              <iframe
                src="https://preview--calendar-consultory.lovable.app/"
                width="100%"
                height="100%"
                className="border-0"
                title="Competition Calendar Platform"
                allow="fullscreen"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetitionCalendar;