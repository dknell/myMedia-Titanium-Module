# myMedia Module

A hacked version of Ti.Media so that Ti.Media.openPhotoGallery provides location and EXIF data in the success callback

![EXIF data](https://dl.dropbox.com/u/3289523/github/myMedia_exif.png "EXIF data") 
![Location data](https://dl.dropbox.com/u/3289523/github/myMedia_location.png "Location data") 
![EXIF data](https://dl.dropbox.com/u/3289523/github/myMedia_exposure.png "more EXIF data") ![Photo](https://dl.dropbox.com/u/3289523/github/myMedia_photo.png "photo")

## Description

This module was created to be used in place of Ti.Media.openPhotoGallery when location and EXIF data is needed from the Photo Gallery. 

## Accessing the mymedia Module

1. Make sure the path to your Titanium Mobile SDK in titanium.xcconfig is correct. The `~` denotes your home directory. You may have to remove the `~` if the SDK is not installed there.

	`TITANIUM_SDK = ~/Library/Application Support/Titanium/mobilesdk/osx/$(TITANIUM_SDK_VERSION)`

2. Build the module:

	`./build.py`

3. Copy my.media-iphone-X.X.zip (where X.X is the version) to the ROOT of your project (same directory as tiapp.xml)

4. Add the module to the tiapp.xml file:
```
	<modules>
		<module platform="iphone" version="0.1">my.media</module>
    </modules>```

5. To access this module from JavaScript, you would do the following:

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
