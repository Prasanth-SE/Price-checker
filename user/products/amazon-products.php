<?php
include_once '../include/common.php';
include_once "../../mock-data/amazon-mock-data.php";
$response = array();
    if(isset($_GET['num'])){
//        $curl = curl_init();
//        curl_setopt_array($curl, [
//            CURLOPT_URL => "https://amazon24.p.rapidapi.com/api/todaydeals",
//            CURLOPT_RETURNTRANSFER => true,
//            CURLOPT_FOLLOWLOCATION => true,
//            CURLOPT_ENCODING => "",
//            CURLOPT_MAXREDIRS => 10,
//            CURLOPT_TIMEOUT => $timeOutTime,
//            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//            CURLOPT_CUSTOMREQUEST => "GET",
//            CURLOPT_HTTPHEADER => [
//                "X-RapidAPI-Host: amazon24.p.rapidapi.com",
//                "X-RapidAPI-Key: cbee658032msh79663b658dc6f04p170908jsna0dbbf3cc798"
//            ],
//        ]);
//
//        $result = curl_exec($curl);
//        $err = curl_error($curl);
//        curl_close($curl);
//        if($err){
//            //return mock data
//            $response['error'] = 'Mock Results: '.$err;
//            $response['status'] = 'ok';
//            $data = $mockData;
//
//        }else{
//            $response['status'] = 'ok';
//            $response['error'] = 'success in curl';
//            $data = $result;
//        }
        $response['error'] = 'Mock Results: ';
        $response['status'] = 'ok';
        $data = $mockData;
    }

$response['data'] = $data;
echo json_encode($response);



