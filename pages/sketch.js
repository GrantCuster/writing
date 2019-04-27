import Head from "next/head";
import { styles, p } from "../parts/Utils";

export default () => {
  let { grem } = styles;
  let exp_size = grem * 12;
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #fff;
          color: black;
          font: ${styles.font_size}px ${styles.font};
          line-height: ${styles.line_height};
        }
      `}</style>
      <div style={{ padding: p(grem / 2, grem) }}>Cloudera Fast Forward</div>
      <div style={{ padding: p(grem / 2, grem) }}>
        Applied machine learning research
      </div>
      <div style={{ padding: p(grem / 2, grem) }}>
        <div style={{ marginBottom: grem / 2 }}>Experiments</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(4, ${exp_size}px)`,
            gridColumnGap: grem
          }}
        >
          <a
            href="https://github.com/victordibia/handtrack.js"
            style={{
              display: "block",
              padding: grem / 2,
              width: exp_size,
              height: exp_size,
              border: "solid 1px black"
            }}
          >
            <div>LIBRARY</div>
            <div>Handtrack.js</div>
            <div>
              Handtrack.js is a library for prototyping realtime hand detection
              (bounding box), directly in the browser.
            </div>
          </a>
          <a
            href="https://github.com/victordibia/handtrack.js"
            style={{
              display: "block",
              padding: grem / 2,
              width: exp_size,
              height: exp_size,
              border: "solid 1px black"
            }}
          >
            <div>LIBRARY</div>
            <div>Handtrack.js</div>
            <div>
              Handtrack.js is a library for prototyping realtime hand detection
              (bounding box), directly in the browser.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
