import * as React from "react";
import { FC } from "react";

interface TextHeadingCompositionProps {
  text: string;
}

export const LinkButtonComposition: FC<TextHeadingCompositionProps> = ({
  text
}) => {
  return (
    <>
      <div>{text}</div>
      <hr />
      <a>Regular Link [a]</a>
      <hr />
      <a className="button">Link Button [a .button]</a>
      <hr />
      <a className="button special">Link Button Special [a .button .special]</a>
      <hr />
      <button>Regular Button</button>
      <hr />
      <input type="submit" value="Regular Input Submit" />{" "}
      <input type="reset" value="Regular Input Reset" />
      <hr />
    </>
  );
};
