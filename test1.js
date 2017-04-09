Notepad++ 7.3.3 bug-fixs & enhancements:

1.  Fix CIA Hacking Notepad++ issue (https://wikileaks.org/ciav7p1/cms/page_26968090.html).
2.  Fix mouse wheel to task list scroll crash bug.
3.  Fix flickering issue while switching back after modifying or deleting a document from outside.
4.  Support Motorola S-Record, Intel and Tektronix extended hex file formats.
5.  Improve multi-line tab: maintaining the selected tab position.
6.  Fix add char into word char list bug.
7.  Add Shift+Enter in Find dialog for searching in the opposite direction.
8.  Fix a regression that delimiter settings is not retained correctely.
9.  Add clear command button in shortcut mapper.
10. Enhancement: file extension supported in Load/Save Session dialog if a session file extension is set.


Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2
4.  Mime Tool 2.1


Updater (Installer only):

* WinGup v4.1
var http = require('http');
var fs = require('fs');

//404 response
function send404response(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}
	
//Handle a user request

function onRequest(request, response) {
	if( request.method == "GET" && request.url == "/") {//if they're trying to connect to the host page, just send them back
		response.writeHead(200, {"Content-Type": "text/plain"});//send them to the home page
		fs.createReadStream("./index.html").pipe(response);
	} else {
		send404response(response);//they were trying to connect to a webpage we don't have
	
}
}
console.log("A user made a request" + request.url);
response.writeHead(200, {"Context-Type": "text/plain"});
response.write("Here is some data");
response.end();*/

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");