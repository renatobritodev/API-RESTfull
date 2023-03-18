import app from './app.js'

const PORT = process.env.PORT || 4000
const HOST = 'localhost'

app.listen(PORT, () => console.log(`Server running at http://${HOST}:${PORT}`))