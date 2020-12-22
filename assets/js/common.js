$(function(){
    mainPage.init();
})

var mainPage = {
    init : function(){
        mainPage.mainMap();
    },

    mainMap : function() {
		var $mainMap = $(".mainMap area"),
			$subMapArea = $(".mainMapArea area");

		$mainMap.click(function(e){
			e.preventDefault();

			$(this).next().show();
			$mainMap.not(this).next().hide();

			$('.mainMapArea, .subMapBg').addClass('active');

			$('.subMap map').addClass('mapHide');
			$(".mapHide").removeClass("active");

			$("#" + $(this).data('id')).addClass('active');
			$("#" + $(this).data('id') + " > div > img:eq(0)").attr("style", "display:block");

			return false;
        });
    }
}


/*---------------------메뉴------------------------------- */
$(function(){
	variable.init();
	gnb.init();
});

/***************************************** 변수 초기화 ***/
var variable = {
	init : function(){
		$gnb = $(".wrap__gnb");
		$gnbLi = $(".wrap__gnb>li");
		$gnbLiA = $(".wrap__gnb>li>a")
		$lnb = $(".wrap__gnb>li>ul");
		$speed = 300;
	}
}

/***************************************** gnb ***/
var gnb = {
	init : function(){
		// 메뉴활성화, 효과
		gnb.open();
	},

	// 메뉴활성화, 효과
	open : function(){
		$gnb.children("li").on("mouseenter",function(){
			$(this).find($lnb).stop().slideDown($speed);
		});
		
		$gnb.children("li").mouseleave(function(){
			$(this).find($lnb).stop().slideUp($speed);
		});
	}
}

