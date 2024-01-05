const express = require('express')
const app = express()
const PORT =  3001


// надо убирать сервер, он нам не нужен, будем пробовать без него. Иначе это уже не некст получается.
app.listen(PORT, () => {
    console.log(`>> >>> Server started on port ${PORT}`)
})
