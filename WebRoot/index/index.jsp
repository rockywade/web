<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
	String basePath = request.getContextPath() + "/";
%>
<!DOCTYPE html>
<html lang="en" data-ng-app="app">
<head>
  <meta charset="utf-8" />
  <title>AngularJs bootstrap jFinal</title>
  <meta name="description" content="app, web app, responsive, responsive layout, admin, admin panel, admin dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="stylesheet" href="<%=basePath %>css/bootstrap/css/bootstrap.css" type="text/css" />
<!--   <link rel="stylesheet" href="css/animate.css" type="text/css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="css/simple-line-icons.css" type="text/css" />
  <link rel="stylesheet" href="css/font.css" type="text/css" />
  <link rel="stylesheet" href="css/app.css" type="text/css" /> -->
</head>
<body ng-controller="AppCtrl">
  <div>Lazy loading</div>
  <!-- Lazy loading -->
  <script type="text/javascript" src="<%=basePath %>jfinal/js/main.js"></script>
</body>
</html>