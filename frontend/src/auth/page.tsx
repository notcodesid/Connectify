import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Switch } from "../components/ui/switch"
import { useNavigate } from "react-router-dom";


export default function AuthPage() {
const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false)

  function sendRequest () {
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isSignUp ? 'Create an account' : 'Sign in to your account'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='mb-5'>
              <Label htmlFor="username" className="sr-only">Username</Label>
              <Input id="username" name="username" type="text" required className="rounded-t-md" placeholder="Username" />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">Password</Label>
              <Input id="password" name="password" type="password" required className="rounded-b-md" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Switch id="signup-mode" checked={isSignUp} onCheckedChange={setIsSignUp} />
              <Label htmlFor="signup-mode" className="ml-2 block text-sm text-gray-900">
                {isSignUp ? 'Sign up' : 'Login'}
              </Label>
            </div>
            {!isSignUp && (
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            )}
          </div>

          <div>
            <Button onClick={sendRequest} type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              {isSignUp ? 'Sign up' : 'Sign in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}