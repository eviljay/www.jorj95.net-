jQuery(document).ready(
	function () {
		jQuery('iframe').each(function() {
			var url = jQuery(this).attr("src");
			var width = jQuery(this).attr("width");
			var height = jQuery(this).attr("height");
			//520;
			if(width&&height&&width>520){
				jQuery(this).attr("width", 500);
				jQuery(this).attr("height",((height/width)*500));
			}
			var operator = (url.indexOf('?'))?'&':'?';
			jQuery(this).attr("src",url + operator + 'wmode=transparent');
	})
});