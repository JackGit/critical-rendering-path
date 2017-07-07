console.log('script')

function append (url, position) {
  if (url.endsWith('js')) {
    appendScript(url, position)
  }
  if (url.endsWith('css')) {
    appendLink(url)
  }
}

function appendLink (url) {
  var s = document.createElement('link')
  s.href = url
  s.rel = 'stylesheet'
  document.head.appendChild(s)
}

function appendScript (url, position) {
  var s = document.createElement('script')
  s.src = url
  if (position === 'body') {
    document.body.appendChild(s)
  } else {
    document.head.appendChild(s)
  }
}

function onDOMReady (callback) {
  document.onreadystatechange = function () {
    if (this.readyState === 'interactive') {
      callback()
    }
  }
}

function onLoad (callback) {
  window.onload = callback
}

function onDOMContentLoaded (callback) {
  document.addEventListener('DOMContentLoaded', callback)
}

function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie = c_name + "=" + escape(value) +
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
