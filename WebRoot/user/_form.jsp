<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<fieldset class="solid">
	<legend>创建user</legend>
	<input type="hidden" name="user.id" value="${user.id}" />
	<div>
		<label>名字</label>
		<input type="text" name="user.name" value="${user.name}" />${titleMsg}
	</div>
	<div>
		<label>年龄</label>
		<input name="user.age" type="text" value="${user.age}"/>${contentMsg}
	</div>
	<div>
		<label>&nbsp;</label>
		<input value="提交" type="submit">
	</div>
</fieldset>