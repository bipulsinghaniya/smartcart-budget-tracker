// import React from "react";

// export default function CTA() {
//   return (
//     <section className="py-32 bg-gradient-to-br from-orange-50 via-white to-green-50">
//       <div className="max-w-5xl mx-auto px-6 text-center">

//         {/* HEADING */}
//         <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
//           Transform Your Shopping <br /> Experience
//         </h2>

//         {/* SUBTEXT */}
//         <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
//           Reduce wait times, drive revenue and delight your customers with
//           Caper&apos;s AI-powered smart carts.
//         </p>

//         {/* BUTTONS */}
//         <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
//           {/* Book Demo */}
//           <button className="flex items-center justify-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-orange-500 to-green-500 hover:opacity-90 transition">
//             📅 Book a Demo
//           </button>

//           {/* Download Brochure */}
//           <button className="flex items-center justify-center gap-3 px-10 py-4 rounded-full border border-gray-300 text-gray-900 font-semibold text-lg bg-white hover:bg-gray-50 transition">
//             📄 Download Brochure
//           </button>
//         </div>

//         {/* FEATURES */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
//           <div>
//             <p className="text-2xl font-bold text-gray-900">24/7</p>
//             <p className="text-gray-500">Support</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">30-day</p>
//             <p className="text-gray-500">Trial</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">Flexible</p>
//             <p className="text-gray-500">Pricing</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">Easy</p>
//             <p className="text-gray-500">Integration</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
<section
  id="book-demo"
  className="py-32 bg-gradient-to-br from-orange-50 via-white to-green-50"
>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Transform Your Shopping <br /> Experience
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-14">
          Reduce wait times, drive revenue and delight your customers with
          Caper&apos;s AI-powered smart carts.
        </p>

        {/* PRIMARY CTA */}
        <div className="flex justify-center mb-24">
         <Link
  to="/book-demo"
  className="flex items-center justify-center gap-3 px-12 py-5 rounded-full
  text-white font-semibold text-lg
  bg-gradient-to-r from-orange-500 to-green-500
  hover:opacity-90 transition"
>
  📅 Book a Demo
</Link>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">24/7</p>
            <p className="text-gray-500">Support</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">30-day</p>
            <p className="text-gray-500">Trial</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">Flexible</p>
            <p className="text-gray-500">Pricing</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">Easy</p>
            <p className="text-gray-500">Integration</p>
          </div>
        </div>

      </div>
    </section>
  );
}

