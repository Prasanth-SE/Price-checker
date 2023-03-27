<?php
require_once "../includes/connection.php";
$response = array();
if(isset($_POST['name']) && $_POST['password']){
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $check_name = "SELECT * FROM `admin` WHERE name = '$name'";
    $res = mysqli_query($con, $check_name);
    if(mysqli_num_rows($res) > 0){
        $fetch = mysqli_fetch_assoc($res);
        $fetch_pass = $fetch['password'];
        if(password_verify($password, $fetch_pass)){
            $response['status'] = 'ok';
            $response['name'] = $name;
            $response['error'] = '';

        }else{
            $response['status'] = 'fail';
            $response['name'] = $name;
            $response['error'] = "Incorrect name or password!";
        }
    }else{
        $response['status'] = 'fail';
        $response['name'] = $name;
        $response['error'] = "It's look like you're not yet a member! Click on the bottom link to signup.";
    }
}
else{
    $response['status'] = 'fail';
    $response['error'] = "Cannot parse the parameters!";
}

//return result
echo json_encode($response);
?>
