const db = require('../config/db');

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class User {
  async getUsers() {
    let results = await db.query(`SELECT * FROM users`).catch(console.log);
    return results.rows;
  }
  
  async upsertUser(token) {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();

    let results = await db.query(`SELECT * FROM users`).catch(console.log);
    return results.rows;
  }
}

module.exports = User;