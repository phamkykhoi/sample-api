const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid")
const db = lowDb(new FileSync('db.json'))
const fs = require('fs');
let rawdata = fs.readFileSync('db.json');
let routes = JSON.parse(rawdata);

const PORT = 8000;

db.defaults({ products: [] }).write()

const app = express()

const modules = Object.keys(routes)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`<h2 align="center" style="margin-top: 100px;">SUNTECH DEMO API</h2>`)
})

app.post('/api/login', (req, res) => {
  const user = db.get('users').find({ email: req.body.email, password: req.body.password }).value()

  if (!user) {
    res.json({ success: false })
  } else {
	  res.json({
		  user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
		  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	  })  
  }
})

modules.forEach(moduleName => {
  app.get(`/api/${moduleName}`, (req, res) => {
    const data = db.get(`${moduleName}`).value()
    return res.json(data)
  })
  
  app.get(`/api/${moduleName}/:id`, (req, res) => {
    const data = db.get(`${moduleName}`).find({ id: req.params.id })
    return res.json(data)
  })
  
  app.post(`/api/${moduleName}`, (req, res) => {
    const note = req.body
    db.get(`${moduleName}`).push({
      ...note, id: nanoid()
    }).write()
  
    res.json({ success: true })
  })
  
  app.put(`/api/${moduleName}/:id`, (req, res) => {
      const note = req.body
      db.get(`${moduleName}`).find({ id: req.params.id }).assign(note).write();
    
      res.json({ success: true })
  })
  
  app.delete(`/api/${moduleName}/:id`, (req, res) => {
    db.get(`${moduleName}`).remove({ id: req.params.id }).write();
    res.json({ success: true })
  })
})


app.listen(PORT, ()=> {
  console.log(`Backend is running on http://localhost:${PORT}`)
})
