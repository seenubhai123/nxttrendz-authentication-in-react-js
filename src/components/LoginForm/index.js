// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onErrorLogin = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.status === 200) {
      this.onSuccessLogin()
    } else {
      this.onErrorLogin(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    return (
      <div className="login-main-container">
        <div className="image-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
          <form className="div-form-container" onSubmit={this.onSubmitLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="form-nxt"
            />
            <div className="form-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
              <button type="submit" className="lo-btn">
                Login
              </button>
              {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
