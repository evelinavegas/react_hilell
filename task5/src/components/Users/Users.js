import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                setUsers(data.data)
            })
    }, [])
    
    return (

        <div className='user-block'>
            {
                users.map(user => (
                    <div className='users-wrap' key={user.id} id={`${user.id}`}>

                        <button  className='users-container' >
                            <Link to={`/${user.id}`}>{user.name}</Link>
                        </button>
                    </div>

                ))
            }

        </div>
        
    )
}
export default Users