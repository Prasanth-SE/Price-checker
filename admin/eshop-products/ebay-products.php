<?php
include_once "../../mock-data/ebay-mock-data.php";
include_once "../includes/common.php";
$response = array();
$response['status'] = 'failed';
$response['error'] = 'Mock Results : ';
if(isset($_GET['currentPage']) && isset($_GET['numberInPage'])){
    $curl = curl_init();
    $currentPage = $_GET['currentPage'];
    $numberInPage = $_GET['numberInPage'];

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://ebay-data-scraper.p.rapidapi.com/products?page_number=$currentPage&country=US",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => $timeOutTime,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "X-RapidAPI-Host: ebay-data-scraper.p.rapidapi.com",
            "X-RapidAPI-Key: 821bb2f829msh0f97ab8e0a4fb68p1cb3dfjsnb77b9d11975e"
        ],
    ]);

    $result = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if($err){
        $response['status'] = 'ok';
        $response['error'] = 'Mock Results : '.$err;
        $response['data'] = convertEbay2Response($mockData, $currentPage, $numberInPage);
    }else{
        $response['status'] = 'ok';
        $response['error'] = 'success in curl';
        $array = json_decode($result);
        $response['data'] = convertEbay2Response($array, $currentPage, $numberInPage);
    }
}
echo json_encode($response);

function convertEbay2Response($result, $currentPage, $numberInPage){
    $res = array();
    $rowNum = count($result);
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
            $buff = $result[$i];
            $buffRes = array();
            $buffRes['title'] = $buff['name'];
            $buffRes['description'] = $buff['name'];
            $buffRes['product_url']=$buff['link'];
            $buffRes['image_url'] = $buff['thumbnail'];
            $buffRes['price'] = $buff['price'];
            $buffRes['category'] = 'All';
            $buffRes['eshop'] = 'Ebay';
            array_push($res, $buffRes);
        }
    }
    return $res;
}