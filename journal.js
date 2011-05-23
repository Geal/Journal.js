/*  
 * Journal.js: Mini logging framework
 *
 * Copyright 2011 Geoffroy Couprie
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

var log = {
  div: true,
  console: true,
  hasCallback: false,
  callbackfun: null
 }

log.setCallback = function(callback) {
  this.callbackfun = callback;
  this.hasCallback = true;
}

log.print = function (text) {
  if(this.hasCallback) {
    this.callbackfun(text);
  }
  if(log.div) {
    var logdiv = document.getElementById("log");
    logdiv.innerHTML += text+"<br />";
  }
  if(log.console) {
    console.log(text);
  }
}

log.info = function (text) {
  this.print("[INFO ] "+text);
}

log.error = function (text) {
  this.print("[ERROR] "+text);
}

log.warn = function (text) {
  this.print("[WARN ] "+text);
}

log.debug = function (text) {
  this.print("[DEBUG] "+text);
}
