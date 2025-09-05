import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-full flex dark:bg-blue-800">
      {/* Left Side - Machine Learning Image */}
      <div className="hidden lg:flex flex-1 relative bg-gray-900">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1920&q=80"
          alt="Neural Networks and AI Technology"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
        
        {/* Overlay Content */}
        <div className="relative flex flex-col justify-center p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join the AI Revolution
          </h3>
          <p className="text-lg text-gray-200 mb-6">
            Create your account and start building intelligent applications with cutting-edge machine learning tools.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Advanced ML Models</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Real-time Data Processing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm">Collaborative Workspace</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - SignUp Form */}
      <div className="flex-1 flex items-center justify-center dark:text-white   bg-slate-200 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-md w-full space-y-5">
          {/* Header Section */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 ">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 ">
              Start your journey with AI-powered tools
            </p>
          </div>

          {/* SignUp Component with Custom Styling */}
          <div className="py-8 px-6 rounded-lg">
          
            <SignUp 
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "hover:bg-indigo-700 text-sm normal-case font-medium",
                  card: "bg-transparent shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: 
                    "bg-white border-gray-300 hover:bg-gray-50 text-gray-700 text-sm normal-case font-medium",
                  socialButtonsBlockButtonText: "font-medium",
                  formFieldInput: 
                    "border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500",
                  formFieldLabel: "text-gray-700 font-medium text-sm",
                  dividerLine: "bg-gray-300"
                },
                layout: {
                  socialButtonsPlacement: "top"
                }
              }}
            />
          </div>

          {/* Additional Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
