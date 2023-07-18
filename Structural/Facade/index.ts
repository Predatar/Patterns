{
  class Engine {
    engineStart() {
      console.log('Engine start');
    }
  }

  class Gearbox {
    gearUp() {
      console.log('Gear up');
    }
  }

  class Light {
    switchOn() {
      console.log('Switch on the lights');
    }
  }

  class MachineControl {
    private engine: Engine = new Engine();
    private gearBox: Gearbox = new Gearbox();
    private light: Light = new Light();
    
    go() {
      this.engine.engineStart();
      this.light.switchOn();
      this.gearBox.gearUp();
    }
  }

  const mc = new MachineControl();
  mc.go()
}