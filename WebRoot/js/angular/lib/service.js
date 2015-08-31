angular.module('mainApp.service',[])
.service('DataHolder', function() {
	return {};
})
.service('previewDialog', function() {
	return {
		show : function(selector, x, y) {
			if ($(selector).css("display") == 'none') {
				$('#cList').append($(selector));
			}
			$(selector).css({
				left : x + 10-266,
				top : y + 10-68
			});
			$(selector).slideDown("fast");
		},
		hide : function(selector) {
			$(selector).slideUp('fast');
		}
	};
})
.service('ajax', function($log, $http) {
	return {
		c : function(params) {
			var c = new Req.Inserter(params);
			c.ajax();
		},
		r : function() {
		},
		u : function(params) {
			var u = new Req.Updater(params);
			u.ajax();
		},
		d : function(params) {
			var d = new Req.Deleter(params);
			d.ajax();
		},
		a : function(params) {
			var d = new Req.Action(params);
			d.ajax();
		},
		q : function(params) {

			var q = new Req.Querier(params);
			q.ajax();
		}
	};
});