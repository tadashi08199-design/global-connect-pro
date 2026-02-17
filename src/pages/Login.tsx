import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-10">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-corporate">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-card-foreground">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">Sign in to your ConsulLink account</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative mt-1.5">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-accent hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
