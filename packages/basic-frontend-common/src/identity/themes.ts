// export const ThemeLight: ThemeType = {
//   textColor: "text-gray-800",
//   bgColor: "bg-gray-100",
//   borderColor: "border-gray-400",
//   shadowColor: "",
//   linkColor: "text-blue-100",
//   linkFocusColor: "text-blue-300",
//   linkHoverColor: "text-blue-400",
//   linkActiveColor: "text-blue-500",
//   linkVisitedColor: "text-blue-600",
//   //
//   textHeaderColor: "text-gray-200",
//   bgHeaderColor: "bg-gray-700",
//   bgMenuColor: "bg-teal-600",
// };

export type ThemeType = {
  body: {
    color: string;
    bgColor: string;
    borderColor: string;
    shadowColor: string;
  };
  link: {
    color: string;
    focusColor: string;
    hoverColor: string;
    activeColor: string;
    visitedColor: string;
  };
};
