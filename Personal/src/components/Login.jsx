const Login = () => {
  return (
    <main className="min-h-screen bg-grok-dark text-grok-text flex items-center justify-center px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black font-space mb-4 text-grok-accent">Welcome Back</h1>
          <p className="text-grok-light font-inter">Sign in to access advanced features</p>
        </div>

        <div className="bg-grok-gray p-8 rounded-2xl border border-grok-light">
          <form className="space-y-6">
            <div>
              <label className="block text-grok-light font-inter mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-grok-dark border border-grok-light rounded-xl text-grok-text font-inter focus:border-grok-accent focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-grok-light font-inter mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-grok-dark border border-grok-light rounded-xl text-grok-text font-inter focus:border-grok-accent focus:outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-grok-accent text-grok-dark py-4 rounded-xl font-bold font-inter hover:bg-grok-accent/80 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-grok-light font-inter text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-grok-accent hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login