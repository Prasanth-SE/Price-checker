<?php
    include 'php_files/config.php';
    if(!session_id()){ session_start(); }
    if(!isset($_SESSION['admin_name'])) {
        header("location:{$base_url}/admin");
    }

   
    $currency_format = 'Rs. ';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>ADMIN</title>
        <link rel="stylesheet" href="../user/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900|Montserrat:400,500,700,900" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
     <link rel="stylesheet" href="css/jquery-te-1.4.0.css">
        <link rel="stylesheet" href="../user/css/style.css">
    </head>
    <body>
        <div id="admin-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                      
                            <a href="dashboard.php" class="logo-img"><img src="../user/images/logo1.png" alt=""></a>
                       
                    </div>
                    <div class="col-md-offset-8 col-md-2">
                        <div class="dropdown">
                            <a href="" class="dropdown-toggle logout" data-toggle="dropdown">
                                <?php
                                if(!session_id()){
                                    session_start();
                                }
                                echo 'Hi '.$_SESSION['admin_name']; ?>
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="change_password.php">Change Password</a></li>
                                <li><a href="php_files/logout.php">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="admin-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 col-sm-3" id="admin-menu">
                         <ul class="menu-list">
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "dashboard.php") echo 'class="active"'; ?>><a href="dashboard.php">Dashboard</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "products.php") echo 'class="active"'; ?>><a href="products.php">Products</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "category.php") echo 'class="active"'; ?>><a href="category.php">Categories</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "sub_category.php") echo 'class="active"'; ?>><a href="sub_category.php">Sub-Categories</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "brands.php") echo 'class="active"'; ?>><a href="brands.php">Brands</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "users.php") echo 'class="active"'; ?>><a href="users.php">Users</a></li>
                            <li <?php if(basename($_SERVER['PHP_SELF']) == "users.php") echo 'class="active"'; ?>><a href="users.php">Subscription</a></li>
                          
                        </ul>
                    </div>
                   
                    <div class="col-md-10 col-sm-9 clearfix" id="admin-content">
