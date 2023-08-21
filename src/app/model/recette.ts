export class Recette{
        id!:number|any;
        titre! : string;
        description!: string;
        // ingredients!: any[];
        difficulte!: string;
        tempsPrep!: string;
        tempsCuisson!: string;
        cout!: number
        photo!: string;
        // etapes!: string[];
        id_categorie: number| any;

        constructor(){
            this.id = 0;
            this.titre = '';
            this.description = '';
            // this.ingredients = [];
            this.difficulte = '';
            this.tempsPrep = '';
            this.tempsCuisson = '';
            this.cout = 0;
            this.photo = '';
            // this.etapes = [];
            this.id_categorie = 0;
        }
      
}