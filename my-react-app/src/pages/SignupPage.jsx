// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Camera, ShoppingCart, Github, Eye, EyeOff, Lock, Mail, Sparkles, CheckCircle, XCircle, LogIn } from 'lucide-react';

// const useAuthStore = () => {
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     captchaVerified: false,
//     loading: false,
//     error: null,
//     showPassword: false,
//     showConfirmPassword: false,
//     signupMethod: 'email' 
//   });

//   const actions = {
//     setEmail: (email) => setState(prev => ({ ...prev, email })),
//     setPassword: (password) => setState(prev => ({ ...prev, password })),
//     setConfirmPassword: (confirmPassword) => setState(prev => ({ ...prev, confirmPassword })),
//     setCaptchaVerified: (verified) => setState(prev => ({ ...prev, captchaVerified: verified })),
//     setLoading: (loading) => setState(prev => ({ ...prev, loading })),
//     setError: (error) => setState(prev => ({ ...prev, error })),
//     toggleShowPassword: () => setState(prev => ({ ...prev, showPassword: !prev.showPassword })),
//     toggleShowConfirmPassword: () => setState(prev => ({ ...prev, showConfirmPassword: !prev.showConfirmPassword })),
//     setSignupMethod: (method) => setState(prev => ({ ...prev, signupMethod: method }))
//   };

//   return { state, actions };
// };

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const { state, actions } = useAuthStore();
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [floatingElements, setFloatingElements] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     const elements = Array.from({ length: isMobile ? 8 : 15 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 40 + 20,
//       duration: Math.random() * 20 + 10,
//       delay: Math.random() * 5
//     }));
//     setFloatingElements(elements);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, [isMobile]);

//   function generateCaptcha() {
//     return Math.random().toString(36).substring(2, 8).toUpperCase();
//   }

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePos({
//       x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
//       y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
//     });
//   };

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

//   const validatePassword = (password) => {
//     return {
//       length: password.length >= 8,
//       uppercase: /[A-Z]/.test(password),
//       lowercase: /[a-z]/.test(password),
//       number: /[0-9]/.test(password),
//       special: /[!@#$%^&*]/.test(password)
//     };
//   };

//   const passwordValidation = validatePassword(state.password);
//   const isPasswordValid = Object.values(passwordValidation).every(v => v);
//   const passwordsMatch = state.password === state.confirmPassword && state.confirmPassword !== '';

//   const handleEmailSignup = () => {
//     if (!state.captchaVerified) {
//       actions.setError('Please verify captcha first');
//       return;
//     }
//     if (!state.email) {
//       actions.setError('Please enter your email');
//       return;
//     }
//     if (!isPasswordValid) {
//       actions.setError('Password does not meet requirements');
//       return;
//     }
//     if (!passwordsMatch) {
//       actions.setError('Passwords do not match');
//       return;
//     }
    
//     actions.setLoading(true);
//     setTimeout(() => {
//       alert('Account created successfully! Redirecting to login...');
//       actions.setLoading(false);
//       navigate('/login');
//     }, 1500);
//   };

//   const handleSocialLogin = (provider) => {
//     if (!state.captchaVerified) {
//       actions.setError('Please verify captcha first');
//       return;
//     }
//     actions.setLoading(true);
//     setTimeout(() => {
//       alert(`Account created with ${provider}! Redirecting to dashboard...`);
//       actions.setLoading(false);
//     }, 1000);
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 flex items-center justify-center p-4 overflow-hidden relative">
//       {floatingElements.map(el => (
//         <div
//           key={el.id}
//           className="absolute rounded-full bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 blur-xl"
//           style={{
//             left: `${el.x}%`,
//             top: `${el.y}%`,
//             width: `${el.size}px`,
//             height: `${el.size}px`,
//             animation: `float ${el.duration}s ease-in-out infinite`,
//             animationDelay: `${el.delay}s`
//           }}
//         />
//       ))}

//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 animate-pulse-slow"></div>

//       {/* <div className="absolute top- left-6 z-20 animate-slide-down"> */}
//       <div className="absolute top-3 left-6 z-20 animate-slide-down">

//         <Link to="/" className="flex items-center gap-3 group cursor-pointer no-underline">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
//             <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
//               <ShoppingCart className="w-8 h-8 text-emerald-300 transition-transform group-hover:scale-110 group-hover:rotate-12" />
//               <Camera className="w-4 h-4 text-cyan-300 absolute -bottom-1 -right-1 transition-transform group-hover:scale-125" />
//             </div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-white flex items-center gap-2">
//               caper
//               <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
//             </div>
//             <div className="text-xs text-emerald-200 -mt-1">by instacart</div>
//           </div>
//         </Link>
//       </div>

//       <div className="absolute top-6 right-6 z-20 animate-slide-down">
//         <button
//           onClick={handleLoginRedirect}
//           className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/15 transition-all hover:scale-105 group"
//         >
//           <LogIn className="w-4 h-4" />
//           <span className="font-medium">Sign In</span>
//         </button>
//       </div>

//       {/* <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
//       {/* <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20"> */}
//       <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-20">


//         <div 
//           className={`${isMobile ? 'hidden' : 'block'} relative animate-slide-right`}
//           onMouseMove={handleMouseMove}
//         >
//           <div 
//             className="relative transition-transform duration-300 ease-out"
//             style={{
//               transform: `perspective(1500px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-3xl blur-3xl transform scale-110 animate-pulse-slow "></div>
//             <img 
//               src="https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Smart shopping cart"
//               className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/10 "
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent rounded-3xl"></div>
//             <div className="absolute bottom-10 left-10 text-white animate-fade-in-up">
//               <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
//                 Shop Smarter
//               </h2>
//               <p className="text-emerald-100 text-xl mb-6">AI-powered cart technology for seamless checkout</p>
//               <div className="flex gap-4">
//                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                   <p className="text-sm text-emerald-200">✓ Instant Checkout</p>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                   <p className="text-sm text-cyan-200">✓ AI Recognition</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full max-w-md mx-auto animate-slide-left">
//           <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30 transform transition-all hover:shadow-emerald-500/20 lg:hover:scale-[1.02]">
//             <div className="text-center mb-6 md:mb-8">
//               <div className="inline-block p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4 animate-bounce-slow">
//                 <Lock className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 animate-gradient">
//                 Create Account
//               </h1>
//               <p className="text-gray-600">Join the future of grocery shopping</p>
//             </div>

//             {state.error && (
//               <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg text-sm animate-shake flex items-center gap-2">
//                 <XCircle className="w-5 h-5 flex-shrink-0" />
//                 <span>{state.error}</span>
//               </div>
//             )}

//             <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
//               <button
//                 onClick={() => actions.setSignupMethod('email')}
//                 className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
//                   state.signupMethod === 'email'
//                     ? 'bg-white text-emerald-600 shadow-md'
//                     : 'text-gray-600 hover:text-gray-800'
//                 }`}
//               >
//                 <Mail className="w-4 h-4 inline mr-2" />
//                 Email
//               </button>
//               <button
//                 onClick={() => actions.setSignupMethod('social')}
//                 className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
//                   state.signupMethod === 'social'
//                     ? 'bg-white text-emerald-600 shadow-md'
//                     : 'text-gray-600 hover:text-gray-800'
//                 }`}
//               >
//                 <Sparkles className="w-4 h-4 inline mr-2" />
//                 Social
//               </button>
//             </div>

//             {state.signupMethod === 'email' ? (
//               <>
//                 <div className="mb-4 group">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
//                     <input
//                       type="email"
//                       value={state.email}
//                       onChange={(e) => actions.setEmail(e.target.value)}
//                       className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
//                       placeholder="you@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4 group">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
//                     <input
//                       type={state.showPassword ? 'text' : 'password'}
//                       value={state.password}
//                       onChange={(e) => actions.setPassword(e.target.value)}
//                       className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={actions.toggleShowPassword}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                     >
//                       {state.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>
//                 </div>

//                 {state.password && (
//                   <div className="mb-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 animate-fade-in">
//                     <p className="text-xs font-medium text-gray-700 mb-2">Password Requirements:</p>
//                     <div className="space-y-1">
//                       {[
//                         { key: 'length', label: 'At least 8 characters' },
//                         { key: 'uppercase', label: 'One uppercase letter' },
//                         { key: 'lowercase', label: 'One lowercase letter' },
//                         { key: 'number', label: 'One number' },
//                         { key: 'special', label: 'One special character (!@#$%^&*)' }
//                       ].map(req => (
//                         <div key={req.key} className="flex items-center gap-2 text-xs">
//                           {passwordValidation[req.key] ? (
//                             <CheckCircle className="w-4 h-4 text-emerald-500" />
//                           ) : (
//                             <XCircle className="w-4 h-4 text-gray-300" />
//                           )}
//                           <span className={passwordValidation[req.key] ? 'text-emerald-600 font-medium' : 'text-gray-500'}>
//                             {req.label}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="mb-6 group">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
//                     <input
//                       type={state.showConfirmPassword ? 'text' : 'password'}
//                       value={state.confirmPassword}
//                       onChange={(e) => actions.setConfirmPassword(e.target.value)}
//                       className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
//                       placeholder="••••••••"
//                     />
//                     <button
//                       type="button"
//                       onClick={actions.toggleShowConfirmPassword}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                     >
//                       {state.showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                     </button>
//                   </div>
//                   {state.confirmPassword && (
//                     <div className="mt-2 text-xs flex items-center gap-1">
//                       {passwordsMatch ? (
//                         <>
//                           <CheckCircle className="w-4 h-4 text-emerald-500" />
//                           <span className="text-emerald-600 font-medium">Passwords match</span>
//                         </>
//                       ) : (
//                         <>
//                           <XCircle className="w-4 h-4 text-red-500" />
//                           <span className="text-red-600">Passwords do not match</span>
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <div className="mb-6">
//                 <div className="space-y-3">
//                   <button
//                     onClick={() => handleSocialLogin('Google')}
//                     disabled={state.loading || !state.captchaVerified}
//                     className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl hover:border-emerald-500 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24">
//                       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                     </svg>
//                     <span className="font-medium text-gray-700 group-hover:text-emerald-600 transition-colors relative z-10">
//                       Continue with Google
//                     </span>
//                   </button>

//                   <button
//                     onClick={() => handleSocialLogin('GitHub')}
//                     disabled={state.loading || !state.captchaVerified}
//                     className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <Github className="w-6 h-6 relative z-10" />
//                     <span className="font-medium relative z-10">Continue with GitHub</span>
//                   </button>
//                 </div>
//               </div>
//             )}

//             {!state.captchaVerified ? (
//               <div className="mb-6 p-4 md:p-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl border-2 border-emerald-200 animate-fade-in">
//                 <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                   <Lock className="w-4 h-4 text-emerald-600" />
//                   Verify You're Human
//                 </label>
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="flex-1 bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl font-mono text-2xl md:text-3xl tracking-widest text-center select-none border-2 border-dashed border-emerald-300 bg-gradient-to-r from-emerald-100 to-cyan-100 shadow-inner">
//                     {captchaCode}
//                   </div>
//                   <button
//                     onClick={() => {
//                       setCaptchaCode(generateCaptcha());
//                       setCaptchaInput('');
//                     }}
//                     className="p-3 md:p-4 bg-white rounded-xl hover:bg-emerald-50 transition-all border-2 border-emerald-200 hover:border-emerald-400 hover:rotate-180 duration-500 shadow-md flex-shrink-0"
//                     title="Refresh captcha"
//                   >
//                     <span className="text-xl md:text-2xl">↻</span>
//                   </button>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <input
//                     type="text"
//                     value={captchaInput}
//                     onChange={(e) => setCaptchaInput(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && verifyCaptcha()}
//                     className="flex-1 px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
//                     placeholder="Enter code above"
//                   />
//                   <button
//                     onClick={verifyCaptcha}
//                     className="px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105"
//                   >
//                     Verify
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 text-emerald-700 rounded-xl text-sm flex items-center gap-3 animate-fade-in shadow-md">
//                 <div className="p-2 bg-emerald-500 rounded-full">
//                   <CheckCircle className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="font-medium">Captcha verified successfully!</span>
//               </div>
//             )}

//             {state.signupMethod === 'email' && (
//               <button
//                 onClick={handleEmailSignup}
//                 disabled={state.loading || !state.captchaVerified}
//                 className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden group mb-6"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   {state.loading ? (
//                     <>
//                       <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Creating Account...
//                     </>
//                   ) : (
//                     <>
//                       Create Account
//                       <Sparkles className="w-5 h-5" />
//                     </>
//                   )}
//                 </span>
//               </button>
//             )}

//             <div className="text-center text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-bold hover:underline transition-all">
//                 Sign in
//               </Link>
//             </div>

//             <div className="mt-6 text-xs text-center text-gray-500">
//               By signing up, you agree to our{' '}
//               <a href="#" className="text-emerald-600 hover:underline font-medium">Terms of Service</a>
//               {' '}and{' '}
//               <a href="#" className="text-emerald-600 hover:underline font-medium">Privacy Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
//           20%, 40%, 60%, 80% { transform: translateX(5px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-down {
//           from { opacity: 0; transform: translateY(-20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-right {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slide-left {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 0.8; }
//         }
//         .animate-shake {
//           animation: shake 0.5s ease-in-out;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out;
//         }
//         .animate-slide-down {
//           animation: slide-down 0.8s ease-out;
//         }
//         .animate-slide-right {
//           animation: slide-right 1s ease-out;
//         }
//         .animate-slide-left {
//           animation: slide-left 1s ease-out;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SignupPage;





import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Camera,
  Sparkles,
  Lock,
  Mail,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Github,
  LogIn,
} from "lucide-react";

/* ------------------ STORE ------------------ */
const useAuthStore = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    captchaVerified: false,
    loading: false,
    error: null,
    showPassword: false,
    showConfirmPassword: false,
    signupMethod: "email",
  });

  const actions = {
    setEmail: (v) => setState((p) => ({ ...p, email: v })),
    setPassword: (v) => setState((p) => ({ ...p, password: v })),
    setConfirmPassword: (v) => setState((p) => ({ ...p, confirmPassword: v })),
    setCaptchaVerified: (v) =>
      setState((p) => ({ ...p, captchaVerified: v })),
    setLoading: (v) => setState((p) => ({ ...p, loading: v })),
    setError: (v) => setState((p) => ({ ...p, error: v })),
    toggleShowPassword: () =>
      setState((p) => ({ ...p, showPassword: !p.showPassword })),
    toggleShowConfirmPassword: () =>
      setState((p) => ({
        ...p,
        showConfirmPassword: !p.showConfirmPassword,
      })),
    setSignupMethod: (v) => setState((p) => ({ ...p, signupMethod: v })),
  };

  return { state, actions };
};

/* ------------------ PAGE ------------------ */
export default function SignupPage() {
  const navigate = useNavigate();
  const { state, actions } = useAuthStore();

  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const verifyCaptcha = () => {
    if (captchaInput.toUpperCase() === captchaCode) {
      actions.setCaptchaVerified(true);
      actions.setError(null);
    } else {
      actions.setError("Invalid captcha. Try again.");
      setCaptchaCode(generateCaptcha());
      setCaptchaInput("");
    }
  };

 const handleSignup = async () => {
  if (!state.captchaVerified) {
    actions.setError("Verify captcha first");
    return;
  }

  try {
    actions.setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    });

    const data = await res.json();
    actions.setLoading(false);

    if (res.ok) {
  alert("Account created!");
  navigate("/bipul");
}
 else {
      actions.setError(data.message || "Signup failed");
    }
  } catch (err) {
    actions.setLoading(false);
    actions.setError("Server error");
  }
};

 


  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 flex items-center justify-center px-4">
      {/* ---------------- HEADER ---------------- */}
      <div className="absolute top-4 left-6 flex items-center gap-3 text-white">
        <div className="p-3 bg-white/10 rounded-xl">
          <ShoppingCart className="w-7 h-7 text-emerald-300" />
          <Camera className="w-4 h-4 text-cyan-300 absolute -bottom-1 -right-1" />
        </div>
        <div>
          <h2 className="text-xl font-bold flex items-center gap-1">
            caper <Sparkles className="w-4 h-4 text-yellow-300" />
          </h2>
          <p className="text-xs text-emerald-200">by instacart</p>
        </div>
      </div>

      <div className="absolute top-4 right-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white border border-white/20 hover:scale-105"
        >
          <LogIn className="w-4 h-4" /> Sign In
        </button>
      </div>

      {/* ---------------- MAIN GRID ---------------- */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* -------- LEFT CONTENT (NO EMPTY SPACE) -------- */}
        <div className="text-white hidden lg:block">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            The Future of <br />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Smart Grocery Shopping
            </span>
          </h1>

          <p className="text-emerald-100 text-lg mb-8 max-w-xl">
            Skip long queues and manual billing. Our AI-powered carts recognize
            products instantly for a seamless checkout experience.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              "Instant Checkout",
              "AI Product Recognition",
              "Real-time Cart Total",
              "Zero Billing Errors",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-3xl font-bold">3×</p>
              <p className="text-sm text-emerald-200">Faster Checkout</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-sm text-emerald-200">Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold">AI</p>
              <p className="text-sm text-emerald-200">Powered</p>
            </div>
          </div>
        </div>

        {/* -------- RIGHT FORM -------- */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 max-w-md mx-auto w-full">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-emerald-600">
              Create Account
            </h2>
            <p className="text-gray-500">Join the future of shopping</p>
          </div>

          {state.error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-600 flex gap-2 rounded">
              <XCircle className="w-5 h-5" /> {state.error}
            </div>
          )}

          {/* EMAIL */}
          <label className="text-sm font-medium">Email</label>
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 py-3 border rounded-xl"
              placeholder="you@example.com"
              value={state.email}
              onChange={(e) => actions.setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <label className="text-sm font-medium">Password</label>
          <div className="relative mb-4">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 text-gray-400" />
            <input
              type={state.showPassword ? "text" : "password"}
              className="w-full pl-10 pr-10 py-3 border rounded-xl"
              value={state.password}
              onChange={(e) => actions.setPassword(e.target.value)}
            />
            <button
              onClick={actions.toggleShowPassword}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {state.showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* CAPTCHA */}
          {!state.captchaVerified ? (
            <div className="mb-4 p-4 bg-emerald-50 rounded-xl border">
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xl">{captchaCode}</span>
                <button
                  onClick={() => setCaptchaCode(generateCaptcha())}
                >
                  ↻
                </button>
              </div>
              <input
                className="w-full px-3 py-2 border rounded mb-2"
                placeholder="Enter captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
              <button
                onClick={verifyCaptcha}
                className="w-full py-2 bg-emerald-500 text-white rounded-lg"
              >
                Verify
              </button>
            </div>
          ) : (
            <div className="mb-4 text-emerald-600 flex gap-2">
              <CheckCircle /> Captcha verified
            </div>
          )}

          <button
            onClick={handleSignup}
            disabled={state.loading}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold hover:scale-105"
          >
            {state.loading ? "Creating..." : "Create Account ✨"}
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-600 font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
