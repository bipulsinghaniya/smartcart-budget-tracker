// import { useState } from "react";

// import cbs from "../assets/images/cbs.jpg";
// import schnucks from "../assets/images/schnucks.png";
// import fox32 from "../assets/images/fox32.png";
// import aldi from "../assets/images/aldi.png";

// const mediaData = [
//   {
//     img: cbs,
//     text: "A new generation of shopping cart, with GPS and AI",
//     link: "Watch",
//   },
//   {
//     img: schnucks,
//     text:
//       "Schnucks and Instacart Expand Omnichannel Partnership with Smart Carts",
//     link: "Read more",
//   },
//   {
//     img: fox32,
//     text: "Future of retail: AI-powered shopping cart",
//     link: "Watch",
//   },
//   {
//     img: aldi,
//     text:
//       "Instacart and ALDI SOUTH Group Expand Omnichannel Partnership",
//     link: "Read more",
//   },
// ];

// export default function Media() {
//   const [index, setIndex] = useState(0);

//   // EXACT card size from design
//   const CARD_WIDTH = 300;
//   const GAP = 32;
//   const MOVE_X = CARD_WIDTH + GAP;

//   const prev = () => {
//     setIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const next = () => {
//     setIndex((prev) =>
//       Math.min(prev + 1, mediaData.length - 4)
//     );
//   };

//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-[90rem] mx-auto px-10">

//         <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
//           Caper in the media
//         </h2>

//         <div className="relative overflow-hidden">

//           {/* SLIDER */}
//           <div
//             className="flex gap-8 transition-transform duration-500"
//             style={{
//               transform: `translateX(-${index * MOVE_X}px)`,
//             }}
//           >
//             {mediaData.map((item, i) => (
//               <div
//                 key={i}
//                 className="w-[300px] bg-gray-50 rounded-2xl p-8 flex-shrink-0"
//               >
//                 <img
//                   src={item.img}
//                   alt=""
//                   className="h-12 mb-6 object-contain"
//                 />

//                 <p className="text-gray-700 mb-10 leading-relaxed">
//                   {item.text}
//                 </p>

//                 <a
//                   href="#"
//                   className="font-semibold underline"
//                 >
//                   {item.link}
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* LEFT BUTTON */}
//           <button
//             onClick={prev}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full"
//           >
//             ←
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={next}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black text-white w-12 h-12 rounded-full"
//           >
//             →
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }

import cbs from "../assets/images/cbs.jpg";
import schnucks from "../assets/images/schnucks.png";
import fox32 from "../assets/images/fox32.png";
import aldi from "../assets/images/aldi.png";

const mediaData = [
  {
    img: cbs,
    text: "A new generation of shopping cart, with GPS and AI",
    url: "https://www.cbsnews.com/video/a-new-generation-of-shopping-cart-with-gps-and-ai/",
  },
  {
    img: schnucks,
    text:
      "Schnucks and Instacart Expand Omnichannel Partnership with Smart Carts",
    url: "https://www.prnewswire.com/news-releases/schnucks-and-instacart-expand-omnichannel-partnership-with-smart-carts-301880426.html",
  },
  {
    img: fox32,
    text: "Future of retail: AI-powered shopping cart",
    url: "https://youtu.be/7pcOH1o0K-s?si=d2BRIVehomrHlxm6",
  },
  {
    img: aldi,
    text:
      "Instacart and ALDI SOUTH Group Expand Omnichannel Partnership",
    url: "https://www.instacart.com/company/pressreleases/instacart-and-aldi-south-group-expand-omnichannel-partnership?_gl=1*12j01je*_gcl_au*MTUxNDkxNDE2NC4xNzY1MDQ1NDMz*_ga*MjcxNjM5NTI2LjE3NjUwNDU0NDI.*_ga_VL5WVTXMWP*czE3NjYyNTAxODQkbzgkZzEkdDE3NjYyNTAyNTckajYwJGwwJGgw",
  },
];


export default function Media() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[90rem] mx-auto px-10">

        <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
          Caper in the media
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {mediaData.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl p-8 flex flex-col"
            >
              {/* LOGO BOX */}
              <div className="bg-white rounded-2xl p-6 mb-8 flex items-center justify-center h-28">
                <img
                  src={item.img}
                  alt="media logo"
                  className="h-22 object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-800 text-lg leading-relaxed flex-grow">
                {item.text}
              </p>

              {/* LINK */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 font-semibold underline text-lg hover:text-orange-600 transition"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
