<?php
function include_args($path, $args = array(), $print = true)
{
    $out = NULL;
    if(file_exists($path)){
        // Extract the variables to a local namespace
        extract($args);

        // Start output buffering
        ob_start();

        // Include the template file
        include $path;

        // End buffering and return its contents
        $out = ob_get_clean();
    }
    if ($print) {
        print $out;
    }
    return $out;

}