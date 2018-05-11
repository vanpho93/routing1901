import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-weather',
    template: `
        <p>Weather Component</p>
    `
})

export class WeatherComponent {
    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe(paramMap => {
            console.log(paramMap.get('cityName'));
        });
    }
}
