<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "rosyidarif88@gmail.com";
    $subject = "New Message from Sweet Cake Madammy Contact Form";
    
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($message)) {
        $headers = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "missing_fields";
    }
} else {
    echo "invalid_request";
}
?>
