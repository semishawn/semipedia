<?php
header('Access-Control-Allow-Origin: *');
ini_set('display_errors', 1); 
error_reporting(E_ALL);

// Recieve semiterm name
$semiterm = $_REQUEST['semiterm'];
$semiterm_slug = str_replace(" ", "-", $semiterm);

// Format date
date_default_timezone_set('America/New_York');
$date = date("Y-n-j");

// Content to write to file
$content = "---
layout: semiterm
title: $semiterm

phonetic: \"[  ]\"
ipa: \"/  /\"

definition: [
	{
		pos: ,
		description: [
			{
				explanation: \"\",
				example: \"\"
			}
		]
	}
]

date: $date
neologist: Shawn
---";

// Create and write file
$file = fopen("../_semiterms/$semiterm_slug.md", "wb");
fwrite($file, $content);
fclose($file);
?>