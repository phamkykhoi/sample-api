const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")
const db = lowDb(new FileSync('db.json'))
const PORT = 8000;

db.defaults({ products: [] }).write()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`<h2 align="center" style="margin-top: 100px;">SUNTECH DEMO API</h2>`)
})

app.get('/api/products', (req, res) => {
  console.log(JSON.stringify(req.headers))

  const data = db.get("products").value()
  return res.json(data)
})

app.get('/api/products/:id', (req, res) => {
  const data = db.get('products').find({ id: req.params.id })
  return res.json(data)
})

app.post('/api/products', (req, res) => {
  const note = req.body
  db.get("products").push({
    ...note, id: nanoid()
  }).write()

  res.json({ success: true })
})

app.put('/api/products/:id', (req, res) => {
    const note = req.body
    db.get('products').find({ id: req.params.id }).assign(note).write();
  
    res.json({ success: true })
})

app.delete('/api/products/:id', (req, res) => {
  db.get('products').remove({ id: req.params.id }).write();
  res.json({ success: true })
})

app.post('/api/login', (req, res) => {
  const user = db.get('users').find({ email: req.body.email, password: req.body.password }).value()

  if (!user) {
    res.json({ success: false })
  } else {
	  res.json({
		  user: user,
		  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	  })  
  }
})

// User API
app.get('/api/users', (req, res) => {
  const data = db.get("users").value()
  return res.json(data)
})


app.get('/api/users/:id', (req, res) => {
  const data = db.get('users').find({ id: req.params.id })

  if (!data) {
    return res.json({
      id: 1,
      name: 'Administrator',
      email: 'admin@gmail.com',
      password: '**************'
    })
  }
  
  return res.json(data)
})

app.post('/api/users', (req, res) => {
  const note = req.body
  db.get("users").push({
    ...note, id: nanoid()
  }).write()

  res.json({ success: true })
})

app.put('/api/users/:id', (req, res) => {
    const note = req.body
    db.get('users').find({ id: req.params.id }).assign(note).write();
  
    res.json({ success: true })
})

app.delete('/api/users/:id', (req, res) => {
  db.get('users').remove({ id: req.params.id }).write();
  res.json({ success: true })
})

app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})
