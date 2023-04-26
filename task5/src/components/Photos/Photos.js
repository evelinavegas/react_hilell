import {useEffect, useState} from 'react'
import axios from 'axios'

function Photos(props) {
    const albumId = props.albumId
    const [photos, setPhotos] = useState([]);
    
        useEffect(() =>{
            axios
                .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(data => {
                    setPhotos(data.data);
                    
                   
                })
        }, [])
        return (
            <>
                
                    {
                        photos.map(photo => (
                            <>
                                <img className='user-img' key={photo.id} src={photo.thumbnailUrl}/>
                            </>
                        ))
                    }

            </>    
        )
}
export default Photos