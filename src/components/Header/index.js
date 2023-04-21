import './index.css'

const Header = props => {
  const {innerWidth} = props

  return (
    <div className="nav-body">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo-image"
          alt="website logo"
        />
        {innerWidth <= 767 ? (
          <div>
            <button className="logout-button-arrow" type="submit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                className="logout-icon"
                alt="nav logout"
              />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <ul className="nav-card">
        <li>
          <button className="home-button" type="submit">
            {innerWidth <= 767 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                className="home-icon"
                alt="nav home"
              />
            ) : (
              'Home'
            )}
          </button>
        </li>
        <li>
          <button className="product-button" type="submit">
            {innerWidth <= 767 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                className="product-icon"
                alt="nav products"
              />
            ) : (
              'Products'
            )}
          </button>
        </li>
        <li>
          <button className="cart-button" type="submit">
            {innerWidth <= 767 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                className="cart-icon"
                alt="nav cart"
              />
            ) : (
              'Cart'
            )}
          </button>
        </li>
        {innerWidth >= 768 ? (
          <div>
            <button className="logout-button" type="submit">
              Logout
            </button>
          </div>
        ) : (
          ''
        )}
      </ul>
    </div>
  )
}

export default Header
