<?php
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
if(isset($_GET['currentPage']) && isset($_GET['numberInPage'])){
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://amazon24.p.rapidapi.com/api/todaydeals",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
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

    }else{
        $response['status'] = 'ok';
        $response['error'] = 'success in curl';
        $data = $result;
    }
}

$response['data'] = $data;
echo json_encode($response);