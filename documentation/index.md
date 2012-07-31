# myMedia Module

A hacked version of Ti.Media so that Ti.Media.openPhotoGallery provides location and EXIF data in the success callback

![EXIF data](https://github.com/dbubs/myMedia-Titanium-Module/blob/master/documentation/IMG_3259.PNG?raw=true "EXIF data") ![EXIF data](https://github.com/dbubs/myMedia-Titanium-Module/blob/master/documentation/IMG_3260.PNG?raw=true "more EXIF data") ![EXIF data](https://github.com/dbubs/myMedia-Titanium-Module/blob/master/documentation/IMG_3261.PNG?raw=true "more EXIF data") ![Location data](https://github.com/dbubs/myMedia-Titanium-Module/blob/master/documentation/IMG_3262.PNG?raw=true "Location data")

## Description

This module was created to be used in place of Ti.Media.openPhotoGallery when location and EXIF data is needed from the Photo Gallery. 

## Accessing the mymedia Module

1. Build the module:

	./build.py

2. Copy my.media-iphone-X.X.zip (where X.X is the version) to the ROOT of your project (same directory as tiapp.xml)

3. Add the module to the tiapp.xml file:

	<modules>
        <module platform="iphone" version="0.1">my.media</module>
    </modules>

4. To access this module from JavaScript, you would do the following:

	var mymedia = require("my.media");

The mymedia variable is a reference to the Module object.	

## Reference

### mymedia.openPhotoGallery([PhotoGalleryOptionsType](http://docs.appcelerator.com/titanium/latest/#!/api/PhotoGalleryOptionsType) options)

#### Parameters

* options : [PhotoGalleryOptionsType](http://docs.appcelerator.com/titanium/latest/#!/api/PhotoGalleryOptionsType)
	Photo gallery options as described in [PhotoGalleryOptionsType](http://docs.appcelerator.com/titanium/latest/#!/api/PhotoGalleryOptionsType).

#### Returns

* void

## Usage

	mymedia.openPhotoGallery({
		success:function(e) {
			if (e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				Ti.API.debug("Photo was uploaded");
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

## Author

David Knell (Twitter: dknell)

## License

Apache Public License 2.0
