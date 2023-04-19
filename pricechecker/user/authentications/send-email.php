<?php
    setcookie('cookie2', 'value2', ['samesite' => 'None', 'secure' => false]);
    require_once "../include/connection.php";
    $response = array();
    $response['status'] = 'fail';
    $response['error'] = "error.".$_POST['email'].$_POST['firstName'];
    if(isset($_POST['email']) && isset($_POST['firstName']) && isset($_POST['lastName'])
    && isset($_POST['subject']) && isset($_POST['mailText'])){
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $firstName = mysqli_real_escape_string($con, $_POST['firstName']);
        $lastName = mysqli_real_escape_string($con, $_POST['lastName']);
        $subject = mysqli_real_escape_string($con, $_POST['subject']);
        $message = mysqli_real_escape_string($con, $_POST['mailText']);
        $headers = 'From: contact form:' . "\r\n" .$firstName.' '.$lastName;
        $strQuery = "INSERT INTO `messages`(`first_name`, `last_name`, `subject`, `message`) 
                                    VALUES ('$firstName', '$lastName', '$subject', '$message')";
        if(mail($email, $subject, $message, $headers)){
            $info = "We've sent a message to manager - $email";
            $response['status'] = 'ok';
            $response['info'] = $info;
            $response['error'] = "";
            if(!mysqli_query($con, $strQuery)){
                $response['status'] = 'failed';
                $response['error']  = mysqli_error($con);
            }
        }else{
            $response['status'] = 'failed';
            $response['error'] = "Failed while sending email!";
        }
    }else{
        $response['error'] = "The parameters did not matched.";
    }
    echo json_encode($response);
?>
