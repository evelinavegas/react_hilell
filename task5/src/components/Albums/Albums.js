import {useEffect, useState} from 'react'
import axios from 'axios'
import Photos from '../Photos/Photos';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
function Albums() {
    const { id } = useParams()
    const { idAlbum } = useParams()

    const [albums, setAlbums] = useState([]);
    const [styleAlbum, setStyleAlbum] = useState('none');
    const [stylePhotos, setStylePhotos] = useState('none');
    const [styleBtn, setStyleBtn] = useState('none');
        useEffect(() =>{
            axios
                .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
                .then(data => {
                    setAlbums(data.data);
                    
                   
                })
        }, [])   
    function getAlbums(){
        setStyleAlbum('user-album')
        setStyleBtn('user-btn')
    }
    function getPhoto() {
        setStylePhotos('photo-container')
    }
    return (
        <div>
            <Link to={'/'}><button className='back-btn'>Back</button></Link>
            <div >
                {
                    albums.map(album => (
                        <div className='album-container' key={album.id}>
                            <button className='user-album' >{album.title}</button>
                            <Link to={`/photos/${album.id}`}><button className='user-btn'>Photos</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Albums