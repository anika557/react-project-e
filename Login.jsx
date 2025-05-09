import React from 'react'

const Login = () => {
  return (
    <section class="min-h-screen bg-base-200 flex items-center justify-center">
  <div class="card w-full max-w-sm shadow-2xl bg-base-100">
    <form class="card-body">
      <h2 class="text-center text-3xl font-bold mb-4">Login</h2>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="email@example.com" class="input input-bordered" required />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" class="input input-bordered" required />
        <label class="label">
          <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>

      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>

      <p class="text-center text-sm mt-2">
        Don’t have an account? <a href="#" class="link link-hover text-primary">Register</a>
      </p>
    </form>
  </div>
</section>

  )
}

export default Login

