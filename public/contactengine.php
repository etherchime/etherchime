<?php

$EmailTo = "etherchime@gmail.com";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Subject = Trim(stripslashes($_POST['Subject']));
$Message = Trim(stripslashes($_POST['Message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
//$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page
// CHANGE THE URL BELOW TO YOUR "THANK YOU" PAGE
//if ($success) {
  // print "<meta http-equiv="refresh" content="0;URL=contactthanks.html">";
//} else {
  // print "<meta http-equiv="refresh" content="0;URL=error.html">";
//}
?>