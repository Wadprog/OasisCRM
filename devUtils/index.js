const fs = require('fs')
const path = require('path')

function createRoutes() {
  const allRoutes = fs.readdirSync(path.resolve(__dirname, '../endPoints'))
  let string = 'module.exports= ['
  allRoutes.forEach((route, idx) => {
    let name = route.split('.')[0]
    if (name != 'index') string += idx = 0 ? `'${name}'` : `,'${name}'`
  })
  string += ']'
  fs.writeFileSync(path.resolve(__dirname, '../endPoints', 'index.js'), string)
}

createRoutes()
