import React, {useState} from 'react'
import {mockData} from '../../../mocks/mockData'
import {getJSON} from '../../../utils/helper'
import './Login.scss'

const Login = () => {
  const [id, setId] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleClick = async () => {
    setSuccessMessage('')
    setErrorMessage('')
    try {
      if (!id) return
      const data = await getJSON(id)
      console.log(data)
      if (data.success === 'true')
        setSuccessMessage('Changes saved successfully!')
      if (data.success === 'false') setErrorMessage('Failed to save')
    } catch (err) {
      setErrorMessage(err)
    }
  }
  return (
    <div className="login">
      <div className="loginHeading">{mockData.enterAppIDText}</div>
      <input
        type="text"
        placeholder="APP_ID"
        className="loginInput"
        onChange={e => setId(e.target.value)}
      />
      <button className="loginButton" onClick={handleClick}>
        {mockData.buttonText}
      </button>
      {successMessage && <div className="loginSuccess">{successMessage}</div>}
      {errorMessage && <div className="loginError">{errorMessage}</div>}
    </div>
  )
}

export default Login
