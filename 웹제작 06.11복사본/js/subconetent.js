var textarray=[];
var txtval;
var count=1;
var splitValue;

$(function(){
  dis();
  
 $('.commentline').keyup(function(){
   //console.log('sdfdsf')
 
    dis();
   });
  
    
  $('.comment_Box').on('click','.edit',function(){
    var edit= $(this).parent().parent().find('.comtTxt ').text();
    $('.btn').addClass('editablTxt');
    $('.commentline').val(edit);
    dis();
    
    splitValue=$(this).parent().parent().index();
    //alert(splitValue);
  });
  
  
  $('.btn').on('click',function(){
   
    if( $('.btn').hasClass
('editablTxt')){
         //alert(splitValue);
     // $('.wraper .cmt1').eq(splitValue).children('p.comtTxt').text("");
      
  var editableTxt= $('.commentline').val();
  
      
console.log($('.wraper').eq(splitValue).children().find('.comtTxt'));      $('.wraper .cmt1').eq(splitValue).children('p.comtTxt').html(editableTxt);
      
        $('.commentline').val("");
      
      dis();
      $('.btn').removeClass('editablTxt');
    }
    
    else{
   txtval= $('.commentline').val();
    $('.commentline').val("");
      dis();
  	//textarray.push(txtval);
  //  console.log(textarray)
    
    $('.wraper').append(
'<div id="cmt_'+count+'" class="cmt1" style="width:100%;min-height:50px;border-bottom:1px solid #409bc8"><p class="comtTxt" style="float:left">'+txtval+'</p> <div class="btns" style="float:right"><p class="edit" style="float:left;margin-right:4px;color:#409bc8">Edit</p> <p class="delete" style="float:left;color:#409bc8">Delete</p></div><div class="clear"></div></div>'
      
    );
    count++;
    }
    //console.log(txtval);
  });
  
   $('.comment_Box').on('click','.delete',function(){
    $(this).parent().parent().remove();
  });
  
});

function dis()
{
 // console.log('call')
  if($('.commentline').val()==""){
    $('.btn').css('opacity','0.7');
   $('.btn').attr("disabled", "disabled");
  }
  else{
     $('.btn').removeAttr('disabled');
   $('.btn').css('opacity','1');
  }
  
}