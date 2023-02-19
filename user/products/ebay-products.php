<?php
include_once '../include/common.php';
$response = array();
$data = array (
    "deal_docs"=>array(
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/flipkart.png",
            "deal_title"=>"Wireless Audio System Multiroom 360 degree Full base audio",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"1111"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/ebay.png",
            "deal_title"=>"title2",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url2"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img.jpg",
            "deal_title"=>"Tablet White EliteBook Revolve 810 G2",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url3"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "deal_title"=>"Purple Solo 2 Wireless",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url4"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "deal_title"=>"Smartphone 6S 32GB LTE",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url4"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/flipkart.png",
            "deal_title"=>"Widescreen NX Mini F1 SMART NX",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"1111"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/ebay.png",
            "deal_title"=>"Widescreen NX Mini F1 SMART NX",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url2"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img.jpg",
            "deal_title"=>"Tablet White EliteBook Revolve 810 G2",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url3"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "deal_title"=>"Purple Solo 2 Wireless",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url4"),
        array("deal_main_image_url"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "deal_title"=>"Smartphone 6S 32GB LTE",
            "app_sale_range"=>array("min"=>10, "max"=>20),
            "deal_details_url"=>"url4")
    )
);
if(isset($_GET['num'])){
    $curl = curl_init();
    $num = $_GET['num'];

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&country=US",
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
    }else{
        $response['status'] = 'ok';
        $response['error'] = 'success in curl';
        $response['data'] = $result;
    }
}

$response['data'] = $data;
echo json_encode($response);
