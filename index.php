<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>memories</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>✨ memories ✨</h1>
        <form action="memories.php" method="post" enctype="multipart/form-data">
            <label for="title">the event...</label>
            <br>
            <input type="text" id="title" name="title" required>
            <br><br>
            <label for="image">the pic...</label>
            <br>
            <div class="file-input-wrapper">
                <input type="file" id="image" name="image" accept="image/*" required >
            </div>
            <br>
            <label for="caption">the caption...</label>
            <br>
            <textarea id="caption" name="caption" rows="4" required></textarea>
            <br><br>
            <input type="submit" value="Valider"  class="submit-btn">
        </form>
    </div>
</body>

</html>
