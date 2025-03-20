
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Button from '../components/Button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Implement the bypass authentication as requested
    // Even with empty fields, it will redirect to dashboard
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Successfully signed in!');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex min-h-screen">
        {/* Left side - Sign In Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 animate-fadeIn">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-2 text-xl font-bold">
                <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-lg">
                  S
                </span>
                <span>Signa Connect</span>
              </Link>
              <h1 className="mt-6 text-2xl font-bold">Welcome back</h1>
              <p className="mt-2 text-foreground/70">Sign in to your account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground/80">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-border bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-accent rounded border-border focus:ring-accent"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-foreground/80">
                  Remember me
                </label>
              </div>
              
              <Button
                type="submit"
                className="w-full"
                isLoading={isLoading}
              >
                Sign In
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-foreground/60">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-border rounded-lg text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors"
                >
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-border rounded-lg text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors"
                >
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 12.017C20 6.484 15.522 2 10 2z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="mt-6 text-center text-sm text-foreground/70">
              Don't have an account?{' '}
              <Link to="/signup" className="text-accent hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right side - Background Image and Info */}
        <div className="hidden lg:block lg:w-1/2 bg-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-foreground opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M15%2018.54c-2.516%200-4.56-2.043-4.56-4.56%200-2.516%202.043-4.56%204.56-4.56%202.516%200%204.56%202.043%204.56%204.56%200%202.516-2.043%204.56-4.56%204.56zm0-7.12c-1.36%200-2.56%201.15-2.56%202.56%200%201.36%201.15%202.56%202.56%202.56%201.36%200%202.56-1.15%202.56-2.56%200-1.36-1.15-2.56-2.56-2.56z%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.1%29%22%2F%3E%3C%2Fsvg%3E')] opacity-20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <div className="max-w-md text-white">
              <h2 className="text-2xl font-bold mb-6">Breaking barriers in sign language communication</h2>
              <p className="mb-6 text-white/80">
                Signa Connect helps bridge the gap between deaf and hearing communities through innovative AI-powered sign language recognition and translation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white/80">
                    Real-time sign language recognition with over 98% accuracy
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white/80">
                    Supports multiple sign languages from around the world
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white/80">
                    Available on all devices with seamless synchronization
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-white/30"></div>
                    <div className="w-8 h-8 rounded-full bg-white/40"></div>
                  </div>
                  <div className="text-sm text-white/80">
                    Joined by over <span className="font-semibold text-white">10,000+</span> users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
