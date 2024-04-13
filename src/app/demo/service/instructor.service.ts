import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instructor } from '../api/instructor';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable()
export class InstructorService {

    constructor(private http: HttpClient) { }

    getInstructores(): Observable<Instructor[]> {

        return this.http.get('http://localhost:8080/api/instructores').pipe(
            map( (response) => response as Instructor[] )
        );

    }    
    
}