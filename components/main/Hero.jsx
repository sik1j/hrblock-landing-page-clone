import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl md:pt-0 lg:pl-24 md:flex-row mx-auto md:pr-0 flex flex-col">
        <div className="flex-1 flex justify-center flex-col px-4 lg:-mr-24">
          <div className="flex-1 flex flex-col justify-center flex-shrink lg:mr-20 lg:pr-6 h-full pb-6">
            <h1 className="text-3xl font-bold pt-6 md:pt-0 pr-16 tracking-snug md:leading-none md:whitespace-pre-line text-hrbgreen-600 lg:text-5xl">
              We’re open!
            </h1>
            <h2 className="pt-3 md:pt-6 md:whitespace-pre-line text-gray-900  text-xl pr-8">
              Visit an office, drop-off your documents, securely upload your
              documents from anywhere, or file yourself with our tax software.
              Our Tax Experts are here to help.
            </h2>
            <div className="flex">
              <div className="flex pt-6">
                <div className="flex items-center justify-start">
                  <div className="CTA flex inline whitespace-nowrap">
                    <div className="relative">
                      <Link
                        href="/file-with-an-expert/"
                        className="cta flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-black bg-goldenrod-300 no-underline hover:bg-goldenrod-100 leading-none w-full md:w-auto justify-center inline-flex font-semibold items-center px-4 py-4 lg:px-6 border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150"
                      >
                        <div>File with an expert</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-6">
                <div className="flex items-center justify-start">
                  <div className="px-2 text-gray-900"></div>
                  <div className="CTA flex inline whitespace-nowrap">
                    <div className="relative">
                      <Link
                        href="/file-your-taxes/online-tax-software/"
                        className="cta flex mx-auto md:mx-0 outline-none focus:outline-black border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex font-semibold items-center px-4 py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150"
                      >
                        <div>File yourself</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 -mt-2 relative text-left md:pb-halfwidthFourByThree pb-mobileHome">
          <div className="w-full md:w-halfwidth h-full absolute overflow-hidden">
            <div className="w-full h-full inset-0 flex items-center justify-center overflow-hidden relative">
              <picture
                width="2600"
                height="2600"
                className="md:hidden px-4 object-contain w-full h-full absolute inset-0"
              >
                <img
                  sizes="100vw"
                  loading="lazy"
                  alt="Homepage hero"
                  src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=80bd1814c4f45bb4a89b013e0c73a59b"
                  width="2600"
                  data-src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=80bd1814c4f45bb4a89b013e0c73a59b"
                  data-srcset="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=1200&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26c9d6fe1a1cb7d411cdd05adfc4b600 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1024&amp;h=1024&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=e4934f09a0f68ecd8b0b5f42bb047715 1024w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=992&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=f241894b7f86ec4bbe9a75f9df2830f5 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=920&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=74bf0414b639e94f5a97e23541c5ccb9 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=860&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=68991e73535ace4bd73564e6c3b6f193 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=800&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=61afec01f92e09f3609e6c739acd4878 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=768&amp;q=60&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=074a04418f21936d2c92346fe4574a37 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=720&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=29c03252d83633a737be5baf688e499d 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=680&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=86b513c47003ac181443c660f37c68de 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=640&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=edb30b8297506e4d19c50de9c2f8b5b8 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=576&amp;q=60&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=97f19d83f7b5f547f5053033acf020ea 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d5dcff3c4f8cddbd0f6bf90bafae8576 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=80bd1814c4f45bb4a89b013e0c73a59b 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=240&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3d676e712e7247c56da7923fb463113a 240w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=4d0f1654f706a1052755ac084a35ddd8 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=496&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=53045f4adc280b0b402d6ad2cc1aa3a1 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=460&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=fdec1c95af74a0c8b3027916a72d4ac9 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=430&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=6585db0f78b9cf410e25aa513b0b5c35 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=400&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a02d9991392ff756ddeb6a156db5cf7c 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=384&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=6b385ba4d84550e6a927a406488dac67 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=540&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a7899beb3fbdc189706cc262c4c5f4f2 540w"
                  data-sizes="100vw"
                  className="px-4 object-contain w-full h-full absolute inset-0 g-image g-image--lazy g-image--loaded"
                  srcSet="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=1200&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26c9d6fe1a1cb7d411cdd05adfc4b600 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1024&amp;h=1024&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=e4934f09a0f68ecd8b0b5f42bb047715 1024w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=992&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=f241894b7f86ec4bbe9a75f9df2830f5 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=920&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=74bf0414b639e94f5a97e23541c5ccb9 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=860&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=68991e73535ace4bd73564e6c3b6f193 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=800&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=61afec01f92e09f3609e6c739acd4878 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=768&amp;q=60&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=074a04418f21936d2c92346fe4574a37 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=720&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=29c03252d83633a737be5baf688e499d 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=680&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=86b513c47003ac181443c660f37c68de 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=640&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=edb30b8297506e4d19c50de9c2f8b5b8 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=576&amp;q=60&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=97f19d83f7b5f547f5053033acf020ea 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d5dcff3c4f8cddbd0f6bf90bafae8576 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=80bd1814c4f45bb4a89b013e0c73a59b 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=240&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3d676e712e7247c56da7923fb463113a 240w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=4d0f1654f706a1052755ac084a35ddd8 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=496&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=53045f4adc280b0b402d6ad2cc1aa3a1 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=460&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=fdec1c95af74a0c8b3027916a72d4ac9 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=430&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=6585db0f78b9cf410e25aa513b0b5c35 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=400&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a02d9991392ff756ddeb6a156db5cf7c 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=384&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=6b385ba4d84550e6a927a406488dac67 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=540&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a7899beb3fbdc189706cc262c4c5f4f2 540w"
                />
                <noscript>
                  <img
                    src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&h=360&q=82&auto=format&fit=crop&dm=1642521881&s=80bd1814c4f45bb4a89b013e0c73a59b"
                    className="px-4 object-contain w-full h-full absolute inset-0 g-image g-image--loaded"
                    width="2600"
                    alt="Homepage hero"
                  />
                </noscript>
              </picture>

              <picture className="hidden md:block lg:hidden absolute m-0 p-0 inset-0">
                <img
                  sizes="50vw"
                  loading="lazy"
                  alt="Homepage hero"
                  src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab"
                  data-src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab"
                  data-srcset="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=900&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=db879980427fc7a86a6317598466dfea 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=744&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b3f93963ecc0f90e196768f7ca3b177e 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=576&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=41010a050c916817020d333e64f11128 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=432&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=58dd996be10d160829061cbee5a17afc 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=690&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3ee1d1435603fd518eb8e9832e4e27ea 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=645&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=38dbaceddf5d8c8c82312027a8db39c9 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=cdcd0987dafd10b624b21caf63fd7376 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ccf60082083306d56dfebc479e19d211 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=510&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d43ac09a732ba0b6f2d65151a0588a64 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b07bef3c7dbb30c3f355296cd9d8e935 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=694c1b6b6983eb16610f00aa41e7b508 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=450&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=8a57b19f63f2549fd6f318406000f1a7 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=372&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26bb48335673e1356ca46e1301910fd0 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=345&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=5350190f155479691b1a27e61b428d08 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=322&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e4db862bfacbc3a40a42754fd624239 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=300&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ac04a4e416b1bc08a174bb0fec195027 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=288&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=7b0ad55d0a8461ff8fb0b0b42ddc7dba 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=320&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a231b155cbb7a658e332bcaa60d04f04 320w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=280&amp;h=210&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b7123bcb752cf1784ebc9332a42da4eb 280w"
                  data-sizes="50vw"
                  className="object-cover w-full h-full g-image g-image--lazy g-image--loaded"
                  srcSet="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=900&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=db879980427fc7a86a6317598466dfea 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=744&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b3f93963ecc0f90e196768f7ca3b177e 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=576&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=41010a050c916817020d333e64f11128 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=432&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=58dd996be10d160829061cbee5a17afc 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=690&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3ee1d1435603fd518eb8e9832e4e27ea 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=645&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=38dbaceddf5d8c8c82312027a8db39c9 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=cdcd0987dafd10b624b21caf63fd7376 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ccf60082083306d56dfebc479e19d211 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=510&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d43ac09a732ba0b6f2d65151a0588a64 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b07bef3c7dbb30c3f355296cd9d8e935 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=694c1b6b6983eb16610f00aa41e7b508 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=450&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=8a57b19f63f2549fd6f318406000f1a7 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=372&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26bb48335673e1356ca46e1301910fd0 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=345&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=5350190f155479691b1a27e61b428d08 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=322&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e4db862bfacbc3a40a42754fd624239 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=300&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ac04a4e416b1bc08a174bb0fec195027 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=288&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=7b0ad55d0a8461ff8fb0b0b42ddc7dba 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=320&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a231b155cbb7a658e332bcaa60d04f04 320w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=280&amp;h=210&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b7123bcb752cf1784ebc9332a42da4eb 280w"
                />
                <noscript>
                  <img
                    src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&h=270&q=82&auto=format&fit=crop&dm=1642521881&s=1e8677f62b15a2c5accf7ff491bc71ab"
                    className="object-cover w-full h-full g-image g-image--loaded"
                    alt="Homepage hero"
                  />
                </noscript>
              </picture>
              <picture className="md:absolute m-0 p-0 inset-0 hidden lg:block">
                <img
                  sizes="50vw"
                  loading="lazy"
                  alt="Homepage hero"
                  src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab"
                  data-src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab"
                  data-srcset="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=900&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=db879980427fc7a86a6317598466dfea 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=744&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b3f93963ecc0f90e196768f7ca3b177e 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=576&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=41010a050c916817020d333e64f11128 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=432&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=58dd996be10d160829061cbee5a17afc 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=690&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3ee1d1435603fd518eb8e9832e4e27ea 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=645&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=38dbaceddf5d8c8c82312027a8db39c9 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=cdcd0987dafd10b624b21caf63fd7376 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ccf60082083306d56dfebc479e19d211 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=510&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d43ac09a732ba0b6f2d65151a0588a64 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b07bef3c7dbb30c3f355296cd9d8e935 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=694c1b6b6983eb16610f00aa41e7b508 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=450&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=8a57b19f63f2549fd6f318406000f1a7 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=372&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26bb48335673e1356ca46e1301910fd0 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=345&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=5350190f155479691b1a27e61b428d08 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=322&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e4db862bfacbc3a40a42754fd624239 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=300&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ac04a4e416b1bc08a174bb0fec195027 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=288&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=7b0ad55d0a8461ff8fb0b0b42ddc7dba 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=320&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a231b155cbb7a658e332bcaa60d04f04 320w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=280&amp;h=210&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b7123bcb752cf1784ebc9332a42da4eb 280w"
                  data-sizes="50vw"
                  className="object-contain w-full h-full hidden lg:block g-image g-image--lazy g-image--loaded"
                  srcSet="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=1200&amp;h=900&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=db879980427fc7a86a6317598466dfea 1200w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=992&amp;h=744&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b3f93963ecc0f90e196768f7ca3b177e 992w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=768&amp;h=576&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=41010a050c916817020d333e64f11128 768w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=576&amp;h=432&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=58dd996be10d160829061cbee5a17afc 576w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=920&amp;h=690&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=3ee1d1435603fd518eb8e9832e4e27ea 920w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=860&amp;h=645&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=38dbaceddf5d8c8c82312027a8db39c9 860w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=800&amp;h=600&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=cdcd0987dafd10b624b21caf63fd7376 800w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=720&amp;h=540&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ccf60082083306d56dfebc479e19d211 720w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=680&amp;h=510&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=d43ac09a732ba0b6f2d65151a0588a64 680w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=640&amp;h=480&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b07bef3c7dbb30c3f355296cd9d8e935 640w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=480&amp;h=360&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=694c1b6b6983eb16610f00aa41e7b508 480w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&amp;h=270&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e8677f62b15a2c5accf7ff491bc71ab 360w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=600&amp;h=450&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=8a57b19f63f2549fd6f318406000f1a7 600w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=496&amp;h=372&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=26bb48335673e1356ca46e1301910fd0 496w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=460&amp;h=345&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=5350190f155479691b1a27e61b428d08 460w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=430&amp;h=322&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=1e4db862bfacbc3a40a42754fd624239 430w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=400&amp;h=300&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=ac04a4e416b1bc08a174bb0fec195027 400w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=384&amp;h=288&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=7b0ad55d0a8461ff8fb0b0b42ddc7dba 384w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=320&amp;h=240&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=a231b155cbb7a658e332bcaa60d04f04 320w, https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=280&amp;h=210&amp;q=82&amp;auto=format&amp;fit=crop&amp;dm=1642521881&amp;s=b7123bcb752cf1784ebc9332a42da4eb 280w"
                />
                <noscript>
                  <img
                    src="https://hrb-test.netlify.app/images/Header/Homepage-hero.png?w=360&h=270&q=82&auto=format&fit=crop&dm=1642521881&s=1e8677f62b15a2c5accf7ff491bc71ab"
                    className="object-contain w-full h-full hidden lg:block g-image g-image--loaded"
                    alt="Homepage hero"
                  />
                </noscript>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
