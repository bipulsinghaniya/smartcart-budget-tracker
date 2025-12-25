import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="px-8 mt-4">
      <div className="max-w-[90rem] mx-auto">
        <div className="relative rounded-3xl overflow-hidden">

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[560px] object-cover"
          >
            <source src="/video_2.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Hero Content */}
          <div className="absolute bottom-16 left-16 text-white max-w-2xl">
            <h1 className="text-6xl font-extrabold leading-tight">
              Make Shopping Magic
            </h1>

            <div className="flex gap-5 mt-8">

              {/* Get Started → Signup */}
              <Link
                to="/signup"
                className="bg-white text-black px-8 py-5 rounded-full
                font-medium text-lg hover:bg-gray-200 transition"
              >
                Get Started
              </Link>

              {/* Meet Caper Carts → Scroll */}
           <a
  href="#book-demo"
  className="border border-white px-10 py-4 rounded-full
  font-medium text-xl hover:bg-white hover:text-black transition"
>
  Meet Caper Carts
</a>



            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
