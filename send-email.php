<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "agnituscoet@gmail.com";
    $subject = "Signup Form Submission";
    $message = "First Name: " . $_POST["firstName"] . "\r\n"
             . "Last Name: " . $_POST["lastName"] . "\r\n"
             . "Email: " . $_POST["email"] . "\r\n"
             . "Contact Phone: " . $_POST["contactPhone"] . "\r\n"
             . "WhatsApp Number: " . $_POST["whatsapp"] . "\r\n"
             . "College: " . $_POST["college"] . "\r\n"
             . "Year of Study: " . $_POST["yearOfStudy"] . "\r\n"
             . "Feedback or Queries: " . $_POST["feedback"];

    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer:
