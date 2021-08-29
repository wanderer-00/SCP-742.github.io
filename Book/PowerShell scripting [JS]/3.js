var str = "напечатай этот текст и узнай свою скорость печати";
//var str = "лово Акрополь";

var WshShell;
WshShell = WScript.CreateObject("WScript.Shell");

WScript.Sleep (4000);


array = str.split('');
var e1 = array.length;
	//WshShell.SendKeys(array[1]);   

for (i=0; i<e1; i++){
    //console.log(array[i]);
    WshShell.SendKeys(array[i]);
	WScript.Sleep (2);
}
//WshShell.SendKeys('1');
//WScript.Echo ("конец");