import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'excalibur',
  database: 'db_world_cup'
})

connection.connect()

/** 
 * EXECUTA CÓDIGO SQL COM OU SEM VALORES
 * @param {string} sql
 * @param {string = id | [team, id]} values
 * @param {string} messageReject
 * @returns
 */

export const consult = (sql, values = '', messageReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
      if (err) return reject(messageReject)
      const row = JSON.parse(JSON.stringify(result))
      return resolve(row)
    })
  })
}

export default connection