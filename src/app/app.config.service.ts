import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private configUrl = '../assets/config.json';

    constructor(private http: HttpClient) { }

    getConfig() {
        const p = this.http.get(this.configUrl);
        return p;
    }
}
