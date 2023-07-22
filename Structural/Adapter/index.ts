{
  interface IEngine2 {
    simpleInterface(): void;
  }

  interface IEngineV8 {
    complecatedInterface(): void;
  }

  class Engine2 implements IEngine2 {
    simpleInterface() {
      console.log('Engine 2.0 - tr-tr-tr');
    }
  }

  class EngineV8 implements IEngineV8 {
    complecatedInterface() {
      console.log('EngineV8! - wroom - wroom');
    }
  }

  class EngineV8Adapter implements IEngine2 {
    engine: EngineV8;
    constructor(engine: EngineV8) {
      this.engine = engine;
    }

    simpleInterface() {
      this.engine.complecatedInterface();
    }
  }

  class Auto {
    startEngine(engine: Engine2) {
      engine.simpleInterface();
    }
  }

  // * Engine2
  const myCar = new Auto();

  myCar.startEngine(new Engine2());

  // * EngineV8 with adapter

  myCar.startEngine(new EngineV8Adapter(new EngineV8()));

  // * EngineV8 without adapter

  /* try {
    myCar.startEngine(new EngineV8());
  } catch (error) {
    console.log(error);
  } */
}
