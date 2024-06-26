<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memories</title>
    <link rel="stylesheet" type="text/css" href="memories.css">
</head>
<body>
  <div class="menu">
    <header>
      <nav>
        <ul>
          <li><a href="Accueil.php">HOME</a></li>
          <li><a href="#cv">WORK</a></li>
          <li><a href="#works">UNI</a></li>
          <li><a href="#contact">BLOG</a></li>
        </ul>
      </nav>
    </header>
    <main>
</div>
    <main>
	
        <?php
        // Display memories
        $memoriesFile = "memories.txt";
        if (file_exists($memoriesFile)) {
            $memories = file($memoriesFile);
            foreach ($memories as $memory) {
                $memoryData = explode("|", $memory);
                $imagePath = "uploads/" . $memoryData[0];
                $title = $memoryData[1];
                $caption = $memoryData[2];
                $date = $memoryData[3];

                echo '<div class="post">';
                echo '<h2>' . $title . '</h2>';
                echo '<img src="' . $imagePath . '" alt="' . $title . '">';
                echo '<p class="caption">' . $caption . '</p>';
                //echo '<p class="date">Posted on ' . $date . '</p>';
                echo '</div>';
            }
        } else {
            echo "No memories yet.";
        }
        ?>
    </main>
	
<footer>
<p> Credits </p>
</footer>
</body>
</html>
