
var logo_intro = bodymovin.loadAnimation({
  container: document.getElementById('logo_intro'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'https://assets6.lottiefiles.com/packages/lf20_37rrgtj2.json'
})

var band = bodymovin.loadAnimation({
  container: document.getElementById('band_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'https://assets3.lottiefiles.com/packages/lf20_n6ozoa6p.json'
})

var text_anim = bodymovin.loadAnimation({
  container: document.getElementById('text_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets9.lottiefiles.com/packages/lf20_lq6vmbci.json'
})
var small_logo_anim = bodymovin.loadAnimation({
  container: document.getElementById('small_logo_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets8.lottiefiles.com/packages/lf20_0xvs7vwk.json'
})
var block_party_logo_anim = bodymovin.loadAnimation({
  container: document.getElementById('block_party_logo_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets4.lottiefiles.com/packages/lf20_uvzoo2qr.json'
})
var cta_anim = bodymovin.loadAnimation({
  container: document.getElementById('cta_anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets6.lottiefiles.com/packages/lf20_1nv3frj4.json'
})

logo_intro.onComplete = function() {
  // console.log('logo_intro complete')
}

logo_intro.onEnterFrame = function () {
  if(logo_intro.currentFrame >= 71){
    text_anim.play(); 
    document.getElementById("logo_intro").style.opacity = '0';
  }
}
text_anim.onEnterFrame = function () {
  if(text_anim.currentFrame >= 40){
    small_logo_anim.play();
  }
}
small_logo_anim.onEnterFrame = function () {
  if(small_logo_anim.currentFrame >= 30){
    block_party_logo_anim.play();
    document.getElementById("block_party_logo_anim").style.opacity = '1';
  }
}
block_party_logo_anim.onEnterFrame = function () {
  if(block_party_logo_anim.currentFrame >= 30){
    cta_anim.play();
  }
}

