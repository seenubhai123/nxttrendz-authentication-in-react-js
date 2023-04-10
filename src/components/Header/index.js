// Write your JS code here
import './index.css'

const Header = () => (
  <div className="new">
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="brand-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="mobile-nxt-trend-logo"
      />

      <ul className="tab-container">
        <li className="para">Home</li>
        <li className="para">Products</li>
        <li className="para">Cart</li>
        <div>
          <button type="button" className="log-out">
            Logout
          </button>
        </div>
      </ul>
      <>
        <button type="button" className="nav-logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-logout-image"
          />
        </button>
      </>
    </nav>
    <div className="second-nav">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="second-nav-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="second-nav-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="second-nav-img"
      />
    </div>
  </div>
)

export default Header
