var flashplayerlocation = "/assets/jwplayer/player.swf";
var flashplayerskin = "/assets/jwplayer/glow/glow.xml";

window.addEvent('domready', function() {
  codeblocks = $$('div.highlight');
  codeblocks.each(addExpander);
  html5toFlash();
});

function addExpander(div){
  new Element('span',{
		html: 'expand &raquo;',
		'class': 'pre_expander',
    'events': {
      'click': function(){
        toggleExpander(this);
      }
    }
	}).inject(div, 'top');
}
function toggleExpander(expander){
  var html = '';
  var expanderPos = expander.getPosition().y;
  if($('main').toggleClass('expanded').hasClass('expanded'))
    html = '&laquo; contract';
  else
    html = 'expand &raquo;';
  $$('div.highlight span.pre_expander').each(function(span){
      span.set('html',html);
  });
  fixScroll(expander, expanderPos);
}
function fixScroll(el, position){
  pos = el.getPosition().y - position;
  window.scrollTo(window.getScroll().x ,window.getScroll().y + pos);
}
function enableCompressedLayout(codeblocks){
  if(!codeblocks.length) return;
  new Element('span',{
		html: 'Collapse layout',
		'id': 'collapser',
    'events': {
      'click': function(){
        if($('page').toggleClass('collapsed').hasClass('collapsed'))
          this.set('html','Expand layout');
        else
          this.set('html','Collapse layout');
      }
    }
	}).inject($('main'), 'top');
}
function html5toFlash(){
  var videos = $$('video');
  if(!videos){return}
  videos.each(function(video){
    source = video.getElement('source').get('src');
    if(!source.contains('mp4') || !Modernizr.video.h264){
      span = new Element('span', {'class':'video'}).wraps(video);
      flashvid = new Swiff(flashplayerlocation, {
        width   : video.get('width').toInt(),
        height  : video.get('height').toInt() + 29,
        params  : {
          movie : source,
          wmode : "opaque",
          allowfullscreen : "true"
        },
        vars : {
          file : source,
          image : video.get('poster'),
          skin : flashplayerskin
        },
        container: span
      });
      video.dispose();
    } else if(video.get('preload') == "none"){
      video.addEvent('click', function(event){
        clickToLoad(video);
      });
    }
  })
}
function clickToLoad(video){
  video.set('preload', true);
  if(!video.get('autoplay')){
    video.set('autoplay', true);
  }
  video.removeEvent('click', clickToLoad);
}