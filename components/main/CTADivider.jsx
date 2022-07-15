import Link from "next/link";
export default function CTADivider() {
  return (
    <div>
      <section className="relative bg-hrbgreen-600">
        <span className="absolute triangle top-0 left-1/2 inline -mt-5 bg-white border-white"></span>
        <div className="max-w-screen-2xl px-3 md:px-24 py-10 text-center flex mx-auto">
          <div className="w-full md:w-1/2 mx-auto">
            <h3 className="text-black text-lg md:text-base pt-3 pb-2">
              Unsure which filing option is right for you?
            </h3>
            <h4 className="text-3xl font-semibold text-white text-center leading-tight tracking-tight">
              <p>Let us help you decide the best way to file.</p>
            </h4>
            <span className="inline-flex pt-5 pb-2">
              <div className="CTA flex">
                <div className="relative">
                  <Link href="/product-recommend/">
                    <div className="cta flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex font-semibold items-center px-4 py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">
                      Get started
                    </div>
                  </Link>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
