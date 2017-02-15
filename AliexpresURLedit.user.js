// ==UserScript==
// @name         AliexpresURLedit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ru.aliexpress.com/*
// @grant        none
// ==/UserScript==

var temp1 = window.location.href;
var temp2 = temp1.replace("https://ru", "https://www");
var pos = temp2.lastIndexOf(".html") + 5;
var url = temp2.slice(0, pos);
//alert(url);
window.open(url,"_self");