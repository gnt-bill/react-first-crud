import { Link, useNavigate } from 'react-router-dom';

import '../App.css';
import useSongStore from '../store/songStore';

function Songs() {
    const {songs, deleteSong} = useSongStore();
    const navigate = useNavigate();

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Artiste</th>
                        <th>Album</th>
                        <th>Durée</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <tr key={song._id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.duration}</td>
                            <td>
                                <button onClick={() => navigate(`/form/${song._id}`)}>
                                    Éditer
                                </button>
                                <button onClick={() => deleteSong(song._id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>
                Précédent
            </button>
            <button>
                Suivant
            </button>
            <p>
                <Link to="/form">Créer chanson</Link>
                <Link to="/songs">Liste chansons</Link>
            </p>
        </>
    );
}

export default Songs;
