<?php require_once "../include/connection.php";
    $email = "";
    $name = "";
    $response = array();
    $response['status'] = 'ok';
    $response['email'] = $email;
    $response['error'] = 'success to check code.';
    if(isset($_POST['otp'])){
        $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
        $check_code = "SELECT * FROM users WHERE code = $otp_code";
        $code_res = mysqli_query($con, $check_code);
        if(mysqli_num_rows($code_res) > 0){
            $fetch_data = mysqli_fetch_assoc($code_res);
            $email = $fetch_data['email'];
            $info = "Please create a new password that you don't use on any other site.";
            $response['status'] = 'ok';
            $response['email'] = $email;
            $response['info'] = $info;
            $response['error'] = 'success to check code.';
        }else{
            $response['status'] = 'failed';
            $response['email'] = $email;
            $response['info'] = '';
            $response['error'] = "You've entered incorrect code!";
        }
    }
    echo json_encode($response);
?>
