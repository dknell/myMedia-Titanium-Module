// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({text: "myMedia Module", color: "#000", top: 20});
win.add(label);
win.open();

var mymedia = require('my.media');
Ti.API.info("module is => " + mymedia);

var button = Ti.UI.createButton({
	title: "Select from photo gallery",
	width: 220,
	height: 40,
	bottom: 20
});
win.add(button);

var view = Ti.UI.createView({
	width: 290,
	height: 290,
	barderWidth: 2,
	borderColor: "#ccc"
});
win.add(view);

button.addEventListener('click', function (e) {
	mymedia.openPhotoGallery({
		success:function(e) {
			if (e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				view.backgroundImage = e.media;
			}
			Ti.API.debug('openPhotoGallery SUCCESS: ' + JSON.stringify(e));
			if (e.metadata) {
				var dialog = Ti.UI.createAlertDialog({
					message: e.metadata,
					ok: 'OK',
					title: 'Metadata'
				}).show();
			}
		},
		cancel:function() {
			Ti.API.debug("openPhotoGallery CANCEL");
		},
		error:function(error) {
			Ti.API.error("openPhotoGallery ERROR: " + JSON.stringify(error));
		},
		animated:true,
		allowEditing:true,
		videoMaximumDuration:15000, // 15 seconds
		videoQuality: Ti.Media.QUALITY_MEDIUM,
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO]
	});
});



