<?php
    require_once "../include/connection.php";

    $email = "";
    $name = "";
    $response = array();
    if(isset($_POST['email']) && $_POST['password']){
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $check_email = "SELECT * FROM users WHERE email = '$email'";
        $res = mysqli_query($con, $check_email);
        if(mysqli_num_rows($res) > 0){
            $fetch = mysqli_fetch_assoc($res);
            $fetch_pass = $fetch['password'];
            if(password_verify($password, $fetch_pass)){
                $response['status'] = 'ok';
                $response['email'] = $email;
                $response['error'] = '';

            }else{
                $response['status'] = 'fail';
                $response['email'] = $email;
                $response['error'] = "Incorrect email or password!".$check_email;
            }
        }else{
            $response['status'] = 'fail';
            $response['email'] = $email;
            $response['error'] = "It's look like you're not yet a member! Click on the bottom link to signup.";
        }
    }
    else{
        $response['status'] = 'fail';
        $response['email'] = $email;
        $response['error'] = "Cannot parse the parameters!";
    }

    //return result
    echo json_encode($response);
?>
