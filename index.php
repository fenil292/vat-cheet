<?php
ob_start();
    session_start();
$cn=mysqli_connect('sql12.freemysqlhosting.net','sql12348844','zgQFipGL3B','sql12348844');
/*if(mysqli_connect('sql204.epizy.com','epiz_25411521','55xHH8EfwV','epiz_25411521_demo'))
{
	echo 'connected';
}
else
{
	echo 'not connected';
}*/
    /*if(!empty($_SESSION['login_id'])) header('location:messanger.php');
    if(@$_POST['login'])
    {
        $res=mysqli_query($cn,"select `user_id` from `login` where `mob`=".$_POST['mob']." and `pwd`='".$_POST['pwd']."'");
        if(mysqli_num_rows($res)==1)
        {
            $data=mysqli_fetch_assoc($res);
            $_SESSION['login_id']=$data['user_id'];
            header('location:messanger.php');
        }
        else
        {
            $msg="Mobile No or Password Are Incorrect!";
        }
    }*/
?>
<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>
<body>
<form method="post">
<table>
    <caption><h1>Login</h1></caption>
    <tr>
        <th>Mobile No:</th>
        <td><input type="text" name="mob"></td>
    </tr>
    <tr>
        <th>Password:</th>
        <td><input type="password" name="pwd"></td>
    </tr>
    <tr>    
        <td colspan="2" style="text-align:center;">
            <input type="submit" name="login" value="Login">
        </td>
    </tr>
</table>
</form>
<?php if(@$msg) { ?><div style="color:red;"><?php echo $msg; ?></div><?php } ?>
</body>
</html>
