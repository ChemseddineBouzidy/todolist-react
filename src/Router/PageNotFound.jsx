import React from 'react'
import { Link } from 'react-router'

function PageNotFound() {
  return (
    <>    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
    <div className="text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Go Home
      </Link>
    </div>
  </div></>
  )
}

export default PageNotFound