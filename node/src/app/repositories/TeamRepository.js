import { consult } from "../database/connection.js"

class TeamRepository {

  create(team) {
    const sql = 'INSERT INTO teams SET ?'
    return consult(sql, team, 'Não foi possível criar seleção!')
  }

  findAll() {
    const sql = 'SELECT * FROM teams'
    return consult(sql, 'Não foi possível localizar seleções!')
  }
  
  findById(id) {
    const sql = 'SELECT * FROM teams WHERE id=?'
    return consult(sql, id, 'Não foi possível localizar seleção!')
  }
  
  update(team, id) {
    const sql = 'UPDATE teams SET ? WHERE id=?'
    return consult(sql, [team, id], 'Não foi possível atualizar seleção!')
  }
  
  delete(id) {
    const sql = 'DELETE FROM teams WHERE id=?'
    return consult(sql, id, 'Não foi possível apagar seleção!')
  }

}

export default new TeamRepository()