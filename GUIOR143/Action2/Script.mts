
Dialog("Stamps.com Login").WinEdit("Username").Type  micTab @@ hightlight id_;_984160_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Stamps.com Login").WinEdit("|Forgot username?|").SetSecure "58f1227db160ca7fdc522c028b3b2d59cc65bd98899adaf5" @@ hightlight id_;_1049958_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Stamps.com Login").WinButton("Sign In").Click @@ hightlight id_;_394916_;_script infofile_;_ZIP::ssf3.xml_;_
wait 3 @@ hightlight id_;_1575314_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Stamps.com Premier").WinObject("Packages").Click 124,18
Window("Stamps.com Premier").Static("Postage Details").Check CheckPoint("Postage Details") @@ hightlight id_;_17501614_;_script infofile_;_ZIP::ssf11.xml_;_
