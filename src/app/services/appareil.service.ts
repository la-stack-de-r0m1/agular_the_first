import { Subject } from "rxjs-compat/Subject";

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
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

    emitAppareilSubject() {
        this.appareilSubject.next(
            this.appareils.slice()
        );
    }

    switchOnAll() {
        this.changeStatus('allumé');
        this.emitAppareilSubject();
    }

    switchOffAll() {
        this.changeStatus('éteint');
        this.emitAppareilSubject();
    }

    private changeStatus(newStatus: string) {
        for (let appareil of this.appareils) {
            appareil.status = newStatus;
        }
    }

    switchOnOne(index: number) {
        this.changeStatusOne(index, 'allumé');
        this.emitAppareilSubject();
    }

    switchOffONe(index: number) {
        this.changeStatusOne(index, 'éteint');
        this.emitAppareilSubject();
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

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
        
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}