<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$con = new PDO("mysql:host=mysql.hostinger.com.br;dbname=u596861837_ionic", "u596861837_ionic", "ionic@#123456"); 

if($_REQUEST['ident']=='login'){
    
    $query = $con->prepare("SELECT COUNT(*) as RESULT FROM `USUARIO` WHERE TX_LOGIN ='".$_REQUEST['username']."' AND TX_SENHA ='".$_REQUEST['password']."'");
    $query->execute();
    $row = $query->fetch(PDO::FETCH_ASSOC);

    if($row['RESULT']=='1'){
        echo json_encode(['record'=>['auth'=>'true']]);
    }else{
        echo json_encode(['record'=>['auth'=>'false']]);
    }

}else if($_REQUEST['ident']=='listUser'){
    $query = $con->prepare("SELECT * FROM `USUARIO`");
    $query->execute();
    $row = $query->fetchall(PDO::FETCH_ASSOC);
    echo json_encode(['listUsuario'=>$row]);
}
		