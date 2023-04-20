import {Component} from 'react'

import './index.css'

import Header from '../Header'

class Home extends Component {
  state = {innerWidth: window.innerWidth}

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    this.setState({innerWidth: window.innerWidth})
  }

  getTrendImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      className="trend-image"
      alt="clothes that get you noticed"
    />
  )

  render() {
    const {innerWidth} = this.state

    return (
      <div className="bg-container">
        <Header innerWidth={innerWidth} />
        <div className="fashion-card">
          <div className="fashion-content-card">
            <h1 className="cloth-heading">Clothes That Get YOU Noticed</h1>
            {innerWidth <= 767 ? this.getTrendImage() : ''}
            <p className="clothe-para">
              Fashion is the part of the daily air and it does not quite help
              that it changes all the time. Clothes always been a maker of the
              era and we are in a revolution. Your fashion makes you been seen
              heard that we are. So, celebrate the seasons new and exciting
              fashion in your own way.
            </p>
            <div>
              <button className="shop-now-card" type="submit">
                Shop Now
              </button>
            </div>
          </div>
          {innerWidth >= 768 ? this.getTrendImage() : ''}
        </div>
      </div>
    )
  }
}

export default Home
