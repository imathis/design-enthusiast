window.addEvent('domready', function(){
  //We can use one Request object many times.
  var req = new Request({

    url: '/php/twitter/status.php',

    onSuccess: function(txt){
      $('twitter_status').set('html', txt);
    },

    // Our request will most likely succeed, but just in case, we'll add an
    // onFailure method which will let the user know what happened.
    onFailure: function(){
      $('twitter_status').set('html', 'FAIL: The tweets are sleeping :(');
    }

  });

  req.send();

});