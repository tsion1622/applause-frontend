import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center bg-quantum-black text-soft-white px-6 py-32 text-center">
      <h2 className="text-5xl font-bold mb-4 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-ion-blue to-fusion-pink">
        Build a Business mobile app in minutes, not months.
      </h2>
      <h4 className="text-xl mb-8 text-gray-300">
        It's Simple, Prompt. Review. Deploy!
      </h4>
      <Button
        onClick={() => navigate('/login')}
        className="px-8 py-4 bg-ion-blue text-black font-bold rounded-lg hover:bg-fusion-pink transition-colors duration-300"
      >
        Go mobile now
      </Button>
    </section>
  );
};

export default Hero;
