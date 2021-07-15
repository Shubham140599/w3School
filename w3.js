function run() {
  var html = document.getElementById('html').value
  var out = document.getElementById('out')
  out.contentWindow.document.body.innerHTML = html
}
