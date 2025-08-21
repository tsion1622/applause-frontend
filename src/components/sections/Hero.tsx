import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-quantum-black text-soft-white px-6 text-center">
      <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ion-blue to-fusion-pink">
        Build a Business mobile app in minutes, not months.
      </h2>
      <h4 className="text-xl mb-8 text-gray-300">
        It's Simple, Prompt. Review. Deploy!
      </h4>
      <div className="flex gap-4">
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
