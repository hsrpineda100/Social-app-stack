import { Switch, Route } from "wouter";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Auth } from "@/pages/Auth";
import { AuthCallback } from "@/pages/AuthCallback";
import { Analytics } from "@/pages/Analytics";
import { ProfileSetup } from "@/pages/ProfileSetup";
import { Dashboard } from "@/pages/Dashboard";
import { LandingPage } from "@/pages/LandingPage";
import { Header } from "@/components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "./lib/supabase";

function App() {
  const { data: user } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    },
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {user && <Header />}
        <main className="container mx-auto px-4 py-4">
          <Switch>
            <Route path="/" component={user ? Dashboard : LandingPage} />
            <Route path="/auth" component={Auth} />
            <Route path="/auth/callback" component={AuthCallback} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile/:username" component={Profile} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/profile-setup" component={ProfileSetup} />
            <Route path="/home" component={Home} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;