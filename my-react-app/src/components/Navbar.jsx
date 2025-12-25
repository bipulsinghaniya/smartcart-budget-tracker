// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between px-10 py-5 bg-white">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <h1 className="text-4xl font-extrabold text-orange-600">caper</h1>
//         <span className="text-base text-green-600 font-semibold">
//           by instacart
//         </span>
//       </div>

//       {/* Menu */}
//       <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">
//         <li className="hover:text-orange-600 cursor-pointer">
//           Caper Smart Cart
//         </li>
//         <li className="hover:text-orange-600 cursor-pointer">
//           For Retailers
//         </li>
//         <li className="hover:text-orange-600 cursor-pointer">
//           Resources
//         </li>
//       </ul>

//       {/* Actions */}
//       <div className="flex items-center gap-4">
//         <button className="px-6 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition">
//           Get Caper Today
//         </button>
//         <button className="px-4 py-3 border border-gray-400 rounded-full text-sm">
//           🇺🇸 EN
//         </button>
//       </div>

//     </nav>
//   );
// }







// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between px-10 py-5 bg-white">
      
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <h1 className="text-4xl font-extrabold text-orange-600">caper</h1>
//         <span className="text-base text-green-600 font-semibold">
//           by instacart
//         </span>
//       </div>

//       {/* Menu */}
//       <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">
//         <li className="hover:text-orange-600 cursor-pointer">
//           Caper Smart Cart
//         </li>
//         <li className="hover:text-orange-600 cursor-pointer">
//           For Retailers
//         </li>
//         <li className="hover:text-orange-600 cursor-pointer">
//           Resources
//         </li>
//       </ul>

//       {/* Actions */}
//       <div className="flex items-center gap-4">

//         {/* Login */}
//         <Link
//           to="/login"
//           className="text-gray-700 font-medium hover:text-orange-600 transition"
//         >
//           Login
//         </Link>

//         {/* Signup */}
//         <Link
//           to="/signup"
//           className="px-6 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
//         >
//           Sign up
//         </Link>

//         {/* Language */}
//         <button className="px-4 py-3 border border-gray-400 rounded-full text-sm">
//           🇺🇸 EN
//         </button>

//       </div>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("🇺🇸");

  const selectCountry = (flag) => {
    setFlag(flag);
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white relative">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-extrabold text-orange-600">caper</h1>
        <span className="text-base text-green-600 font-semibold">
          by instacart
        </span>
      </div>





      {/* Menu */}
   <ul className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">

  <li>
    <a
      href="#smart-cart"
      className="hover:text-orange-600 cursor-pointer transition"
    >
      Caper Smart Cart
    </a>
  </li>

  <li>
    <a
      href="#retailers"
      className="hover:text-orange-600 cursor-pointer transition"
    >
      For Retailers
    </a>
  </li>

  <li>
    <a
      href="#resources"
      className="hover:text-orange-600 cursor-pointer transition"
    >
      Resources
    </a>
  </li>

</ul>





      {/* Actions */}
      <div className="flex items-center gap-4 relative">

        {/* Login */}
        <Link
          to="/login"
          className="text-gray-700 font-medium hover:text-orange-600 transition"
        >
          Login
        </Link>

        {/* Signup */}
        <Link
          to="/signup"
          className="px-6 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition"
        >
          Sign up
        </Link>

        {/* Flag Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-3 border border-gray-400 rounded-full text-xl hover:bg-gray-100"
          >
            {flag}
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50">
              <button
                onClick={() => selectCountry("🇮🇳")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                🇮🇳 India
              </button>
              <button
                onClick={() => selectCountry("🇺🇸")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                🇺🇸 United States
              </button>
              <button
                onClick={() => selectCountry("🇨🇳")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                🇨🇳 China
              </button>
              <button
                onClick={() => selectCountry("🇵🇰")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                🇵🇰 Pakistan
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

