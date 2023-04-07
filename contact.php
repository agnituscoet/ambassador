<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form input values
    $name = sanitizeInput($_POST["name"]);
    $college = sanitizeInput($_POST["college"]);
    $year = sanitizeInput($_POST["year"]);
    $mobile = sanitizeInput($_POST["mobile"]);
    $email = sanitizeInput($_POST["email"]);
    $password = sanitizeInput($_POST["password"]);
    $text = sanitizeInput($_POST["text"]);

    // Set "from" email as the inputted email
    $from = $email;

    // Recipient email (change this to your desired email address)
    $to = "agnituscoet@gmail.com,ayanap.27122002@gmail.com";

    // Subject of the email
    $subject = "Agnitus Ambassador Program Sign Up";

    // Message body
    $message = "Name: " . $name . "\n"
        . "College: " . $college . "\n"
        . "Year of Study: " . $year . "\n"
        . "Mobile: " . $mobile . "\n"
        . "Email: " . $email . "\n"
        . "Password: " . $password . "\n"
        . "Queries: " . $text;

    // Additional headers
    $headers = "From:" . $from . "\r\n";
    $headers .= "Reply-To:" . $email . "\r\n"; // Added Reply-To header for better email handling

    // Additional security headers
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=iso-8859-1\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    // Check if email was sent successfully
    if ($mailSent) {
        // Redirect to success page
        header("Location: success.html");
        exit();
    } else {
        // Redirect to error page
        header("Location: error.html");
        exit();
    }
}

// Function to sanitize input data
function sanitizeInput($input)
{
    // Remove leading/trailing white spaces
    $input = trim($input);
    // Remove backslashes
    $input = stripslashes($input);
    // Convert special characters to HTML entities
    $input = htmlspecialchars($input);
    return $input;
}
?>
