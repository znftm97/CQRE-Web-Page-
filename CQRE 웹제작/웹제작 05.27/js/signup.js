/* eslint-env jquery*/
/* global $ */
/* eslint-disable no-console */ 
/* eslint no-undef: "error"*/
/* eslint-env node*/
/* eslint-disable no-unused-vars */

$(function(){
    
    var pwd1 = $('.contact form input:nth-child(8)'),
        pwd2 = $('.contact form input:nth-child(10)');
    
    pwd2.keyup(function(){
        
        if(pwd1.val() != pwd2.val()){
            pwd2.css('border-color', 'red');
        }
        else if(pwd1.val() == pwd2.val()){
            pwd2.css('border-color', 'green');
        }
        else if(pwd1.val() && pwd2.val() == ""){
            pwd2.css('border-color', '#eee')    
        }
        else{
            pwd2.css('border-color', '#eee')  
        }
    });
    
    /*
    function check(){
        var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        
        if(!getMail.test($(".contact .mail").val())){
        $.alert("이메일형식에 맞게 입력해주세요");
        $("#mail").val("");
        $("#mail").focus();
        return false;
      }
        
        return true;
    }
    
    check();
    */
});