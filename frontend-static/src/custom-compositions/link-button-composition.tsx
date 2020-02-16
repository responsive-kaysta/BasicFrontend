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
      <div className="page-header">
        <h2>{text}</h2>
      </div>
      <a>Regular Link [a]</a>
      <hr />
      <a className="button">Link Button [a .button]</a>
      <hr />
      <a className="button special">Link Button Special [a .button .special]</a>
      <hr />
      <button>Regular Button [button]</button>
      <hr />
      <input type="submit" value="Regular Input Submit [input]" />
      <hr />
      <input type="reset" value="Regular Input Reset  [input type=reset]" />
      <hr />
    </>
  );
};
