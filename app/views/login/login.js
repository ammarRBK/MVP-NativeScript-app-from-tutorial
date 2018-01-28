var UserViewModel = require("../../shared/view-models/user-view-model");
var dialogsModule = require("ui/dialogs");

var frameModule= require("ui/frame");

// //comminucate with backEnd
// var config= require("../../shared/config");
// var fetchModule= require("fetch");

var page;
var email;

var user = new UserViewModel();

exports.loaded= function(args){
	page= args.object;

	page.bindingContext= user;
}


exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/list/list");
        });
};


exports.pressSignup= function(){
	var topmost= frameModule.topmost();

	topmost.navigate("/views/register/register");
}