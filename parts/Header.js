import { Hd } from './Dividers'
import { p } from './Utils'
import Link from 'next/link'

const Header = ({ grem, logo_stroke, cap, fsn, fs, is_post }) => {
  return (
    <div style={{ paddingBottom: grem / 2 }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            padding: p(grem * (2 / 8), grem / 2, grem * (2 / 8), grem / 2),
            backgroundImage: `url("/static/images/dataline.png")`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: grem,
                paddingTop: 1,
              }}
            >
              <a
                href="https://www.cloudera.com/products/fast-forward-labs-research.html"
                style={{
                  display: 'block',
                  lineHeight: 0,
                }}
                className="no-underline no-hover"
              >
                <img
                  style={{ height: grem * (16 / 32) }}
                  src="/static/images/cloudera.png"
                />
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 1,
                ...fsn,
              }}
            >
              <a
                className="no-underline"
                href="https://www.cloudera.com/products/fast-forward-labs-research.html"
                style={{
                  color: '#333e47',
                  fontSize: fs * 0.75,
                  lineHeight: 1.5,
                }}
              >
                About Us →
              </a>
            </div>
          </div>

          <Hd width="100%" align="b" fs={fs} color="rgba(0,0,0,0.125)" />
        </div>
        <div
          style={{
            padding: p(grem / 2, grem / 2, grem / 2, grem / 2),
            display: 'flex',
            justifyContent: 'space-between',
            ...fsn,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <a
                className={`no-hover no-underline`}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img
                  style={{
                    height: cap,
                    width: cap,
                    marginRight: grem * (6 / 16),
                    position: 'relative',
                    top: -cap / 32,
                  }}
                  src="/static/images/ff.png"
                />
                <div>Fast Forward Labs </div>
              </a>
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: grem * 1,
            }}
          />
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: grem / 2 }}>
              {is_post ? (
                <Link href="/">
                  <a>Blog</a>
                </Link>
              ) : (
                'Blog'
              )}
            </div>

            <div style={{}}>
              <a href="https://experiments.fastforwardlabs.com">
                AI Experiments
              </a>
            </div>
          </div>
        </div>
        <Hd width="100%" align="b" fs={fs} />
      </div>
    </div>
  )
}

export default Header
