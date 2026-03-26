import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import logo from "@/assets/idaap-logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder action
    alert("Login functionality will be connected to backend.");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "hsl(var(--light-grey))" }}>
      {/* Left panel - decorative */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(0, 0%, 12%), hsl(60, 1%, 20%))" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(38, 46%, 56%) 0%, transparent 60%)" }} />
        <div className="relative z-10 text-center px-12">
          <img src={logo} alt="I-DAAP" className="w-28 h-28 object-contain mx-auto mb-8" />
          <h1 className="font-serif font-bold text-white text-4xl mb-4">I-DAAP CON</h1>
          <div
            className="w-16 h-1 mx-auto rounded mb-5"
            style={{ background: "linear-gradient(to right, hsl(38, 46%, 56%), hsl(46, 62%, 52%))" }}
          />
          <p className="text-white/70 font-sans font-light text-base leading-relaxed max-w-sm">
            International Dermatology and Aesthetic Association of Pakistan
          </p>
          <p
            className="mt-6 text-sm font-sans font-semibold tracking-widest uppercase"
            style={{ color: "hsl(var(--gold))" }}
          >
            Oct 24–26, 2026 · Islamabad
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo (mobile) */}
          <div className="flex lg:hidden justify-center mb-8">
            <img src={logo} alt="I-DAAP" className="w-20 h-20 object-contain" />
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
            <h2 className="font-serif font-bold text-2xl text-charcoal-dark mb-2">Welcome Back</h2>
            <p className="text-muted-foreground font-sans text-sm mb-8">
              Sign in to your I-DAAP CON account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-charcoal font-sans text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 transition-all"
                    style={{ "--tw-ring-color": "hsl(var(--gold) / 0.4)" } as React.CSSProperties}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--gold))")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-charcoal font-sans text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 transition-all"
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--gold))")}
                    onBlur={(e) => (e.target.style.borderColor = "")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <a href="#" className="text-sm font-sans gold-text hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-gold w-full py-3 text-base mt-2">
                Sign In
              </button>
            </form>

            {/* Register link */}
            <p className="text-center text-sm font-sans text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="gold-text font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>

          {/* Back to home */}
          <div className="text-center mt-6">
            <Link to="/" className="text-sm font-sans text-charcoal/60 hover:text-gold transition-colors">
              ← Back to I-DAAP CON 2026
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
