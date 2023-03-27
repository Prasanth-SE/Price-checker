<?php
include_once "../../mock-data/bestbuy-mock-data.php";
include_once "../includes/common.php";
$response = array();
if(isset($_GET['currentPage']) && isset($_GET['numberInPage'])){
    $currentPage = $_GET['currentPage'];
    $numberInPage = $_GET['numberInPage'];
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://amazon24.p.rapidapi.com/api/todaydeals",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => $timeOutTime,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "X-RapidAPI-Host: amazon24.p.rapidapi.com",
            "X-RapidAPI-Key: cbee658032msh79663b658dc6f04p170908jsna0dbbf3cc798"
        ],
    ]);

    $result = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if($err){
        //return mock data
        $response['error'] = 'Mock Results: '.$err;
        $response['status'] = 'ok';
        $response['data'] = convertBestbuy2ResponseData($mockData, $currentPage, $numberInPage);
    }else{
        $response['status'] = 'ok';
        $response['error'] = 'success in curl';
        $array = json_decode($result);
        $response['data'] = convertBestbuy2ResponseData($array, $currentPage, $numberInPage);
    }
}
echo json_encode($response);

function convertBestbuy2ResponseData($response, $currentPage, $numberInPage){
    $res = array();
    $rowNum = count($response['deal_docs']);
    $startIndex = 0;
    if($currentPage > 0){
        $startIndex = $currentPage * $numberInPage;
    }
    $endIndex = $numberInPage *( $currentPage + 1);
    if($startIndex > $rowNum - 1){
        $startIndex = $rowNum - 11;
        $endIndex = $rowNum - 1;
    }
    if($endIndex > $rowNum - 1){
        $endIndex = $rowNum;
    }
    if($rowNum > 0){
        for ($i = $startIndex; $i < $endIndex; $i++ ){
            $buff = $response['deal_docs'][$i];
            $buffRes = array();
            $buffRes['title'] = $buff['deal_title'];
            $buffRes['description'] = $buff['deal_title'];
            $buffRes['product_url'] = $buff['deal_details_url'];
            $buffRes['image_url'] = $buff['deal_main_image_url'];
            $buffRes['price'] = '$'.$buff['app_sale_range']['min'].'-$'.$buff['app_sale_range']['max'];
            $buffRes['category'] = 'All';
            $buffRes['eshop'] = 'Bestbuy';
            array_push($res, $buffRes);
        }
    }
    return $res;
}