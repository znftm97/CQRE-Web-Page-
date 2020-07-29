/* eslint-env jquery*/
/* global $ */
/* eslint-disable no-console */ 
/* eslint no-undef: "error"*/
/* eslint-env node*/
/* eslint-disable no-unused-vars */

$(function(){
    
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/ /*메뉴*/
    $("#content .boxContainer > div").click(function(){
        $("#galleryContentBox").toggleClass("active");
    });
    $("#galleryContentBox .fa-times").click(function(){
        $("#galleryContentBox").removeClass("active");
    });
    
    
});

