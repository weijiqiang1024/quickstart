import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  @ViewChild('approveFlow') approveFlow:ElementRef;

  constructor(private heroService: HeroService) { };

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  ngAfterViewInit(){
    let ctx:CanvasRenderingContext2D =this.approveFlow.nativeElement.getContext('2d');
    let R = 25;
    ctx.beginPath();
    ctx.arc(130, 70, R, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle='#808080';
    ctx.fillStyle = "#00a65a";
    ctx.stroke();
    ctx.closePath();
    ctx.fill();


   ctx.beginPath();
    ctx.moveTo(130, 70+R);
    ctx.lineTo(130, 70 + R +100);
    ctx.strokeStyle = "#00a65a";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(130, 70 + 2*R +100, R, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#808080";
    ctx.fillStyle = " #eea236";
    ctx.stroke();
    ctx.fill();

    ctx.moveTo(130, 70 + 3*R +100);
    // ctx.beginPath();
    ctx.lineTo(130, 70 + 3*R +200);
    ctx.strokeStyle = "#eea236";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(130, 70 + 4*R +200, R, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#808080";
    ctx.strokeStyle='#808080';
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle= "white";
    ctx.fillText("大 队", 120, 75);
    ctx.fillText("支 队", 120, 70 + 2*R +100 + 5);
    ctx.fillText("总 队", 120, 70 + 4*R +200 +5);
    ctx.fillStyle= "#808080";
    ctx.fillText("审批通过",110,140);
    ctx.fillText("2016-12-06",105,160);

  }
}