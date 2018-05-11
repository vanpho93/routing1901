import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-weather',
    template: `
        <p>Weather Component</p>
        <div *ngIf="isLoading">
            <p>Loading...</p>
        </div>
        <div *ngIf="!isLoading && !gotError">
            <h3>Thoi tiet hien tai cua {{ cityName }}:</h3>
            <p>Nhiet do {{ temp }}<sup>o</sup>C</p>
        </div>
        <div *ngIf="!isLoading && gotError">
            <h3>Khong the tim thay thanh pho {{ cityName }}</h3>
        </div>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {
    cityName = '';
    temp = '';
    gotError = false;
    isLoading = true;
    constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
        this.route.paramMap.subscribe(this.onNewCity.bind(this));
    }

    onNewCity(paramMap: ParamMap) {
        this.cityName = paramMap.get('cityName');
        this.gotError = false;
        this.isLoading = true;
        setTimeout(() => {
            this.weatherService.getTempByCityName(this.cityName)
            .then(temp => this.temp = temp)
            .catch(() => this.gotError = true)
            .then(() => this.isLoading = false);
        }, 500);
    }
}
