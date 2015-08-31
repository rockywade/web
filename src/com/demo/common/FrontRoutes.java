package com.demo.common;

import com.demo.blog.BlogController;
import com.demo.index.IndexController;
import com.demo.user.UserController;
import com.jfinal.config.Routes;

public class FrontRoutes extends Routes {
	
	public void config() {
		add("/", IndexController.class, "/index");
		add("/blog", BlogController.class);
		add("/user", UserController.class);
	}
}