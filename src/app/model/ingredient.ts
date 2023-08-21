export class Ingredient{
    id!:number|any;
    nom! : string;
    quantite!: string;
    unite!: string;

    constructor(){
        this.id = 0;
        this.nom = '';
        this.quantite = '';
        this.unite = '';
    }
  
}