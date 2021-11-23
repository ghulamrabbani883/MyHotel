import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
          <h1>OOps pages not found</h1>
          <Link to="/">Go to home page</Link>  
        </>
    )
}

export default Error404
