import React from 'react'
import Review from './components/Review'

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2 className='text-5xl font-extrabold'>our  reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App