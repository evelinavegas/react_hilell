import {useEffect, useState } from "react"
import Albums from "../Albums/Albums"
import axios from 'axios'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

function User() {
    const {id}= useParams()
    return (
        <>
            <Link to={'/'}><button className='back-btn'>Back</button></Link>

            <div className="user-pages">
                <p>user: {id}</p>
                <Link to={`/albums/${id}`}><button className='user-btn'>Albums</button></Link>

            </div> 
        </>   
        
    )
}
export default User