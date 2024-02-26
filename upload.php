<?php
if(isset($_POST['submit'])) {
    $title = $_POST['title'];
    $caption = $_POST['caption'];
    $file = $_FILES['file'];

    // File properties
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];

    // Upload file
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowedExtensions = array('jpg', 'jpeg', 'png');
    
    if (in_array($fileExt, $allowedExtensions)) {
        if ($fileError === 0) {
            $newFileName = uniqid('', true) . "." . $fileExt;
            $uploadPath = 'uploads/' . $newFileName;
            move_uploaded_file($fileTmpName, $uploadPath);
            
            // Save image details to a text file
            $data = "$title|$caption|$newFileName\n";
            file_put_contents('image_details.txt', $data, FILE_APPEND);
            
            echo "Upload successful!";
        } else {
            echo "Error uploading file!";
        }
    } else {
        echo "Invalid file type!";
    }
}
?>
