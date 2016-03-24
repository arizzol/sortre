# sortre
Chrome extension that verifies if items are sorted correctly in a table

<h3>How to install it:</h3>
<ul>
<li><code>git clone git://github.com/arizzol/sortre.git</code> &#35 or you can download it and unzip it</li>
<li>in your Chrome browser, type <code>chrome://extensions/</code> on the URL bar</li>
<li>tick the 'Developer mode' checkbox</li>
<li>Click 'load unpacked extension...'</li>
<li>Select the folder where you unpacked <code>sortre</code></li>
<li>Make sure the 'Enabled' checkbox is ticked</li>
<li>You should see its icon on the extensions bar now <img src="https://github.com/arizzol/sortre/blob/master/duck-icon.png" width=22 height=22 /></li>
</ul>
<br />
<h3>How to use it:</h3>
<p>Click on the extension's icon, this will bring up a small dialog box. You should enter a regular expression if necessary in the 'REGEX' box if the list you're verifying has numbers that are not in proper integer format. If the numbers are 1, 5, 3, you don't need any value in the 'REGEX' field, but if the numbers are decimals, for example 2.49 or $5.20, you should use a regex (in this case \d+\.\d+).</p>
<p>The Css Selector field should have a css selector that identifies the list of numbers to be verified. For example, .list #price, .list>#price.
</p>
This extension is still in beta, so bugs are expected

<h3>License</h3>
<a href=" http://arizzol.mit-license.org/">MIT License</a>
