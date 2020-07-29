<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name='author' content='03�ϳ���'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"></script>
    
    <!--jquery-->
    <script src="<%=request.getContextPath()%>/view2/js/jquery-3.4.1.min.js"></script>
    <script src="<%=request.getContextPath()%>/view2/js/subpage_notice.js"></script>
    
    <!-- style --> 
    <link rel="stylesheet" href="<%=request.getContextPath()%>/view2/css/login.css">
    
    <!-- fonts link--> 
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet">
</head>
<body>
<div id="mobile">
        <div class="menu-toggle">
          <i class="fas fa-list" aria-hidden="true"></i>
          <a href="/main"><img src="<%=request.getContextPath()%>/view2/img/0614.png" alt=""></a>
        </div><!--------------- header --------------->
        
        <div class="main-menu">
            <div class="top-close-menu"><i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul>
                <li><a href="/main/history">CQRE</a></li>
                <li><a href="/main/notice">��������</a></li>
                <li><a href="/main/team">�� Ȱ��</a></li>
                <li><a href="/main/free">��ü���̳�</a></li>
                <li><a href="/GalleryMain">������</a></li>
             </ul>
        </div><!--------------- sidemenu --------------->
        
    </div><!--------------- mobile --------------->

 <div id="wrap">
    <div id="header">
            <div class="logo">
               <a href="/main"><img src="<%=request.getContextPath()%>/view2/img/logo_page.jpg" alt=""></a>
            </div>
            <div class="logo_container">
                <a href="/main"><span>CQRE</span></a>
                <a href="/main/notice"><span>��������</span></a>
                <a href="/main/team"><span>�� Ȱ��</span></a>
                <a href="/main/free"><span>��ü���̳�</span></a>
                <a href="/GalleryMain"><span>������</span></a>
            </div>
    </div>
    <div id="wrap">
       <div class="contact">
            <div class="head">
                <h3>CQRE Sign in</h3>
            </div>
            <form action="/view2/loginAction.jsp" method="POST">
                <label>ID</label>
                <input class="id" type="text"  name="id" >
                <label>PW</label>
                <input class="password" type="password" name = "password">
                <input class="submit" type="submit" value="Ȯ��">
                <button type="button" onclick="location.href='/view2/signUp.jsp'">Sign Up</button>
            </form>
        </div>
    </div><!--wrap-->
    
    
    
    
    
</body>
    
    
    
    
</body>