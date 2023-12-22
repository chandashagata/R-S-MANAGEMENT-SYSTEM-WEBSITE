<?php


$name = $_REQUEST['Your Name'];
$email = $_REQUEST['Email ID'];
$phone = $_REQUEST['Phone No.'];
$message = $_REQUEST['message'];

if( empty($name) || empty($email) || empty($phone) || empty($message))
{
    echo "Please fill all the fields";
}
else{
    mail("shagata.2020@gmail.com", "Webtech message", $message, "From: $name < $email >");
    echo "<script type='text/javascript'>alert('your message sent successfully');
    window.history.log(-1);
    </script>";
}





?>