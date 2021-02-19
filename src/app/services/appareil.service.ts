export class AppareilService {
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Télévision',
          status: 'allumé'
        },
        {
          name: 'Machine à laver',
          status: 'éteint'
        }
    ];

    switchOnAll() {
        this.changeStatus('allumé');
    }

    switchOffAll() {
        this.changeStatus('éteint');
    }

    private changeStatus(newStatus: string) {
        for (let appareil of this.appareils) {
            appareil.status = newStatus;
        }
    }

    switchOnOne(index: number) {
        this.changeStatusOne(index, 'allumé');
    }

    switchOffONe(index: number) {
        this.changeStatusOne(index, 'éteint');
    }

    private changeStatusOne(index: number, newStatus: string) {
        this.appareils[index].status = newStatus;
    }
}