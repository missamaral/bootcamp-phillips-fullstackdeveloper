import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "./model/course";

@Injectable()

export class CourseService {

    private url = 'https://sheet.best/api/sheets/01c7c9f7-bef4-4dd6-97d0-ba94f90be62f';

    httpOptions= {
        Headers: new HttpHeaders ({ 'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    getCourse(){
        return this.http.get(this.url)
    }




}

