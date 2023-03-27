<?php
require_once "../includes/connection.php";
$response = array();
if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['product_url']) && isset($_POST["image_url"])
    && isset($_POST["price"]) && isset($_POST["category"]) && isset($_POST["eshop"])){
    $title = mysqli_real_escape_string($con, $_POST['title']);
    $description = mysqli_real_escape_string($con, $_POST['description']);
    $product_url = mysqli_real_escape_string($con, $_POST['product_url']);
    $image_url = mysqli_real_escape_string($con, $_POST['image_url']);
    $price = mysqli_real_escape_string($con, $_POST['price']);
    $category = mysqli_real_escape_string($con, $_POST['category']);
    $eshop = mysqli_real_escape_string($con, $_POST['eshop']);
    $url_check = "SELECT * FROM `trending_products` WHERE product_url = '$product_url'";
    $res = mysqli_query($con, $url_check);
    if(mysqli_num_rows($res) > 0){
        $response['status'] = 'failed';
        $response['error'] = "Product that you would like to add is already exist!";
    }else{
        $insert_data = "INSERT INTO `trending_products` (title, description, product_url, image_url, price, category, eshop)
                                values('$title', '$description', '$product_url', '$image_url', '$price', '$category', '$eshop')";
        $data_check = mysqli_query($con, $insert_data);
        if($data_check){
            $response['status'] = 'ok';
            $response['error'] = 'Adding was success.';

        }else{
            $response['status'] = 'failed';
            $response['error'] = 'Failed while inserting data into database!';
        }
    }
}else{
    $response['status'] = 'failed';
    $response['error'] = 'Cannot parse the parameters!';
}
//return response to front end.
echo json_encode($response);