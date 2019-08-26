var preloader = require('./');
var loader = preload({
    xhrImages: false,
    loadFullAudio: false,
    loadFullVideo: false
});
loader.on('prorgess', function(prorgess) {
    console.log(progress);
});
loader.on('complete', function() {
    var data = loader.get('test_data.json');
    console.log('all content loaded:', data.success);
});
loader.add('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',{
    onComplete: function() {
        document.body.appendChild(loader.get('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'))
    }
});
loader.add('http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg',{
    onComplete: function() {
        document.body.appendChild(loader.get('http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg'))
    }
});
loader.add('test_data.json');
loader.load();