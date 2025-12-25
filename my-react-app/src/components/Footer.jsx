export default function Footer() {
  return (
    <footer className="bg-[#0b1324] text-gray-300 pt-24 pb-0.5">
      <div className="max-w-[90rem] mx-auto px-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-5 md:grid-cols-5 gap-14">

          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-extrabold text-white">caper</h2>
              <span className="bg-green-900/40 text-green-400 text-sm px-3 py-1 rounded-full font-semibold">
                by instacart
              </span>
            </div>

            <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
              AI-powered smart shopping carts that transform the in-store retail
              experience, driving revenue and delighting customers.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"> in</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"> x</div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                ▶
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                ◎
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Caper Smart Cart</li>
              <li>For Retailers</li>
              <li>Resources</li>
              <li>Case Studies</li>
              <li>About Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Supplier Transparency</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>sales@caper.ai</li>
              <li>+1 (888) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>


        </div>


        <div></div>

        
        <div className="border-t border-gray-800 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-row md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2023 Caper by Instacart. All rights reserved.</p>
          <p className="max-w-md text-center md:text-right"> Disclaimer: All graphics, visuals and illustrations are illustrative only and are subject to change.</p>
        </div>

      </div>
    </footer>
  );
}
