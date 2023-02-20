<?php
require_once "../includes/connection.php";
$email = "";
$response = array();
$data = array();
$response['status'] = 'failed';
$response['error'] = 'There are no favourite products for you';
if(isset($_GET['currentPage']) && isset($_GET['numberInPage'])){
    $currentPage = mysqli_real_escape_string($con, $_GET['currentPage']);
    $numberInPage = mysqli_real_escape_string($con, $_GET['numberInPage']);
    $pastPageLastId = getLastId($con,'registered_products', $currentPage, $numberInPage);
    $strquery = "select * from `registered_products` where id > $pastPageLastId order by id desc limit $numberInPage";
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
            $buff['category'] = $row['category'];
            $buff['eshop'] = $row['eshop'];
            array_push($data, $buff);
        }
        $response['status'] = 'ok';
    }else{
        $response['status'] = 'failed';
        $response['error'] = 'There are no favourite products for you.';
    }
}
$response['data'] = $data;
echo json_encode($response);
