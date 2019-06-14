import React from 'react'
import { Hd, Vd, Rect } from '../parts/Dividers'
import { p } from '../parts/Utils'
import Truncate from 'react-truncate'
import Link from 'next/link'

class PostPreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {
      post,
      grem,
      column_width,
      fs,
      ogrem,
      columns,
      extra_left = 0,
      extra_right = 0,
      adjust_left = 0,
      adjust_right = 0,
      border_top = true,
    } = this.props

    return (
      <Link
        href={post.external_url ? post.external_url : post.path_name}
        as={post.external_url ? post.external_url : post.urlPath}
      >
        <a
          className="hover-box no-underline no-hover gray-backer hover-extend"
          key={post.urlPath}
          style={{
            display: 'block',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: fs * 2, lineHeight: 1.25 }}>{post.title}</div>
          <Hd align="top" />
        </a>
      </Link>
    )
  }
}

export default PostPreview
