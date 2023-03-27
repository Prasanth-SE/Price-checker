<?php
require_once "../includes/connection.php";
$response = array();
$data = array();
$response['status'] = 'failed';
$response['error'] = 'There are no users for this system.';
if($_GET['id']){
    $id = mysqli_real_escape_string($con, $_GET['id']);
    $strQuery = "select * from `users` where id='$id'";
    $res = mysqli_query($con, $strQuery);
    if(mysqli_num_rows($res) > 0){
        while ($row = mysqli_fetch_array($res)){
            $buff = array();
            $buff['id'] = $row['id'];
            $buff['name'] = $row['name'];
            $buff['email'] = $row['email'];
            $buff['password'] = $row['password'];
            $buff['mobile'] = $row['mobile'];
            $buff['city'] = $row['city'];
            $buff['code'] = $row['code'];
            $buff['status'] = $row['status'];
            array_push($data, $buff);
        }
        $response['status'] = 'ok';
    }else{
        $response['status'] = 'failed';
        $response['error'] = 'There are no users for this system.';
    }
}
$response['data'] = $data;
echo json_encode($response);