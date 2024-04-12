import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../api/clase';

@Injectable()
export class ClaseService {

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>('assets/demo/data/customers-small.json')
            .toPromise()
            .then(res => res.data as Clase[])
            .then(data => data);
    }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/customers-medium.json')
            .toPromise()
            .then(res => res.data as Clase[])
            .then(data => data);
    }

    getCustomersLarge() {
        return this.http.get<any>('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data as Clase[])
            .then(data => data);
    }
}
