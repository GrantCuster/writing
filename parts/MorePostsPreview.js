import React from 'react'
import { p } from '../parts/Utils'
import { Hd, Vd, Rect } from '../parts/Dividers'
import PostPreview from '../parts/PostPreview'

class MorePostsPreview extends React.Component {
  render() {
    let {
      columns,
      column_width,
      grem,
      offset,
      next_post,
      prev_post,
      fs,
      ww,
      ogrem,
    } = this.props

    let unstack = columns > 6
    let half = columns / 2
    let rhalf = Math.floor(columns / 2 / 2) * 2
    let preview_width = unstack ? rhalf : columns

    let extra = unstack
      ? (half - rhalf) * column_width + offset + ogrem / 2
      : ogrem / 2 + offset
    return (
      <div
        style={{
          position: 'relative',
          display: unstack ? 'grid' : 'block',
          width: columns * column_width + offset * 2 + ogrem,
          gridTemplateColumns: `repeat(2, 1fr)`,
          marginLeft: -ogrem / 2,
          marginRight: -ogrem / 2,
        }}
      >
        <div style={{ display: 'grid' }}>
          {prev_post ? (
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateRows: 'auto 1fr',
                marginBottom: grem / 2,
              }}
            >
              <div
                style={{
                  textTransform: 'uppercase',
                  fontSize: fs * 0.75,
                  letterSpacing: '0.03em',
                  lineHeight: 1.5,
                  paddingBottom: grem / 4,
                  paddingLeft: extra + grem / 2,
                }}
              >
                Newer
              </div>
              <div style={{ position: 'relative', display: 'grid' }}>
                <PostPreview
                  post={prev_post}
                  grem={grem}
                  ww={ww}
                  column_width={column_width}
                  fs={fs}
                  ogrem={ogrem}
                  columns={preview_width}
                  extra_left={extra}
                  extra_right={unstack ? 0 : extra}
                  border_top={false}
                />
                <Rect />
              </div>
            </div>
          ) : null}
        </div>
        <div style={{ display: 'grid' }}>
          {next_post ? (
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateRows: 'auto 1fr',
                marginBottom: grem / 2,
              }}
            >
              <div
                style={{
                  textTransform: 'uppercase',
                  fontSize: fs * 0.75,
                  letterSpacing: '0.03em',
                  lineHeight: 1.5,
                  paddingBottom: grem / 4,
                  paddingLeft: unstack
                    ? grem / 2
                    : offset + ogrem / 2 + grem / 2,
                }}
              >
                Older
              </div>
              <div style={{ position: 'relative', display: 'grid' }}>
                <PostPreview
                  post={next_post}
                  grem={grem}
                  ww={ww}
                  column_width={column_width}
                  fs={fs}
                  ogrem={ogrem}
                  columns={preview_width}
                  extra_right={extra}
                  extra_left={unstack ? 0 : extra}
                  border_top={false}
                />
                <Rect />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default MorePostsPreview
