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
  <div class="app" id="app" ng-class="{'app-header-fixed':app.settings.headerFixed, 'app-aside-fixed':app.settings.asideFixed, 'app-aside-folded':app.settings.asideFolded, 'app-aside-dock':app.settings.asideDock, 'container':app.settings.container}" ui-view></div>


  <!-- jQuery -->
  <script src="<%=basePath %>js/jquery.min.js"></script>

  <!-- Angular -->
  <script src="<%=basePath %>js/angular/angular.js"></script>
  
  <script src="<%=basePath %>js/angular/angular-animate.js"></script>
  <script src="<%=basePath %>js/angular/angular-cookies.js"></script>
  <script src="<%=basePath %>js/angular/angular-resource.js"></script>
  <script src="<%=basePath %>js/angular/angular-sanitize.js"></script>
  <script src="<%=basePath %>js/angular/angular-touch.js"></script>
  <script src="<%=basePath %>js/angular/angular-route.js"></script>
<!-- Vendor -->
  <%-- <script src="<%=basePath %>angular/angular-ui-router.js"></script> 
  <script src="<%=basePath %>angular/ngStorage.js"></script> --%>

  <!-- bootstrap -->
  <script src="<%=basePath %>js/bootstrap/bootstrap.js"></script>
  <!-- lazyload -->
  <<%-- script src="<%=basePath %>angular/ocLazyLoad.js"></script> --%>
  <!-- translate -->
  <%-- <script src="<%=basePath %>angular/angular-translate.js"></script>
  <script src="<%=basePath %>angular/loader-static-files.js"></script>
  <script src="<%=basePath %>angular/storage-cookie.js"></script>
  <script src="<%=basePath %>angular/storage-local.js"></script>
 --%>
  <!-- App -->
<script src="<%=basePath %>js/app.js"></script>
  <script src="<%=basePath %>js/config.js"></script>
  <script src="<%=basePath %>js/config.lazyload.js"></script>
  <script src="<%=basePath %>js/config.router.js"></script>
  <script src="<%=basePath %>js/main.js"></script>
<!--     <script src="js/services/ui-load.js"></script>
  <script src="js/filters/fromNow.js"></script>
  <script src="js/directives/setnganimate.js"></script>
  <script src="js/directives/ui-butterbar.js"></script>
  <script src="js/directives/ui-focus.js"></script>
  <script src="js/directives/ui-fullscreen.js"></script>
  <script src="js/directives/ui-jq.js"></script>
  <script src="js/directives/ui-module.js"></script>
  <script src="js/directives/ui-nav.js"></script>
  <script src="js/directives/ui-scroll.js"></script>
  <script src="js/directives/ui-shift.js"></script>
  <script src="js/directives/ui-toggleclass.js"></script>
  <script src="js/directives/ui-validate.js"></script>
  <script src="js/controllers/bootstrap.js"></script> -->
  <!-- Lazy loading -->
</body>
</html>