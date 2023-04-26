import {useEffect, useState} from 'react'
import axios from 'axios'
import Photos from '../Photos/Photos';
function Albums(props) {
    const userId = props.idUser
    const [albums, setAlbums] = useState([]);
    const [styleAlbum, setStyleAlbum] = useState('none');
    const [stylePhotos, setStylePhotos] = useState('none');
    const [styleBtn, setStyleBtn] = useState('none');


    
        useEffect(() =>{
            axios
                .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(data => {
                    setAlbums(data.data);
                    
                   
                })
        }, [])
        
    
    function getAlbums(){
        setStyleAlbum('album-container')
        setStyleBtn('user-btn')
    }
    function getPhoto() {
        setStylePhotos('photo-container')
    }
    return (
        <>
            <button className='user-btn' onClick={getAlbums}>Albums</button>
            <button className={styleBtn} onClick={getPhoto}>Photos</button>

            <div className={styleAlbum}>
                {
                    albums.map(album => (
                        <>
                        <button  key={album.id} className='user-album' onClick={getPhoto}>{album.title}</button>
                        <div className={stylePhotos}>
                            <Photos  albumId={album.id} />
                        </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default Albums