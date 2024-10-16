import { useAuth } from '../context/AuthProvider';

const HomePage = () => {
    const { user } = useAuth();
    console.log('USER: ', user)
    return <div>HOME</div>
}

export default HomePage;