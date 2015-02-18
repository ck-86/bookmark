var Built   = require('built.io-browserify');
var app     = Built.App('blt6d833eb38749bdf0')
                .persistSessionWith(Built.Session.LOCAL_STORAGE)
                .enableRealtime()
                //.setAdaptor(Built.Adaptor.HTTP);

app.onRealtimeError(function(error){
	console.log('onRealtimeError', error);

	console.log(error.entity);
});

module.exports.app   = app;
module.exports.Built = Built;
exports.User   	     = app.User;