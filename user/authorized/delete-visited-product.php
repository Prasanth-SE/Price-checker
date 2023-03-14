<?php
require_once '../include/connection.php';
$response = array();
$response['status'] = 'failed';
$response['error'] = '';
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $strquery = "delete from `visited_products` where id=$id";
    if( mysqli_query($con, $strquery)){
        $response['status'] = 'ok';
    }else {
        $response['status'] = 'failed';
        $response['error'] = mysqli_error($con);
    }
}
echo json_encode($response);