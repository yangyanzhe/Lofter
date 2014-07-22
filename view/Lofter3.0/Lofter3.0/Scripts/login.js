/****************************************************
**	login.js
**	time: 7/19;
**	function: 注册/登陆的tab显示/下载APP
*****************************************************/
var currentButton = "registerBt";

$(document).ready(function(){
	$("#registerBt").click(function(){
		if(currentButton == "registerBt"){
			return;
		}
		$("#registerBt").attr("class", "active");
		$("#loginBt").attr("class", "normal");
		$("#newRegister").css("display","");
		$("#newLogin").css("display","none");
		currentButton = "registerBt";
	});

	$("#loginBt").click(function(){
		if(currentButton == "loginBt"){
			return;
		}
		$("#registerBt").attr("class", "normal");
		$("#loginBt").attr("class", "active");
		$("#newRegister").css("display","none");
		$("#newLogin").css("display","");
		currentButton = "loginBt";
	});

	$(".txt").keydown(function(){
		var index = $(this).attr("tabindex");
		$("#label"+index).css("display", "none");
	});

	$(".txt").blur(function(){
		var index = $(this).attr("tabindex");
		if(this.value == ""){
			$("#label"+index).css("display", "");
		}

		//如果注册密码不符合6-16位的要求，就会显示错误提示框
		if(index == "102"){
			if(this.value == ""){
				$("#warn102").css("display", "none");
				$(".formWrap").css("height", "200px");
				return;
			}
			if(this.value.length < 6 || this.value.length > 16){
				$("#warn102").css("display", "");
				$(".formWrap").css("height", "230px");
			}
			else{
				$("#warn102").css("display", "none");
				$(".formWrap").css("height", "200px");
			}
		}
	});

	//记住密码
	$(".checkBox").click(function(){
		var a = $(".checkBox").children();
		var state = $(a[0]).attr("class");
		if(state == "ok"){
			$(a[0]).attr("class", "no");
		}
		else if(state == "no"){
			$(a[0]).attr("class", "ok");
		}
	});
});
