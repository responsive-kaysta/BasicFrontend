import * as React from "react";
import { FC } from "react";

interface ListIconCompositionProps {
  text: string;
}

export const ListIconComposition: FC<ListIconCompositionProps> = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2>{text}</h2>
      </div>
      <div className="lead">Regular/simple [ul li]</div>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <div className="lead">Regular/simple [ul ol]</div>
      <ul>
        <ol>One</ol>
        <ol>Two</ol>
        <ol>Three</ol>
        <ol>Four</ol>
      </ul>
      <hr />
      <div className="lead">Regular/simple [ul dl]</div>
      <ul>
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <div className="lead">Alternate list [ul.alt li]</div>
      <ul className="alt">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <div className="lead">Icon list [ul.icons li]</div>
      <ul className="icons">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <div className="lead">Major list [ul.icons.major li]</div>
      <ul className="icons major">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <div className="lead">Actions list [ul.actions li]</div>
      <ul className="actions">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <div className="lead">Small actions list [ul.actions.small li]</div>
      <ul className="actions small">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <div className="lead">Vertical actions list [ul.actions.vertical li]</div>
      <ul className="actions vertical">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
    </>
  );
};
