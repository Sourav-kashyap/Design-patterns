class SingletonJS {
  static instance = null;

  constructor() {
    if (!SingletonJS.instance) {
      console.log("singleton object is created");
      SingletonJS.instance = this;
    }
    return SingletonJS.instance;
  }
}

const js1 = new SingletonJS();
const js2 = new SingletonJS();
const js3 = new SingletonJS();
console.log(js1 === js2 && js2 === js3 && js3 === js1);
