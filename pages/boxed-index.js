import Head from "next/head";
import { styles, p } from "../parts/Utils";
import FF from "../parts/FF";
import { green } from "ansi-colors";

function size_to_weight2(size) {
  let weight = Math.pow(2, 6 - Math.log(size) / Math.log(2)) * Math.pow(10, 2);
  if (weight < 100) weight = 100;
  return weight;
}

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  constructor(props) {
    super(props);
    this.state = {
      ww: 600,
      wh: 800,
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      ww: window.innerWidth,
      wh: window.innerHeight,
      loaded: true
    });
  }

  render() {
    let { ww, wh, loaded } = this.state;
    let { grem } = styles;

    let target_size = grem * 4;
    let column_num = Math.round(ww / target_size);
    let actual_size = ww / column_num;

    let fl = styles.font_size * styles.stroke_mult;
    let flc = Math.ceil(fl);

    let cap = grem * (2048 / 2708);

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <style>{`.js-no-flash { display: none; }`}</style>
          <noscript>
            <style>{`.js-no-flash { display: block; }`}</style>
          </noscript>
        </Head>
        <style jsx global>{`
          @import url("https://rsms.me/inter/inter.css");
          .inter {
            font-family: "Inter var", serif;
          }
          .js-no-flash {
            display: none;
          }
          * {
            box-sizing: border-box;
          }
          html {
            background: #fff;
            font-family: "Inter var", serif;
          }
          body {
            margin: 0;
            background: #fff;
            color: black;
            font: ${styles.font_size}px ${styles.font};
            line-height: ${styles.line_height};
          }
          a {
            color: inherit;
          }
        `}</style>
        <div
          className="js-no-flash"
          style={{
            display: loaded ? "block" : null,
            paddingTop: flc / 2
          }}
        >
          <div style={{ position: "relative" }}>
            <FF
              width={grem * 2}
              height={grem * 2}
              grem={grem}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                background: "transparent",
                display: "none"
              }}
            />
            <svg
              width={grem}
              height={grem}
              style={{
                position: "absolute",
                left: grem / 2,
                top:
                  grem / 2 +
                  (grem - styles.font_size * (2048 / 2708)) / 2 -
                  styles.font_size * (660 / 2708)
              }}
            >
              <path
                d={`M${fl / 2},${fl / 2} L${cap / 2 + fl / 2},${cap / 2 +
                  fl / 2} L${fl / 2},${cap + fl / 2}`}
                stroke="none"
                strokeWidth={fl}
                strokeLinejoin="bevel"
                fill="#aaa"
              />
              <path
                d={`M${cap / 2 + fl / 2},${fl / 2} L${cap + fl / 2},${cap / 2 +
                  fl / 2} L${cap / 2 + fl / 2},${cap + fl / 2}`}
                stroke="none"
                strokeWidth={fl}
                strokeLinejoin="bevel"
                fill="#aaa"
              />
              <line
                x1={fl / 2}
                y1={fl / 2}
                x2={fl / 2}
                y2={grem * (2048 / 2708)}
                stroke="black"
                strokeWidth={fl}
                fill="none"
              />
              <line
                x1={fl / 2}
                y1={fl / 2}
                x2={grem * (2048 / 2708)}
                y2={fl / 2}
                stroke="black"
                strokeWidth={fl}
                fill="none"
              />

              <line
                x1={fl / 2}
                y1={fl / 2 + (grem * (2048 / 2708)) / 2}
                x2={grem * (2048 / 2708)}
                y2={fl / 2 + (grem * (2048 / 2708)) / 2}
                stroke="black"
                strokeWidth={fl}
                fill="none"
              />
              <line
                y1={fl / 2}
                x1={fl / 2 + (grem * (2048 / 2708)) / 2}
                y2={grem * (2048 / 2708)}
                x2={fl / 2 + (grem * (2048 / 2708)) / 2}
                stroke="black"
                strokeWidth={fl}
                fill="none"
              />
            </svg>

            <svg
              width={grem + fl * 2}
              height={grem + fl * 2}
              style={{
                position: "absolute",
                left: grem / 2 - fl,
                top: grem / 2 - fl,
                display: "none"
              }}
            >
              <circle
                cx={fl / 2 + grem / 2}
                cy={fl / 2 + grem / 2}
                r={(grem / 16) * 5}
                fill="none"
              />
              <path
                d={`M${fl / 2},${fl / 2} L${grem / 2 + fl / 2},${grem / 2 +
                  fl / 2} L${fl / 2},${grem + fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
              <path
                d={`M${grem / 2 + fl / 2},${fl / 2} L${grem + fl / 2},${grem /
                  2 +
                  fl / 2} L${grem / 2 + fl / 2},${grem + fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
              <path
                d={`M${fl / 2},${grem + fl / 2} L${fl / 2},${fl / 2} L${grem +
                  fl / 2},${fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
              <path
                d={`M${fl / 2},${grem / 2 + fl / 2} L${grem + fl / 2},${grem /
                  2 +
                  fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
              <path
                d={`M${grem / 2 + fl / 2},${fl / 2} L${grem / 2 +
                  fl / 2},${grem + fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
              <path
                d={`M${fl / 2},${fl / 2} L${grem + fl / 2},${fl / 2} L${grem +
                  fl / 2},${grem + fl / 2} L${fl / 2},${grem + fl / 2},L${fl /
                  2},${fl / 2}`}
                fill="none"
                stroke="black"
                stroke-width={fl}
              />
            </svg>
            <div
              style={{
                position: "absolute",
                left: grem / 2,
                top: grem / 2,
                background: "pink",
                width: grem,
                height: grem,
                display: "none"
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: grem / 2,
                  left: grem,
                  height: grem,
                  background: "rgba(100,0,100,0.5)",
                  width: grem * 4,
                  display: "none"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: grem / 2 + (grem - styles.font_size * (2048 / 2708)) / 2,
                  left: grem,
                  height: styles.font_size * (2048 / 2708),
                  background: "rgba(100,100,100,0.5)",
                  width: grem * 4,
                  display: "none"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top:
                    grem / 2 +
                    (grem - styles.font_size * (2048 / 2708)) / 2 -
                    styles.font_size * (660 / 2708),
                  left: grem,
                  height: styles.font_size * (660 / 2708),
                  background: "rgba(0,100,100,0.5)",
                  width: grem * 4,
                  display: "none"
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top:
                    grem / 2 +
                    (grem - styles.font_size * (2048 / 2708)) / 2 +
                    styles.font_size * (2048 / 2708),
                  left: grem,
                  height: styles.font_size * (660 / 2708),
                  background: "rgba(0,100,100,0.5)",
                  width: grem * 4,
                  display: "none"
                }}
              />
              <div
                style={{
                  padding: grem / 2,
                  paddingLeft: 0 + cap * 2.25,
                  position: "relative"
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    left: 0,
                    width: ww,
                    height: flc,
                    top: -flc / 2
                  }}
                >
                  <line
                    x1={0}
                    y1={fl / 2}
                    x2={ww}
                    y2={fl / 2}
                    style={{ stroke: "black", strokeWidth: fl }}
                  />
                </svg>
                <span
                  style={{
                    fontVariationSettings: `'wght' ${size_to_weight2(
                      styles.font_size
                    ) + 300}`
                  }}
                >
                  cloudera
                </span>{" "}
                fast forward
              </div>
              <div
                style={{ padding: p(grem / 2, grem / 2), position: "relative" }}
              >
                <svg
                  style={{
                    position: "absolute",
                    left: grem / 2,
                    width: ww - grem,
                    height: flc,
                    top: -flc / 2
                  }}
                >
                  <line
                    x1={0}
                    y1={fl / 2}
                    x2={ww}
                    y2={fl / 2}
                    style={{ stroke: "black", strokeWidth: fl }}
                  />
                </svg>
                experiments
              </div>

              <div
                style={{
                  paddingLeft: grem / 2,
                  paddingBottom: grem / 2,
                  display: "grid",
                  gridTemplateColumns: `repeat(auto-fill, ${grem * 20}px)`,
                  gridColumnGap: grem
                }}
              >
                <a
                  href="https://github.com/victordibia/handtrack.js"
                  style={{
                    display: "block",
                    paddingTop: 0,
                    width: grem * 20,
                    height: grem * 20,
                    marginBottom: grem / 2,
                    marginRight: grem / 2,
                    position: "relative",
                    backgroundImage: `url(http://feed.grantcuster.com/static/images/feed/clip3-1554232754113.gif)`,
                    backgroundPosition: "center center",
                    textDecoration: "none"
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      position: "relative",
                      display: "flex"
                    }}
                  >
                    <div
                      style={{
                        background: "white",
                        padding: p(0, grem / 2),
                        fontSize: styles.font_size * 0.75,
                        lineHeight: `${styles.font_size *
                          styles.line_height}px`,
                        fontVariationSettings: `'wght' ${size_to_weight2(
                          styles.font_size * 0.75
                        )}`
                      }}
                    >
                      <span style={{}}>PROTOTYPE</span>
                    </div>
                    <svg
                      style={{
                        position: "absolute",
                        left: grem / 2,
                        width: grem * 20 - grem * 1,
                        height: flc,
                        bottom: -flc / 2
                      }}
                    >
                      <line
                        x1={0}
                        y1={fl / 2}
                        x2={grem * 20 - grem * 1}
                        y2={fl / 2}
                        style={{ stroke: "black", strokeWidth: fl }}
                      />
                    </svg>
                  </div>

                  <div
                    style={{
                      background: "#fff",
                      fontSize: styles.font_size * 3,
                      lineHeight: styles.line_height,
                      padding: p(0, grem / 2),
                      fontVariationSettings: `'wght' 700`
                    }}
                  >
                    Active Learner
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: grem / 2,
                      position: "absolute",
                      bottom: 0
                    }}
                  >
                    <div>
                      <span style={{}}>
                        Handtrack.js is a library for prototyping realtime hand
                        detection (bounding box), directly in the browser.
                      </span>
                    </div>
                    <div>
                      <span style={{}}>
                        https://github.com/victordibia/handtrack.js
                      </span>
                    </div>

                    <svg
                      style={{
                        position: "absolute",
                        left: 0,
                        width: grem * 10,
                        height: flc,
                        top: -flc / 2
                      }}
                    >
                      <line
                        x1={0}
                        y1={fl / 2}
                        x2={grem * 10}
                        y2={fl / 2}
                        style={{ stroke: "black", strokeWidth: fl }}
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: grem / 2,
                      position: "absolute",
                      bottom: 0
                    }}
                  >
                    <svg
                      style={{
                        position: "absolute",
                        left: 0,
                        width: grem * 10,
                        height: flc,
                        top: -flc / 2
                      }}
                    >
                      <line
                        x1={0}
                        y1={fl / 2}
                        x2={grem * 10}
                        y2={fl / 2}
                        style={{ stroke: "black", strokeWidth: fl }}
                      />
                    </svg>
                  </div>

                  <svg
                    style={{
                      position: "absolute",
                      top: -fl,
                      left: -fl,
                      width: grem * 20 + fl * 2,
                      height: grem * 20 + fl * 2
                    }}
                  >
                    <path
                      d={`M${fl},${fl} L${grem * 20},${fl} L${grem *
                        20},${grem * 20} L${fl},${grem * 20}, L${fl},${fl}`}
                      fill="none"
                      stroke="black"
                      strokeWidth={fl}
                      pointerEvents="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/victordibia/handtrack.js"
                  style={{
                    display: "block",
                    paddingTop: 0,
                    width: grem * 10,
                    height: grem * 10,
                    marginBottom: grem / 2,
                    marginRight: grem / 2,
                    position: "relative",
                    backgroundImage: `url(https://github.com/victordibia/handtrack.js/raw/master/demo/images/bossflip.gif)`,
                    backgroundPosition: "center center",
                    textDecoration: "none"
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      position: "relative",
                      padding: p(0, grem / 4),
                      fontSize: styles.font_size * 0.75,
                      lineHeight: `${styles.font_size * styles.line_height}px`,
                      fontVariationSettings: `'wght' ${size_to_weight2(
                        styles.font_size * 0.75
                      )}`
                    }}
                  >
                    LIBRARY
                    <svg
                      style={{
                        position: "absolute",
                        left: 0,
                        width: grem * 10,
                        height: flc,
                        bottom: -flc / 2
                      }}
                    >
                      <line
                        x1={0}
                        y1={fl / 2}
                        x2={grem * 10}
                        y2={fl / 2}
                        style={{ stroke: "black", strokeWidth: fl }}
                      />
                    </svg>
                  </div>

                  <div
                    style={{
                      background: "white",
                      padding: p(0, grem / 4),
                      fontSize: styles.font_size * 2,
                      fontVariationSettings: `'wght' ${size_to_weight2(
                        styles.font_size * 2
                      ) + 300}`
                    }}
                  >
                    Handtrack.js
                  </div>
                  <div
                    style={{
                      fontSize: ((grem / 4) * 3) / styles.line_height,
                      lineHeight: styles.line_height,
                      background: "white",
                      padding: grem / 4,
                      position: "absolute",
                      bottom: 0,
                      fontVariationSettings: `'wght' ${size_to_weight2(
                        ((grem / 4) * 3) / styles.line_height
                      )}`
                    }}
                  >
                    <span style={{}}>
                      Handtrack.js is a library for prototyping realtime hand
                      detection (bounding box), directly in the browser.
                    </span>
                  </div>
                  <svg
                    style={{
                      position: "absolute",
                      top: -fl,
                      left: -fl,
                      width: grem * 10 + fl * 2,
                      height: grem * 10 + fl * 2
                    }}
                  >
                    <path
                      d={`M${fl},${fl} L${grem * 10},${fl} L${grem *
                        10},${grem * 10} L${fl},${grem * 10}, L${fl},${fl}`}
                      fill="none"
                      stroke="black"
                      stroke-width={fl}
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/victordibia/handtrack.js"
                  style={{
                    display: "block",
                    paddingTop: 0,
                    width: grem * 20,
                    height: grem * 20,
                    marginBottom: grem / 2,
                    marginRight: grem / 2,
                    position: "relative",
                    backgroundImage: `url(https://github.com/victordibia/handtrack.js/raw/master/demo/images/bossflip.gif)`,
                    backgroundPosition: "center center",
                    textDecoration: "none"
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      fontSize: styles.font_size * 3,
                      lineHeight: styles.line_height,
                      padding: p(0, grem / 2),
                      fontVariationSettings: `'wght' ${size_to_weight2(
                        styles.font_size * 3
                      ) + 300}`
                    }}
                  >
                    Turbofan Tycoon
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: grem / 2,
                      position: "absolute",
                      bottom: 0
                    }}
                  >
                    <span style={{}}>
                      Handtrack.js is a library for prototyping realtime hand
                      detection (bounding box), directly in the browser.
                    </span>
                    <svg
                      style={{
                        position: "absolute",
                        left: 0,
                        width: grem * 20,
                        height: flc,
                        top: -flc / 2
                      }}
                    >
                      <line
                        x1={0}
                        y1={fl / 2}
                        x2={grem * 20}
                        y2={fl / 2}
                        style={{ stroke: "black", strokeWidth: fl }}
                      />
                    </svg>
                  </div>
                  <svg
                    style={{
                      position: "absolute",
                      top: -fl,
                      left: -fl,
                      width: grem * 20 + fl * 2,
                      height: grem * 20 + fl * 2
                    }}
                  >
                    <path
                      d={`M${fl},${fl} L${grem * 20},${fl} L${grem *
                        20},${grem * 20} L${fl},${grem * 20}, L${fl},${fl}`}
                      fill="none"
                      stroke="black"
                      strokeWidth={fl}
                      pointerEvents="none"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
