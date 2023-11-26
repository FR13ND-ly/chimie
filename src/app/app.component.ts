import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { SystemComponent } from './system/system.component';
import { EnthalpyComponent } from './enthalpy/enthalpy.component';
import { QComponent } from './q/q.component';
import { TypesComponent } from './types/types.component';
import { LawsComponent } from './laws/laws.component';
import { CalorimetryComponent } from './calorimetry/calorimetry.component';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TitleComponent, DescriptionComponent, SystemComponent, EnthalpyComponent, QComponent, TypesComponent, LawsComponent, CalorimetryComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
