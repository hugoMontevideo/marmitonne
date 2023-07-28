<?php
require_once 'init.php';

// etapes de la recette
if($_GET['action'] == 'readEtapes')
{
    $sql = "SELECT e.*, r.titre as recette FROM etape e
            INNER JOIN recette r ON r.id = e.id_recette
            WHERE id_recette = :id_recette
            ORDER BY e.place";

    $result = $pdo->prepare($sql);
    $result->execute([':id_recette'=>$_GET['id']]);

    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data); // echo envoie les data en json
}

if($_GET['action'] == 'create' )
{
    $data = json_decode(file_get_contents('php://input'), true); // recuperation names du form

    $sql = "REPLACE INTO etape 
                    (id, description,place, id_recette) 
            VALUES (:id, :description,:place, :id_recette)";
    $result = $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data); // pour la reponse on encode en json
}
if($_GET['action'] == 'delete' )
{
    $sql = "DELETE FROM etape WHERE id = :id";
    
    $result = $pdo->prepare($sql);
    $result->execute( [':id'=>$_GET['id']] );

}