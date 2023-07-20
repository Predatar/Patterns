{
  interface Observers {
    update(): void;
  }

  interface Subject {
    attach(observer: Observers): void;
    detach(observer: Observers): void;
    notify(): void;
  }

  class NewLead implements Subject {
    private observers: Observers[] = [];

    attach(observer: Observers): void {
      if (this.observers.includes(observer)) {
        return;
      }
      this.observers.push(observer);
    }
    detach(observer: Observers): void {
      const observerIndex = this.observers.indexOf(observer);

      if (observerIndex == -1) {
        return;
      }
      this.observers.splice(observerIndex, 1);
    }
    notify(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }

  class NotificationService implements Observers {
    update(): void {
      console.log('NotificationService получил сообщение');
    }
  }

  class LeadService implements Observers {
    update(): void {
      console.log('LeadService получил сообщение');
    }
  }

  const subject = new NewLead();

  const s1 = new NotificationService();
  const s2 = new LeadService();

  subject.attach(s1);
  subject.attach(s2);
  subject.notify();
  subject.detach(s1);
  subject.notify();
}
