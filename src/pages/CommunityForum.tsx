import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const CommunityForum = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.title = 'Community Forum - Consultory';

    const sendSession = (session: any) => {
      if (iframeRef.current?.contentWindow) {
        const safeSession = session
          ? {
            access_token: session.access_token,
            refresh_token: session.refresh_token,
            user: session.user,
            expires_at: session.expires_at,
            expires_in: session.expires_in,
            token_type: session.token_type,
          }
          : null;

        iframeRef.current.contentWindow.postMessage(
          { type: 'supabase-auth', session: safeSession },
          'http://localhost:8081'
        );
      }
    };

    // 🔔 Send session on login/logout/refresh
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        sendSession(session);
      }
    );

    // 🔔 Send initial session once on mount
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        sendSession(data.session);
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Button
        onClick={() => navigate('/')}
        className="fixed top-2 left-2 md:top-4 md:left-4 z-40 bg-background text-foreground px-2 py-1 rounded shadow-lg hover:bg-background/80 transition border border-border"
      >
        <ArrowLeft />
      </Button>

      <iframe
        ref={iframeRef}
        src="http://localhost:8081"
        className="w-full h-screen "
        title="Community Forum Platform"
        allow="fullscreen"
      />
    </>
  );
};

export default CommunityForum;
