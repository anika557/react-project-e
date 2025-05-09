import React from 'react'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/tech" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Welcome to My React Website</h1>
      <p class="py-6">This is a simple banner using DaisyUI hero component.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  )
}

export default Banner
