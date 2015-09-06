function getContextPath() {
    var pathname = document.location.pathname;
    var index = pathname.substr(1).indexOf("/");
    var result = pathname.substr(0,index+1);
    return result;
}

Req = {
	version : 0.1,
	requestPath : getContextPath()+"/ajax"
};

Req.apply = function(o, c, defaults) {
	if (defaults) {
		Req.apply(o, defaults);
	}
	if (o && c && typeof c == 'object') {
		for ( var p in c) {
			o[p] = c[p];
		}
	}
	return o;
};

Req.Pager = function(config){
	Req.apply(this, config, {
		page_size : 10,
		page_index : 1,
		total_count:0
	});
	this.setPageSize=function(size){
		this.page_size = size;
	};
	this.setPageIndex=function(index){
		this.page_index = index;
	};
	this.setTotalCount=function(total_count){
		this.total_count = total_count;
	};
}

Req.Querier = function(config) {
	Req.apply(this, config, {
		resource : '',
		page_size : 10,
		page_index : 1,
		order : "",
		params : {},
		success : callbackSuccess,
		error : callbackError
	});
	this.setParams = function(params){
		this.params = params;
	};
	this.ajax = function() {
		if (this.resource.length == 0) {
			Req.ErrorHandle('resource is null');
			return;
		}
		return $.ajax({
			type : 'post',
			dataType : 'json',
			url : Req.requestPath,
			data : encodeURI("resource=" + this.resource + "&type=get&param=" + JSON.stringify(this)),
			success : this.success,
			error : this.error
		});
	}
}

Req.Updater = function(config) {
	Req.apply(this, config, {
		resource : '',
		params : {},
		fields : {},
		id : '',
		success : callbackSuccess,
		error : callbackError
	});
	this.setParams = function(params){
		this.params = params;
	};
	this.setFields = function(fields){
		this.fields = fields;
	};	
	this.ajax = function() {
		if (this.resource.length == 0) {
			Req.ErrorHandle('resource is null');
			return;
		}
		return $.ajax({
			type : 'post',
			dataType : 'json',
			url : Req.requestPath,
			data : encodeURI("resource=" + this.resource + "&type=put&param=" + JSON.stringify(this)),
			success : this.success,
			error : this.callbackError
		});
	}
}

Req.Inserter = function(config) {
	Req.apply(this, config, {
		resource : '',
		fields : {},
		success : callbackSuccess,
		error : callbackError
	});
	this.setFields = function(fields){
		this.fields = fields;
	};
	this.ajax = function() {
		if (this.resource.length == 0) {
			Req.ErrorHandle('resource is null');
			return;
		}
		return $.ajax({
			type : 'post',
			dataType : 'json',
			url : Req.requestPath,
			data : encodeURI("resource=" + this.resource + "&type=post&param=" + JSON.stringify(this)),
			success : this.success,
			error : this.callbackError
		});
	}
}

Req.Deleter = function(config) {
	Req.apply(this, config, {
		resource : '',
		params : {},
		id : '',
		success : callbackSuccess,
		error : callbackError
	});
	this.setParams = function(params){
		this.params = params;
	};	
	this.ajax = function() {
		if (this.resource.length == 0) {
			Req.ErrorHandle('resource is null');
			return;
		}		
		return $.ajax({
			type : 'post',
			dataType : 'json',
			url : Req.requestPath,
			data : encodeURI("resource=" + this.resource + "&type=delete&param=" + JSON.stringify(this)),
			success : this.success,
			error : this.callbackError
		});
	}
}

Req.Action = function(config) {
	Req.apply(this, config, {
		resource : '',
		params : {},
		id : '',
		action : '',
		success : callbackSuccess,
		error : callbackError
	});
	this.setParams = function(params){
		this.params = params;
	};
	this.ajax = function() {
		if (this.resource.length == 0) {
			Req.ErrorHandle('resource is null');
			return;
		}		
		return $.ajax({
			type : 'post',
			dataType : 'json',
			url : Req.requestPath,
			data : encodeURI("resource=" + this.resource +"&type=action&param=" + JSON.stringify(this)),
			success : this.success,
			error : this.callbackError
		});
	}
}

Req.ErrorHandle = function(type) {
	if (type == 'resource is null') {
		alert("resource can't be null");
	}
}
// /////////////////////////////////////////////////////////////////////


function callbackError(XMLHttpRequest, textStatus, errorThrown){
	baseJS._processError(XMLHttpRequest, textStatus, errorThrown);
}

function callbackSuccess(msg) {
	alert("suc");
}
