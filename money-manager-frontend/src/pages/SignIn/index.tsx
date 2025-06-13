
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Eye, EyeOff, DollarSign, TrendingUp, PieChart, Calculator } from 'lucide-react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mathematical symbols */}
        <div className="absolute top-20 left-20 text-white/10 text-6xl font-bold">$</div>
        <div className="absolute top-40 right-32 text-white/10 text-4xl">%</div>
        <div className="absolute bottom-32 left-16 text-white/10 text-5xl">∑</div>
        <div className="absolute bottom-20 right-20 text-white/10 text-4xl">π</div>
        <div className="absolute top-60 left-1/3 text-white/10 text-3xl">±</div>
        <div className="absolute top-32 right-1/4 text-white/10 text-4xl">∞</div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-lg rotate-12"></div>
        
        {/* Chart-like lines */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Trending line */}
          <path d="M 100 400 Q 300 350 500 300 T 900 200" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5" />
        </svg>
      </div>

      <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <DollarSign className="text-white font-bold text-2xl" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">MoneyManager</CardTitle>
          <CardDescription className="text-gray-300">
            Entre com sua conta para gerenciar suas finanças
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-white/10 text-gray-300 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoadingSpinner size="sm" className="mr-2" />
              ) : null}
              Entrar
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Não tem uma conta?{' '}
              <Link
                to="/register"
                className="font-medium text-purple-300 hover:text-purple-200 underline transition-colors"
              >
                Criar conta
              </Link>
            </p>
          </div>

          {/* Financial icons decoration */}
          <div className="flex justify-center items-center mt-8 space-x-6 text-white/30">
            <TrendingUp className="w-6 h-6" />
            <PieChart className="w-6 h-6" />
            <Calculator className="w-6 h-6" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;