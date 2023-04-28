const express = require('express')
const LoginModel = require('../models/loginModel')

const loginRouter = express.Router()

loginRouter.post('/addUser', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req?.body

    if (email && password && firstName) {
      const emailRegex = /^\S+@\S+\.\S+$/
      const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/

      if (!emailRegex.test(email) || !passRegex.test(password)) {
        return res.status(422).send({
          message:
            'Unprocessable Entity: Email or password does not meet requirements!',
        })
      }

      const newUser = new LoginModel({
        email,
        password,
        firstName,
        lastName: lastName ?? '',
      })

      const loginUser = await newUser.save()
      res.status(200).send({ message: 'Login Successful!', loginUser })
    } else {
      res.status(400).send({ message: 'Fields missing!' })
    }
  } catch (error) {
    res
      .status(402)
      .send({ message: 'Error while trying to parse the req body', error })
  }
})

loginRouter.post('/validate', async (req, res) => {
  try {
    const { email, password } = req?.body

    if (email && password) {
      const loginUser = await LoginModel.findOne({ email, password })

      if (!loginUser) {
        return res.status(401).send({ message: 'Invalid email or password!' })
      } else {
        return res.status(200).send({ message: 'Login Successful!', loginUser })
      }
    } else {
      return res.status(400).send({ message: 'Email or Password missing!' })
    }
  } catch (error) {
    res
      .status(402)
      .send({ message: 'Error while trying to parse the req body', error })
  }
})

module.exports = loginRouter
