<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%
	String basePath = request.getContextPath() + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xml:lang="zh-CN" xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link href="/css/manage.css" media="screen" rel="stylesheet" type="text/css" />
<script src="/js/jquery-1.4.4.min.js" type="text/javascript" ></script>
</head>
<body>
	<div class="manage_container">
		<div class="manage_head">
			<div class="manage_logo"><a href="http://www.jfinal.com">JFinal web framework</a></div>
			<div id="nav">
				<ul>
					<li><a href="/"><b>首页</b></a></li>
					<li><a href="<%=basePath %>user"><b>User管理</b></a></li>
				</ul>
			</div>
		</div>
		<div class="main">
<h1>User管理&nbsp;&nbsp;
<a href="<%=basePath %>user/add">创建user</a>
</h1>
<div class="table_box">
	<table class="list">
		<tbody>
			<tr>
				<th width="4%">id</th>
				<th width="35%">名字</th>
				<th width="12%">年龄</th>
			</tr>
			<c:forEach items="${userPage.list}" var="user">
			<tr>
				<td style="text-align:left;"><c:out value="${user.id}" default=""/></td>
				<td style="text-align:left;">${user.name}</td>
				<td style="text-align:left;">
					&nbsp;&nbsp;<a href="<%=basePath %>user/delete/${user.id}">删除</a>
					&nbsp;&nbsp;<a href="<%=basePath %>user/edit/${user.id}">修改</a>
				</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	
	<c:set var="currentPage" value="${blogPage.pageNumber}" />
	<c:set var="totalPage" value="${blogPage.totalPage}" />
	<c:set var="actionUrl" value="/blog/" />
	<c:set var="urlParas" value="" />
	<%@ include file="/common/_paginate.jsp"%>
	
</div>
		</div>
	</div>
</body>
</html>