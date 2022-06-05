<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $recipient\n Name: $name\n Email: $email \n Message: $message";
$recipient = "gabigabrieladisalvatore@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $name, $formcontent, $mailheader) or die("Error!");
echo "Thank You!"; 
?>

----------------------------------------

<?php
// Initializing Error Variables To Null.
$nameError ="";
$emailError ="";
$messageError ="";
// This code block will execute when form is submitted
if(isset($_POST['submit'])){
/*--------------------------------------------------------------
Fetch name value from URL and Sanitize it
--------------------------------------------------------------*/
if($_POST['name'] != ""){
    // Sanitizing name value of type string
    $_POST['name'] = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $nameError = "<span class='valid'> ".$_POST['name']." </span>is Sanitized an Valid name.";
    if ($_POST['name'] == ""){
        $nameError = "<span class='invalid'>Please enter a valid name.</span>";
    } else {
        $nameError = "<span class='invalid'>Please enter your name.</span>";
    }
}
/*------------------------------------------------------------------
Fetch email value from URL, Sanitize and Validate it
--------------------------------------------------------------------*/
if($_POST['email'] != ""){
    //sanitizing email
    $_POST['email'] = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    //After sanitization Validation is performed
    $_POST['email'] = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $emailError = "<span class='valid'>".$_POST['email']." </span>is Sanitized an Valid Email.";
    if($_POST['email'] == ""){
        $emailError = "<span class='invalid'>Please enter a valid email.</span>";
    } else {
        $emailError = "<span class='invalid'>Please enter your email.</span>";
    }
}
/*--------------------------------------------------------------
Fetch message value from URL and Sanitize it
--------------------------------------------------------------*/
if($_POST['message'] != ""){
    // Sanitizing name value of type string
    $_POST['message'] = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    $nameError = "<span class='valid'>".$_POST['message']." </span>is Sanitized an Valid name.";
    if ($_POST['message'] == ""){
        $nameError = "<span class='invalid'>Please enter a valid name.</span>";
    } else {
        $nameError = "<span class='invalid'>Please enter your name.</span>";
    }
}
}
$formcontent=" From: $recipient\n Name: $name\n Email: $email \n Message: $message";
$recipient = "gabigabrieladisalvatore@gmail.com";
$subject = "Contact Form";
mail($recipient, $formcontent) or die("Error!")
?>
