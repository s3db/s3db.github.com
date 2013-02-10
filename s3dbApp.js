console.log('s3dbApp :-)')


s3dbApp={

	uid:function(prefix){
		if(!prefix){prefix='UID'};
		var uid=prefix+Math.random().toString().slice(2);
		return uid
	},

	buildUI:function(id){
		console.log('buildUI');
		// Find UI build target
		var buildTarget; // DOM element where to build UI 
		if(!id){buildTarget=$(document.body)} // if no target is provided then use the document.body
			else{
				if($('#'+id).length==0){ // if build target is not found, create it first
					$('<div id="'+id+'">').appendTo(document.body);
				};
				buildTarget=$('#'+id);
		}
		// Assemble Head
		var container = $('<div class="container">').appendTo(buildTarget);
		var navHead = $('<div class="navbar navbar-inverse">').appendTo(container);
		var innerHead = $('<div class="navbar-inner">').appendTo(navHead);
		var brand = $('<a class="brand" href="http://en.wikipedia.org/wiki/s3db"><img id="s3dbBrand" src="brand.png" width=20></a>').appendTo(innerHead);
		var navUl = $('<ul class="nav">').appendTo(innerHead);
		var appsA = $('<a href="#" id="s3dbAppsA">').appendTo($('<li id="s3dbAppsLi">').appendTo(navUl)).html('myApps');
		var storeA = $('<a href="#" id="s3dbStoreA">').appendTo($('<li id="s3dbStoreLi">').appendTo(navUl)).html('Store');
		var aboutA = $('<a href="#" id="s3dbAboutA">').appendTo($('<li id="s3dbAboutLi">').appendTo(navUl)).html('About');
		// Assemble Body
		var body = $('<div id="s3dbAppsBody">').appendTo(container);
		var bodies={
			"myApps":'1',
			"Store":'2',
			"About":'3'
		}

		// Assemble Footer
		var foot = $('<div if="s3dbAppFoot"><hr><small><i>&nbsp;@ S3DB.App: <span id="s3dbAppsFooter"></i></span></small></div>').appendTo(container);
		setInterval(function(){$('#s3dbAppsFooter').html(Date())},1000);
		




		

		console.log(buildTarget)
	}
}