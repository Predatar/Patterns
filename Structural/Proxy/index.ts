{
  interface IAccessToDb {
    getUser(user: string, password?: string): void;
    setUser(user: string): void;
    getAllUser(password?: string): void;
  }

  class AccessToDB implements IAccessToDb {
    db: string[] = [];

    getUser(user: string) {
      const index = this.db.indexOf(user);
      console.log('Get user:' + this.db[index]);
    }
    setUser(user: string) {
      this.db.push(user);
      console.log('Set user:' + user);
    }

    getAllUser() {
      console.log('Get all user: ' + this.db);
    }
  }

  class SecurityAccessToDB implements IAccessToDb {
    constructor(private db: AccessToDB) {}
    getUser(user: string, password: string): void {
      if (password == 'asd') {
        this.db.getUser(user);
      } else {
        console.log('Denied access');
      }
    }

    setUser(user: string) {
      this.db.setUser(user);
    }

    getAllUser(password: string) {
      if (password == 'all') {
        this.db.getAllUser();
      } else {
        console.log('Denied access');
      }
    }
  }

  const db = new SecurityAccessToDB(new AccessToDB());

  db.setUser('Alex');
  db.setUser('Max');

  db.getUser('Max', 'asd');

  db.getAllUser('all');
}
