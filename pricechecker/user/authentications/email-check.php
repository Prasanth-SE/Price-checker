<?php
    require_once "../include/connection.php";
    $response = array();
$response['status'] = 'fail';
$response['error'] = "error";
    if(isset($_POST['email'])){
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $check_email = "SELECT * FROM `users` WHERE email='$email'";
        $run_sql = mysqli_query($con, $check_email);
        if(mysqli_num_rows($run_sql) > 0){
            $code = rand(999999, 111111);
            $insert_code = "UPDATE users SET code = $code WHERE email = '$email'";
            $run_query =  mysqli_query($con, $insert_code);
            if($run_query){
                $subject = "Password Reset Code";
                $message = "Your password reset code is $code";
                $sender = "From: $email";
                //comment mail function
//                if(mail($email, $subject, $message, $sender)){
//                    $info = "We've sent a passwrod reset otp to your email - $email";
//                    $response['status'] = 'ok';
//                    $response['info'] = $info;
//                    $response['error'] = "";
//                }else{
//                    $response['status'] = 'failed';
//                    $response['error'] = "Failed while sending code!";
//                }
                $response['status'] = 'ok';
                $info = $code;
                $response['info'] = $info;
                $response['error'] = "";
            }else{
                $response['status'] = 'failed';
                $response['error']  = "Something went wrong!";
            }
        }else{
            $response['status'] = 'failed';
            $response['error'] = "This email address does not exist!".$check_email;
        }

    }
echo json_encode($response);

?>
