angular.module('mainApp.filter', []).filter('accountType', function() {
	return function(input) {
		var arr = [ _rb.cloud.account.type_0, _rb.cloud.account.type_1 ];
		return arr[input];
	};
}).filter('expireHint', function() {
	return function(input) {
		if (input > 0) {
			return input + _rb.cloud.contract.daysToExpire;
		} else {
			return getMsg(_rb.cloud.contract.expiredDays, -input);
		}
	};
}).filter(
		'applyStatus',
		function() {
			return function(input) {
				var arr = [ _rb.cloud.potentialcustomer.status_0,
						_rb.cloud.potentialcustomer.status_1,
						_rb.cloud.potentialcustomer.status_2 ];
				return arr[input];
			};
		}).filter(
		'accountStatus',
		function() {
			return function(input) {
				var arr = [ _rb.cloud.account.query.status_0,
						_rb.cloud.account.query.status_1,
						_rb.cloud.account.query.status_2 ];
				return arr[input];
			};
		}).filter('fileSize', function() {
	return function(input) {
		if (input < 1024 * 1024) {
			var result = "" + (parseInt(input) / (1024));
			if (result.indexOf('.') > 0) {
				var idx = result.indexOf('.');
				return result.toString().substring(0, idx + 4) + "K";
			}
			return result + "K";
		} else {
			var result = "" + (parseInt(input) / (1024 * 1024));
			if (result.indexOf('.') > 0) {
				var idx = result.indexOf('.');
				return result.toString().substring(0, idx + 4) + "M";
			}
			return result + "M";
		}
		return result;
	};
}).filter('typeUnit', function() {
	return function(input) {
		switch (input) {
		case 'VCPU':
			return _rb.cloud.contract.unit.cpu;
		case 'DISK':
			return _rb.cloud.contract.unit.disk;
		case 'VLan':
			return _rb.cloud.contract.unit.vlan;
		case 'BANDWIDTH':
			return _rb.cloud.contract.unit.bandwidth;
		case 'RAM':
			return _rb.cloud.contract.unit.mem;
		case 'IP':
			return _rb.cloud.contract.unit.ip;
		}
		return _rb.cloud.contract.unit.ip;
	};
}).filter('contractStatus', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.contract.status_0;
		case 1:
			return _rb.cloud.contract.status_1;
		case 2:
			return _rb.cloud.contract.status_2;
		case 3:
			return _rb.cloud.contract.status_3;
		}
	};
}).filter(
		'applytype',
		function() {
			var arr = [ _rb.cloud.account.potentialCustomer.applytype_0,
					_rb.cloud.account.potentialCustomer.applytype_1 ];
			return function(input) {
				return arr[input];
			};
		}).filter(
		'businesstype',
		function() {
			var arr = [ _rb.cloud.account.potentialCustomer.platformtype_0,
					_rb.cloud.account.potentialCustomer.platformtype_1,
					_rb.cloud.account.potentialCustomer.platformtype_2,
					_rb.cloud.account.potentialCustomer.platformtype_3,
					_rb.cloud.account.potentialCustomer.platformtype_4,
					_rb.cloud.account.potentialCustomer.platformtype_5 ];
			return function(input) {
				var outarr = [];
				var inputarr = input.split(',');
				for ( var i = 0; i < inputarr.length; i++) {
					outarr.push(arr[inputarr[i]]);
				}
				return outarr.join(',');
			};
		}).filter(
		'scale',
		function() {
			var arr = [ _rb.cloud.account.potentialCustomer.scale_0,
					_rb.cloud.account.potentialCustomer.scale_1,
					_rb.cloud.account.potentialCustomer.scale_2 ];
			return function(input) {
				return arr[input];
			};
		}).filter(
		'property',
		function() {
			var arr = [ _rb.cloud.account.potentialCustomer.property_0,
					_rb.cloud.account.potentialCustomer.property_1,
					_rb.cloud.account.potentialCustomer.property_2,
					_rb.cloud.account.potentialCustomer.property_3 ];
			return function(input) {
				return arr[input];
			};
		}).filter(
		'paymentType',
		function() {
			var payments = [ _rb.cloud.contract.paymenttype_0,
					_rb.cloud.contract.paymenttype_1 ];
			return function(input) {
				return payments[input];
			};
		}).filter('calDate', function() {
	return function(timestamp) {
		return baseJS._calDate(timestamp);
	};
}).filter('languageType', function() {
	return function(input) {
		if (input == "chinese") {
			return _rd.perferlanguage.zh_CN;
		} else if (input == "english") {
			return _rd.perferlanguage.en_US;
		}
		return "";
	};
}).filter('productStatus', function() {
	return function(status) {
		switch (status) {
		case 0:
			return _rb.cloud.product.status_0;
		case 1:
			return _rb.cloud.product.status_1;
		case 2:
			return _rb.cloud.product.status_2;
		}
	};
}).filter('approvalStatus', function() {
	return function(status) {
		switch (status) {
		case 0:
			return _rd.request.status[0];
		case 1:
			return _rd.request.status[1];
		case 2:
			return _rd.request.status[2];
		case 3:
			return _rd.request.status[5];
		}
	};
}).filter('ipAddressType', function() {
	return function(type) {
		switch (type) {
		case 0:
			return _rd.request.vlan.type[1];
		case 1:
			return _rd.request.vlan.type[2];
		}
	};
}).filter('eventResult', function() {
	return function(type) {
		switch (type) {
		case 0:
			return _rb.cloud.acl.msg.opr.success;
		case 1:
			return _rb.cloud.acl.msg.opr.failure;
		}
	};
}).filter('filterVlan', function() {
	return function(input, vtype) {
		if(vtype == 1){
			return '--';
		}else{
			return input;
		}
	};
}).filter('hostStatus', function() {
	return function(input) {
		switch (input) {
		case 1:
			return _rb.cloud.instance.host.status_1;
		case 21:
			return _rb.cloud.instance.host.status_21;
		case 22:
			return _rb.cloud.instance.host.status_22;
		case 23:
			return _rb.cloud.instance.host.status_23;
		case 24:
			return _rb.cloud.instance.host.status_24;
		case 25:
			return _rb.cloud.instance.host.status_25;
		case 26:
			return _rb.cloud.instance.host.status_26;
		case 31:
			return _rb.cloud.instance.host.status_31;
		case 32:
			return _rb.cloud.instance.host.status_32;
		case 33:
			return _rb.cloud.instance.host.status_33;
		case 34:
			return _rb.cloud.instance.host.status_34;
		case 35:
			return _rb.cloud.instance.host.status_35;
		case 5:
			return _rb.cloud.instance.host.status_5;
		case 6:
			return _rb.cloud.instance.host.status_6;
		case 7:
			return _rb.cloud.instance.host.status_7;
		}
	};
}).filter('storageStatus', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.instance.storage.status_0;
		case 1:
			return _rb.cloud.instance.storage.status_1;
		case 21:
			return _rb.cloud.instance.storage.status_21;
		case 22:
			return _rb.cloud.instance.storage.status_22;
		case 23:
			return _rb.cloud.instance.storage.status_23;
		case 24:
			return _rb.cloud.instance.storage.status_24;
		case 31:
			return _rb.cloud.instance.storage.status_31;
		case 32:
			return _rb.cloud.instance.storage.status_32;
		case 33:
			return _rb.cloud.instance.storage.status_33;
		case 34:
			return _rb.cloud.instance.storage.status_34;
		case 6:
			return _rb.cloud.instance.storage.status_6;
		case 7:
			return _rb.cloud.instance.storage.status_7;
		case 8:
			return _rb.cloud.instance.storage.status_8;
		}
	};
}).filter('subnetStatus', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.instance.network.status_0;
		case 1:
			return _rb.cloud.instance.network.status_1;
		case 20:
			return _rb.cloud.instance.network.status_20;
		case 21:
			return _rb.cloud.instance.network.status_21;
		case 22:
			return _rb.cloud.instance.network.status_22;
		case 31:
			return _rb.cloud.instance.network.status_31;
		case 32:
			return _rb.cloud.instance.network.status_32;
		case 6:
			return _rb.cloud.instance.network.status_6;
		}
	};
}).filter('ipStatus', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.instance.ipaddress.status_0;
		case 1:
			return _rb.cloud.instance.ipaddress.status_1;
		case 2:
			return _rb.cloud.instance.ipaddress.status_2;
		case 3:
			return _rb.cloud.instance.ipaddress.status_3;
		}
	};
}).filter('acctType', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.instance.accounttype_0;
		case 1:
			return _rb.cloud.instance.accounttype_1;
		}
	};
}).filter('vlanType', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.instance.vlan.status_0;
		case 1:
			return _rb.cloud.instance.vlan.status_1;
		}
	};
}).filter('ladpUserStatus', function() {
	return function(input) {
		switch (input) {
		case '0':
			return _rb.cloud.ladp.user.status_0;
		case '1':
			return _rb.cloud.ladp.user.status_1;
		case '2':
			return _rb.cloud.ladp.user.status_2;
		}
	};
}).filter('administratorType', function() {
	return function(input) {
		switch (input) {
		case '91':
			return _rb.cloud.admin.mgr.platform;
		case '92':
			return _rb.cloud.admin.mgr.account;
		case '93':
			return _rb.cloud.admin.mgr.network;
		case '94':
			return _rb.cloud.admin.mgr.operation;
		case '95':
			return _rb.cloud.admin.mgr.system;
		case '1':
			return _rb.cloud.admin.mgr.agent;
		case '2':
			return _rb.cloud.admin.mgr.customer;
		case '3':
			return _rb.cloud.admin.mgr.user;
		}
	};
}).filter('chargeType', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.account.charge.status_0;
		case 1:
			return _rb.cloud.account.charge.status_1;
		}
	};
}).filter('isReserved', function() {
	return function(input) {
		switch (input) {
		case 0:
			return _rb.cloud.acl.label.yes;
		case 1:
			return _rb.cloud.acl.label.no;
		}
	};
}).filter('templateStatus', function() {
			return function(input) {
				var arr = [ _rb.cloud.template.query.status_0,
						_rb.cloud.template.query.status_1,
						_rb.cloud.template.query.status_2 ];
				return arr[input];
			};
}).filter('stackStatus', function() {
	return function(input) {
		var arr = [ _rd.stack.status_0,
		            _rd.stack.status_1,
		            _rd.stack.status_2,
		            _rd.stack.status_3,
		            _rd.stack.status_4,
		            _rd.stack.status_5,
		            _rd.stack.status_6];
		return arr[input];
	};
}).filter('eventtype', function() {
	return function(input) {
		return _rb.cloud.event.type[input];
	};
}).filter('price', function() {
	return function(input) {
		return "￥:" + input;
	};
})
.filter('userType', function() {
	return function(input) {
		switch (input) {
		case 1:
			return "个人用户";
		case 2:
			return "企业用户";
		case 3:
			return "管理员";
		}
	};
});