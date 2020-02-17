import * as React from "react";
import { FC } from "react";
import { Spacer } from "../elements/";

interface TextHeadingCompositionProps {
  text: string;
}

export const TextHeadingComposition: FC<TextHeadingCompositionProps> = ({
  text
}) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>
      <p>Simple paragraph [p] followed by an spacer [spacer]</p>
      <Spacer />
      <div className="page-header">
        <h2>Simple Page-Header [div .page-header h2]</h2>
      </div>
      <label>Simple label [label]</label>
      <hr />
      <strong>Simple strong [strong]</strong> / <b>Simple bold [b]</b>
      <hr />
      <em>Simple em [em]</em> / <i>Simple i [i]</i>
      <hr />
      <a>Simple a [a]</a>
      <hr />
      <p>
        This text contains <sub>subscript</sub> text [sub].
      </p>
      <hr />
      <p>
        This text contains <sup>superscripted</sup> text. [sup]
      </p>
      <hr />
      <h1>Heading [h1]</h1>
      <h1>
        <a>Heading [h1 a]</a>
      </h1>
      <hr />
      <h2>Heading [h2]</h2>
      <h2>
        <a>Heading [h2 a]</a>
      </h2>
      <hr />
      <h3>Heading [h3]</h3>
      <h3>
        <a>Heading [h3 a]</a>
      </h3>
      <hr />
      <h4>Heading [h4]</h4>
      <h4>
        <a>Heading [h4 a]</a>
      </h4>
      <hr />
      <h5>Heading [h5]</h5>
      <h5>
        <a>Heading [h5 a]</a>
      </h5>
      <hr />
      <h6>Heading [h6]</h6>
      <h6>
        <a>Heading [h6 a]</a>
      </h6>
      <hr />
      <div className="lead">Lead Text [.lead]</div>
      <hr />
      <div className="small">Small Text [.small]</div>
      <hr />
      <div className="italic">Italic Text [.italic]</div>
      <hr />
      <div className="headline">Headline Text [.headline]</div>
      <hr />
      <div className="tagline">Tagline Text [.tagline]</div>
      <hr />
      <div className="paragraph">Paragraph Text [.paragraph]</div>
      <hr />
      <div className="paragraph-2col">
        Paragraph 2 Columns Text [.paragraph-2col]
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      <hr />
      <div className="paragraph-3col">
        Paragraph 3 Columns Text [.paragraph-3col]
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      <hr />
      <div className="align-left">Left aligned Text [.align-left]</div>
      <hr />
      <div className="align-center">Center aligned Text [.center-left]</div>
      <hr />
      <div className="align-right">Right aligned Text [.right-left]</div>
      <hr />
      <div className="error">Error Text [.error]</div>
      <hr />
      <div className="abstract">This text is abstract. [.abstract]</div>
      <hr />
      <blockquote>This text is a blockquote. [blockquote]</blockquote>
      <hr />
      <code>This text contains code. [code]</code>
      <hr />
      <pre>This text is preformated. [pre]</pre>
      <hr />
    </>
  );
};
