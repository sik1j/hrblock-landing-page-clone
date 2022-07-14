export default function Calculator() {
  return (
    <div>
      <section class="taxcalc bg-gray-100">
        <div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:space-x-24 py-12 px-6 md:px-28 text-center md:text-left">
          <div class="hidden md:flex flex-1 py-3">
            <img
              width="500"
              height="500"
              loading="lazy"
              srcset="https://www.hrblock.ca/images/Header/taxcalc.png?w=384&amp;h=384&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=682ef0c9fc4feb66a911a4ef60d4a744 384w, https://www.hrblock.ca/images/Header/taxcalc.png?w=430&amp;h=430&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=84a9df7033a5ed2ee0dbdacc3912884c 430w, https://www.hrblock.ca/images/Header/taxcalc.png?w=400&amp;h=400&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=eef81f4e4ff2d289478c889ef32f29aa 400w"
              src="data:image/jpeg;base64,%2F9j%2F4AAQSkZJRgABAQAAAQABAAD%2F2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P%2F2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P%2FwAARCAAQABADASIAAhEBAxEB%2F8QAFgABAQEAAAAAAAAAAAAAAAAABgQF%2F8QAIRAAAgICAgEFAAAAAAAAAAAAAQIREgAEAwVRExUhMWH%2FxAAVAQEBAAAAAAAAAAAAAAAAAAABAv%2FEABURAQEAAAAAAAAAAAAAAAAAAAEA%2F9oADAMBAAIRAxEAPwBLv9tx9ZX1Wvd6KqCWn9yvlVXBLPdlAMeJwfu6fLs9i2xrFCF%2B5PzPnNL3phsUdV45AsFM2gZIyjf%2F2Q%3D%3D"
              alt="See what your refund could look like."
              class="h-full w-full object-contain"
            />
          </div>
          <div class="flex-1">
            <div>
              <h3 class="text-gray-800 text-base md:pb-3">
                2021 Income Tax Calculator
              </h3>
              <h4 class="text-black text-3xl px-3 md:px-0 py-3 leading-tight md:text-4xl font-bold tracking-tight ">
                See what your refund could look like.
              </h4>
            </div>

            <div class="flex md:hidden pb-square relative h-0 py-5">
              <picture class="h-full w-full absolute inset-0">
                <img
                  width="500"
                  height="500"
                  loading="lazy"
                  srcset="https://www.hrblock.ca/images/Header/taxcalc.png?w=384&amp;h=384&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=682ef0c9fc4feb66a911a4ef60d4a744 384w, https://www.hrblock.ca/images/Header/taxcalc.png?w=430&amp;h=430&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=84a9df7033a5ed2ee0dbdacc3912884c 430w, https://www.hrblock.ca/images/Header/taxcalc.png?w=400&amp;h=400&amp;q=82&amp;auto=format&amp;fit=crop&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1611924242&amp;s=eef81f4e4ff2d289478c889ef32f29aa 400w"
                  src="data:image/jpeg;base64,%2F9j%2F4AAQSkZJRgABAQAAAQABAAD%2F2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P%2F2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P%2FwAARCAAQABADASIAAhEBAxEB%2F8QAFgABAQEAAAAAAAAAAAAAAAAABgQF%2F8QAIRAAAgICAgEFAAAAAAAAAAAAAQIREgAEAwVRExUhMWH%2FxAAVAQEBAAAAAAAAAAAAAAAAAAABAv%2FEABURAQEAAAAAAAAAAAAAAAAAAAEA%2F9oADAMBAAIRAxEAPwBLv9tx9ZX1Wvd6KqCWn9yvlVXBLPdlAMeJwfu6fLs9i2xrFCF%2B5PzPnNL3phsUdV45AsFM2gZIyjf%2F2Q%3D%3D"
                  alt="See what your refund could look like."
                  class="h-full w-full absolute inset-0"
                />
              </picture>
            </div>
            <form method="POST" class="flex-1 md:grid md:grid-cols-2 md:gap-4">
              <div class="py-2">
                <label
                  for="province"
                  class="focus:outline-none block text-sm leading-5 text-gray-500"
                >
                  Province
                </label>
                <select
                  required="required"
                  id="province"
                  class="mt-1 rounded-none focus:shadow-none outline-none focus:border-goldenrod-300 border-transparent border-2 block br-white form-select w-full py-2 px-3 border-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:text-sm sm:leading-7"
                >
                  <option value="">Select Province*</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">British Columbia</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">New Brunswick</option>
                  <option value="NL">Newfoundland and Labrador</option>
                  <option value="NT">Northwest Territories</option>
                  <option value="NS">Nova Scotia</option>
                  <option value="NU">Nunavut</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">Prince Edward Island</option>
                  <option value="QC">Québec</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="YT">Yukon</option>
                </select>
              </div>
              <div class="py-2">
                <label
                  for="hrb-txc-income"
                  class="block text-sm leading-5 text-gray-500"
                >
                  Income
                </label>
                <input
                  type="number"
                  id="hrb-txc-income"
                  placeholder="i.e. $50,000"
                  required="required"
                  name="income"
                  min="0.00"
                  max="10000000000000000000.00"
                  step="1000"
                  class="focus:bg-white outline-transparent border-gray-200 focus:shadow-none focus:outline-none focus:border-goldenrod-300 border-2 rounded-none p-2 py-3 md:py-2.5 block transition duration-150 ease-in-out sm:leading-7 w-full"
                />
              </div>
              <div class="py-2">
                <label
                  for="hrb-txc-cerb"
                  class="block text-sm leading-5 text-gray-500"
                >
                  CERB
                </label>
                <input
                  type="number"
                  id="hrb-txc-cerb"
                  placeholder="i.e. $1,000"
                  name="cerb"
                  min="0.00"
                  max="10000000000000000000.00"
                  step="100"
                  class="focus:bg-white outline-transparent border-gray-200 focus:shadow-none focus:outline-none focus:border-goldenrod-300 border-2 rounded-none p-2 py-3 md:py-2.5 block transition duration-150 ease-in-out sm:leading-7 w-full"
                />
              </div>
              <div class="py-2">
                <label
                  for="hrb-txc-taxes"
                  class="block text-sm leading-5 text-gray-500"
                >
                  Taxes Paid
                </label>
                <input
                  type="number"
                  id="hrb-txc-taxes"
                  placeholder="i.e. $10,000"
                  required="required"
                  name="taxesPaid"
                  min="0.00"
                  max="10000000000000000000.00"
                  step="100"
                  class="focus:bg-white outline-transparent border-gray-200 focus:shadow-none focus:outline-none focus:border-goldenrod-300 border-2 rounded-none p-2 py-3 md:py-2.5 block transition duration-150 ease-in-out sm:leading-7 w-full"
                />
              </div>
              <div class="py-2">
                <label
                  for="hrb-txc-rrsp"
                  class="block text-sm leading-5 text-gray-500"
                >
                  RRSP Contributions
                </label>
                <input
                  type="number"
                  id="hrb-txc-rrsp"
                  placeholder="i.e. $3,000"
                  name="rrspContributions"
                  min="0.00"
                  max="10000000000000000000.00"
                  step="100"
                  class="focus:bg-white outline-transparent border-gray-200 focus:shadow-none focus:outline-none focus:border-goldenrod-300 border-2 rounded-none p-2 py-3 md:py-2.5 block transition duration-150 ease-in-out sm:leading-7 w-full"
                />
              </div>

              <div class="py-2 row-end-5">
                <div class="CTA flex">
                  <div class="relative">
                    <button class="flex outline-none focus:outline-black border-transparent border-transparent border-2 text-white bg-black hover:bg-gray-800 leading-none w-full md:w-auto justify-center inline-flex font-semibold items-center px-4 py-4 lg:px-6 border border-transparent text-base leading-6 focus:outline-black transition ease-in-out duration-150">
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
