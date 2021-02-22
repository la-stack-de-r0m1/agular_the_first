import { Subject } from "rxjs-compat/Subject";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

class Appareil {
    constructor(public id: number, 
        public name: string,
        public status: string) {}
}

@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils!: Appareil[];

    constructor(private httpClient: HttpClient) {}

    emitAppareilSubject() {
        if (this.appareils && this.appareils.length)
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

    saveAppareilsToServer() {
        this.httpClient
            .put('', this.appareils)
            .subscribe(
                () => {
                    console.log("Enregistrement terminé !")
                },
                (error) => {
                    console.log('Erreur de sauvegarde ! ' + error);
                }
            );
    }

    getAppareilsFromServer() {
        this.httpClient
            .get<any[]>('')
            .subscribe(
                (response) => {
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log('Erreur de chargement : ' + error)
                }
            );
    }
}