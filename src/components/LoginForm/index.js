import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    innerWidth: window.innerWidth,
    userName: '',
    userPassword: '',
    errorMessage: '',
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    this.setState({innerWidth: window.innerWidth})
  }

  onSuccessfulSubmission = () => {
    const {history} = this.props
    history.replace('/')
    .setState({userName: '', userPassword: '', errorMessage: ''})
  }

  onFailure = data => {
    this.setState({errorMessage: data.error_msg})
  }

  onSubmission = async event => {
    event.preventDefault()
    const {userName, userPassword} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: userName, password: userPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSuccessfulSubmission()
    } else {
      this.onFailure(data)
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  callWebsiteLoginImage = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
      className="login-logo"
      alt="website login"
    />
  )

  render() {
    const {innerWidth, userName, userPassword, errorMessage} = this.state

    return (
      <div className="form-card">
        {innerWidth >= 768 ? this.callWebsiteLoginImage() : ''}
        <form className="form-el" onSubmit={this.onSubmission}>
          <div className="trend-login-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="trend-login-logo"
              alt="website logo"
            />
            {innerWidth <= 767 ? this.callWebsiteLoginImage() : ''}
          </div>
          <label htmlFor="user" className="user-label">
            USERNAME
          </label>
          <input
            placeholder="Username"
            type="text"
            id="user"
            className="user-input"
            value={userName}
            onChange={this.onChangeUserName}
          />
          <label htmlFor="user-password" className="password-label">
            PASSWORD
          </label>
          <input
            placeholder="Password"
            type="password"
            id="user-password"
            className="password-input"
            value={userPassword}
            onChange={this.onChangeUserPassword}
          />
          <div className="button-card">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          {errorMessage !== '' ? (
            <p className="error-msg">{errorMessage}</p>
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
