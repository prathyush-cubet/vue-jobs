import firebase from "../firebase";

const db = firebase.ref("/jobs");

class DatabaseService {
  getAll() {
    return db;
  }

  create(job) {
    return db.push(job);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DatabaseService();