export default function Header() {
  return (
    <header class="fixed md:relative h-16 md:h-auto z-30">
      <div class="fixed w-full md:relative z-30">
        <div
          class="z-10 fixed inset-0 transition-opacity duration-300 delay-300"
          style={{ display: "none" }}
        >
          <div class="absolute inset-0 bg-gray-500 opacity-50"></div>
        </div>
        <a
          href="#main-content"
          class="sr-only focus:not-sr-only focus:outline-black text-white font-semibold text-2xl"
        >
          Skip to Content
        </a>
        <div class="relative bg-white">
          <nav class="h-16 max-w-screen-2xl flex items-center justify-between mx-auto">
            <div class="flex">
              <div class="md:w-28 flex items-center">
                <a
                  href="/"
                  aria-current="page"
                  class="focus:outline-black inline-block bg-hrbgreen-600 md:w-12 md:h-12 mx-2 active--exact active"
                >
                  <span class="sr-only">Link to Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    id="logo"
                    viewBox="0 0 75 75"
                    class="g-image--lazy g-image--loaded sm:w-16 md:w-12 sm:h-16 md:h-12"
                  >
                    <defs>
                      <clipPath id="a1">
                        <path d="M0 0h75v75H0z"></path>
                      </clipPath>
                    </defs>
                    <path fill="#14aa40" d="M0 0h75v75H0z"></path>
                    <path
                      fill="white"
                      d="M5.7 39.7h4.1v4.8H13v-4.8h4.1v13.2H13v-4.8H9.8V53H5.7z"
                    ></path>
                    <g class="c1">
                      <path
                        fill="white"
                        d="M39.2 46.3a1.6 1.6 0 001.6-1.6 1.4 1.4 0 00-1.6-1.6h-2v3.2h2zm-.9 3.2h-1.1v3.4H33V40h6.6c3.4 0 5 2 5 4.8a4.8 4.8 0 01-2.3 4.1l2.5 4.1H40z"
                      ></path>
                    </g>
                    <g class="c1">
                      <path
                        fill="white"
                        d="M12.3 66.6c.7 0 1-.5 1-1.2a1 1 0 00-1.2-1H9.6v2.2zm-.9-5c.7 0 1-.5 1-1.2a1 1 0 00-1-.9H9.6v2zm-5.7-5h6.8c2.5 0 4 1.3 4 3.4a3.3 3.3 0 01-1.7 3c1.6.4 2.5 1.3 2.5 2.9 0 2.3-1.6 3.7-4.5 3.7H5.9v-13z"
                      ></path>
                    </g>
                    <path
                      fill="white"
                      d="M18.7 56.6h4.1V66H28v3.5h-9.3z"
                    ></path>
                    <g class="c1">
                      <path
                        fill="white"
                        d="M37.6 64v-2c0-1.6-.7-2.3-2-2.3s-2 1-2 2.3v2c0 1.7.6 2.4 2 2.4a2 2 0 002-2.3m-8.4-.2v-1.6c0-3.7 2-6 6.1-6s6.2 2.5 6.2 6v1.6c0 3.6-2 5.9-6.2 5.9-3.8 0-6.1-2.5-6.1-6"
                      ></path>
                    </g>
                    <g class="c1">
                      <path
                        fill="white"
                        d="M49.3 66.4a1.9 1.9 0 002-1.9h3.9c0 3-2 5.3-5.7 5.3-4.1 0-6.2-2.3-6.2-6V62c0-3.6 2-5.9 6.2-5.9 3.6 0 5.7 2.3 5.7 5.2h-3.9a2 2 0 00-2-2c-1.4 0-2 .9-2 2.3v2q0 2.8 2 2.8"
                      ></path>
                    </g>
                    <path
                      fill="white"
                      d="M57.2 56.6h4.1V61h.3l2.7-4.5H69l-3.5 5.9 4 7h-4.9L61.9 64h-.5v5.5h-4z"
                    ></path>
                    <g class="c1">
                      <path
                        fill="white"
                        d="M24.6 50.4a1.8 1.8 0 01-2-1.8 2.3 2.3 0 01.9-1.6l2.5 3a2.4 2.4 0 01-1.4.4m5-.2a5 5 0 00.5-2.5v-2h-3v1.7l-3-3.4c-.2-.4-.4-.7-.4-1.1a1 1 0 011-1 .8.8 0 01.8 1v.7h3.2v-1c0-2-1.8-3.4-4-3.4-2.6 0-4.4 1.4-4.4 3.4a3 3 0 001.1 2.3 3.7 3.7 0 00-2.2 3.7c0 2.5 2 4.3 5.7 4.3a4.8 4.8 0 003.1-1l.7.8h3.7z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>

              <ul class="hidden md:flex -ml-3">
                <li class="flex-auto">
                  <a
                    id="control16490"
                    href="/file-your-taxes/"
                    class="h-14 group inline-flex items-center leading-none focus:outline-black font-semibold hover:text-hrbgreen-800 transition ease-in-out duration-150 p-3 text-gray-800"
                  >
                    <span class="text-left">File Your Taxes</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class=" transform h-5 w-5 group-hover:text-hrbgreen-800 transition ease-in-out duration-150 text-gray-800 rotate-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="flex-auto">
                  <a
                    id="control16491"
                    href="/tax-situations/"
                    class="h-14 group inline-flex items-center leading-none focus:outline-black font-semibold hover:text-hrbgreen-800 transition ease-in-out duration-150 p-3 text-gray-800"
                  >
                    <span class="text-left">Tax Situations</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class=" transform h-5 w-5 group-hover:text-hrbgreen-800 transition ease-in-out duration-150 text-gray-800 rotate-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="flex-auto">
                  <a
                    href="/tax-calculator/"
                    class="flex justify-center items-center h-14 px-3 py-4 focus:outline-black "
                  >
                    <div
                      class="
                  leading-none font-semibold hover:text-hrbgreen-800 transition ease-in-out duration-150 text-gray-800"
                    >
                      <span class="text-left">Tax Calculator</span>
                    </div>
                  </a>
                </li>
                <li class="flex-auto">
                  <a
                    href="/support/"
                    class="flex justify-center items-center h-14 px-3 py-4 focus:outline-black "
                  >
                    <div
                      class="
                  leading-none font-semibold hover:text-hrbgreen-800 transition ease-in-out duration-150 text-gray-800"
                    >
                      <span class="text-left">Support</span>
                    </div>
                  </a>
                </li>
                <li class="flex-auto">
                  <a
                    href="/blog/"
                    class="flex justify-center items-center h-14 px-3 py-4 focus:outline-black "
                  >
                    <div
                      class="
                  leading-none font-semibold hover:text-hrbgreen-800 transition ease-in-out duration-150 text-gray-800"
                    >
                      <span class="text-left">Blog</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <ul class="flex">
              <li>
                <div class="cursor-pointer focus:outline-black h-14 flex justify-center items-center py-3 px-0.5 md:px-3 md:py-4">
                  <div class="group flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="sr-only xl:not-sr-only xl:inline text-right">
                      Search
                    </span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.414"
                        height="20.414"
                        viewBox="0 0 20.414 20.414"
                        class="w-5 h-5"
                      >
                        <g
                          id="Group_7223"
                          data-name="Group 7223"
                          transform="translate(1.421 1)"
                        >
                          <circle
                            id="Ellipse_27"
                            data-name="Ellipse 27"
                            cx="7"
                            cy="7"
                            r="7"
                            transform="translate(-0.421)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></circle>
                          <line
                            id="Line_182"
                            data-name="Line 182"
                            x1="6"
                            y1="6"
                            transform="translate(11.579 12)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></line>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/office-locator/"
                  class="focus:outline-black h-14 flex justify-center items-center py-3 px-0.5 md:px-3 md:py-4"
                >
                  <div class="group flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="sr-only xl:not-sr-only xl:inline text-right">
                      Find an Office
                    </span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.763"
                        height="19.619"
                        viewBox="0 0 15.763 19.619"
                        class="w-5 h-5"
                      >
                        <path
                          id="Path_60"
                          data-name="Path 60"
                          d="M779.252,335.924a6.882,6.882,0,0,0-6.882,6.882c0,2.722,3.53,7.559,5.533,10.085a1.719,1.719,0,0,0,2.7,0c2-2.526,5.534-7.363,5.534-10.085A6.882,6.882,0,0,0,779.252,335.924Zm0,9.794a2.913,2.913,0,1,1,2.912-2.913A2.913,2.913,0,0,1,779.252,345.718Z"
                          transform="translate(-771.37 -334.924)"
                          fill="none"
                          stroke="#005d1f"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="cursor-pointer focus:outline-black h-14 justify-center items-center py-3 px-0.5 md:px-3 md:py-4 relative hidden">
                  <div class="group flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="sr-only xl:not-sr-only xl:inline text-right">
                      Find an Office
                    </span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18.5"
                        viewBox="0 0 19 18.5"
                        class="w-5 h-5"
                      >
                        <g
                          id="Group_6593"
                          data-name="Group 6593"
                          transform="translate(-334 -19)"
                        >
                          <g
                            id="Ellipse_15"
                            data-name="Ellipse 15"
                            transform="translate(338 19)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="5.5"
                              stroke="none"
                            ></circle>
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="4.5"
                              fill="none"
                            ></circle>
                          </g>
                          <g
                            id="Path_57"
                            data-name="Path 57"
                            transform="translate(334 28)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M9.5,0A9.5,9.5,0,0,1,19,9.5H0A9.5,9.5,0,0,1,9.5,0Z"
                              stroke="none"
                            ></path>
                            <path
                              d="M 9.5 2 C 6.056855201721191 2 3.148148536682129 4.332322597503662 2.270717620849609 7.5 L 16.72928237915039 7.5 C 15.85185146331787 4.332322597503662 12.94314575195312 2 9.5 2 M 9.5 0 C 14.74670028686523 0 19 4.253300189971924 19 9.5 C 13.9802303314209 9.5 6.380820274353027 9.5 0 9.5 C 0 4.253300189971924 4.253299713134766 0 9.5 0 Z"
                              stroke="none"
                              fill="#005d1f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/sign-in/"
                  class="focus:outline-black h-14 flex justify-center items-center py-3 px-0.5 md:px-3 md:py-4 md:hidden"
                >
                  <div class="group flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="sr-only xl:not-sr-only xl:inline text-right">
                      Sign-in
                    </span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18.5"
                        viewBox="0 0 19 18.5"
                        class="w-5 h-5"
                      >
                        <g
                          id="Group_6593"
                          data-name="Group 6593"
                          transform="translate(-334 -19)"
                        >
                          <g
                            id="Ellipse_15"
                            data-name="Ellipse 15"
                            transform="translate(338 19)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="5.5"
                              stroke="none"
                            ></circle>
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="4.5"
                              fill="none"
                            ></circle>
                          </g>
                          <g
                            id="Path_57"
                            data-name="Path 57"
                            transform="translate(334 28)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M9.5,0A9.5,9.5,0,0,1,19,9.5H0A9.5,9.5,0,0,1,9.5,0Z"
                              stroke="none"
                            ></path>
                            <path
                              d="M 9.5 2 C 6.056855201721191 2 3.148148536682129 4.332322597503662 2.270717620849609 7.5 L 16.72928237915039 7.5 C 15.85185146331787 4.332322597503662 12.94314575195312 2 9.5 2 M 9.5 0 C 14.74670028686523 0 19 4.253300189971924 19 9.5 C 13.9802303314209 9.5 6.380820274353027 9.5 0 9.5 C 0 4.253300189971924 4.253299713134766 0 9.5 0 Z"
                              stroke="none"
                              fill="#005d1f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="cursor-pointer focus:outline-black h-14 justify-center items-center py-3 px-0.5 md:px-3 md:py-4 relative hidden md:flex">
                  <div class="group flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="sr-only xl:not-sr-only xl:inline text-right">
                      Sign-in
                    </span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18.5"
                        viewBox="0 0 19 18.5"
                        class="w-5 h-5"
                      >
                        <g
                          id="Group_6593"
                          data-name="Group 6593"
                          transform="translate(-334 -19)"
                        >
                          <g
                            id="Ellipse_15"
                            data-name="Ellipse 15"
                            transform="translate(338 19)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="5.5"
                              stroke="none"
                            ></circle>
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="4.5"
                              fill="none"
                            ></circle>
                          </g>
                          <g
                            id="Path_57"
                            data-name="Path 57"
                            transform="translate(334 28)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M9.5,0A9.5,9.5,0,0,1,19,9.5H0A9.5,9.5,0,0,1,9.5,0Z"
                              stroke="none"
                            ></path>
                            <path
                              d="M 9.5 2 C 6.056855201721191 2 3.148148536682129 4.332322597503662 2.270717620849609 7.5 L 16.72928237915039 7.5 C 15.85185146331787 4.332322597503662 12.94314575195312 2 9.5 2 M 9.5 0 C 14.74670028686523 0 19 4.253300189971924 19 9.5 C 13.9802303314209 9.5 6.380820274353027 9.5 0 9.5 C 0 4.253300189971924 4.253299713134766 0 9.5 0 Z"
                              stroke="none"
                              fill="#005d1f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li class="sr-only md:not-sr-only md:inline">
                <a
                  href="/fr/"
                  class="focus:outline-black h-14 flex justify-center items-center px-3 py-4"
                >
                  <div class="group space-x-2 leading-6 font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150">
                    <span class="hidden lg:inline">Français</span>
                    <span class="inline lg:hidden">FR</span>
                  </div>
                </a>
              </li>
              <li class="flex pl-0.5 pr-2 md:hidden">
                <nav class="inline-flex">
                  <button
                    aria-label="Show Navigation Menu"
                    class=" items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.464"
                      height="18.888"
                      viewBox="0 0 27.464 18.888"
                      class="h-6 w-6"
                    >
                      <g
                        id="Group_84"
                        data-name="Group 84"
                        transform="translate(-209.784 -867.444)"
                      >
                        <line
                          id="Line_2"
                          data-name="Line 2"
                          y2="25.464"
                          transform="translate(210.784 868.444) rotate(-90)"
                          fill="none"
                          stroke="#005d1f"
                          stroke-linecap="round"
                          stroke-width="2"
                        ></line>
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          y2="25.464"
                          transform="translate(210.784 876.888) rotate(-90)"
                          fill="none"
                          stroke="#005d1f"
                          stroke-linecap="round"
                          stroke-width="2"
                        ></line>
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          y2="25.464"
                          transform="translate(210.784 885.332) rotate(-90)"
                          fill="none"
                          stroke="#005d1f"
                          stroke-linecap="round"
                          stroke-width="2"
                        ></line>
                      </g>
                    </svg>
                  </button>
                </nav>
              </li>
            </ul>
          </nav>
        </div>
        <aside
          class="z-20 overflow-auto h-screen absolute top-0 pb-24 flex items-start w-full"
          style={{ display: "none" }}
        >
          <nav class="pt-10 md:pt-6 pb-16 bg-white w-full shadow-2xl text-lg">
            <ul class="px-8 space-y-5">
              <li class="">
                <p class="pb-4">
                  <a
                    href="/file-your-taxes/"
                    class="w-full block focus:outline-black"
                  >
                    File Your Taxes
                  </a>
                </p>

                <ul class="space-y-5 pl-4">
                  <li class="text-gray-500">
                    <ul class="space-y-5">
                      <li class="text-gray-500">
                        <a
                          href="/file-your-taxes/file-in-office/"
                          class="w-full block focus:outline-black"
                        >
                          File in Office
                        </a>
                      </li>
                      <li class="text-gray-500">
                        <a
                          href="/file-your-taxes/file-in-office/easy-drop-off/"
                          class="w-full block focus:outline-black"
                        >
                          Drop-off
                        </a>
                      </li>
                      <li class="text-gray-500">
                        <a
                          href="/file-your-taxes/remote-tax-expert/"
                          class="w-full block focus:outline-black"
                        >
                          Remote Tax Expert
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="text-gray-500">
                    <ul class="space-y-5">
                      <li class="text-gray-500">
                        <a
                          href="/file-your-taxes/online-tax-software/"
                          class="w-full block focus:outline-black"
                        >
                          Tax Software
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="">
                <p class="pb-4">
                  <a
                    href="/tax-situations/"
                    class="w-full block focus:outline-black"
                  >
                    Tax Situations
                  </a>
                </p>

                <ul class="space-y-5 pl-4">
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/students/"
                      class="w-full block focus:outline-black"
                    >
                      Students
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/newcomers/"
                      class="w-full block focus:outline-black"
                    >
                      Newcomers
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/small-business/"
                      class="w-full block focus:outline-black"
                    >
                      Small Business
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/us-tax-returns/"
                      class="w-full block focus:outline-black"
                    >
                      U.S. Tax Filing
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/military/"
                      class="w-full block focus:outline-black"
                    >
                      Military
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/seniors/"
                      class="w-full block focus:outline-black"
                    >
                      Seniors
                    </a>
                  </li>
                  <li class="text-gray-500">
                    <a
                      href="/tax-situations/canadians-abroad/"
                      class="w-full block focus:outline-black"
                    >
                      Canadians Abroad
                    </a>
                  </li>
                </ul>
              </li>
              <li class="h-7">
                <p class="pb-4">
                  <a
                    href="/tax-calculator/"
                    class="w-full block focus:outline-black"
                  >
                    Tax Calculator
                  </a>
                </p>

                <ul class="space-y-5 pl-4"></ul>
              </li>
              <li class="h-7">
                <p class="pb-4">
                  <a href="/support/" class="w-full block focus:outline-black">
                    Support
                  </a>
                </p>

                <ul class="space-y-5 pl-4"></ul>
              </li>
              <li class="h-7">
                <p class="pb-4">
                  <a href="/blog/" class="w-full block focus:outline-black">
                    Blog
                  </a>
                </p>

                <ul class="space-y-5 pl-4"></ul>
              </li>
              <li class="border-t pt-5">
                <a href="/search/" class="w-full block focus:outline-black">
                  <div class="md:h-14 group inline-flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="text-right">Search</span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.414"
                        height="20.414"
                        viewBox="0 0 20.414 20.414"
                        class="w-5 h-5"
                      >
                        <g
                          id="Group_7223"
                          data-name="Group 7223"
                          transform="translate(1.421 1)"
                        >
                          <circle
                            id="Ellipse_27"
                            data-name="Ellipse 27"
                            cx="7"
                            cy="7"
                            r="7"
                            transform="translate(-0.421)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></circle>
                          <line
                            id="Line_182"
                            data-name="Line 182"
                            x1="6"
                            y1="6"
                            transform="translate(11.579 12)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></line>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
              <li class="">
                <a
                  href="/office-locator/"
                  class="w-full block focus:outline-black"
                >
                  <div class="md:h-14 group inline-flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="text-right">Find an Office</span>
                    <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.763"
                        height="19.619"
                        viewBox="0 0 15.763 19.619"
                        class="w-5 h-5"
                      >
                        <path
                          id="Path_60"
                          data-name="Path 60"
                          d="M779.252,335.924a6.882,6.882,0,0,0-6.882,6.882c0,2.722,3.53,7.559,5.533,10.085a1.719,1.719,0,0,0,2.7,0c2-2.526,5.534-7.363,5.534-10.085A6.882,6.882,0,0,0,779.252,335.924Zm0,9.794a2.913,2.913,0,1,1,2.912-2.913A2.913,2.913,0,0,1,779.252,345.718Z"
                          transform="translate(-771.37 -334.924)"
                          fill="none"
                          stroke="#005d1f"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
              <li class="">
                <a href="/sign-in/" class="w-full block focus:outline-black">
                  <div class="md:h-14 group inline-flex items-center leading-none font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150 text-gray-800">
                    <span class="text-right">Sign-in</span>
                    <div class="inline-flex items-center justify-center md:p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18.5"
                        viewBox="0 0 19 18.5"
                        class="ml-2 w-5 h-5"
                      >
                        <g
                          id="Group_6593"
                          data-name="Group 6593"
                          transform="translate(-334 -19)"
                        >
                          <g
                            id="Ellipse_15"
                            data-name="Ellipse 15"
                            transform="translate(338 19)"
                            fill="none"
                            stroke="#005d1f"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="5.5"
                              stroke="none"
                            ></circle>
                            <circle
                              cx="5.5"
                              cy="5.5"
                              r="4.5"
                              fill="none"
                            ></circle>
                          </g>
                          <g
                            id="Path_57"
                            data-name="Path 57"
                            transform="translate(334 28)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M9.5,0A9.5,9.5,0,0,1,19,9.5H0A9.5,9.5,0,0,1,9.5,0Z"
                              stroke="none"
                            ></path>
                            <path
                              d="M 9.5 2 C 6.056855201721191 2 3.148148536682129 4.332322597503662 2.270717620849609 7.5 L 16.72928237915039 7.5 C 15.85185146331787 4.332322597503662 12.94314575195312 2 9.5 2 M 9.5 0 C 14.74670028686523 0 19 4.253300189971924 19 9.5 C 13.9802303314209 9.5 6.380820274353027 9.5 0 9.5 C 0 4.253300189971924 4.253299713134766 0 9.5 0 Z"
                              stroke="none"
                              fill="#005d1f"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="/fr/" class="w-full block focus:outline-black">
                  <div class="md:h-14 pt-2 pr-2 group inline-flex items-center space-x-2 leading-6 md:font-semibold hover:text-gray-900 focus:text-gray-900 transition ease-in-out duration-150">
                    <span class="inline">Français</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <div class="w-2/12 flex justify-center mt-8 transform">
            <button
              aria-label="Hide Navigation Menu"
              class="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.892"
                height="19.112"
                viewBox="0 0 18.892 19.112"
              >
                <g
                  id="Group_7010"
                  data-name="Group 7010"
                  transform="translate(-209.679 -867.03)"
                >
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    y1="16.284"
                    x2="16.064"
                    transform="translate(211.093 868.444)"
                    fill="none"
                    stroke="#005d1f"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></line>
                  <line
                    id="Line_4"
                    data-name="Line 4"
                    x2="15.964"
                    y2="15.964"
                    transform="translate(211.093 868.764)"
                    fill="none"
                    stroke="#005d1f"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></line>
                </g>
              </svg>
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}
