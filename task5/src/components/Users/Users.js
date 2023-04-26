import {useState, useEffect} from 'react'
import axios from 'axios'
import Albums from '../Albums/Albums';

function Users() {
    const [users, setUsers] = useState([]);
        useEffect(() =>{
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    setUsers(data.data)
            })
        }, [])
           
        
       
        
    
    
    return(
        <div className='users-wrap'>
                {
                    users.map(user=> (
                        <div className='user-container' key={user.id}>
                            <p>{user.name}</p>
                           
                            <Albums idUser={user.id}/>
                        </div>    
                    ))
                }
            
        </div>    
    )
}
export default Users