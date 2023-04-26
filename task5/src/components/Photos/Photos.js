import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


function Photos() {
    const { idAlbum } = useParams()

    const [photos, setPhotos] = useState([]);
    
        useEffect(() =>{
            axios
                .get(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`)
                .then(data => {
                    setPhotos(data.data);
                    
                   
                })
        }, [])
        console.log(idAlbum)
        return (
            <>
                <Link to={'/'}><button className='back-btn'>Back</button></Link>
                
                    {
                        photos.map(photo => (
                            <>
                                <img className='user-img'  key={photo.id} src={photo.thumbnailUrl}/>
                            </>
                        ))
                    }

            </>    
        )
}
export default Photos