export class AppareilService {
    appareils = [
        {
            id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
            id: 2,
          name: 'Télévision',
          status: 'allumé'
        },
        {
            id: 3,
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

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        )
       return appareil; 
    }
}