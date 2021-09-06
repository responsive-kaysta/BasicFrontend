import React, { FC, ReactNode } from "react";
import { NavMobile } from "./nav-mobile";
import { NavStatic } from "./nav-static";

type BasicContainerProps = {
  children: ReactNode;
  backgroundImage?: string;
};

export const Sidebar: FC<BasicContainerProps> = ({
  children,
  backgroundImage,
}) => {
  // const style = `container mx-auto z-10 ${
  //   theme
  //     ? `${theme.bgColor} ${theme.textColor} ${theme.shadowColor}`
  //     : "bg-gray-100 text-gray-900"
  // }`;

  // console.log("style: ", style);

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <NavMobile />

      <NavStatic />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <main
          className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
          tabIndex={0}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                {children}
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  );
};
