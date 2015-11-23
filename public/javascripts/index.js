(function($){
	
	//	文章评论数据提交
	$('#post_comment').submit(function(ev){
		ev.preventDefault();
		console.log($(this).serialize());
	});
})(jQuery);