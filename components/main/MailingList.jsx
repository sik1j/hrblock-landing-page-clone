export default function MailingList() {
  return (
    <section>
      <div class="bg-gray-200">
        <div class="max-w-screen-2xl mx-auto pt-4 pb-12 md:py-8 lg:py-12 px-6 md:py-16 lg:space-x-20 md:px-28 flex flex-col lg:flex-row md:items-center">
          <div class="flex-auto lg:w-192 py-5 text-center lg:text-left">
            <h2
              id="newsletter-headine"
              class="px-8 lg:px-0 text-2xl leading-6 md:leading-10 font-bold tracking-snug md:text-4xl"
            >
              Subscribe to our tax tips newsletter.
            </h2>
            <p class="mt-3 max-w-2xl text-md leading-6 text-gray-800">
              Get the latest tax news to your email.
            </p>
          </div>
          <div class="flex-auto flex flex-col">
            <form
              method="POST"
              name="newsletter-subscriptions"
              netlify-honeypot="full-name"
              data-netlify="true"
            >
              <input
                type="hidden"
                name="form-name"
                value="newsletter-subscriptions"
              />
              <p class="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="full-name" />
                </label>
              </p>
              <label class="text-gray-700 w-full text-xs flex justify-center lg:justify-start">
                Email Address
              </label>
              <fieldset class="flex flex-col md:flex-row items-end">
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email address"
                  required="required"
                  name="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  class="focus:bg-white outline-transparent border-gray-200 focus:shadow-none focus:outline-none focus:border-goldenrod-300 border-2 rounded-none p-2 py-3 md:py-2.5 block transition duration-150 ease-in-out sm:leading-7 w-full"
                />
                <div class="flex-1 w-full md:w-auto md:pl-3 mt-7 md:mt-0 md:ml-3 md-flex-shrink-0">
                  <div class="CTA flex">
                    <div class="relative">
                      <button class="flex outline-none focus:outline-black border-transparent border-transparent border-2 text-black bg-goldenrod-300 no-underline hover:bg-goldenrod-100 leading-none w-full md:w-auto justify-center inline-flex font-semibold items-center px-4 py-4 lg:px-6 border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <p class="mt-5 text-xxs leading-3 text-gray-600">
              By clicking the Subscribe button, you consent to receiving
              electronic messages from H&amp;R Block Canada regarding product
              offerings, tax tips, and promotional materials. You can withdraw
              your consent at any time by emailing us at{" "}
              <a class="underline" href="mailto:unsubscribe@hrblock.ca">
                unsubscribe@hrblock.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
