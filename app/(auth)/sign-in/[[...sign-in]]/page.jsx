import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-full flex">
      {/* Left Side - SignIn Form */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-md w-full space-y-4">
          {/* Header Section */}
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {/* SignIn Component with Custom Styling */}
          <div className="bg-white py-8 px-6 shadow-xl rounded-lg border border-gray-100">
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "bg-blue-600 hover:bg-blue-700 text-sm normal-case font-medium",
                  card: "bg-transparent shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: 
                    "bg-white border-gray-300 hover:bg-gray-50 text-gray-700 text-sm normal-case font-medium",
                  socialButtonsBlockButtonText: "font-medium",
                  formFieldInput: 
                    "border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500",
                  formFieldLabel: "text-gray-700 font-medium text-sm",
                  dividerLine: "bg-gray-300",
                  dividerText: "text-gray-500 text-sm",
                  footerActionLink: "text-blue-600 hover:text-blue-500 font-medium",
                  identityPreviewText: "text-gray-700",
                  identityPreviewEditButton: "text-blue-600 hover:text-blue-500"
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
              Don't have an account?{' '}
              <a href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Machine Learning Image */}
      <div className="hidden lg:flex flex-1 relative bg-gray-900">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Machine Learning and AI Technology"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Overlay Content */}
        <div className="relative flex flex-col justify-end p-12 text-white">
          <blockquote className="text-xl font-medium">
            "Artificial Intelligence is the new electricity. It will transform every industry."
          </blockquote>
          <cite className="mt-4 text-sm text-gray-300">— Andrew Ng</cite>
        </div>
      </div>
    </div>
  )
}
