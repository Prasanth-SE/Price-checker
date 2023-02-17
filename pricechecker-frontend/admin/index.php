<?php
include_once 'php_files/config.php';
session_start();
if(isset($_SESSION['admin_name'])) {
    header("Location: ".$base_url."admin/dashboard.php");
}
?>
<!doctype html>
<html>
   <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Admin </title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../user/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.css">
        <link rel="stylesheet" href="../user/css/indexstyl.css">
        
    </head>
    <body>
       

        <div class="body">
  <div class="wrapper">
    
    <h2>Admin Login</h2>
    <form id="adminLogin"  method="post" autocomplete="off" >
   
      <div class="input-box">
      <input type="text" class="form-control username" placeholder="Username" required>
      </div>
     
      <div class="input-box">
      <input type="password" class="form-control password" placeholder="Password" required>
      </div>
      
      <div class="input-box button">
      <input type="submit" name="login" class="btn" value="Login"/>
      </div>
      
    </form>
  </div>
  </div>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/admin_actions.js"></script>
    </body>
</html>
