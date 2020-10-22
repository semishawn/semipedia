---
layout: table
title: Semiblurbs
subheader: Did you know blurb is also a verb? He, she, we blurb...

blurbs: [
	{
		title: "Saying \"well\" as \"wool\"",
		date: 2020-10-21,
		writing: "I think one of the more interesting flavors of American English slang is what I like to call \"sneaky slang\". Sometimes a certain word can be pronounced wildly different from its original, intended form without anybody raising a finger. This vernacular is sly; it goes beneath the social linguistic radar. Such is the case with \"well\". I've heard many people, from all walks of life, pronounce the interjection \"well\" like \"wool\" or maybe \"woll\" or maybe \"wull\". This includes myself. From what I can discern, this is an example of the neutralisation of the phonetic /ɛ/ sound that sometimes occurs when speaking quickly or with literal loose lips. That is to say /wɛl/ becomes /wḷ/ or even /wʊ/, most often when preceding a vowel phoneme, such as in \"yeah\" or \"alright\". Such a biological cacophony represents a <i>bilabial</i> to <i>voiced alveolar lateral approximant</i> to <i>post alveolar</i> shift. In other words, moving your tongue from the front of your mouth, just below the teeth, to the roof of your mouth, to scrunching it up in the back. That's one giant leap for tongekind, sometimes a little too giant, so the mouth will take a shortcut by not extending its corners as much. This, finally, is the key to that /ʊ/ or \"oo\" sound that's so often swept beneath the carpet."
	}
]
---

{% for blurb in page.blurbs %}
<div class="blurb">
	<div class="blurb-top">
		<span class="blurb-title" id="{{ blurb.title | downcase | remove: '"' | replace: ' ', '-' }}">
			<span>#</span>{{ blurb.title }}...
		</span>
		<span class="blurb-origin">{{ blurb.date | date: '%B %-d, %Y' }}</span>
	</div>
	<div class="normal blurb-writing">{{ blurb.writing }}</div>
</div>
{% endfor %}

<script>
	$('.blurb-title').click(function() {
		var copyInput = $('<input>');
		$('body').append(copyInput);
		var copyData = location.protocol + '//' + location.host + location.pathname + '#' + $(this).attr('id');
		copyInput.val(copyData).select();
		document.execCommand('copy');
		copyInput.remove();
	});
</script>