import React from "react"
import Link from "gatsby-link"

import en from "./en.png"
import it from "./it.png"

import { rhythm } from "../utils/typography"

class Flags extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <Link to="/" style={{
          float:'left',
          boxShadow:'none',
          marginRight:'10px',
        }}>
          <img
            src={en}
            alt={`english`}
          />
        </Link>
        <Link to="/it" style={{
          float:'left',
          boxShadow:'none',
        }}>
          <img
            src={it}
            alt={`italian`}
          />
        </Link>
      </div>
    )
  }
}

export default Flags
