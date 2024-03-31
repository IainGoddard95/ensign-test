import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '@/assets/loading-animation.json'

export const LoadingAnimation = () => {
    return <Player
        autoplay
        loop
        src={Animation}
        style={{ height: '150px', width: '150px' }}
    />
}