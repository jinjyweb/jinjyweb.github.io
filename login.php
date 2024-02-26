<?php
session_start();

// Check if the user is already logged in
if(isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

// Check if the form is submitted
if(isset($_POST['username']) && isset($_POST['password'])) {
    // Validate credentials (This is just a basic example, in real-world scenarios, you would use secure password hashing and database storage)
    $valid_users = array(
        'user1' => 'password1',
        'user2' => 'password2'
    );

    $username = $_POST['username'];
    $password = $_POST['password'];

    if(isset($valid_users[$username]) && $valid_users[$username] == $password) {
        // Authentication successful
        $_SESSION['username'] = $username;
        header("Location: index.php");
        exit();
    } else {
        // Authentication failed
        $error = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <link rel="stylesheet" href="memories.css">

    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if(isset($error)) { echo "<p>$error</p>"; } ?>
    <form action="login.php" method="post">
        <label for="username">User :</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Mdp :</label><br>
        <input type="password" id="password" name="password" required><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
