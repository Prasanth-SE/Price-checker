<?php
require_once "../include/connection.php";
$email = "";
$response = array();
$data = array();
$response['status'] = 'failed';
$response['error'] = 'There are no visited products for you';
if(isset($_GET['email'])){
    $email = mysqli_real_escape_string($con, $_GET['email']);
    $strquery = "select * from `visited_products` where user_email='$email'";
    $res = mysqli_query($con, $strquery);
    if(mysqli_num_rows($res) > 0){
        while ($row = mysqli_fetch_array($res)){
            $buff = array();
            $buff['id'] = $row['id'];
            $buff['product_url'] = $row['product_url'];
            $buff['image_url'] = $row['image_url'];
            $buff['title'] = $row['title'];
            $buff['description'] = $row['description'];
            $buff['price'] = $row['price'];
            array_push($data, $buff);
        }
        $response['status'] = 'ok';
        $response['error'] = 'Success to get';
    }else{
        $response['status'] = 'failed';
    }
}
$response['data'] = $data;
echo json_encode($response);