{
  class Engine2 {
    simpleInterface() {
      console.log('Engine 2.0 - tr-tr-tr');
    }
  }

  class EngineV8 {
    complecatedInterface() {
      console.log('EngineV8! - wroom - wroom');
    }
  }

  class EngineV8Adapter {
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
  const oldEngine = new Engine2();

  myCar.startEngine(oldEngine);

  // * EngineV8 with adapter

  const engineV8WithAdapter = new EngineV8Adapter(new EngineV8());

  myCar.startEngine(engineV8WithAdapter);

  // * EngineV8 without adapter

  const engineV8 = new EngineV8();

  try {
    myCar.startEngine(engineV8);
  } catch (error) {
    console.log(error);
  }
}
