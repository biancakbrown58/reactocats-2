import React, { Component } from 'react'

class Octocat extends Component {
  render() {
    return (
      <section className="images">
        <li>
          <img
            src={this.props.src}
            width={this.props.width}
            height={this.props.height}
          />
          <section>
            <p className="number-of-cat">{this.props.number}</p>
            <p className="name">{this.props.name}</p>
            <p className="artist-pic">
              <img src={this.props.artistPic} />
            </p>
          </section>
        </li>
      </section>
    )
  }
}

export default Octocat
