<?php
require_once "../includes/connection.php";
$response = array();
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $email_check = "SELECT * FROM users WHERE email = '$email'";
    $res = mysqli_query($con, $email_check);
    if(mysqli_num_rows($res) > 0){
        $response['status'] = 'failed';
        $response['error'] = "Email that you have entered is already exist!".$email;
    }else{
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $code = rand(999999, 111111);
        $status = "verified";
        $insert_data = "INSERT INTO users (name, email, password, code, status)
                                values('$name', '$email', '$encpass', $code, '$status')";
        $data_check = mysqli_query($con, $insert_data);
        if($data_check){
            $response['status'] = 'ok';
            $response['error'] = 'SignUp was success.';

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
