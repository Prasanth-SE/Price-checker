<?php
include_once '../includes/common.php';
include_once '../../mock-data/ebay-mock-data.php';
$response = array();
if (isset($_GET['num']) && isset($_GET['searchval']) && isset($_GET['category'])) {
    $num = $_GET['num'];
    $val = $_GET['searchval'];
    $curl = curl_init();
    $response['error'] = 'Mock Results: ';
    $response['status'] = 'ok';
    if($val === 'iphone'){
        $response['data'] = $mockIphone;
    }elseif ($val === "laptop"){
        $response['data'] = $mockLaptop;
    }else{
        $response['data'] = $mockData;
    }
}else{
    $response['error'] = 'cannot parse params';
}
echo json_encode($response);