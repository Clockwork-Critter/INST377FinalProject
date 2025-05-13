const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const supabaseClient = require('@supabase/supabase-js')
const supabaseUrl = 'https://spwrzjsgywozcdwzrcmr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3J6anNneXdvemNkd3pyY21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjIwNzQsImV4cCI6MjA2MjczODA3NH0.d54tzRC0oQ2fAPD6TUspzu2JreVxp9u5nW0SwYb1p8k'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})
app.get('/calc', (req, res) => {
  res.sendFile(path.join(__dirname, 'calc.html'))
})
app.get('/search', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
