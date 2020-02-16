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
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <ul>
        <ol>One</ol>
        <ol>Two</ol>
        <ol>Three</ol>
        <ol>Four</ol>
      </ul>
      <hr />
      <ul>
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <ul className="alt">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <ul className="icons">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <ul className="icons major">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
      <hr />
      <ul className="actions">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <ul className="actions small">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <ul className="actions vertical">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <ul className="actions fit">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
      <ul className="actions fit small">
        <dl>One</dl>
        <dl>Two</dl>
        <dl>Three</dl>
        <dl>Four</dl>
      </ul>
      <hr />
    </>
  );
};
