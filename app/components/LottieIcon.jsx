import { Player } from '@lottiefiles/react-lottie-player'; // Correção na importação
import animations from '@/public/images/icons/animations';

export default function LottieIcon({ animationName }) {
  // Carrega a animação a partir do objeto de mapeamento
  const animationData = animations[animationName];

  if (!animationData) {
    console.error(`Animação não encontrada: ${animationName}`);
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <Player
        autoplay
        loop={true}
        src={animationData}
        style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
}