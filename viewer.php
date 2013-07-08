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
                    WHERE `type` = 'view'
                    AND `viewer_id` = {$viewer['id']}
                    ORDER BY `order`";
$viewImages = get_record_array($viewImagesQuery);

$componentImagesQuery = "SELECT *
                         FROM `viewer_images`
                         WHERE `type` = 'component'
                         AND `viewer_id` = {$viewer['id']}";
$componentImages = get_record_array($componentImagesQuery);

// Set the viewer div
$script = "var viewerId = 'viewer{$viewer['id']}';";

// Load the javascript images arrays
$count = 0;
foreach ($viewImages as $image) {
    $script .= "views[{$count}] = new Image();";
    $script .= "views[{$count}].src = '/viewer/images/{$viewer['id']}/{$image['url']}';";
    $script .= "views[{$count}].name = 'View{$count}';";
    $script .= "views[{$count}].alt = 'view';";
    $script .= "views[{$count}].id = '{$image['id']}';";
    $script .= "views[{$count}].className = 'view';";
    $count++;
}
$count = 0;
foreach ($componentImages as $image) {
    $script .= "components[{$count}] = new Image();";
    $script .= "components[{$count}].src = '/viewer/images/{$viewer['id']}/{$image['url']}';";
    $script .= "components[{$count}].name = 'component{$count}';";
    $script .= "components[{$count}].alt = 'component';";
    $script .= "components[{$count}].id = '{$image['id']}';";
    $script .= "components[{$count}].className = 'component';";
    $count++;
}

// Create the click regions
$hotspotsQuery = "SELECT *
                  FROM `viewer_hotspots`
                  WHERE `viewer_id` = {$viewer['id']}";
$hotspots = get_record_array($hotspotsQuery);

$count = 0;
foreach($hotspots as $hotspot) {
    $script .= "$('#viewer{$viewer['id']}').append('<div class=\"view{$hotspot['view_id']} component{$hotspot['component_id']} hotspot hotspot{$count}\"></div>');";
    $script .= "$('.hotspot{$count}').css({'left' : '{$hotspot['left']}px', 'top' : '{$hotspot['top']}px', 'width' : '{$hotspot['width']}px', 'height' : '{$hotspot['height']}px', 'background-position' : '-" . ($hotspot['left'] + 1) . "px -" . ($hotspot['top'] + 1) . "px'});";
    $count++;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>360viewer</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="stylesheet" href="/css/viewer.css">
</head>
<body>
    <div id="viewer<?php echo $viewer['id'] ?>" class="viewer">
        <div id="view" class="viewContainer"></div>
        <div id="component" class="componentContainer"></div>
        <div id="screen" class="screen"></div>
        <div id="help" class="help">
            <p>Use <img src="/viewer/images/leftarrow.png" alt="Left Arrow" /> and <img src="/viewer/images/rightarrow.png" alt="Right Arrow" /> to change the views of the equipment.</p>
            <p>Click on the highlighted regions to see a closup view of the selected component.</p>
            <p>When a component view is shown, click again to close it.</p>
        </div>
        <div id="close" class="close"></div>
    </div>
    <script>
    var viewWidth = "950px";
    var viewHeight = "534px";
    var views = new Array();
    var components = new Array();
    <?php echo $script ?>

    var currentView = 0;

    </script>
    <script src="/js/360viewer.js"></script>
</body>
</html>
