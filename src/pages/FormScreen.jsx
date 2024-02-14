import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSongStore from "../store/songStore";

function FormScreen() {
    const {register, watch, setValue, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {songId} = useParams('');
    const {songs, addSong, updateSong, getSong} = useSongStore();
    const watchArtist = watch('artist');

    const onSubmit = (data) => {
        if (songId) {
            updateSong(songId, data).then(navigate('/songs'));
        } else {
            addSong(data).then(navigate('/songs'));
        }
    }

    useEffect(() => {
        console.log(songs);
        console.log(songId);
        if (songId) {
            console.log(songId);
            let song = getSong(songId);
            console.log(song);

            setValue('title', song.title);
            setValue('artist', song.artist);
            setValue('album', song.album);
            setValue('duration', song.duration);
        }
    }, []);
    useEffect(() => {
        if (watchArtist) {
            setValue('artist', watchArtist.toUpperCase());
        }
    }, [watchArtist]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <input {...register('title')} id="song-title" type="text" placeholder="Titre" />
                </p>
                <p>
                    <input {...register('artist')} id="song-artist" type="text" placeholder="Artiste" />
                </p>
                <p>
                    <input {...register('album')} id="song-album" type="text" placeholder="Album" />
                </p>
                <p>
                    <input {...register('duration')} id="song-duration" type="number" placeholder="Durée en secondes" />
                </p>
                <input type="submit" value="Poster"/>
            </form>
            <p>
                <Link to="/songs">Liste</Link>
            </p>
        </>
    );
        
}

export default FormScreen;