const express = require('express')

const app = express()

app.get('/', (req,res) => {
  res.send('API RUNNING!!!')
  res.status(200)
})

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
