import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Pietanza } from '../../models/pietanza.interface';

@Component({
  selector: 'app-primi-piatti',
  templateUrl: './primi-piatti.component.html',
  styleUrls: ['./primi-piatti.component.css'],
  standalone : false
})
export class PrimiPiattiComponent implements OnInit {
  primi: Pietanza[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getPrimiPiatti().subscribe(data => {
      this.primi = data;
    });
  }
}
