

 import {  useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button"
import{
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useState } from "react";


const Login: React.FC = () => {

  const navigate=useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = (e) => {
  e.preventDefault();

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    alert("Login Success");

    navigate("/"); 
  } else {
    alert("Invalid Email or Password");
  }
};

return(

<div className="flex justify-center items-center min-h-screen">

<Card className="w-full max-w-sm">

<CardHeader>
<CardTitle>Login to your account</CardTitle>
<CardDescription>
Enter your email below to login to your account
</CardDescription>
<CardAction>
<Button variant="link">Sign Up</Button>
</CardAction>
</CardHeader>

<CardContent>



<form onSubmit={handleLogin}>

<div className="flex flex-col gap-6">

<div className="grid gap-2">
<Label htmlFor="email">Email</Label>

<Input
id="email"
type="email"
placeholder="m@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<div className="grid gap-2">

<div className="flex items-center">
<Label htmlFor="password">Password</Label>

<a
href="#"
className="ml-auto text-sm hover:underline"
>
Forgot your password?
</a>

</div>

<Input
id="password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>

<Button type="submit" className="w-full">
Login
</Button>

</div>

</form>

</CardContent>

<CardFooter className="flex-col gap-2">

<Button variant="outline" className="w-full">
Login with Google
</Button>

</CardFooter>

</Card>

</div>

)

}

export default Login