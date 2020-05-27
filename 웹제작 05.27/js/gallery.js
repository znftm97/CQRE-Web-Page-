/* eslint-env jquery*/
/* global $ */
/* eslint-disable no-console */ 
/* eslint no-undef: "error"*/
/* eslint-env node*/
/* eslint-disable no-unused-vars */

$(function(){
    
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    $("#content .boxContainer > a > div").click(function(e){
        e.preventDefault();
        $("#galleryContentBox").addClass("active");
       
    })
    $("#galleryContentBox .fa-times").click(function(){
        $("#galleryContentBox").removeClass("active");
    });
    
    
    /*
    var val = location.href.substr(
        location.href.lastIndexOf('=') + 1
    );
        console.log(val);
    */
    
    /*모바일 메뉴*//*모바일 메뉴*//*모바일 메뉴*//*모바일 메뉴*/
    $(".menu-toggle .fa-list").click(function(){
        $(".main-menu").toggleClass("active");
    });
    $(".top-close-menu").click(function(){
        $(".main-menu").removeClass("active");
    });  
});

