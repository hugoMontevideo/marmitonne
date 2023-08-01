import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  titre = 'Marmitonne';
  fruits = ['pomme', 'peche', 'poire']; // le html du composant 
  recettes = [
    {
      titre : 'Tartiflette',
      descriptif: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons','20cl de creme liquide'],
      difficulte: 'debutant',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: 'https://www.president.fr/wp-content/uploads/2021/01/tartiflette-OK-copie-540x540.jpg',
      etapes:['faire revenir les oignons et les lardons', 'ajouter les patates et le vin blanc', 'ajouter la creme']
    },
    {
      titre : 'Tarte aux pommes',
      descriptif: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons','20cl de creme liquide'],
      difficulte: 'intermediare',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: 'https://1.bp.blogspot.com/-DJgkm3xzjiI/X3tFIKvbMNI/AAAAAAABVGI/9johPylVyAkYc2lEdY8HBP0NFv9tqrBQwCLcBGAsYHQ/w1200-h630-p-k-no-nu/tarte-normande-pommes-facile.jpg',
      etapes:['faire revenir les oignons et les lardons', 'ajouter les patates et le vin blanc', 'ajouter la creme']
    },
    {
      titre : 'Tarte aux poires',
      descriptif: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons','20cl de creme liquide'],
      difficulte: 'intermediare',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: 'https://clemencecatz.com/wp-content/uploads/2020/01/Blog-5.jpg',
      etapes:['faire revenir les oignons et les lardons', 'ajouter les patates et le vin blanc', 'ajouter la creme']
    },
  ];

  // surClick()
  // {
  //   // if(this.affiche){
  //   //   this.button="Voir le détail";
  //   // }else{
  //   //   this.button = "Cacher la recette";
  //   // }
  //   this.affiche = !this.affiche;
  // }


}
