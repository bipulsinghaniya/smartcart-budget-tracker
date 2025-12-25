
// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Camera, ShoppingCart, Github, Eye, EyeOff, Lock, Mail, Sparkles, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Users, Award, Star, UserPlus } from 'lucide-react';

// // Redux-like state management
// const useAuthStore = () => {
//   const [state, setState] = useState({
//     rememberMe: false,
//     captchaVerified: false,
//     loading: false,
//     error: null,
//     showPassword: false
//   });

//   const actions = {
//     setEmail: (email) => setState(prev => ({ ...prev, email })),
//     setPassword: (password) => setState(prev => ({ ...prev, password })),
//     setRememberMe: (rememberMe) => setState(prev => ({ ...prev, rememberMe })),
//     setCaptchaVerified: (verified) => setState(prev => ({ ...prev, captchaVerified: verified })),
//     setLoading: (loading) => setState(prev => ({ ...prev, loading })),
//     setError: (error) => setState(prev => ({ ...prev, error })),
//     toggleShowPassword: () => setState(prev => ({ ...prev, showPassword: !prev.showPassword }))
//   };

//   return { state, actions };
// };

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { state, actions } = useAuthStore();
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
//   const [particles, setParticles] = useState([]);
//   const [currentFeature, setCurrentFeature] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


//   const features = [
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Lightning Fast Checkout",
//       description: "Skip the lines with AI-powered instant checkout. Just grab and go!"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Secure & Private",
//       description: "Your data is encrypted and protected with industry-leading security."
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Smart Recommendations",
//       description: "Get personalized product suggestions based on your shopping habits."
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Rewards Program",
//       description: "Earn points on every purchase and unlock exclusive benefits."
//     }
//   ];

//   const stats = [
//     { icon: <Users className="w-6 h-6" />, value: "2M+", label: "Active Users" },
//     { icon: <ShoppingCart className="w-6 h-6" />, value: "50M+", label: "Transactions" },
//     { icon: <Star className="w-6 h-6" />, value: "4.9", label: "User Rating" }
//   ];

//   useEffect(() => {
//     // Check if mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     // Generate particles for background animation
//     const newParticles = Array.from({ length: isMobile ? 15 : 30 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 2,
//       duration: Math.random() * 10 + 15,
//       delay: Math.random() * 5
//     }));
//     setParticles(newParticles);

//     // Rotate features
//     const interval = setInterval(() => {
//       setCurrentFeature(prev => (prev + 1) % features.length);
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, [isMobile]);

//   function generateCaptcha() {
//     return Math.random().toString(36).substring(2, 8).toUpperCase();
//   }

//   const verifyCaptcha = () => {
//     if (captchaInput.toUpperCase() === captchaCode) {
//       actions.setCaptchaVerified(true);
//       actions.setError(null);
//     } else {
//       actions.setError('Invalid captcha. Please try again.');
//       setCaptchaCode(generateCaptcha());
//       setCaptchaInput('');
//     }
//   };

 

//   const handleLogin = async (e) => {
//   e.preventDefault();

//   if (!state.captchaVerified) {
//     actions.setError("Please verify captcha first");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Login successful");
//       navigate("/bipul"); // ✅ ONLY on correct password
//     } else {
//       alert(data.message || "Invalid credentials");
//     }
//   } catch (error) {
//     alert("Server error");
//   }
// };


//   const handleSocialLogin = (provider) => {
//     if (!state.captchaVerified) {
//       actions.setError('Please verify captcha first');
//       return;
//     }
//     actions.setLoading(true);
//     setTimeout(() => {
//       alert(`Logging in with ${provider}...`);
//       actions.setLoading(false);
//     }, 1000);
//   };

//   const handleSignupRedirect = () => {
//     navigate('/signup');
//   };

///////////////////////////////////////

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Camera,
  ShoppingCart,
  Github,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Star,
  UserPlus,
} from "lucide-react";

/* ================================
   UI STATE STORE (UI FLAGS ONLY)
================================ */
const useAuthStore = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: false,
    captchaVerified: false,
    loading: false,
    error: null,
    showPassword: false,
  });

  const actions = {
    setEmail: (email) =>
      setState((prev) => ({ ...prev, email })),

    setPassword: (password) =>
      setState((prev) => ({ ...prev, password })),

    setRememberMe: (rememberMe) =>
      setState((prev) => ({ ...prev, rememberMe })),

    setCaptchaVerified: (verified) =>
      setState((prev) => ({ ...prev, captchaVerified: verified })),

    setLoading: (loading) =>
      setState((prev) => ({ ...prev, loading })),

    setError: (error) =>
      setState((prev) => ({ ...prev, error })),

    toggleShowPassword: () =>
      setState((prev) => ({ ...prev, showPassword: !prev.showPassword })),
  };

  return { state, actions };
};

/* ================================
   LOGIN PAGE LOGIC
================================ */
const LoginPage = () => {
  const navigate = useNavigate();
  const { state, actions } = useAuthStore();

  /* ================= CAPTCHA ================= */
  const generateCaptcha = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  /* ================= UI EFFECTS ================= */
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= FEATURES / STATS ================= */
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Checkout",
      description: "Skip the lines with AI-powered instant checkout.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is encrypted and protected.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Recommendations",
      description: "Personalized shopping experience.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rewards Program",
      description: "Earn rewards on every purchase.",
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "2M+", label: "Active Users" },
    { icon: <ShoppingCart className="w-6 h-6" />, value: "50M+", label: "Transactions" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "User Rating" },
  ];

  /* ================= EFFECTS ================= */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const newParticles = Array.from({ length: isMobile ? 15 : 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  /* ================= CAPTCHA VERIFY ================= */
  const verifyCaptcha = () => {
    if (captchaInput.toUpperCase() === captchaCode) {
      actions.setCaptchaVerified(true);
      actions.setError(null);
    } else {
      actions.setCaptchaVerified(false);
      actions.setError("Invalid captcha");
      setCaptchaCode(generateCaptcha());
      setCaptchaInput("");
    }
  };

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!state.captchaVerified) {
      actions.setError("Please verify captcha first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful");
        navigate("/bipul");
      } else {
        actions.setCaptchaVerified(false);
        setCaptchaCode(generateCaptcha());
        actions.setError(data.message || "Invalid credentials");
      }
    } catch {
      actions.setError("Server error");
    }
  };

  /* ================= EXTRA HANDLERS ================= */
  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleSocialLogin = (provider) => {
    if (!state.captchaVerified) {
      actions.setError("Verify captcha first");
      return;
    }
    alert(`Logging in with ${provider}`);
  };

  // ⛔ STOP HERE — JSX STARTS BELOW

  /* 🔴 STOP HERE — DO NOT ADD RETURN BELOW */



  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 flex overflow-hidden relative">
      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 animate-wave"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-teal-500/20 to-emerald-500/20 animate-wave-reverse"></div>
      </div>

      {/* Logo with home link */}
      <div className="absolute top-8 left-8 z-20 animate-slide-down">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer no-underline">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
              {/* <ShoppingCart className="w-8 h-8 text-emerald-300 transition-transform group-hover:scale-110 group-hover:rotate-12" /> */}
              {/* <Camera className="w-4 h-4 text-cyan-300 absolute -bottom-1 -right-1 transition-transform group-hover:scale-125" /> */}
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              {/* caper */}
              {/* <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" /> */}
            </div>
            {/* <div className="text-xs text-emerald-200 -mt-1">by instacart</div> */}
          </div>
        </Link>
      </div>

      {/* Signup redirect button */}
      <div className="absolute top-8 right-8 z-20 animate-slide-down">
        <button
          onClick={handleSignupRedirect}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/15 transition-all hover:scale-105 group"
        >
          <UserPlus className="w-4 h-4" />
          <span className="font-medium">Sign Up</span>
        </button>
      </div>

      <div className="relative z-10 w-full grid lg:grid-cols-2">
        {/* Left side - Information */}
        <div className={`${isMobile ? 'hidden' : 'flex'} flex-col justify-center px-8 lg:px-16 py-12 animate-slide-right`}>
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Welcome Back to the
              <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Future of Shopping
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-emerald-100 mb-8 lg:mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Experience seamless, checkout-free shopping powered by cutting-edge AI technology. Your smart cart awaits.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 lg:p-4 border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                  <div className="text-emerald-300 mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Carousel */}
            <div className="relative h-56 lg:h-64 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentFeature 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentFeature 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20 h-full">
                    <div className="inline-block p-3 lg:p-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-emerald-100 text-base lg:text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature indicators */}
            <div className="flex gap-2 justify-center mb-6 lg:mb-0">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentFeature 
                      ? 'w-8 lg:w-12 bg-emerald-400' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 lg:mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white/20 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                  S
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-emerald-200 text-sm">Regular Customer</div>
                </div>
              </div>
              <p className="text-emerald-100 italic text-sm lg:text-base">
                "Caper has completely transformed my grocery shopping experience. No more waiting in checkout lines - I just shop and go!"
              </p>
              <div className="flex gap-1 mt-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex items-center justify-center px-4 lg:px-8 py-8 lg:py-12 animate-slide-left">
          <div className="w-full max-w-md">
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 lg:p-10 border border-white/30 transform transition-all hover:shadow-emerald-500/20">
              <div className="text-center mb-6 lg:mb-8">
                <div className="inline-block p-3 lg:p-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4 animate-bounce-slow">
                  <Lock className="w-8 lg:w-10 h-8 lg:h-10 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 animate-gradient">
                  Welcome Back
                </h2>
                <p className="text-gray-600">Login to continue your shopping journey</p>
              </div>

              {state.error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg text-sm animate-shake flex items-center gap-2">
                  <div className="w-5 h-5 flex-shrink-0">✕</div>
                  <span>{state.error}</span>
                </div>
              )}

              {/* Email Input */}
              <div className="mb-4 lg:mb-5 group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => actions.setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4 lg:mb-5 group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type={state.showPassword ? 'text' : 'password'}
                    value={state.password}
                    onChange={(e) => actions.setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={actions.toggleShowPassword}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {state.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={state.rememberMe}
                    onChange={(e) => actions.setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-all">
                  Forgot Password?
                </a>
              </div>

              {/* Captcha */}
              {!state.captchaVerified ? (
                <div className="mb-6 p-4 lg:p-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl border-2 border-emerald-200 animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    Verify You're Human
                  </label>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 bg-white px-4 lg:px-5 py-3 lg:py-4 rounded-xl font-mono text-2xl lg:text-3xl tracking-widest text-center select-none border-2 border-dashed border-emerald-300 bg-gradient-to-r from-emerald-100 to-cyan-100 shadow-inner">
                      {captchaCode}
                    </div>
                    <button
                      onClick={() => {
                        setCaptchaCode(generateCaptcha());
                        setCaptchaInput('');
                      }}
                      className="p-3 lg:p-4 bg-white rounded-xl hover:bg-emerald-50 transition-all border-2 border-emerald-200 hover:border-emerald-400 hover:rotate-180 duration-500 shadow-md flex-shrink-0"
                      title="Refresh captcha"
                    >
                      <span className="text-xl lg:text-2xl">↻</span>
                    </button>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <input
                      type="text"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && verifyCaptcha()}
                      className="flex-1 px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                      placeholder="Enter code above"
                    />
                    <button
                      onClick={verifyCaptcha}
                      className="px-6 lg:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 text-emerald-700 rounded-xl text-sm flex items-center gap-3 animate-fade-in shadow-md">
                  <div className="p-2 bg-emerald-500 rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Captcha verified successfully!</span>
                </div>
              )}

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={state.loading || !state.captchaVerified}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden group mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {state.loading ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Logging in...
                    </>
                  ) : (
                    <>
                      Login
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </span>
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  disabled={state.loading || !state.captchaVerified}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl hover:border-emerald-500 hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-medium text-gray-700 group-hover:text-emerald-600 transition-colors relative z-10">
                    Continue with Google
                  </span>
                </button>

                <button
                  onClick={() => handleSocialLogin('GitHub')}
                  disabled={state.loading || !state.captchaVerified}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Github className="w-5 h-5 relative z-10" />
                  <span className="font-medium relative z-10">Continue with GitHub</span>
                </button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-emerald-600 hover:text-emerald-700 font-bold hover:underline transition-all">
                  Sign up for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3;
          }
          50% { 
            transform: translate(50px, -50px) scale(1.5); 
            opacity: 0.6;
          }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(50px) translateY(-30px); }
        }
        @keyframes wave-reverse {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-50px) translateY(30px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }
        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }
        .animate-wave-reverse {
          animation: wave-reverse 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;