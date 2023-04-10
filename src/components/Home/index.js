// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="text-container">
            <h1 className="heading">
              Clothes That Get You <br />
              Noticed
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="mobile-logo"
            />
            <p className="para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are, So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <div className="btn-shop">
              <button type="button" className="shop-now-btn">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="website-logo"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
