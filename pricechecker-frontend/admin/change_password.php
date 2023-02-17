
<?php include 'header.php'; 

if(count($_POST)>0) {
    $result = mysqli_query($con,"SELECT password from admin ");
    $row=mysqli_fetch_array($result);
    if($_POST["old_pass"] == $row["password"] ) {
    mysqli_query($con,"UPDATE admin set password='" . $_POST["new_pass"] );
    $message = "Password Changed Sucessfully";
    } 
    else{
     $message = "Old Password is not correct";
    }

    }
   


?>
<div class="admin-content-container">
    <h2 class="admin-heading">Set New Password</h2>

    <div class="row">
        <form id="changePassword" class="add-post-form col-md-6" method="POST">
       
            <div class="form-group">
               
                <label>New  Password</label>
                <input type="password" name="old_pass" class="form-control old_pass" placeholder="Old Password"  required/>
            </div>
            <div class="form-group">
                <label>New Password</label>
                <input type="password" name="new_pass" class="form-control new_pass" placeholder="New Password"  required/>
            </div>
            <input type="submit" name="save" class="btn add-new" value="Submit">
        </form>
    </div>
   
</div>
<?php include "footer.php";   ?>