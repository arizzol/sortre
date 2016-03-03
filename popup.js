document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('getElements');
  //alert('hi');
  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content.js" });
  });

  button.addEventListener('click', function() {
    var css_selector = document.getElementById('css_selector').value;
    var price = 0;
    regex = /\d+\.\d+/;

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript({
      code: "alert($('" + css_selector + "')[0].textContent);"
      + "for (i=0;i<$('" + css_selector + ":visible').length - 1; i++)"
      + "{    price = $('" + css_selector + ":visible')[i].textContent;"
      + "    alert(price);"
      + "};"
    });
  });
}, false);
}, false);
