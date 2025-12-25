import pic1 from "../assets/images/pic_1.avif";
import pic2 from "../assets/images/pic_2.avif";
import pic3 from "../assets/images/pic3.avif";

export default function Features() {
  return (
    <section id="smart-cart" className="bg-white py-24">
      <div className="max-w-[90rem] mx-auto px-10">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
          Deliver seamless and personalized in-store shopping
        </h2>

        {/* GRID — THIS IS THE KEY */}
       <div className="grid grid-cols-3 gap-12">

          {/* CARD 1 */}
          <div>
            <img
              src={pic1}
              alt=""
              className="rounded-2xl w-full h-[280px] object-cover"
            />
            <h3 className="text-2xl font-semibold mt-6">
              Incremental consumer spend
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✓ Larger baskets during shops</li>
              <li>✓ More frequent return trips</li>
              <li>✓ Increased LTV of every customer</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div>
            <img
              src={pic2}
              alt=""
              className="rounded-2xl w-full h-[280px] object-cover"
            />
            <h3 className="text-2xl font-semibold mt-6">
              Alternate revenue streams
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✓ Personalized, location-based advertising</li>
              <li>✓ Drive engagement via onboard screen</li>
                <li>✓ Subscription-based premium features </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div>
            <img
              src={pic3}
              alt=""
              className="rounded-2xl w-full h-[280px] object-cover"
            />
            <h3 className="text-2xl font-semibold mt-6">
              Seamless integration
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✓ Works with POS & loyalty programs</li>
              <li>✓ Easy access to cart monitoring tools</li>
              <li>✓  Compatible with existing store </li>
            
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
