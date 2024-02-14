import { useEffect } from "react";
import { create } from "zustand";

const baseUrl = 'https://crudcrud.com/api/7b13a948869b4e8e86553316bd9c03e3';

const useStore = create((set) => ({
    songs: [],
    setAllSongs: (songs) => (set({songs})),
    addSongStore: (song) => (set(state => ({songs: [...state.songs, song]}))),
    updateSongStore: (id, song) => (set(state => ({songs: state.songs.map(s => (s._id === id ? song : s))}))),
    deleteSongStore: (id) => (set(state => ({songs: state.songs.filter(s => (s._id !== id))}))),
}));

const useSongStore = () => {
    const {songs, setAllSongs, addSongStore, updateSongStore, deleteSongStore} = useStore();

    useEffect(() => {
        fetch(`${baseUrl}/songs`)
        .then(res => res.json())
        .then(data => setAllSongs(data))
    }, []);

    const addSong = async (song) => {
        await fetch(`${baseUrl}/songs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
        })
        .then(res => (res.json()))
        .then(data => (addSongStore(data)));
    };

    const updateSong = async (id, song) => {
        await fetch(`${baseUrl}/songs/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(song)
        });
        updateSongStore(id, song);
    }

    const deleteSong = async (id) => {
        await fetch(`${baseUrl}/songs/${id}`, {
            method: 'DELETE',
        });
        deleteSongStore(id);
    }

    const getSong = (id) => {
        return songs.find(s => {
            return id === s._id;
        });
    }

    return {songs, setAllSongs, addSong, updateSong, deleteSong, getSong};
};

export default useSongStore;