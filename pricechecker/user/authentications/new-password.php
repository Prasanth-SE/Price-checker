<?php
    require_once "../include/connection.php";
    $response = array();
    if(isset($_POST['password']) && isset($_POST['email'])){
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $code = 0;
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $update_pass = "UPDATE users SET code = $code, password = '$encpass' WHERE email = '$email'";
        $run_query = mysqli_query($con, $update_pass);
        if($run_query){
            $info = "Your password changed. Now you can login with your new password.";
            $response['status'] = 'ok';
            $response['info'] = $info;
            $response['error'] = 'success to change your password.'.$update_pass;
        }else{
            $response['status'] = 'ok';
            $response['info'] = '';
            $response['error'] = "Failed to change your password!".$update_pass;
        }
    }
    echo json_encode($response);
?>
