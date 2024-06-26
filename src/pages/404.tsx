import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Nicht gefunden</title>
      <h1 style={headingStyles}>Seite nicht gefunden</h1>
      <p style={paragraphStyles}>
        Entschuldige!{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        wir konnten die Seite, die du suchst, nicht finden.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Zurück zur Startseite</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
