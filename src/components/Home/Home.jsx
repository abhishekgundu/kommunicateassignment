import React from 'react'
import './Home.scss'
import logo from '../../images/logo.svg'
import website from '../../images/website.svg'
import {mockData} from '../../mocks/mockData'
import {DASHBOARD_URL, LOGIN_URL, SIGNUP_URL} from '../../constants'
import Login from './Login/Login'

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <img src={logo} className="logo" alt="logo_img" />
        <div className="liveChat">{mockData.liveChat}</div>
        <div className="chatBox">{mockData.chatBox}</div>
      </div>
      <div className="supportText">
        {mockData.supportText[0]}{' '}
        <a href={DASHBOARD_URL} target="blank">
          {mockData.supportText[1]}
        </a>
      </div>
      <div className="container">
        <div className="content">
          <ul className="loginText">
            <li>
              <a href={LOGIN_URL} target="blank">
                {mockData.loginAndNavigateText[0]}
              </a>{' '}
              {mockData.loginAndNavigateText[1]}{' '}
              <a href={SIGNUP_URL} target="blank">
                {mockData.loginAndNavigateText[2]}
              </a>{' '}
              {mockData.loginAndNavigateText[3]}
            </li>
          </ul>
          <Login />
          <div className="footerText">
            <ul>
              {mockData.footerText.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>
        <div className="imgContainer">
          <img src={website} className="website" alt="logo_img" />
        </div>
      </div>
    </div>
  )
}

export default Home
