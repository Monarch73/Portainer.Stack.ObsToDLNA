function addVirtualStream() {
    var obj = new Object();
    obj.title = "OBS Live Game Stream";
    obj.location = "http://127.0.0.1:8888/mystream/index.m3u8";
    obj.mimetype = "application/vnd.apple.mpegurl";
    obj.upnpclass = UPNP_CLASS_ITEM_VIDEO;
    obj.objectType = OBJECT_TYPE_ITEM;

    // Erstellt einen Container namens "Live Streams", falls er nicht existiert
    var container = addContainer("Live Streams");
    addCdsObject(obj, container);
}

// Diese Funktion wird beim Start von Gerbera aufgerufen
addVirtualStream();
