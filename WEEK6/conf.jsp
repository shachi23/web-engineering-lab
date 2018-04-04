<!DOCTYPE html>
<%@ page import = "java.io.*,java.util.*" %>
<html>
<head>
</head>
<body>
<h1 style="color:blue;text-align:center">CONFIRMATION</h1>
<hr>
<h3>Dear <%out.print(request.getParameter("firstname"));%>,</h3>
<p>we are pleased to have you as a part of SB academy.</p>
<p>please confirm your details:</br></br>phone number:  <span style="background:yellow"><%out.print(request.getParameter("mobile"));%></span> </br><br>email address : <span style="background:yellow"> <%out.print(request.getParameter("email"));%></span><p>
</body>
</html>
