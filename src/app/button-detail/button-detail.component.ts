import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.scss']
})
export class ButtonDetailComponent {

  @Input() descriptif: string | undefined;
  @Input() ingredients: Array<string> | undefined;
  @Input() cout: any | undefined;
  @Input() difficulte: any | undefined;
  @Input() tempsCuisson: string | undefined;
  @Input() tempsPrep: string | undefined;

  afficheBtn1 :boolean = false;
  afficheBtn2 :boolean = false;

  affiche: boolean = false;

  onMouseOverBtn1(): void {
  this.afficheBtn1 = !this.afficheBtn1;
  }

  onMouseOverBtn2():void {
  this.afficheBtn2 = !this.afficheBtn2;
  }

}

