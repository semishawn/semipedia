$('.pron-toggle').on('click', function() {
	$('.phon, .ipa').toggle();
	$(this).html($(this).html() == 'Show IPA Spelling' ? 'Show Phonetic Respelling' : 'Show IPA Spelling');
});

if ($('.additional').children().length < 5) {
	$('.extra-heading:nth-child(1)').hide();
};