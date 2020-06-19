import React, { FC, ReactNode, useState } from "react";
import { ThemeType } from "../../identity";

type TopbarProps = {
  children: ReactNode;
  theme?: ThemeType;
  backgroundImage?: string;
};

export const Topbar: FC<TopbarProps> = ({
  children,
  theme,
  backgroundImage,
}) => {
  console.log("theme: ", theme);

  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  console.log("menuVisible: ", menuVisible);

  if (backgroundImage) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <div className="md:hidden flex flex-row justify-between h-8">
        <div className="flex self-start">Logo</div>
        {!menuVisible && (
          <div className="flex self-end">
            <button
              className="rounded-md text-gray-500"
              aria-label="Open sidebar"
              onClick={() => setMenuVisible(true)}
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
        )}
        {menuVisible && (
          <nav
            className="fixed flex z-40"
            onClick={() => setMenuVisible(false)}
          >
            <ul>
              <li>foo</li>
              <li>man</li>
              <li>chu</li>
            </ul>
          </nav>
        )}
      </div>

      <div className="hidden md:flex flex-row md:h-12">
        <div>Logo</div>
        <nav onClick={() => setMenuVisible(false)}>
          <ul className="flex flex-row">
            <li>foo</li>
            <li>man</li>
            <li>chu</li>
          </ul>
        </nav>
      </div>

      <main className="flex flex-col flex-1 relative z-0" tabIndex={0}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* <!-- Replace with your content --> */}
          <div className="m-0 p-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {children}
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};
