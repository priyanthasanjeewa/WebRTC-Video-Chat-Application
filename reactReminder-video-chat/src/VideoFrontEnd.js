import React from 'react'
import './App.css'
import 'firebase/database'
import classnames from 'classnames'

export default class VideoFrontEnd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      remoteUser: null,
      localUser: null
    }
  }

  displayVideos = () => {
    return <div className={classnames('videos', { active: this.state.isLoggedIn })}>
      <div>
        <label>{this.state.localUser}</label>
        <video ref={this.props.setLocalVideoRef} autoPlay playsInline></video>
      </div>
      <div>
        <label>{this.props.connectedUser}</label>
        <video ref={this.props.setRemoteVideoRef} autoPlay playsInline></video>
      </div>
    </div>
  }

  renderVideoFrontEnd = () => {
    return this.state.isLoggedIn
      ? <div key='a' className='form'>
        <label>Enter Remote User Name for a Video Call</label>
        <input value={this.state.remoteUser} type="text" onChange={e => this.setState({ remoteUser: e.target.value })} />
        <button onClick={this.clickedStartCall} id="call-btn" className="btn btn-primary">Call</button>
      </div>
      : <div key='b' className='form'>
        <label>Enter Your Name </label>
        <input value={this.state.localUser} type="text" onChange={e => this.setState({ localUser: e.target.value })} />
        <button onClick={this.clickedLogin} id="login-btn" className="btn btn-primary">Video Call Login</button>
      </div>
  }

  clickedLogin = async () => {
    await this.props.onLogin(this.state.localUser)
    this.setState({
      isLoggedIn: true
    })
  }

  clickedStartCall = () => {
    this.props.startCall(this.state.localUser, this.state.remoteUser)
  }

  render () {
    return <section id="container">
      {this.props.connectedUser ? null : this.renderVideoFrontEnd()}
      {this.displayVideos()}
    </section>
  }
}
