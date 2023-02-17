<?php
// include header file
    include 'header.php'; ?>
    <div class="admin-content-container">
        <h2 class="admin-heading">All Users</h2>
        <?php
        $limit = 10;
        $db = new Database();
        $db->select('user','*',null,null,'user_id DESC',2);
        $result = $db->getResult();
        if (count($result) > 0) { ?>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>City</th>
                    <th>Action</th>
                </thead>
                <tbody>
                <?php foreach($result as $row) { ?>
                    <tr>
                        <td><?php echo $row['name']; ?></td>
                        <td><?php echo $row['email']; ?></td>
                        <td><?php echo $row['mobile']; ?></td>
                        <td><?php echo $row['city']; ?></td>
                        <td>
                            <a href="" class="btn btn-xs btn-primary user-view" data-id="<?php echo $row['user_id']; ?>" data-toggle="modal" data-target="#user-detail"><i class="fa fa-eye"></i></a>
      
                            <a class="btn btn-xs btn-danger delete_user" href="javascript:void();" data-id="<?php echo $row['user_id']; ?>"><i class="fa fa-trash"></i></a>

                        </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            <?php }else{ ?>
            <div class="not-found clearfix">!!! No Users Found !!!</div>
            <?php  }  ?>
            <div class="pagination-outer">
                <?php echo $db->pagination('user',null,null,$limit); ?>
            </div>
    </div>
<div class="modal fade" id="user-detail" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body">
            </div>
        </div>
    </div>
</div>
<?php
include "footer.php";
?>
