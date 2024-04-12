import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instructor } from '../api/instructor';

@Injectable()
export class InstructorService {

    constructor(private http: HttpClient) { }

    getInstructores() {
        return this.http.get<any>('assets/demo/data/instructores.json')
            .toPromise()
            .then(res => res.data as Instructor[])
            .then(data => data);
    }    
    
}