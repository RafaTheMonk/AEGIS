import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Helo World!')
})


export default app;