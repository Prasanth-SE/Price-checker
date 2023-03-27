<?php
require_once "../includes/connection.php";
$response = array();
$response['status'] = 'fail';
$response['error'] = "Cannot parse the parameters!";
if(isset($_POST['name']) && $_POST['email'] && $_POST['password'] && $_POST['id']){
    $id = mysqli_real_escape_string($con, $_POST['id']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $strQuery = "select * from `users` where `id`='$id'";
    $res=mysqli_query($con,$strQuery);
    if(mysqli_num_rows($res) === 1){
        $fetch = mysqli_fetch_assoc($res);
        $fetch_pass = $fetch['password'];
        if($password === $fetch_pass){
            $strQuery = "update `users` set name='$name', email='$email' where id=$id";
        }else{
            $password = password_hash($password, PASSWORD_BCRYPT);
            $strQuery = "update `users` set name='$name', email='$email',password='$password' where id=$id";
        }


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
//return result
echo json_encode($response);
