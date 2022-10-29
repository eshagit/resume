import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const browser = typeof window !== "undefined" && window;

const NotFoundPage =()=>{
    return(
        browser && (
        <h2>error page</h2>
    )
    );
        
    }


export default NotFoundPage
