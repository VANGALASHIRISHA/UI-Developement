import { Fragment, useId } from "react";
/**
 * Wraps a single word that begins with "Q" so the brand-signature Q
 * (see QOrbit.tsx) can detect it, fly out from the logo, and merge into
 * its first letter. The rest of the word renders normally — only the
 * first letter is a distinct target so the animation can land precisely.
 */
export function QWord({ children }) {
    const uid = useId();
    const first = children.slice(0, 1);
    const rest = children.slice(1);
    return (<span data-q-word="true" data-q-id={uid} className="q-word-target">
      <span className="q-first-letter" data-q-letter="true">
        {first}
      </span>
      {rest}
    </span>);
}
/**
 * Renders a plain string, automatically wrapping every word that begins
 * with "Q"/"q" in <QWord/>. Use this for any heading or paragraph copy
 * that should participate in the brand's signature Q animation.
 */
export function QText({ text }) {
    const parts = text.split(/(\b[Qq][A-Za-z']*\b)/g);
    return (<>
      {parts.map((part, i) => /^[Qq][A-Za-z']*$/.test(part) ? (<QWord key={i}>{part}</QWord>) : (<Fragment key={i}>{part}</Fragment>))}
    </>);
}
