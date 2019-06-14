import { Hd } from './Dividers'
import { p } from './Utils'
import Link from 'next/link'

const Header = ({ grem, logo_stroke, cap, fsn, fs, is_post }) => {
  return (
    <div style={{ padding: grem / 2 }}>
      <div>Grant Custer</div>
      <div style={{ textIndent: grem / 2 }}>Writing</div>
    </div>
  )
}

export default Header
