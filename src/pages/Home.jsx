import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <>
            <p>Home</p>
            <Link to="/form">Create song</Link>
        </>
    );
}

export default Home;
