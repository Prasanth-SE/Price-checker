<?php
include_once '../include/common.php';
include_once '../../mock-data/ebay-mock-data.php';
$response = array();

if(isset($_GET['num'])){
    //$curl = curl_init();
    $num = $_GET['num'];

//    curl_setopt_array($curl, [
//        CURLOPT_URL => "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&country=US",
//        CURLOPT_RETURNTRANSFER => true,
//        CURLOPT_FOLLOWLOCATION => true,
//        CURLOPT_ENCODING => "",
//        CURLOPT_MAXREDIRS => 10,
//        CURLOPT_TIMEOUT => $timeOutTime,
//        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//        CURLOPT_CUSTOMREQUEST => "GET",
//        CURLOPT_HTTPHEADER => [
//            "X-RapidAPI-Host: ebay-data-scraper.p.rapidapi.com",
//            "X-RapidAPI-Key: 821bb2f829msh0f97ab8e0a4fb68p1cb3dfjsnb77b9d11975e"
//        ],
//    ]);
//
//    $result = curl_exec($curl);
//    $err = curl_error($curl);
//    curl_close($curl);
//    if($err){
//        $response['status'] = 'ok';
//        $response['error'] = 'Mock Results : '.$err;
//    }else{
//        $response['status'] = 'ok';
//        $response['error'] = 'success in curl';
//        $response['data'] = $result;
//    }
        $response['status'] = 'ok';
    $response['error'] = 'Mock Results : ';
    $response['data'] = $mockData;
}
echo json_encode($response);
