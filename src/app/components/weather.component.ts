import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-weather',
    template: `
        <p>Weather Component</p>
    `,
    providers: [WeatherService]
})

export class WeatherComponent {
    constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
        this.route.paramMap.subscribe(paramMap => {
            console.log(paramMap.get('cityName'));
        });

        this.weatherService.getTempByCityName('12834134716374')
        .then(temp => console.log(temp))
        .catch(error => console.log(error.message));
    }
}
