const express = require('express')
const app = express()

const cors = require('cors')

//Aquí importación de routes
//Ejemplo: const usersRoute = require('./routes/users.js')

app.use(cors()) //Esta no es la mejor forma de configurar 'cors'. Se habilitan los endpoints sin discreción

//Aquí utilización de routes
//Ejemplo: app.use('/users', userRoute)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`)
})