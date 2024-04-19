'use client'; // Error Components must be Client Components

import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>
                Something Is Not Right !
            </h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }>
                Try Again
            </button>

        </div>
    )
}

export default Error