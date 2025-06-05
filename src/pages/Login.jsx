import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/dashboard');
    }
  return (
    <Card className="w-full max-w-sm rounded-3xl">
      <CardHeader className={'text-center'}>
        <CardTitle className={'text-3xl mb-3'}>StudentSync</CardTitle>
        <CardDescription >
        This page is for Admin login only. 
        </CardDescription>

      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@admin.com"
                className={'text-black'}
                defaultValue={'muhamedrazik@admin.com'}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input 
                id="password"
                className={'text-black'} 
                type="password" 
                defaultValue={'123456789'} 
                required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={()=> handleLogin()} type="submit" className="w-full rounded-full">
          Login
        </Button>
         <CardDescription className={'text-center'}>
        Note: Only Admins are allowed to log in. Account creation is not available for users.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
