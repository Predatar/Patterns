const db = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  }
];
 
class Singleton {
  static instance: Singleton;
  id: number;
  sum: number = 0;

  constructor(id: number) {
    this.id = id;
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  getDbInfo() {
    this.sum++;
    db.forEach(elem => {
      console.log(elem);
    });
  }
}

const obj1 = new Singleton(1);
obj1.getDbInfo();
console.log(obj1.id, obj1.sum);

const obj2 = new Singleton(2);
obj2.getDbInfo();
console.log(obj2.id, obj2.sum);
