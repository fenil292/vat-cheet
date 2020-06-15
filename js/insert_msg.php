<?php
    session_start();
    $date= date_default_timezone_set('Asia/Kolkata');
    $timestamp = date("Y-m-d H:i:s");
    $data=array();
    $cn=mysqli_connect('localhost','root','','demo');
    $m="insert into `chat`(`msg`,`user_id`,`time`) values('".$_POST["message"]."',".$_SESSION['login_id'].",'".$timestamp."')";
    mysqli_query($cn,$m);
    $name_res=mysqli_query($cn,"select `name` from `login` where `user_id`=".$_SESSION['login_id']);
    $name=mysqli_fetch_assoc($name_res);
    $data['name']=$name['name'];
    $data['time']=$timestamp;
    echo json_encode($data);
?>