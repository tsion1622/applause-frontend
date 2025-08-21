import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center bg-quantum-black text-soft-white text-center px-6 py-32">
      
     
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ion-blue to-fusion-pink max-w-3xl">
        Build a Business mobile app <br className="hidden sm:inline" /> in minutes, not months.
      </h2>

     
      <h4 className="text-lg sm:text-xl mb-8 text-gray-900 max-w-xl">
  It's Simple, Prompt. Review. Deploy!
</h4>


     
      <div>
        <Button
          size="lg"
          className="bg-ion-blue text-black hover:bg-solar-orange"
          onClick={() => navigate('/login')}
        >
          Go mobile now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
