---
title: Soft Launch
date: 2020-2-9
---

<style>
.popup-top {
	height: 150px;
	width: var(--nav-width);
	padding-top: 10px;
	background-color: var(--primary3);
	overflow: hidden;
	box-sizing: border-box;
}

.popup-bottom {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: var(--primary4);
}

.popup-header {
	font-family: var(--font2);
	font-size: 30px;
	font-weight: 500;
	font-style: italic;
	color: white;
	margin: 0;
	padding: 0;
	margin-top: 10px;
}

.popup-subtext {
	font-family: var(--font1);
	font-size: 15px;
	font-weight: 600;
	line-height: 20px;
	color: white;
	text-align: center;
	margin: 0 10px;
	margin-bottom: 10px;
	padding: 0;
}

.popup-bottom .btn {
	margin-top: 10px;
	margin-bottom: 25px;
}
</style>

<div class="popup-top">
	<img src="{{ site.baseurl }}/img/me/me-tea.svg">
</div>

<div class="popup-bottom">
	<p class="popup-header">~ Hello! ~</p>
	<p class="popup-subtext">Welcome to the {{ site.title | capitalize }} soft launch!</p>
	<p class="popup-subtext">Click this button to learn what's going on:</p>
	<a class="btn" href="{{ site.baseurl }}/chapters/preface">
		<i class="fa-solid fa-pen-nib"></i>
		Preface
	</a>
</div>