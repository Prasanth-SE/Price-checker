<?php 
$con = mysqli_connect('localhost', 'root', '', 'fyp');
function getLastId($con,$tableName, $currentPage, $numberInPage){
    $id = 0;
    if($con != null){
        if($currentPage){
            $currentPage--;
        }
        $limit = $currentPage * $numberInPage;
        $strQuery = "select id from `$tableName` order by id desc limit $limit";
        $res = mysqli_query($con, $strQuery);
        while ($row = mysqli_fetch_array($res)){
            $id = $row['id'];
            break;
        }
    }
    return $id;
}