<?php
$response = array();
$data = array (
    "result"=>array(
        array("thumbnail"=>"http://localhost/pricechecker/user/images/flipkart.png",
            "title"=>"Widescreen NX Mini F1 SMART NX",
            "price"=>array("current_price"=>134, "currency"=>'$'),
            "url"=>"1111"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/ebay.png",
            "title"=>"Widescreen NX Mini F1 SMART NX",
            "price"=>array("current_price"=>1340, "max"=>'$'),
            "url"=>"url2"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("current_price"=>13320, "max"=>'$'),
            "url"=>"url3"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("min"=>10, "max"=>20),
            "url"=>"url4"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("current_price"=>230, "max"=>'$'),
            "url"=>"url4"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("current_price"=>13320, "max"=>'$'),
            "url"=>"url3"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("min"=>10, "max"=>20),
            "url"=>"url4"),
        array("thumbnail"=>"http://localhost/pricechecker/user/images/img2.jpg",
            "title"=>"Tablet White EliteBook Revolve 810 G2",
            "price"=>array("current_price"=>230, "max"=>'$'),
            "url"=>"url4")
    )
);
if (isset($_GET['num']) && isset($_GET['searchval']) && isset($_GET['category'])) {
    $num = $_GET['num'];
    $val = $_GET['searchval'];
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=".$val."&country=US",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
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