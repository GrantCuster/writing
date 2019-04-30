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
      columns,
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
                columns={columns}
                fs={this.props.fs}
                stroke_color={this.props.stroke_color}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ExpGrid
