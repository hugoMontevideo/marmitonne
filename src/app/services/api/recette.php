<?php
require_once 'init.php';

if($_GET['action'] == 'create' )
{
    // var_dump('hello');
    $data = json_decode(file_get_contents('php://input'), true); // recuperation names

    $sql = "REPLACE INTO recette 
                    (id, titre,description,cout, tempsprep, tempscuisson,difficulte,photo,id_categorie) 
            VALUES (:id, :titre,:description,:cout, :tempsprep, :tempscuisson,:difficulte,:photo,:id_categorie)";
    $result = $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data); // pour la reponse on encode en json
}

if($_GET['action'] == 'readAll')
{
    $sql = "SELECT r.*, c.titre from categorie c INNER JOIN recette r ON r.id_categorie=c.id";

    $result = $pdo->prepare($sql);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
}

if($_GET['action'] == 'readOne')
{
    $sql = "SELECT r.*, c.titre from categorie c 
            INNER JOIN recette r ON r.id_categorie=c.id
            WHERE id=:id";

    $result = $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);
    $data = $result->fetch(PDO::FETCH_ASSOC);
    

    echo json_encode($data);
}

if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM recette WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}

