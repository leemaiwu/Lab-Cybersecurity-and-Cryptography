const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      //console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && existingPassword) {
          console.log('you are in!')
          let secureUser = {...users[i]}
          delete secureUser.password
          console.log(secureUser)
          return res.status(200).send(secureUser)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        //console.log(req.body)

        const { password, username, email, firstName, lastName } = req.body

        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)

        let userObject = {
          password: passHash,
          username,
          email,
          firstName,
          lastName
        }

        users.push(userObject)

        let secureUser = {...userObject}
        delete secureUser.password
        console.log(secureUser)
        res.status(200).send(secureUser)
    }
}
