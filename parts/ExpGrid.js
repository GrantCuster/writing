import React from 'react'
import {
  styles,
  p,
  track,
  sizeMap,
  small_style,
  smaller_style,
} from '../parts/Utils'
import Item from './Item'

class ExpGrid extends React.Component {
  render() {
    let {
      width,
      grem,
      experiments,
      packed,
      spacer,
      target_height,
      stacked,
      st,
    } = this.props

    return (
      <div>
        <div
          style={{
            position: 'relative',
            height: packed.container.height,
          }}
        >
          <div style={{ position: 'relative' }}>
            {packed.boxes.map((b, i) => (
              <Item
                b={b}
                i={i}
                key={experiments[i].name}
                spacer={spacer}
                grem={grem}
                experiments={experiments}
                width={width}
                st={st}
                iratio={Math.max(b.width / this.props.sentence_width, 1)}
                iratio={1}
                fs={this.props.fs}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ExpGrid
