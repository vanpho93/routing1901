import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}

    getTempByCityName(cityName: string) {
        return this.http.get(URL + cityName)
        .toPromise()
        .then(response => response.json(), response => response.json())
        .then(resJson => {
            if (resJson.main) {
                return resJson.main.temp;
            }
            throw new Error('Cannot find city name');
        });
    }
}
