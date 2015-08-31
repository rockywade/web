package com.demo.user;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;

/**
 * BlogValidator.
 */
public class UserValidator extends Validator {
	
	protected void validate(Controller controller) {
		validateRequiredString("user.name", "titleMsg", "请输入名字!");
		validateRequiredString("user.age", "contentMsg", "请输入年龄!");
	}
	
	protected void handleError(Controller controller) {
		controller.keepModel(User.class);
		
		String actionKey = getActionKey();
		if (actionKey.equals("/user/save"))
			controller.render("add.jsp");
		else if (actionKey.equals("/user/update"))
			controller.render("edit.jsp");
	}
}
