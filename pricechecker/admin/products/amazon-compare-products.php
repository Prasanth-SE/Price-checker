<?php
include_once "../../mock-data/amazon-mock-data.php";
$response = array();

if(isset($_GET['num']) && isset($_GET['searchval']) && isset($_GET['category'])){
    $num = $_GET['num'];
    $val = $_GET['searchval'];
    $response['error'] = 'Mock Results: ';
    $response['status'] = 'ok';
    if($val === 'iphone'){
        $response['data'] = $mockIphone;
    }elseif ($val === "laptop"){
        $response['data'] = $mockLaptop;
    }else{
        $response['data'] = $mockData;
    }
}
echo json_encode($response);