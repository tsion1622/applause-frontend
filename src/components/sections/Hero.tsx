import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-quantum-black text-soft-white px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-ion-blue to-fusion-pink">
        Build a Business <br className="hidden md:inline" /> mobile app in minutes, not months.
      </h2>
      <h4 className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
        It's Simple, Prompt. Review. Deploy!
      </h4>
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant="ghost" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button onClick={() => navigate('/signup')}>
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default Hero;
