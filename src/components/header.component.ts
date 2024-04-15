import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Input() title: string;

    count: number;

    ngOnInit() {
        console.log(this.title);
    }
}