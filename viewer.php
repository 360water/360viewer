<?php
require_once '../include/_global.php';
require_once '../lib/lib_database.php';

$viewerQuery = "SELECT *
                FROM `viewers`
                WHERE `id` = {$_GET['id']}
                LIMIT 1";
$viewer = get_single_record($viewerQuery);

$viewImagesQuery = "SELECT *
                    FROM `viewer_images`
                    WHERE `type` = 'main'
                    ORDER BY `order`";
$viewImages = get_record_array($viewImagesQuery);

$componentImagesQuery = "SELECT *
                         FROM `viewer_images`
                         WHERE `type` = 'component'";
$componentImages = get_record_array($componentImagesQuery);

// Load the javascript images arrays
$count = 0;
foreach ($viewImages as $image) {
    $script .= "views[{$count}] = new Image();";
    $script .= "views[{$count}].src = '/course_files/{$viewer['assigned_id']}/{$viewer['id']}/{$image['url']};";
    $script .= "views[{$count}].name = 'View{$count}';";
    $count++:
}
$count = 0;
foreach ($componentImages as $image) {
    $script .= "components[{$count}] = new Image();";
    $script .= "components[{$count}].src = '/course_files/{$viewer['assigned_id']}/{$viewer['id']}/{$image['url']};";
    $script .= "components[{$count}].name = 'Component{$count}';";
    $count++:
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>360viewer</title>
    <meta charset="utf-8" />
</head>
<body>
    <div class="viewer">
    </div>
    <script>
    var views = new Array();
    var components = new Array();
    <?php echo $script ?>

    var currentView = 0;
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://static.360water.com/viewer/js/360viewer.js"></script>
</body>
</html>
