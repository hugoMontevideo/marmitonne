<?php
require_once 'init.php';

if($_GET['action'] == 'insert' ) // une autre maniere d'inserer de traiter l'insertion
{
    $data = []; // l'objet passé est transformé en tableau 
    parse_str(file_get_contents('php://input'), $data); // recuperation names
    $keyOut = new \stdClass;
    // l'objet est la clé du tableau
    foreach($data as $key => $value){
        $keyOut = $key;
    }
    // l'objet n'est pas dans le bon format
    $data1 = json_decode($keyOut);

    $sql = "INSERT INTO categorie (titre) VALUES (:titre)";
    $result = $pdo->prepare($sql);
    $result->execute([ "titre"=> $data1->titre ]);

    $lastInsert = $pdo->lastInsertId();
    $data1->id = $lastInsert;

    echo json_encode($data1); // pour la reponse on encode en json

}



if($_GET['action'] == 'create' )
{
    // var_dump('hello');
    $data = json_decode(file_get_contents('php://input'), true); // recuperation names

    $sql = "INSERT INTO categorie (titre) VALUES (:titre)";
    $result = $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data); // pour la reponse on encode en json

}

if($_GET['action'] == 'readAll')
{
    $sql = "SELECT * FROM categorie";

    $result = $pdo->prepare($sql);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie les data en json
}

if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM categorie WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}
if($_GET['action'] == 'update')
{

}


