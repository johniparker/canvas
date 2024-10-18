import { useNavigate } from 'react-router-dom';


const RedirectButton = ({ path, label }) => {
    const navigate = useNavigate();
    
    const handleRedirect = (p) => {
        navigate(p)
    }
    return <button type="submit" onClick={() => handleRedirect(path)}>{label}</button>
}

export default RedirectButton;