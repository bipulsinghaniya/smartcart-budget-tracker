// import { useState } from "react";

// const faqs = [
//   {
//     question: "What is a smart shopping cart?",
//     answer:
//       "A smart shopping cart uses AI and cameras to automatically detect items and enable seamless checkout."
//   },
//   {
//     question: "How much does a smart cart cost?",
//     answer:
//       "Pricing depends on rollout scale and integration needs. Flexible pricing models are available."
//   },
//   {
//     question: "What are the advantages of AI-powered carts?",
//     answer:
//       "They reduce checkout time, increase revenue, and enhance customer experience."
//   }
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-4xl mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           Frequently Asked Questions
//         </h2>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border rounded-2xl">
              
//               <button
//                 onClick={() =>
//                   setOpenIndex(openIndex === index ? null : index)
//                 }
//                 className="w-full flex justify-between items-center p-6 bg-gray-50"
//               >
//                 <span className="font-semibold">{faq.question}</span>
//                 <span>{openIndex === index ? "⌃" : "⌄"}</span>
//               </button>

//               {openIndex === index && (
//                 <div className="p-6 pt-0 text-gray-600">
//                   {faq.answer}
//                 </div>
//               )}

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState } from "react";

const faqs = [
  {
    question: "What is a smart shopping cart?",
    answer:
      "A smart shopping cart uses AI and cameras to automatically detect items and enable seamless checkout."
  },
  {
    question: "How much does a smart cart cost?",
    answer:
      "Pricing depends on rollout scale and integration needs. Flexible pricing models are available."
  },
  {
    question: "What are the advantages of AI-powered smart shopping carts?",
    answer:
      "They reduce checkout time, increase revenue, and enhance customer experience."
  },
  {
    question: "What size business should use smart carts?",
    answer:
      "Mid to large retailers benefit the most, especially those looking to modernize in-store shopping."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section   id="resources" className="bg-white py-32">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-5xl font-extrabold text-center text-gray-900">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 mt-6 text-lg">
          Everything you need to know about Caper smart carts
        </p>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 px-8 py-6 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {/* SVG CHEVRON ARROW */}
                <span
                  className={`ml-4 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


