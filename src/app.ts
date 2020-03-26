import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist/public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))