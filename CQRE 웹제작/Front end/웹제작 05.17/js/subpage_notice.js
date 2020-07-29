/* eslint-env jquery*/
/* global $ */
/* eslint-disable no-console */ 
/* eslint no-undef: "error"*/
/* eslint-env node*/
/* eslint-disable no-unused-vars */



$(function(){
    
    var pageNum=1,
        contentNum = $("#fullBox .notice_table .contents tr").length;
    
    /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/ 
    /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/ /*헤더*/
    $('#header .logo_container a').on('click', function(e){
        e.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });
    
    
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    $(".menu-toggle .fa-list").click(function(){
        $(".main-menu").toggleClass("active");
    });
    $(".top-close-menu").click(function(){
        $(".main-menu").removeClass("active");
    });
    
    
    /*
    function pageAdd(){
    $("#fullBox .notice_table .contents tr").each(function(index,value){
        console.log(index);
        if(index%content==pageNum)
            {
                $(".page .pageNum").append($("<a/>",{
                    text:pageNum+1,
                    class:"num"
                }));
                content+=content+10;
                pageNum++;
            }
    });
    }
    pageAdd();
    */
    
    /*
    function pageAdd(){
        var pageNum=1,
        nine=9,
        contentNum = $("#fullBox .notice_table .contents tr").length;
        
        console.log(contentNum);
        if(contentNum%nine==pageNum)
            {
                $(".page .pageNum").append($("<a/>",{
                    text:pageNum+1,
                    class:"num"
                }));
                pageNum++;
                nine*=nine * pageNum;
            }
    }
    pageAdd();
    */
    
    function pageNumAdd(){
    
        if((Math.ceil(contentNum/10))==pageNum)
            { 
       
                $(".page .pageNum").append($("<a/>",{
                    text:pageNum+1,
                    class:"num"
                }));
                pageNum++;
                
            }
        console.log(contentNum);
        console.log(pageNum);
    }
    pageNumAdd();
     
    /*
    function pageAdd(){
        //contentNum 숫자가 10이되면 10번째컨텐츠는 2페이지에 생성이 되어야함
        // 테이블 생성해야함
        $("#fullbox").append($("<table/>", {
            caption: "공지사항",
            class:"table";
        }));
        $(".notice_table").css("display","none");
    }
    pageAdd();
    
*/
});
       