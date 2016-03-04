document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('getElements');
  //alert('hi');
  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content.js" });
  });

  button.addEventListener('click', function() {
    var css_selector = document.getElementById('css_selector').value;
    var regex = RegExp(document.getElementById('regex').value);
    var price = 0;
    var nextPrice = 0;

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript({
      code: "var regex=" + regex.toString() + ";"
      + "var element = $('" + css_selector + ":visible');"
      //+ "alert(element[0].textContent);"
      + "for (i=0;i<element.length - 1; i++)"
      + "{    price = element[i].textContent;"
      + "     price = regex.exec(price);"
      //+ "     alert(price);"
      + "     nextPrice = element[i+1].textContent;"
      + "     nextPrice = regex.exec(nextPrice);"
      + "     console.log('price    : ' + price);"
      + "     console.log('nextPrice: ' + nextPrice);"
      + "     if (nextPrice < price) { element.eq(i+1).css({'border-color':'red','border-width':'2px','border-style':'dotted'}); }"
      + "};"
    });
  });
}, false);
}, false);
