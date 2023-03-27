<?php
require_once "../include/connection.php";

$email = "";
$name = "";
$response = array();
if(isset($_GET['email']) && $_GET['url'] && $_GET['thumbnail']
    && $_GET['title'] && $_GET['description'] && $_GET['price']
    && $_GET['eshop']){
    $email = mysqli_real_escape_string($con, $_GET['email']);
    $url = mysqli_real_escape_string($con, $_GET['url']);
    $thumbnail = mysqli_real_escape_string($con, $_GET['thumbnail']);
    $title = mysqli_real_escape_string($con, $_GET['title']);
    $description = mysqli_real_escape_string($con, $_GET['description']);
    $price = mysqli_real_escape_string($con, $_GET['price']);
    $eshop = mysqli_real_escape_string($con, $_GET['eshop']);
    $strQuery = "select * from `tracked_products` where `product_url`='$url' and `user_email`='$email'";
    $res=mysqli_query($con,$strQuery);
    if(mysqli_num_rows($res) < 1){
        $strQuery = "INSERT INTO `tracked_products`(`user_email`, `product_url`,`image_url`, `title`, `description`, `current_price`, `old_price`,`eshop`) VALUES ('$email','$url','$thumbnail','$title','$description','$price','$price','$eshop')";

        $query=mysqli_query($con,$strQuery);

        if(!$query){
            $response['status'] = 'failed';
            $response['error'] = mysqli_error($con);
        }else{
            $response['status'] = 'ok';
            $response['error'] = '';
        }

    }else{
        $response['status'] = 'failed';
        $response['error'] = 'This is already exist!';
    }
}
else{
    $response['status'] = 'fail';
    $response['error'] = "Cannot parse the parameters!";
}
$response['email'] = $email;
//return result
echo json_encode($response);
?>
