/* HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];
    
    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (listener.handleEvent) {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});
        
        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();
/*
* Fingerprintjs2 0.9.0 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function (name, context, definition) {
  "use strict";
  if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
  else if (typeof define === "function" && define.amd) { define(definition); }
  else { context[name] = definition(); }
})("Fingerprint2", this, function() {
  "use strict";
  // This will only be polyfilled for IE8 and older
  // Taken from Mozilla MDC
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
      var k;
      if (this == null) {
        throw new TypeError("'this' is null or undefined");
      }
      var O = Object(this);
      var len = O.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = +fromIndex || 0;
      if (Math.abs(n) === Infinity) {
        n = 0;
      }
      if (n >= len) {
        return -1;
      }
      k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      while (k < len) {
        if (k in O && O[k] === searchElement) {
          return k;
        }
        k++;
      }
      return -1;
    };
  }
  var Fingerprint2 = function(options) {
    var defaultOptions = {
      swfContainerId: "fingerprintjs2",
      swfPath: "flash/compiled/FontList.swf",
      sortPluginsFor: [/palemoon/i]
    };
    this.options = this.extend(options, defaultOptions);
    this.nativeForEach = Array.prototype.forEach;
    this.nativeMap = Array.prototype.map;
  };
  Fingerprint2.prototype = {
    extend: function(source, target) {
      if (source == null) { return target; }
      for (var k in source) {
        if(source[k] != null && target[k] !== source[k]) {
          target[k] = source[k];
        }
      }
      return target;
    },
    log: function(msg){
      if(window.console){
        console.log(msg);
      }
    },
    get: function(done){
      var keys = [];
      keys = this.userAgentKey(keys);
      keys = this.languageKey(keys);
      keys = this.colorDepthKey(keys);
      keys = this.screenResolutionKey(keys);
      keys = this.timezoneOffsetKey(keys);
      keys = this.sessionStorageKey(keys);
      keys = this.localStorageKey(keys);
      keys = this.indexedDbKey(keys);
      keys = this.addBehaviorKey(keys);
      keys = this.openDatabaseKey(keys);
      keys = this.cpuClassKey(keys);
      keys = this.platformKey(keys);
      keys = this.doNotTrackKey(keys);
      keys = this.pluginsKey(keys);
      keys = this.canvasKey(keys);
      keys = this.webglKey(keys);
      keys = this.adBlockKey(keys);
      keys = this.hasLiedLanguagesKey(keys);
      keys = this.hasLiedResolutionKey(keys);
      keys = this.hasLiedOsKey(keys);
      keys = this.hasLiedBrowserKey(keys);
      keys = this.touchSupportKey(keys);
      var that = this;
      this.fontsKey(keys, function(newKeys){
        var murmur = that.x64hash128(newKeys.join("~~~"), 31);
        return done(murmur);
      });
    },
    userAgentKey: function(keys) {
      if(!this.options.excludeUserAgent) {
        keys.push(this.getUserAgent());
      }
      return keys;
    },
    // for tests
    getUserAgent: function(){
      return navigator.userAgent;
    },
    languageKey: function(keys) {
      if(!this.options.excludeLanguage) {
        keys.push(navigator.language);
      }
      return keys;
    },
    colorDepthKey: function(keys) {
      if(!this.options.excludeColorDepth) {
        keys.push(screen.colorDepth);
      }
      return keys;
    },
    screenResolutionKey: function(keys) {
      if(!this.options.excludeScreenResolution) {
        return this.getScreenResolution(keys);
      }
      return keys;
    },
    getScreenResolution: function(keys) {
      var resolution;
      var available;
      if(this.options.detectScreenOrientation) {
        resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
      } else {
        resolution = [screen.width, screen.height];
      }
      if(typeof resolution !== "undefined") { // headless browsers
        keys.push(resolution);
      }
      if(screen.availWidth && screen.availHeight) {
        if(this.options.detectScreenOrientation) {
          available = (screen.availHeight > screen.availWidth) ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight];
        } else {
          available = [screen.availHeight, screen.availWidth];
        }
      }
      if(typeof available !== "undefined") { // headless browsers
        keys.push(available);
      }
      return keys;
    },
    timezoneOffsetKey: function(keys) {
      if(!this.options.excludeTimezoneOffset) {
        keys.push(new Date().getTimezoneOffset());
      }
      return keys;
    },
    sessionStorageKey: function(keys) {
      if(!this.options.excludeSessionStorage && this.hasSessionStorage()) {
        keys.push("sessionStorageKey");
      }
      return keys;
    },
    localStorageKey: function(keys) {
      if(!this.options.excludeSessionStorage && this.hasLocalStorage()) {
        keys.push("localStorageKey");
      }
      return keys;
    },
    indexedDbKey: function(keys) {
      if(!this.options.excludeIndexedDB && this.hasIndexedDB()) {
        keys.push("indexedDbKey");
      }
      return keys;
    },
    addBehaviorKey: function(keys) {
      //body might not be defined at this point or removed programmatically
      if(document.body && !this.options.excludeAddBehavior && document.body.addBehavior) {
        keys.push("addBehaviorKey");
      }
      return keys;
    },
    openDatabaseKey: function(keys) {
      if(!this.options.excludeOpenDatabase && window.openDatabase) {
        keys.push("openDatabase");
      }
      return keys;
    },
    cpuClassKey: function(keys) {
      if(!this.options.excludeCpuClass) {
        keys.push(this.getNavigatorCpuClass());
      }
      return keys;
    },
    platformKey: function(keys) {
      if(!this.options.excludePlatform) {
        keys.push(this.getNavigatorPlatform());
      }
      return keys;
    },
    doNotTrackKey: function(keys) {
      if(!this.options.excludeDoNotTrack) {
        keys.push(this.getDoNotTrack());
      }
      return keys;
    },
    canvasKey: function(keys) {
      if(!this.options.excludeCanvas && this.isCanvasSupported()) {
        keys.push(this.getCanvasFp());
      }
      return keys;
    },
    webglKey: function(keys) {
      if(this.options.excludeWebGL) {
        if(typeof NODEBUG === "undefined"){
          this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option");
        }
        return keys;
      }
      if(!this.isWebGlSupported()) {
        if(typeof NODEBUG === "undefined"){
          this.log("Skipping WebGL fingerprinting because it is not supported in this browser");
        }
        return keys;
      }
      keys.push(this.getWebglFp());
      return keys;
    },
    adBlockKey: function(keys){
      if(!this.options.excludeAdBlock) {
        keys.push(this.getAdBlock());
      }
      return keys;
    },
    hasLiedLanguagesKey: function(keys){
      if(!this.options.excludeHasLiedLanguages){
        keys.push(this.getHasLiedLanguages());
      }
      return keys;
    },
    hasLiedResolutionKey: function(keys){
      if(!this.options.excludeHasLiedResolution){
        keys.push(this.getHasLiedResolution());
      }
      return keys;
    },
    hasLiedOsKey: function(keys){
      if(!this.options.excludeHasLiedOs){
        keys.push(this.getHasLiedOs());
      }
      return keys;
    },
    hasLiedBrowserKey: function(keys){
      if(!this.options.excludeHasLiedBrowser){
        keys.push(this.getHasLiedBrowser());
      }
      return keys;
    },
    fontsKey: function(keys, done) {
      if (this.options.excludeJsFonts) {
        return this.flashFontsKey(keys, done);
      }
      return this.jsFontsKey(keys, done);
    },
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    flashFontsKey: function(keys, done) {
      if(this.options.excludeFlashFonts) {
        if(typeof NODEBUG === "undefined"){
          this.log("Skipping flash fonts detection per excludeFlashFonts configuration option");
        }
        return done(keys);
      }
      // we do flash if swfobject is loaded
      if(!this.hasSwfObjectLoaded()){
        if(typeof NODEBUG === "undefined"){
          this.log("Swfobject is not detected, Flash fonts enumeration is skipped");
        }
        return done(keys);
      }
      if(!this.hasMinFlashInstalled()){
        if(typeof NODEBUG === "undefined"){
          this.log("Flash is not installed, skipping Flash fonts enumeration");
        }
        return done(keys);
      }
      if(typeof this.options.swfPath === "undefined"){
        if(typeof NODEBUG === "undefined"){
          this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration");
        }
        return done(keys);
      }
      this.loadSwfAndDetectFonts(function(fonts){
        keys.push(fonts.join(";"));
        done(keys);
      });
    },
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    jsFontsKey: function(keys, done) {
      // doing js fonts detection in a pseudo-async fashion
      return setTimeout(function(){

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ["monospace", "sans-serif", "serif"];

        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = "mmmmmmmmmmlli";

        //we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = "72px";

        var h = document.getElementsByTagName("body")[0];

        // create a SPAN in the document to get the width of the text we use to test
        var s = document.createElement("span");
        s.style.fontSize = testSize;
        s.innerHTML = testString;
        var defaultWidth = {};
        var defaultHeight = {};
        for (var index in baseFonts) {
            //get the default width for the three base fonts
            s.style.fontFamily = baseFonts[index];
            h.appendChild(s);
            defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
            defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
            h.removeChild(s);
        }
        var detect = function (font) {
            var detected = false;
            for (var index in baseFonts) {
                s.style.fontFamily = font + "," + baseFonts[index]; // name of the font along with the base font for fallback.
                h.appendChild(s);
                var matched = (s.offsetWidth !== defaultWidth[baseFonts[index]] || s.offsetHeight !== defaultHeight[baseFonts[index]]);
                h.removeChild(s);
                detected = detected || matched;
            }
            return detected;
        };
        var fontList = [
          "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter",
          "American Typewriter Condensed", "AmerType Md BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "Arial", "Arial Black", "Arial Hebrew",
          "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville",
          "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD",
          "Bitstream Vera Sans Mono", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Book Antiqua", "Bookman Old Style",
          "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Calibri", "Californian FB", "Calisto MT", "Calligrapher", "Cambria", "Cambria Math", "Candara",
          "CaslonOpnface BT", "Castellar", "Centaur", "Century", "Century Gothic", "Century Schoolbook", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer",
          "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold",
          "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Courier", "Courier New", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "Devanagari Sangam MN",
          "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC",
          "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "Franklin Gothic", "Franklin Gothic Book", "Franklin Gothic Demi",
          "Franklin Gothic Demi Cond", "Franklin Gothic Heavy", "Franklin Gothic Medium", "Franklin Gothic Medium Cond", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER",
          "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Garamond", "Gautami", "Geeza Pro", "Geneva", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "Georgia", "GeoSlab 703 Lt BT",
          "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD",
          "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Helvetica",
          "Helvetica Neue", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Impact", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT",
          "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN",
          "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island",
          "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic",
          "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le",
          "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Monaco", "Mongolian Baiti",
          "MONO", "Monotype Corsiva", "MoolBoran", "Mrs Eaves", "MS Gothic", "MS LineDraw", "MS Mincho", "MS Outlook", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "MS Sans Serif", "MS Serif", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "MYRIAD",
          "MYRIAD PRO", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN",
          "OSAKA", "OzHandicraft BT", "Palace Script MT", "Palatino", "Palatino Linotype", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB",
          "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla",
          "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood",
          "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket",
          "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tahoma", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC",
          "Terminal", "Thonburi", "Times", "Times New Roman", "Times New Roman PS", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Trebuchet MS", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold",
          "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Verdana", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "Wingdings",
          "Wingdings 2", "Wingdings 3", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
        var available = [];
        for (var i = 0, l = fontList.length; i < l; i++) {
          if(detect(fontList[i])) {
            available.push(fontList[i]);
          }
        }
        keys.push(available.join(";"));
        done(keys);
      }, 1);
    },
    pluginsKey: function(keys) {
      if(!this.options.excludePlugins){
        if(this.isIE()){
          keys.push(this.getIEPluginsString());
        } else {
          keys.push(this.getRegularPluginsString());
        }
      }
      return keys;
    },
    getRegularPluginsString: function () {
      var plugins = [];
      for(var i = 0, l = navigator.plugins.length; i < l; i++) {
        plugins.push(navigator.plugins[i]);
      }
      // sorting plugins only for those user agents, that we know randomize the plugins
      // every time we try to enumerate them
      if(this.pluginsShouldBeSorted()) {
        plugins = plugins.sort(function(a, b) {
          if(a.name > b.name){ return 1; }
          if(a.name < b.name){ return -1; }
          return 0;
        });
      }
      return this.map(plugins, function (p) {
        var mimeTypes = this.map(p, function(mt){
          return [mt.type, mt.suffixes].join("~");
        }).join(",");
        return [p.name, p.description, mimeTypes].join("::");
      }, this).join(";");
    },
    getIEPluginsString: function () {
      if(window.ActiveXObject){
        var names = [
          "AcroPDF.PDF", // Adobe PDF reader 7+
          "Adodb.Stream",
          "AgControl.AgControl", // Silverlight
          "DevalVRXCtrl.DevalVRXCtrl.1",
          "MacromediaFlashPaper.MacromediaFlashPaper",
          "Msxml2.DOMDocument",
          "Msxml2.XMLHTTP",
          "PDF.PdfCtrl", // Adobe PDF reader 6 and earlier, brrr
          "QuickTime.QuickTime", // QuickTime
          "QuickTimeCheckObject.QuickTimeCheck.1",
          "RealPlayer",
          "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
          "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
          "Scripting.Dictionary",
          "SWCtl.SWCtl", // ShockWave player
          "Shell.UIHelper",
          "ShockwaveFlash.ShockwaveFlash", //flash plugin
          "Skype.Detection",
          "TDCCtl.TDCCtl",
          "WMPlayer.OCX", // Windows media player
          "rmocx.RealPlayer G2 Control",
          "rmocx.RealPlayer G2 Control.1"
        ];
        // starting to detect plugins in IE
        return this.map(names, function(name){
          try{
            new ActiveXObject(name); // eslint-disable-no-new
            return name;
          } catch(e){
            return null;
          }
        }).join(";");
      } else {
        return "";
      }
    },
    pluginsShouldBeSorted: function () {
      var should = false;
      for(var i = 0, l = this.options.sortPluginsFor.length; i < l; i++) {
        var re = this.options.sortPluginsFor[i];
        if(navigator.userAgent.match(re)) {
          should = true;
          break;
        }
      }
      return should;
    },
    touchSupportKey: function (keys) {
      if(!this.options.excludeTouchSupport){
        keys.push(this.getTouchSupport());
      }
      return keys;
    },
    hasSessionStorage: function () {
      try {
        return !!window.sessionStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    hasLocalStorage: function () {
      try {
        return !!window.localStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    hasIndexedDB: function (){
      return !!window.indexedDB;
    },
    getNavigatorCpuClass: function () {
      if(navigator.cpuClass){
        return "navigatorCpuClass: " + navigator.cpuClass;
      } else {
        return "navigatorCpuClass: unknown";
      }
    },
    getNavigatorPlatform: function () {
      if(navigator.platform) {
        return "navigatorPlatform: " + navigator.platform;
      } else {
        return "navigatorPlatform: unknown";
      }
    },
    getDoNotTrack: function () {
      if(navigator.doNotTrack) {
        return "doNotTrack: " + navigator.doNotTrack;
      } else {
        return "doNotTrack: unknown";
      }
    },
    // This is a crude and primitive touch screen detection.
    // It's not possible to currently reliably detect the  availability of a touch screen
    // with a JS, without actually subscribing to a touch event.
    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
    // https://github.com/Modernizr/Modernizr/issues/548
    // method returns an array of 3 values:
    // maxTouchPoints, the success or failure of creating a TouchEvent,
    // and the availability of the 'ontouchstart' property
    getTouchSupport: function () {
      var maxTouchPoints = 0;
      var touchEvent = false;
      if(typeof navigator.maxTouchPoints !== "undefined") {
        maxTouchPoints = navigator.maxTouchPoints;
      } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
        maxTouchPoints = navigator.msMaxTouchPoints;
      }
      try {
        document.createEvent("TouchEvent");
        touchEvent = true;
      } catch(_) { /* squelch */ }
      var touchStart = "ontouchstart" in window;
      return [maxTouchPoints, touchEvent, touchStart];
    },
    // https://www.browserleaks.com/canvas#how-does-it-work
    getCanvasFp: function() {
      var result = [];
      // Very simple now, need to make it more complex (geo shapes etc)
      var canvas = document.createElement("canvas");
      canvas.width = 2000;
      canvas.height = 200;
      canvas.style.display = "inline";
      var ctx = canvas.getContext("2d");
      // detect browser support of canvas winding
      // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
      // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
      ctx.rect(0, 0, 10, 10);
      ctx.rect(2, 2, 6, 6);
      result.push("canvas winding:" + ((ctx.isPointInPath(5, 5, "evenodd") === false) ? "yes" : "no"));

      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      // https://github.com/Valve/fingerprintjs2/issues/66
      if(this.options.dontUseFakeFontInCanvas) {
        ctx.font = "11pt Arial";
      } else {
        ctx.font = "11pt no-real-font-123";
      }
      ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.font = "18pt Arial";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

      // canvas blending
      // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
      // http://jsfiddle.net/NDYV8/16/
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = "rgb(255,0,255)";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(0,255,255)";
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,0,255)";
      // canvas winding
      // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
      // http://jsfiddle.net/NDYV8/19/
      ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
      ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
      ctx.fill("evenodd");

      result.push("canvas fp:" + canvas.toDataURL());
      return result.join("~");
    },

    getWebglFp: function() {
      var gl;
      var fa2s = function(fa) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        return "[" + fa[0] + ", " + fa[1] + "]";
      };
      var maxAnisotropy = function(gl) {
        var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
        return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
      };
      gl = this.getWebglCanvas();
      if(!gl) { return null; }
      // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
      // First it draws a gradient object with shaders and convers the image to the Base64 string.
      // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
      // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
      var result = [];
      var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
      var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
      var vertexPosBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
      var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      vertexPosBuffer.itemSize = 3;
      vertexPosBuffer.numItems = 3;
      var program = gl.createProgram(), vshader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vshader, vShaderTemplate);
      gl.compileShader(vshader);
      var fshader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fshader, fShaderTemplate);
      gl.compileShader(fshader);
      gl.attachShader(program, vshader);
      gl.attachShader(program, fshader);
      gl.linkProgram(program);
      gl.useProgram(program);
      program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
      program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
      gl.enableVertexAttribArray(program.vertexPosArray);
      gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
      gl.uniform2f(program.offsetUniform, 1, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
      if (gl.canvas != null) { result.push(gl.canvas.toDataURL()); }
      result.push("extensions:" + gl.getSupportedExtensions().join(";"));
      result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
      result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
      result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
      result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
      result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
      result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
      result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
      result.push("webgl max anisotropy:" + maxAnisotropy(gl));
      result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
      result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
      result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
      result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
      result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
      result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
      result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
      result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
      result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
      result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
      result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
      result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
      result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
      result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
      result.push("webgl version:" + gl.getParameter(gl.VERSION));

      if (!gl.getShaderPrecisionFormat) {
        if (typeof NODEBUG === "undefined") {
          this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat");
        }
        return result.join("~");
      }

      result.push("webgl vertex shader high float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision);
      result.push("webgl vertex shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMin);
      result.push("webgl vertex shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMax);
      result.push("webgl vertex shader medium float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision);
      result.push("webgl vertex shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
      result.push("webgl vertex shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
      result.push("webgl vertex shader low float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).precision);
      result.push("webgl vertex shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMin);
      result.push("webgl vertex shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMax);
      result.push("webgl fragment shader high float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision);
      result.push("webgl fragment shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMin);
      result.push("webgl fragment shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMax);
      result.push("webgl fragment shader medium float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision);
      result.push("webgl fragment shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
      result.push("webgl fragment shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
      result.push("webgl fragment shader low float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).precision);
      result.push("webgl fragment shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMin);
      result.push("webgl fragment shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMax);
      result.push("webgl vertex shader high int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).precision);
      result.push("webgl vertex shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMin);
      result.push("webgl vertex shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMax);
      result.push("webgl vertex shader medium int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).precision);
      result.push("webgl vertex shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMin);
      result.push("webgl vertex shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMax);
      result.push("webgl vertex shader low int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).precision);
      result.push("webgl vertex shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMin);
      result.push("webgl vertex shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMax);
      result.push("webgl fragment shader high int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).precision);
      result.push("webgl fragment shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMin);
      result.push("webgl fragment shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMax);
      result.push("webgl fragment shader medium int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).precision);
      result.push("webgl fragment shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMin);
      result.push("webgl fragment shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMax);
      result.push("webgl fragment shader low int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).precision);
      result.push("webgl fragment shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMin);
      result.push("webgl fragment shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMax);
      return result.join("~");
    },
    getAdBlock: function(){
      var ads = document.createElement("div");
      ads.setAttribute("id", "ads");
      document.body.appendChild(ads);
      return document.getElementById("ads") ? false : true;
    },
    getHasLiedLanguages: function(){
      //We check if navigator.language is equal to the first language of navigator.languages
      if(typeof navigator.languages !== "undefined"){
        try {
          var firstLanguages = navigator.languages[0].substr(0, 2);
          if(firstLanguages !== navigator.language.substr(0, 2)){
            return true;
          }
        } catch(err){
          return true;
        }
      }
      return false;
    },
    getHasLiedResolution: function(){
      if(screen.width < screen.availWidth){
        return true;
      }
      if(screen.height < screen.availHeight){
        return true;
      }
      return false;
    },
    getHasLiedOs: function(){
      var userAgent = navigator.userAgent.toLowerCase();
      var oscpu = navigator.oscpu;
      var platform = navigator.platform.toLowerCase();
      var os;
      //We extract the OS from the user agent (respect the order of the if else if statement)
      if(userAgent.indexOf("windows phone") >= 0){
        os = "Windows Phone";
      } else if(userAgent.indexOf("win") >= 0){
        os = "Windows";
      } else if(userAgent.indexOf("android") >= 0){
        os = "Android";
      } else if(userAgent.indexOf("linux") >= 0){
        os = "Linux";
      } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
        os = "iOS";
      } else if(userAgent.indexOf("mac") >= 0){
        os = "Mac";
      } else{
        os = "Other";
      }
      // We detect if the person uses a mobile device
      var mobileDevice;
      if (("ontouchstart" in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0)) {
            mobileDevice = true;
      } else{
        mobileDevice = false;
      }

      if(mobileDevice && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other"){
        return true;
      }

      // We compare oscpu with the OS extracted from the UA
      if(typeof oscpu !== "undefined"){
        oscpu = oscpu.toLowerCase();
        if(oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
          return true;
        } else if(oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android"){
          return true;
        } else if(oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS"){
          return true;
        } else if(oscpu.indexOf("win") === 0 && oscpu.indexOf("linux") === 0 && oscpu.indexOf("mac") >= 0 && os !== "other"){
          return true;
        }
      }

      //We compare platform with the OS extracted from the UA
      if(platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
        return true;
      } else if((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android"){
        return true;
      } else if((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS"){
        return true;
      } else if(platform.indexOf("win") === 0 && platform.indexOf("linux") === 0 && platform.indexOf("mac") >= 0 && os !== "other"){
        return true;
      }

      if(typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"){
        //We are are in the case where the person uses ie, therefore we can infer that it's windows
        return true;
      }

      return false;
    },
    getHasLiedBrowser: function () {
      var userAgent = navigator.userAgent.toLowerCase();
      var productSub = navigator.productSub;

      //we extract the browser from the user agent (respect the order of the tests)
      var browser;
      if(userAgent.indexOf("firefox") >= 0){
        browser = "Firefox";
      } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
        browser = "Opera";
      } else if(userAgent.indexOf("chrome") >= 0){
        browser = "Chrome";
      } else if(userAgent.indexOf("safari") >= 0){
        browser = "Safari";
      } else if(userAgent.indexOf("trident") >= 0){
        browser = "Internet Explorer";
      } else{
        browser = "Other";
      }

      if((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107"){
        return true;
      }

      var tempRes = eval.toString().length;
      if(tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other"){
        return true;
      } else if(tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other"){
        return true;
      } else if(tempRes === 33 && browser !== "Chrome" && browser !== "Opera" && browser !== "Other"){
        return true;
      }

      //We create an error to see how it is handled
      var errFirefox;
      try {
        throw "a";
      } catch(err){
        try{
          err.toSource();
          errFirefox = true;
        } catch(errOfErr){
          errFirefox = false;
        }
      }
      if(errFirefox && browser !== "Firefox" && browser !== "Other"){
        return true;
      }
      return false;
    },
    isCanvasSupported: function () {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
    isWebGlSupported: function() {
      // code taken from Modernizr
      if (!this.isCanvasSupported()) {
        return false;
      }

      var canvas = document.createElement("canvas"),
          glContext;

      try {
        glContext = canvas.getContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
      } catch(e) {
        glContext = false;
      }

      return !!window.WebGLRenderingContext && !!glContext;
    },
    isIE: function () {
      if(navigator.appName === "Microsoft Internet Explorer") {
        return true;
      } else if(navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) { // IE 11
        return true;
      }
      return false;
    },
    hasSwfObjectLoaded: function(){
      return typeof window.swfobject !== "undefined";
    },
    hasMinFlashInstalled: function () {
      return swfobject.hasFlashPlayerVersion("9.0.0");
    },
    addFlashDivNode: function() {
      var node = document.createElement("div");
      node.setAttribute("id", this.options.swfContainerId);
      document.body.appendChild(node);
    },
    loadSwfAndDetectFonts: function(done) {
      var hiddenCallback = "___fp_swf_loaded";
      window[hiddenCallback] = function(fonts) {
        done(fonts);
      };
      var id = this.options.swfContainerId;
      this.addFlashDivNode();
      var flashvars = { onReady: hiddenCallback};
      var flashparams = { allowScriptAccess: "always", menu: "false" };
      swfobject.embedSWF(this.options.swfPath, id, "1", "1", "9.0.0", false, flashvars, flashparams, {});
    },
    getWebglCanvas: function() {
      var canvas = document.createElement("canvas");
      var gl = null;
      try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      } catch(e) { /* squelch */ }
      if (!gl) { gl = null; }
      return gl;
    },
    each: function (obj, iterator, context) {
      if (obj === null) {
        return;
      }
      if (this.nativeForEach && obj.forEach === this.nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === {}) { return; }
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iterator.call(context, obj[key], key, obj) === {}) { return; }
          }
        }
      }
    },

    map: function(obj, iterator, context) {
      var results = [];
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) { return results; }
      if (this.nativeMap && obj.map === this.nativeMap) { return obj.map(iterator, context); }
      this.each(obj, function(value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
      });
      return results;
    },

    /// MurmurHash3 related functions

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    x64Add: function(m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
      var o = [0, 0, 0, 0];
      o[3] += m[3] + n[3];
      o[2] += o[3] >>> 16;
      o[3] &= 0xffff;
      o[2] += m[2] + n[2];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[1] += m[1] + n[1];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[0] += m[0] + n[0];
      o[0] &= 0xffff;
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    x64Multiply: function(m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
      var o = [0, 0, 0, 0];
      o[3] += m[3] * n[3];
      o[2] += o[3] >>> 16;
      o[3] &= 0xffff;
      o[2] += m[2] * n[3];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[2] += m[3] * n[2];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[1] += m[1] * n[3];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[1] += m[2] * n[2];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[1] += m[3] * n[1];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
      o[0] &= 0xffff;
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    x64Rotl: function(m, n) {
      n %= 64;
      if (n === 32) {
        return [m[1], m[0]];
      }
      else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
      }
      else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
      }
    },
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    x64LeftShift: function(m, n) {
      n %= 64;
      if (n === 0) {
        return m;
      }
      else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
      }
      else {
        return [m[1] << (n - 32), 0];
      }
    },
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    x64Xor: function(m, n) {
      return [m[0] ^ n[0], m[1] ^ n[1]];
    },
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    x64Fmix: function(h) {
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      h = this.x64Multiply(h, [0xff51afd7, 0xed558ccd]);
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      h = this.x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      return h;
    },

    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    x64hash128: function (key, seed) {
      key = key || "";
      seed = seed || 0;
      var remainder = key.length % 16;
      var bytes = key.length - remainder;
      var h1 = [0, seed];
      var h2 = [0, seed];
      var k1 = [0, 0];
      var k2 = [0, 0];
      var c1 = [0x87c37b91, 0x114253d5];
      var c2 = [0x4cf5ad43, 0x2745937f];
      for (var i = 0; i < bytes; i = i + 16) {
        k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)];
        k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)];
        k1 = this.x64Multiply(k1, c1);
        k1 = this.x64Rotl(k1, 31);
        k1 = this.x64Multiply(k1, c2);
        h1 = this.x64Xor(h1, k1);
        h1 = this.x64Rotl(h1, 27);
        h1 = this.x64Add(h1, h2);
        h1 = this.x64Add(this.x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = this.x64Multiply(k2, c2);
        k2 = this.x64Rotl(k2, 33);
        k2 = this.x64Multiply(k2, c1);
        h2 = this.x64Xor(h2, k2);
        h2 = this.x64Rotl(h2, 31);
        h2 = this.x64Add(h2, h1);
        h2 = this.x64Add(this.x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
      }
      k1 = [0, 0];
      k2 = [0, 0];
      switch(remainder) {
        case 15:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        case 14:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        case 13:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        case 12:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        case 11:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        case 10:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        case 9:
          k2 = this.x64Xor(k2, [0, key.charCodeAt(i + 8)]);
          k2 = this.x64Multiply(k2, c2);
          k2 = this.x64Rotl(k2, 33);
          k2 = this.x64Multiply(k2, c1);
          h2 = this.x64Xor(h2, k2);
        case 8:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        case 7:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        case 6:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        case 5:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        case 4:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        case 3:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        case 2:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        case 1:
          k1 = this.x64Xor(k1, [0, key.charCodeAt(i)]);
          k1 = this.x64Multiply(k1, c1);
          k1 = this.x64Rotl(k1, 31);
          k1 = this.x64Multiply(k1, c2);
          h1 = this.x64Xor(h1, k1);
      }
      h1 = this.x64Xor(h1, [0, key.length]);
      h2 = this.x64Xor(h2, [0, key.length]);
      h1 = this.x64Add(h1, h2);
      h2 = this.x64Add(h2, h1);
      h1 = this.x64Fmix(h1);
      h2 = this.x64Fmix(h2);
      h1 = this.x64Add(h1, h2);
      h2 = this.x64Add(h2, h1);
      return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
    }
  };
  Fingerprint2.VERSION = "0.9.0";
  return Fingerprint2;
});

/*! @license Firebase v2.3.1
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.ub=function(){return a.uf?a.uf:a.uf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.bh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Yg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function pa(a){var b=0,c;for(c in a)b++;return b}function qa(a){for(var b in a)return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ta(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0);return c&&a[c]}function wa(a){for(var b in a)return!1;return!0}function xa(a){var b={},c;for(c in a)b[c]=a[c];return b}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Aa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Ba(){this.Sd=void 0}
function Ca(a,b,c){switch(typeof b){case "string":Da(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ca(a,a.Sd?a.Sd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),
c.push(":"),Ca(a,a.Sd?a.Sd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Ea[a]=e+b.toString(16)}),'"')};function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var Ha;a:{var Ia=aa.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""};function Ka(){this.Va=-1};function La(){this.Va=-1;this.Va=64;this.N=[];this.me=[];this.Wf=[];this.Ld=[];this.Ld[0]=128;for(var a=1;a<this.Va;++a)this.Ld[a]=0;this.de=this.ac=0;this.reset()}ma(La,Ka);La.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.de=this.ac=0};
function Ma(a,b,c){c||(c=0);var d=a.Wf;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],l=a.N[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),m=1518500249):(f=c^h^k,m=1859775393):60>e?(f=c&h|k&(c|h),m=2400959708):(f=c^h^k,m=3395469782),f=(b<<
5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+l&4294967295}
La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Va,d=0,e=this.me,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ma(this,a,d),d+=this.Va;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Va){Ma(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Va){Ma(this,e);f=0;break}}this.ac=f;this.de+=b}};var u=Array.prototype,Na=u.indexOf?function(a,b,c){return u.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=u.forEach?function(a,b,c){u.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=u.filter?function(a,b,c){return u.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Qa=u.map?function(a,b,c){return u.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ra=u.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return u.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Oa(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Sa=u.every?function(a,b,
c){return u.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ta(a,b){var c=Ua(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Va(a,b){var c=Na(a,b);0<=c&&u.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?u.slice.call(a,b):u.slice.call(a,b,c)}
function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:a<b?-1:0};var Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Za&&aa.opera)return a=aa.opera.version,ha(a)?a():a;ab?b=/rv\:([^\);]+)(\)|;)/:$a?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ha))?a[1]:"");return $a&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var cb=null,db=null,eb=null;function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");gb();for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,l=e+2<a.length,m=l?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|m>>6,m=m&63;l||(m=64,h||(k=64));d.push(c[t],c[f],c[k],c[m])}return d.join("")}
function gb(){if(!cb){cb={};db={};eb={};for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,62<=a&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};var hb=hb||"2.3.1";function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function jb(a){var b={};ib(a,function(a,d){b[a]=d});return b};function kb(a){var b=[];ib(a,function(a,d){ea(d)?Oa(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function lb(a){var b={};a=a.replace(/^\?/,"").split("&");Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(y(a,b,d)+"must be a valid function.");}function mb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function nb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ca(new Ba,a,b);a=b.join("")}return a};function ob(){this.Wd=C}ob.prototype.j=function(a){return this.Wd.Q(a)};ob.prototype.toString=function(){return this.Wd.toString()};function pb(){}pb.prototype.qf=function(){return null};pb.prototype.ye=function(){return null};var qb=new pb;function rb(a,b,c){this.Tf=a;this.Ka=b;this.Kd=c}rb.prototype.qf=function(a){var b=this.Ka.O;if(sb(b,a))return b.j().R(a);b=null!=this.Kd?new tb(this.Kd,!0,!1):this.Ka.w();return this.Tf.xc(a,b)};rb.prototype.ye=function(a,b,c){var d=null!=this.Kd?this.Kd:ub(this.Ka);a=this.Tf.ne(d,b,1,c,a);return 0===a.length?null:a[0]};function vb(){this.tb=[]}function wb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.tb.push(c),c=null);null===c&&(c=new xb(f));c.add(e)}c&&a.tb.push(c)}function yb(a,b,c){wb(a,c);zb(a,function(a){return a.ca(b)})}function Ab(a,b,c){wb(a,c);zb(a,function(a){return a.contains(b)||b.contains(a)})}
function zb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.tb[d],f=0;f<e.vd.length;f++){var h=e.vd[f];if(null!==h){e.vd[f]=null;var k=h.Vb();Bb&&Cb("event: "+h.toString());Db(k)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function xb(a){this.ra=a;this.vd=[]}xb.prototype.add=function(a){this.vd.push(a)};xb.prototype.Zb=function(){return this.ra};function D(a,b,c,d){this.type=a;this.Ja=b;this.Wa=c;this.Ke=d;this.Qd=void 0}function Eb(a){return new D(Fb,a)}var Fb="value";function Gb(a,b,c,d){this.ue=b;this.Zd=c;this.Qd=d;this.ud=a}Gb.prototype.Zb=function(){var a=this.Zd.Ib();return"value"===this.ud?a.path:a.parent().path};Gb.prototype.ze=function(){return this.ud};Gb.prototype.Vb=function(){return this.ue.Vb(this)};Gb.prototype.toString=function(){return this.Zb().toString()+":"+this.ud+":"+B(this.Zd.mf())};function Hb(a,b,c){this.ue=a;this.error=b;this.path=c}Hb.prototype.Zb=function(){return this.path};Hb.prototype.ze=function(){return"cancel"};
Hb.prototype.Vb=function(){return this.ue.Vb(this)};Hb.prototype.toString=function(){return this.path.toString()+":cancel"};function tb(a,b,c){this.A=a;this.ea=b;this.Ub=c}function Ib(a){return a.ea}function Jb(a){return a.Ub}function Kb(a,b){return b.e()?a.ea&&!a.Ub:sb(a,E(b))}function sb(a,b){return a.ea&&!a.Ub||a.A.Da(b)}tb.prototype.j=function(){return this.A};function Lb(a){this.gg=a;this.Dd=null}Lb.prototype.get=function(){var a=this.gg.get(),b=xa(a);if(this.Dd)for(var c in this.Dd)b[c]-=this.Dd[c];this.Dd=a;return b};function Mb(a,b){this.Of={};this.fd=new Lb(a);this.ba=b;var c=1E4+2E4*Math.random();setTimeout(q(this.If,this),Math.floor(c))}Mb.prototype.If=function(){var a=this.fd.get(),b={},c=!1,d;for(d in a)0<a[d]&&v(this.Of,d)&&(b[d]=a[d],c=!0);c&&this.ba.Ue(b);setTimeout(q(this.If,this),Math.floor(6E5*Math.random()))};function Nb(){this.Ec={}}function Ob(a,b,c){n(c)||(c=1);v(a.Ec,b)||(a.Ec[b]=0);a.Ec[b]+=c}Nb.prototype.get=function(){return xa(this.Ec)};var Pb={},Qb={};function Rb(a){a=a.toString();Pb[a]||(Pb[a]=new Nb);return Pb[a]}function Sb(a,b){var c=a.toString();Qb[c]||(Qb[c]=b());return Qb[c]};function F(a,b){this.name=a;this.S=b}function Tb(a,b){return new F(a,b)};function Ub(a,b){return Vb(a.name,b.name)}function Wb(a,b){return Vb(a,b)};function Xb(a,b,c){this.type=Yb;this.source=a;this.path=b;this.Ga=c}Xb.prototype.Xc=function(a){return this.path.e()?new Xb(this.source,G,this.Ga.R(a)):new Xb(this.source,H(this.path),this.Ga)};Xb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Xc=function(){return this.path.e()?new Zb(this.source,G):new Zb(this.source,H(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b){this.La=a;this.wa=b?b:bc}g=ac.prototype;g.Oa=function(a,b){return new ac(this.La,this.wa.Oa(a,b,this.La).Y(null,null,!1,null,null))};g.remove=function(a){return new ac(this.La,this.wa.remove(a,this.La).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.wa;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function cc(a,b){for(var c,d=a.wa,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.wa.e()};g.count=function(){return this.wa.count()};g.Sc=function(){return this.wa.Sc()};g.fc=function(){return this.wa.fc()};g.ia=function(a){return this.wa.ia(a)};
g.Xb=function(a){return new dc(this.wa,null,this.La,!1,a)};g.Yb=function(a,b){return new dc(this.wa,a,this.La,!1,b)};g.$b=function(a,b){return new dc(this.wa,a,this.La,!0,b)};g.sf=function(a){return new dc(this.wa,null,this.La,!0,a)};function dc(a,b,c,d,e){this.Ud=e||null;this.Fe=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Fe?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.Fe?a.right:a.left}
function J(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value};if(a.Fe)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function ec(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Ud?a.Ud(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:bc;this.right=null!=e?e:bc}g=fc.prototype;
g.Y=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function gc(a){return a.left.e()?a:gc(a.left)}g.Sc=function(){return gc(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Oa(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Oa(a,b,c));return hc(e)};function ic(a){if(a.left.e())return bc;a.left.fa()||a.left.left.fa()||(a=jc(a));a=a.Y(null,null,null,ic(a.left),null);return hc(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c)));if(0===b(a,c.key)){if(c.right.e())return bc;d=gc(c.right);c=c.Y(d.key,d.value,null,null,ic(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return hc(c)};g.fa=function(){return this.color};
function hc(a){a.right.fa()&&!a.left.fa()&&(a=mc(a));a.left.fa()&&a.left.left.fa()&&(a=kc(a));a.left.fa()&&a.right.fa()&&(a=lc(a));return a}function jc(a){a=lc(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a));return a}function mc(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
function lc(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function nc(){}g=nc.prototype;g.Y=function(){return this};g.Oa=function(a,b){return new fc(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Sc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var bc=new nc;function oc(a,b){return a&&"object"===typeof a?(K(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc;rc(a,new L(""),function(a,e){c.nc(a,sc(e,b))});return c}function sc(a,b){var c=a.C().I(),c=oc(c,b),d;if(a.K()){var e=oc(a.Ca(),b);return e!==a.Ca()||c!==a.C().I()?new tc(e,M(c)):a}d=a;c!==a.C().I()&&(d=d.ga(new tc(c)));a.P(N,function(a,c){var e=sc(c,b);e!==c&&(d=d.U(a,e))});return d};function uc(){this.wc={}}uc.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b};uc.prototype.get=function(a){return v(this.wc,a)?this.wc[a]:null};uc.prototype.remove=function(a){delete this.wc[a]};uc.prototype.wf=!0;function vc(a){this.Fc=a;this.Pd="firebase:"}g=vc.prototype;g.set=function(a,b){null==b?this.Fc.removeItem(this.Pd+a):this.Fc.setItem(this.Pd+a,B(b))};g.get=function(a){a=this.Fc.getItem(this.Pd+a);return null==a?null:nb(a)};g.remove=function(a){this.Fc.removeItem(this.Pd+a)};g.wf=!1;g.toString=function(){return this.Fc.toString()};function wc(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new vc(b)}}catch(c){}return new uc}var xc=wc("localStorage"),yc=wc("sessionStorage");function zc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.kb=b;this.hc=c;this.Wg=d;this.Od=e||"";this.Ya=xc.get("host:"+a)||this.host}function Ac(a,b){b!==a.Ya&&(a.Ya=b,"s-"===a.Ya.substr(0,2)&&xc.set("host:"+a.host,a.Ya))}
function Bc(a,b,c){K("string"===typeof b,"typeof type must == string");K("object"===typeof c,"typeof params must == object");if(b===Cc)b=(a.kb?"wss://":"ws://")+a.Ya+"/.ws?";else if(b===Dc)b=(a.kb?"https://":"http://")+a.Ya+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.Ya&&(c.ns=a.hc);var d=[];r(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zc.prototype.toString=function(){var a=(this.kb?"https://":"http://")+this.host;this.Od&&(a+="<"+this.Od+">");return a};var Ec=function(){var a=1;return function(){return a++}}();function K(a,b){if(!a)throw Fc(b);}function Fc(a){return Error("Firebase ("+hb+") INTERNAL ASSERT FAILED: "+a)}
function Gc(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{gb();for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==l)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,
c+8192));b=a}}return b}catch(m){Cb("base64Decode failed: ",m)}return null}function Hc(a){var b=Ic(a);a=new La;a.update(b);var b=[],c=8*a.de;56>a.ac?a.update(a.Ld,56-a.ac):a.update(a.Ld,a.Va-(a.ac-56));for(var d=a.Va-1;56<=d;d--)a.me[d]=c&255,c/=256;Ma(a,a.me);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return fb(b)}
function Jc(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Jc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var Bb=null,Kc=!0;function Cb(a){!0===Kc&&(Kc=!1,null===Bb&&!0===yc.get("logging_enabled")&&Lc(!0));if(Bb){var b=Jc.apply(null,arguments);Bb(b)}}function Mc(a){return function(){Cb(a,arguments)}}
function Nc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Jc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Oc(a){var b=Jc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Jc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Pc(a){var b="",c="",d="",e="",f=!0,h="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(h=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(t){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===h||"wss"===h,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Tg:d,kb:f,scheme:h,$c:e}}function Qc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Rc(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Vb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Sc(a),d=Sc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function Tc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function Uc(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=Uc(a[b[d]]);return c+"}"}function Vc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function Wc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else r(a,b)}
function Xc(a){K(!Qc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Yc=/^-?\d{1,10}$/;function Sc(a){return Yc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Db(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function P(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Db(function(){a.apply(null,c)})}};function Ic(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,K(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Zc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function $c(a){var b={},c={},d={},e="";try{var f=a.split("."),b=nb(Gc(f[0])||""),c=nb(Gc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Zg:b,Bc:c,data:d,Qg:e}}function ad(a){a=$c(a).Bc;return"object"===typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function bd(a){a=$c(a);var b=a.Bc;return!!a.Qg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function cd(a){this.W=a;this.g=a.n.g}function dd(a,b,c,d){var e=[],f=[];Oa(b,function(b){"child_changed"===b.type&&a.g.Ad(b.Ke,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Wa))});ed(a,e,"child_removed",b,d,c);ed(a,e,"child_added",b,d,c);ed(a,e,"child_moved",f,d,c);ed(a,e,"child_changed",b,d,c);ed(a,e,Fb,b,d,c);return e}function ed(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c});Xa(d,q(a.hg,a));Oa(d,function(c){var d=fd(a,c,f);Oa(e,function(e){e.Kf(c.type)&&b.push(e.createEvent(d,a.W))})})}
function fd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Qd=c.rf(b.Wa,b.Ja,a.g));return b}cd.prototype.hg=function(a,b){if(null==a.Wa||null==b.Wa)throw Fc("Should only compare child_ events.");return this.g.compare(new F(a.Wa,a.Ja),new F(b.Wa,b.Ja))};function gd(){this.bb={}}
function hd(a,b){var c=b.type,d=b.Wa;K("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");K(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.bb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Ja);else if("child_removed"==c&&"child_added"==f)delete a.bb[d];else if("child_removed"==c&&"child_changed"==f)a.bb[d]=new D("child_removed",e.Ke,d);else if("child_changed"==c&&
"child_added"==f)a.bb[d]=new D("child_added",b.Ja,d);else if("child_changed"==c&&"child_changed"==f)a.bb[d]=new D("child_changed",b.Ja,d,e.Ke);else throw Fc("Illegal combination of changes: "+b+" occurred after "+e);}else a.bb[d]=b};function id(a,b,c){this.Rb=a;this.pb=b;this.rb=c||null}g=id.prototype;g.Kf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new Gb("value",this,new Q(a.Ja,b.Ib(),c))};g.Vb=function(a){var b=this.rb;if("cancel"===a.ze()){K(this.pb,"Raising a cancel event on a listener with no cancel callback");var c=this.pb;return function(){c.call(b,a.error)}}var d=this.Rb;return function(){d.call(b,a.Zd)}};g.gf=function(a,b){return this.pb?new Hb(this,a,b):null};
g.matches=function(a){return a instanceof id?a.Rb&&this.Rb?a.Rb===this.Rb&&a.rb===this.rb:!0:!1};g.tf=function(){return null!==this.Rb};function jd(a,b,c){this.ha=a;this.pb=b;this.rb=c}g=jd.prototype;g.Kf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.gf=function(a,b){return this.pb?new Hb(this,a,b):null};
g.createEvent=function(a,b){K(null!=a.Wa,"Child events should have a childName.");var c=b.Ib().u(a.Wa);return new Gb(a.type,this,new Q(a.Ja,c,b.n.g),a.Qd)};g.Vb=function(a){var b=this.rb;if("cancel"===a.ze()){K(this.pb,"Raising a cancel event on a listener with no cancel callback");var c=this.pb;return function(){c.call(b,a.error)}}var d=this.ha[a.ud];return function(){d.call(b,a.Zd,a.Qd)}};
g.matches=function(a){if(a instanceof jd){if(!this.ha||!a.ha)return!0;if(this.rb===a.rb){var b=pa(a.ha);if(b===pa(this.ha)){if(1===b){var b=qa(a.ha),c=qa(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return oa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.tf=function(){return null!==this.ha};function kd(a){this.g=a}g=kd.prototype;g.G=function(a,b,c,d,e,f){K(a.Jc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?hd(f,new D("child_removed",e,b)):K(a.K(),"A child remove without an old child only makes sense on a leaf node"):e.e()?hd(f,new D("child_added",c,b)):hd(f,new D("child_changed",c,b,e)));return a.K()&&c.e()?a:a.U(b,c).lb(this.g)};
g.xa=function(a,b,c){null!=c&&(a.K()||a.P(N,function(a,e){b.Da(a)||hd(c,new D("child_removed",e,a))}),b.K()||b.P(N,function(b,e){if(a.Da(b)){var f=a.R(b);f.ca(e)||hd(c,new D("child_changed",e,b,f))}else hd(c,new D("child_added",e,b))}));return b.lb(this.g)};g.ga=function(a,b){return a.e()?C:a.ga(b)};g.Na=function(){return!1};g.Wb=function(){return this};function ld(a){this.Be=new kd(a.g);this.g=a.g;var b;a.ma?(b=md(a),b=a.g.Pc(nd(a),b)):b=a.g.Tc();this.ed=b;a.pa?(b=od(a),a=a.g.Pc(pd(a),b)):a=a.g.Qc();this.Gc=a}g=ld.prototype;g.matches=function(a){return 0>=this.g.compare(this.ed,a)&&0>=this.g.compare(a,this.Gc)};g.G=function(a,b,c,d,e,f){this.matches(new F(b,c))||(c=C);return this.Be.G(a,b,c,d,e,f)};
g.xa=function(a,b,c){b.K()&&(b=C);var d=b.lb(this.g),d=d.ga(C),e=this;b.P(N,function(a,b){e.matches(new F(a,b))||(d=d.U(a,C))});return this.Be.xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.Be};function qd(a){this.sa=new ld(a);this.g=a.g;K(a.ja,"Only valid if limit has been set");this.ka=a.ka;this.Jb=!rd(a)}g=qd.prototype;g.G=function(a,b,c,d,e,f){this.sa.matches(new F(b,c))||(c=C);return a.R(b).ca(c)?a:a.Db()<this.ka?this.sa.Wb().G(a,b,c,d,e,f):sd(this,a,b,c,e,f)};
g.xa=function(a,b,c){var d;if(b.K()||b.e())d=C.lb(this.g);else if(2*this.ka<b.Db()&&b.Jc(this.g)){d=C.lb(this.g);b=this.Jb?b.$b(this.sa.Gc,this.g):b.Yb(this.sa.ed,this.g);for(var e=0;0<b.Pa.length&&e<this.ka;){var f=J(b),h;if(h=this.Jb?0>=this.g.compare(this.sa.ed,f):0>=this.g.compare(f,this.sa.Gc))d=d.U(f.name,f.S),e++;else break}}else{d=b.lb(this.g);d=d.ga(C);var k,l,m;if(this.Jb){b=d.sf(this.g);k=this.sa.Gc;l=this.sa.ed;var t=td(this.g);m=function(a,b){return t(b,a)}}else b=d.Xb(this.g),k=this.sa.ed,
l=this.sa.Gc,m=td(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=J(b),!z&&0>=m(k,f)&&(z=!0),(h=z&&e<this.ka&&0>=m(f,l))?e++:d=d.U(f.name,C)}return this.sa.Wb().xa(a,d,c)};g.ga=function(a){return a};g.Na=function(){return!0};g.Wb=function(){return this.sa.Wb()};
function sd(a,b,c,d,e,f){var h;if(a.Jb){var k=td(a.g);h=function(a,b){return k(b,a)}}else h=td(a.g);K(b.Db()==a.ka,"");var l=new F(c,d),m=a.Jb?ud(b,a.g):vd(b,a.g),t=a.sa.matches(l);if(b.Da(c)){for(var z=b.R(c),m=e.ye(a.g,m,a.Jb);null!=m&&(m.name==c||b.Da(m.name));)m=e.ye(a.g,m,a.Jb);e=null==m?1:h(m,l);if(t&&!d.e()&&0<=e)return null!=f&&hd(f,new D("child_changed",d,c,z)),b.U(c,d);null!=f&&hd(f,new D("child_removed",z,c));b=b.U(c,C);return null!=m&&a.sa.matches(m)?(null!=f&&hd(f,new D("child_added",
m.S,m.name)),b.U(m.name,m.S)):b}return d.e()?b:t&&0<=h(m,l)?(null!=f&&(hd(f,new D("child_removed",m.S,m.name)),hd(f,new D("child_added",d,c))),b.U(c,d).U(m.name,C)):b};function wd(a,b){this.je=a;this.fg=b}function xd(a){this.V=a}
xd.prototype.ab=function(a,b,c,d){var e=new gd,f;if(b.type===Yb)b.source.we?c=yd(this,a,b.path,b.Ga,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.af||Jb(a.w())&&!b.path.e(),c=Ad(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===Bd)b.source.we?c=Cd(this,a,b.path,b.children,c,d,e):(K(b.source.pf,"Unknown source."),f=b.source.af||Jb(a.w()),c=Dd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ed)if(b.Vd)if(b=b.path,null!=c.tc(b))c=a;else{f=new rb(c,a,d);d=a.O.j();if(b.e()||".priority"===E(b))Ib(a.w())?
b=c.za(ub(a)):(b=a.w().j(),K(b instanceof R,"serverChildren would be complete if leaf node"),b=c.yc(b)),b=this.V.xa(d,b,e);else{var h=E(b),k=c.xc(h,a.w());null==k&&sb(a.w(),h)&&(k=d.R(h));b=null!=k?this.V.G(d,h,k,H(b),f,e):a.O.j().Da(h)?this.V.G(d,h,C,H(b),f,e):d;b.e()&&Ib(a.w())&&(d=c.za(ub(a)),d.K()&&(b=this.V.xa(b,d,e)))}d=Ib(a.w())||null!=c.tc(G);c=Fd(a,b,d,this.V.Na())}else c=Gd(this,a,b.path,b.Qb,c,d,e);else if(b.type===$b)d=b.path,b=a.w(),f=b.j(),h=b.ea||d.e(),c=Hd(this,new Id(a.O,new tb(f,
h,b.Ub)),d,c,qb,e);else throw Fc("Unknown operation type: "+b.type);e=ra(e.bb);d=c;b=d.O;b.ea&&(f=b.j().K()||b.j().e(),h=Jd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(h)||!b.j().C().ca(h.C()))&&e.push(Eb(Jd(d))));return new wd(c,e)};
function Hd(a,b,c,d,e,f){var h=b.O;if(null!=d.tc(c))return b;var k;if(c.e())K(Ib(b.w()),"If change path is empty, we must have complete server data"),Jb(b.w())?(e=ub(b),d=d.yc(e instanceof R?e:C)):d=d.za(ub(b)),f=a.V.xa(b.O.j(),d,f);else{var l=E(c);if(".priority"==l)K(1==Kd(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ld(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var m=H(c);sb(h,l)?(k=b.w().j(),d=d.ld(c,h.j(),k),d=null!=d?h.j().R(l).G(m,d):h.j().R(l)):d=d.xc(l,
b.w());f=null!=d?a.V.G(h.j(),l,d,m,e,f):h.j()}}return Fd(b,f,h.ea||c.e(),a.V.Na())}function Ad(a,b,c,d,e,f,h,k){var l=b.w();h=h?a.V:a.V.Wb();if(c.e())d=h.xa(l.j(),d,null);else if(h.Na()&&!l.Ub)d=l.j().G(c,d),d=h.xa(l.j(),d,null);else{var m=E(c);if(!Kb(l,c)&&1<Kd(c))return b;var t=H(c);d=l.j().R(m).G(t,d);d=".priority"==m?h.ga(l.j(),d):h.G(l.j(),m,d,t,qb,null)}l=l.ea||c.e();b=new Id(b.O,new tb(d,l,h.Na()));return Hd(a,b,c,e,new rb(e,b,f),k)}
function yd(a,b,c,d,e,f,h){var k=b.O;e=new rb(e,b,f);if(c.e())h=a.V.xa(b.O.j(),d,h),a=Fd(b,h,!0,a.V.Na());else if(f=E(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Fd(b,h,k.ea,k.Ub);else{c=H(c);var l=k.j().R(f);if(!c.e()){var m=e.qf(f);d=null!=m?".priority"===Ld(c)&&m.Q(c.parent()).e()?m:m.G(c,d):C}l.ca(d)?a=b:(h=a.V.G(k.j(),f,d,c,e,h),a=Fd(b,h,k.ea,a.V.Na()))}return a}
function Cd(a,b,c,d,e,f,h){var k=b;Md(d,function(d,m){var t=c.u(d);sb(b.O,E(t))&&(k=yd(a,k,t,m,e,f,h))});Md(d,function(d,m){var t=c.u(d);sb(b.O,E(t))||(k=yd(a,k,t,m,e,f,h))});return k}function Nd(a,b){Md(b,function(b,d){a=a.G(b,d)});return a}
function Dd(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!Ib(b.w()))return b;var l=b;c=c.e()?d:Od(Pd,c,d);var m=b.w().j();c.children.ia(function(c,d){if(m.Da(c)){var I=b.w().j().R(c),I=Nd(I,d);l=Ad(a,l,new L(c),I,e,f,h,k)}});c.children.ia(function(c,d){var I=!sb(b.w(),c)&&null==d.value;m.Da(c)||I||(I=b.w().j().R(c),I=Nd(I,d),l=Ad(a,l,new L(c),I,e,f,h,k))});return l}
function Gd(a,b,c,d,e,f,h){if(null!=e.tc(c))return b;var k=Jb(b.w()),l=b.w();if(null!=d.value){if(c.e()&&l.ea||Kb(l,c))return Ad(a,b,c,l.j().Q(c),e,f,k,h);if(c.e()){var m=Pd;l.j().P(Qd,function(a,b){m=m.set(new L(a),b)});return Dd(a,b,c,m,e,f,k,h)}return b}m=Pd;Md(d,function(a){var b=c.u(a);Kb(l,b)&&(m=m.set(a,l.j().Q(b)))});return Dd(a,b,c,m,e,f,k,h)};function Rd(){}var Sd={};function td(a){return q(a.compare,a)}Rd.prototype.Ad=function(a,b){return 0!==this.compare(new F("[MIN_NAME]",a),new F("[MIN_NAME]",b))};Rd.prototype.Tc=function(){return Td};function Ud(a){K(!a.e()&&".priority"!==E(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ma(Ud,Rd);g=Ud.prototype;g.Ic=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.Dc(d);return 0===c?Vb(a.name,b.name):c};
g.Pc=function(a,b){var c=M(a),c=C.G(this.cc,c);return new F(b,c)};g.Qc=function(){var a=C.G(this.cc,Vd);return new F("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function Wd(){}ma(Wd,Rd);g=Wd.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.Dc(d);return 0===c?Vb(a.name,b.name):c};g.Ic=function(a){return!a.C().e()};g.Ad=function(a,b){return!a.C().ca(b.C())};g.Tc=function(){return Td};g.Qc=function(){return new F("[MAX_NAME]",new tc("[PRIORITY-POST]",Vd))};
g.Pc=function(a,b){var c=M(a);return new F(b,new tc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new Wd;function Xd(){}ma(Xd,Rd);g=Xd.prototype;g.compare=function(a,b){return Vb(a.name,b.name)};g.Ic=function(){throw Fc("KeyIndex.isDefinedOn not expected to be called.");};g.Ad=function(){return!1};g.Tc=function(){return Td};g.Qc=function(){return new F("[MAX_NAME]",C)};g.Pc=function(a){K(p(a),"KeyIndex indexValue must always be a string.");return new F(a,C)};g.toString=function(){return".key"};
var Qd=new Xd;function Yd(){}ma(Yd,Rd);g=Yd.prototype;g.compare=function(a,b){var c=a.S.Dc(b.S);return 0===c?Vb(a.name,b.name):c};g.Ic=function(){return!0};g.Ad=function(a,b){return!a.ca(b)};g.Tc=function(){return Td};g.Qc=function(){return Zd};g.Pc=function(a,b){var c=M(a);return new F(b,c)};g.toString=function(){return".value"};var $d=new Yd;function ae(){this.Tb=this.pa=this.Lb=this.ma=this.ja=!1;this.ka=0;this.Nb="";this.ec=null;this.xb="";this.bc=null;this.vb="";this.g=N}var be=new ae;function rd(a){return""===a.Nb?a.ma:"l"===a.Nb}function nd(a){K(a.ma,"Only valid if start has been set");return a.ec}function md(a){K(a.ma,"Only valid if start has been set");return a.Lb?a.xb:"[MIN_NAME]"}function pd(a){K(a.pa,"Only valid if end has been set");return a.bc}
function od(a){K(a.pa,"Only valid if end has been set");return a.Tb?a.vb:"[MAX_NAME]"}function ce(a){var b=new ae;b.ja=a.ja;b.ka=a.ka;b.ma=a.ma;b.ec=a.ec;b.Lb=a.Lb;b.xb=a.xb;b.pa=a.pa;b.bc=a.bc;b.Tb=a.Tb;b.vb=a.vb;b.g=a.g;return b}g=ae.prototype;g.He=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="";return b};g.Ie=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="l";return b};g.Je=function(a){var b=ce(this);b.ja=!0;b.ka=a;b.Nb="r";return b};
g.$d=function(a,b){var c=ce(this);c.ma=!0;n(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.xb=b):(c.Lb=!1,c.xb="");return c};g.td=function(a,b){var c=ce(this);c.pa=!0;n(a)||(a=null);c.bc=a;n(b)?(c.Tb=!0,c.vb=b):(c.ah=!1,c.vb="");return c};function de(a,b){var c=ce(a);c.g=b;return c}function ee(a){var b={};a.ma&&(b.sp=a.ec,a.Lb&&(b.sn=a.xb));a.pa&&(b.ep=a.bc,a.Tb&&(b.en=a.vb));if(a.ja){b.l=a.ka;var c=a.Nb;""===c&&(c=rd(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}
function S(a){return!(a.ma||a.pa||a.ja)}function fe(a){return S(a)&&a.g==N}function ge(a){var b={};if(fe(a))return b;var c;a.g===N?c="$priority":a.g===$d?c="$value":a.g===Qd?c="$key":(K(a.g instanceof Ud,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ma&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.xb)));a.pa&&(b.endAt=B(a.bc),a.Tb&&(b.endAt+=","+B(a.vb)));a.ja&&(rd(a)?b.limitToFirst=a.ka:b.limitToLast=a.ka);return b}g.toString=function(){return B(ee(this))};function he(a,b){this.Bd=a;this.dc=b}he.prototype.get=function(a){var b=w(this.Bd,a);if(!b)throw Error("No index defined for "+a);return b===Sd?null:b};function ie(a,b,c){var d=na(a.Bd,function(d,f){var h=w(a.dc,f);K(h,"Missing index implementation for "+f);if(d===Sd){if(h.Ic(b.S)){for(var k=[],l=c.Xb(Tb),m=J(l);m;)m.name!=b.name&&k.push(m),m=J(l);k.push(b);return je(k,td(h))}return Sd}h=c.get(b.name);k=d;h&&(k=k.remove(new F(b.name,h)));return k.Oa(b,b.S)});return new he(d,a.dc)}
function ke(a,b,c){var d=na(a.Bd,function(a){if(a===Sd)return a;var d=c.get(b.name);return d?a.remove(new F(b.name,d)):a});return new he(d,a.dc)}var le=new he({".priority":Sd},{".priority":N});function tc(a,b){this.B=a;K(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||C;me(this.aa);this.Cb=null}var ne=["object","boolean","number","string"];g=tc.prototype;g.K=function(){return!0};g.C=function(){return this.aa};g.ga=function(a){return new tc(this.B,a)};g.R=function(a){return".priority"===a?this.aa:C};g.Q=function(a){return a.e()?this:".priority"===E(a)?this.aa:C};g.Da=function(){return!1};g.rf=function(){return null};
g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:C.U(a,b).ga(this.aa)};g.G=function(a,b){var c=E(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;K(".priority"!==c||1===Kd(a),".priority must be the last token in a path");return this.U(c,C.G(H(a),b))};g.e=function(){return!1};g.Db=function(){return 0};g.P=function(){return!1};g.I=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().I()}:this.Ca()};
g.hash=function(){if(null===this.Cb){var a="";this.aa.e()||(a+="priority:"+oe(this.aa.I())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Xc(this.B):a+this.B;this.Cb=Hc(a)}return this.Cb};g.Ca=function(){return this.B};g.Dc=function(a){if(a===C)return 1;if(a instanceof R)return-1;K(a.K(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Na(ne,b),e=Na(ne,c);K(0<=d,"Unknown leaf type: "+b);K(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.lb=function(){return this};g.Jc=function(){return!0};g.ca=function(a){return a===this?!0:a.K()?this.B===a.B&&this.aa.ca(a.aa):!1};g.toString=function(){return B(this.I(!0))};function R(a,b,c){this.m=a;(this.aa=b)&&me(this.aa);a.e()&&K(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.wb=c;this.Cb=null}g=R.prototype;g.K=function(){return!1};g.C=function(){return this.aa||C};g.ga=function(a){return this.m.e()?this:new R(this.m,a,this.wb)};g.R=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?C:a};g.Q=function(a){var b=E(a);return null===b?this:this.R(b).Q(H(a))};g.Da=function(a){return null!==this.m.get(a)};
g.U=function(a,b){K(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new F(a,b),d,e;b.e()?(d=this.m.remove(a),c=ke(this.wb,c,this.m)):(d=this.m.Oa(a,b),c=ie(this.wb,c,this.m));e=d.e()?C:this.aa;return new R(d,e,c)};g.G=function(a,b){var c=E(a);if(null===c)return b;K(".priority"!==E(a)||1===Kd(a),".priority must be the last token in a path");var d=this.R(c).G(H(a),b);return this.U(c,d)};g.e=function(){return this.m.e()};g.Db=function(){return this.m.count()};
var pe=/^(0|[1-9]\d*)$/;g=R.prototype;g.I=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.I(a);c++;e&&pe.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().I());return b};g.hash=function(){if(null===this.Cb){var a="";this.C().e()||(a+="priority:"+oe(this.C().I())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Cb=""===a?"":Hc(a)}return this.Cb};
g.rf=function(a,b,c){return(c=qe(this,c))?(a=cc(c,new F(a,b)))?a.name:null:cc(this.m,a)};function ud(a,b){var c;c=(c=qe(a,b))?(c=c.Sc())&&c.name:a.m.Sc();return c?new F(c,a.m.get(c)):null}function vd(a,b){var c;c=(c=qe(a,b))?(c=c.fc())&&c.name:a.m.fc();return c?new F(c,a.m.get(c)):null}g.P=function(a,b){var c=qe(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.m.ia(b)};g.Xb=function(a){return this.Yb(a.Tc(),a)};
g.Yb=function(a,b){var c=qe(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Tb),d=ec(c);null!=d&&0>b.compare(d,a);)J(c),d=ec(c);return c};g.sf=function(a){return this.$b(a.Qc(),a)};g.$b=function(a,b){var c=qe(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Tb),d=ec(c);null!=d&&0<b.compare(d,a);)J(c),d=ec(c);return c};g.Dc=function(a){return this.e()?a.e()?0:-1:a.K()||a.e()?1:a===Vd?-1:0};
g.lb=function(a){if(a===Qd||ta(this.wb.dc,a.toString()))return this;var b=this.wb,c=this.m;K(a!==Qd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Tb),f=J(c);f;)e=e||a.Ic(f.S),d.push(f),f=J(c);d=e?je(d,td(a)):Sd;e=a.toString();c=xa(b.dc);c[e]=a;a=xa(b.Bd);a[e]=d;return new R(this.m,this.aa,new he(a,c))};g.Jc=function(a){return a===Qd||ta(this.wb.dc,a.toString())};
g.ca=function(a){if(a===this)return!0;if(a.K())return!1;if(this.C().ca(a.C())&&this.m.count()===a.m.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=J(b),d=J(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=J(b);d=J(a)}return null===c&&null===d}return!1};function qe(a,b){return b===Qd?null:a.wb.get(b.toString())}g.toString=function(){return B(this.I(!0))};function M(a,b){if(null===a)return C;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);K(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new tc(a,M(c));if(a instanceof Array){var d=C,e=a;r(e,function(a,b){if(v(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.K()||!c.e())d=
d.U(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;ib(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new F(a,b)))}});if(0==f.length)return C;var l=je(f,Ub,function(a){return a.name},Wb);if(h){var m=je(f,td(N));return new R(l,M(c),new he({".priority":m},{".priority":N}))}return new R(l,M(c),le)}var re=Math.log(2);
function se(a){this.count=parseInt(Math.log(a+1)/re,10);this.jf=this.count-1;this.eg=a+1&parseInt(Array(this.count+1).join("1"),2)}function te(a){var b=!(a.eg&1<<a.jf);a.jf--;return b}
function je(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],t=c?c(m):m;return new fc(t,m.S,!1,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),z=e(m+1,d),m=a[m],t=c?c(m):m;return new fc(t,m.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=t-b,z=t;t-=b;var z=e(k+1,z),k=a[k],I=c?c(k):k,z=new fc(I,k.S,h,null,z);f?f.left=z:m=z;f=z}for(var f=null,m=null,t=a.length,z=0;z<b.count;++z){var I=te(b),zd=Math.pow(2,b.count-(z+1));I?d(zd,!1):(d(zd,!1),d(zd,!0))}return m}(new se(a.length));
return null!==f?new ac(d||b,f):new ac(d||b)}function oe(a){return"number"===typeof a?"number:"+Xc(a):"string:"+a}function me(a){if(a.K()){var b=a.I();K("string"===typeof b||"number"===typeof b||"object"===typeof b&&v(b,".sv"),"Priority must be a string or number.")}else K(a===Vd||a.e(),"priority of unexpected type.");K(a===Vd||a.C().e(),"Priority nodes can't have a priority of their own.")}var C=new R(new ac(Wb),null,le);function ue(){R.call(this,new ac(Wb),C,le)}ma(ue,R);g=ue.prototype;
g.Dc=function(a){return a===this?0:1};g.ca=function(a){return a===this};g.C=function(){return this};g.R=function(){return C};g.e=function(){return!1};var Vd=new ue,Td=new F("[MIN_NAME]",C),Zd=new F("[MAX_NAME]",Vd);function Id(a,b){this.O=a;this.Yd=b}function Fd(a,b,c,d){return new Id(new tb(b,c,d),a.Yd)}function Jd(a){return a.O.ea?a.O.j():null}Id.prototype.w=function(){return this.Yd};function ub(a){return a.Yd.ea?a.Yd.j():null};function ve(a,b){this.W=a;var c=a.n,d=new kd(c.g),c=S(c)?new kd(c.g):c.ja?new qd(c):new ld(c);this.Hf=new xd(c);var e=b.w(),f=b.O,h=d.xa(C,e.j(),null),k=c.xa(C,f.j(),null);this.Ka=new Id(new tb(k,f.ea,c.Na()),new tb(h,e.ea,d.Na()));this.Xa=[];this.lg=new cd(a)}function we(a){return a.W}g=ve.prototype;g.w=function(){return this.Ka.w().j()};g.fb=function(a){var b=ub(this.Ka);return b&&(S(this.W.n)||!a.e()&&!b.R(E(a)).e())?b.Q(a):null};g.e=function(){return 0===this.Xa.length};g.Pb=function(a){this.Xa.push(a)};
g.jb=function(a,b){var c=[];if(b){K(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Oa(this.Xa,function(a){(a=a.gf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Xa.length;++f){var h=this.Xa[f];if(!h.matches(a))e.push(h);else if(a.tf()){e=e.concat(this.Xa.slice(f+1));break}}this.Xa=e}else this.Xa=[];return c};
g.ab=function(a,b,c){a.type===Bd&&null!==a.source.Hb&&(K(ub(this.Ka),"We should always have a full cache before handling merges"),K(Jd(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.Hf.ab(d,a,b,c);b=this.Hf;c=a.je;K(c.O.j().Jc(b.V.g),"Event snap not indexed");K(c.w().j().Jc(b.V.g),"Server snap not indexed");K(Ib(a.je.w())||!Ib(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.je;return xe(this,a.fg,a.je.O.j(),null)};
function ye(a,b){var c=a.Ka.O,d=[];c.j().K()||c.j().P(N,function(a,b){d.push(new D("child_added",b,a))});c.ea&&d.push(Eb(c.j()));return xe(a,d,c.j(),b)}function xe(a,b,c,d){return dd(a.lg,b,c,d?[d]:a.Xa)};function ze(a,b,c){this.type=Bd;this.source=a;this.path=b;this.children=c}ze.prototype.Xc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new Xb(this.source,G,a.value):new ze(this.source,G,a);K(E(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ze(this.source,H(this.path),this.children)};ze.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function Ae(a,b){this.f=Mc("p:rest:");this.F=a;this.Gb=b;this.Aa=null;this.$={}}function Be(a,b){if(n(b))return"tag$"+b;K(fe(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=Ae.prototype;
g.yf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.va());var f=Be(a,c),h={};this.$[f]=h;a=ge(a.n);var k=this;Ce(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Gb(e,t,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Rf=function(a,b){var c=Be(a,b);delete this.$[c]};g.M=function(a,b){this.Aa=a;var c=$c(a),d=c.data,c=c.Bc&&c.Bc.exp;b&&b("ok",{auth:d,expires:c})};g.ge=function(a){this.Aa=null;a("ok",null)};g.Me=function(){};
g.Cf=function(){};g.Jd=function(){};g.put=function(){};g.zf=function(){};g.Ue=function(){};
function Ce(a,b,c,d){c=c||{};c.format="export";a.Aa&&(c.auth=a.Aa);var e=(a.F.kb?"https://":"http://")+a.F.host+b+"?"+kb(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=nb(f.responseText)}catch(c){O("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&O("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function De(a){K(ea(a)&&0<a.length,"Requires a non-empty array");this.Xf=a;this.Oc={}}De.prototype.fe=function(a,b){var c;c=this.Oc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].zc.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};De.prototype.Eb=function(a,b,c){Ee(this,a);this.Oc[a]=this.Oc[a]||[];this.Oc[a].push({zc:b,Ma:c});(a=this.Ae(a))&&b.apply(c,a)};
De.prototype.ic=function(a,b,c){Ee(this,a);a=this.Oc[a]||[];for(var d=0;d<a.length;d++)if(a[d].zc===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Ee(a,b){K(Ta(a.Xf,function(a){return a===b}),"Unknown event: "+b)};var Fe=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);K(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);K(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Ge(){De.call(this,["online"]);this.kc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.kc||(a.kc=!0,a.fe("online",!0))},!1);window.addEventListener("offline",function(){a.kc&&(a.kc=!1,a.fe("online",!1))},!1)}}ma(Ge,De);Ge.prototype.Ae=function(a){K("online"===a,"Unknown event type: "+a);return[this.kc]};ca(Ge);function He(){De.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Ob=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Ob&&(c.Ob=b,c.fe("visible",b))},!1)}}ma(He,De);He.prototype.Ae=function(a){K("visible"===a,"Unknown event type: "+a);return[this.Ob]};ca(He);function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=E(a);if(null===c)return b;if(c===E(b))return T(H(a),H(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Ie(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Vb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function E(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Kd(a){return a.o.length-a.Z}function H(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function Ld(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
g.u=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z>=this.o.length};g.ca=function(a){if(Kd(this)!==Kd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Z,c=a.Z;if(Kd(this)>Kd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var G=new L("");function Je(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.lf=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=Zc(this.Qa[c]);Ke(this)}Je.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=Zc(a);Ke(this)};Je.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=Zc(a);0<this.Qa.length&&--this.Ha};
function Ke(a){if(768<a.Ha)throw Error(a.lf+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.lf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Le(a));}function Le(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Me(a,b){this.value=a;this.children=b||Ne}var Ne=new ac(function(a,b){return a===b?0:a<b?-1:1});function Oe(a){var b=Pd;r(a,function(a,d){b=b.set(new L(d),a)});return b}g=Me.prototype;g.e=function(){return null===this.value&&this.children.e()};function Pe(a,b,c){if(null!=a.value&&c(a.value))return{path:G,value:a.value};if(b.e())return null;var d=E(b);a=a.children.get(d);return null!==a?(b=Pe(a,H(b),c),null!=b?{path:(new L(d)).u(b.path),value:b.value}:null):null}
function Qe(a,b){return Pe(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(E(a));return null!==b?b.subtree(H(a)):Pd};g.set=function(a,b){if(a.e())return new Me(b,this.children);var c=E(a),d=(this.children.get(c)||Pd).set(H(a),b),c=this.children.Oa(c,d);return new Me(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Pd:new Me(null,this.children);var b=E(a),c=this.children.get(b);return c?(a=c.remove(H(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?Pd:new Me(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(E(a));return b?b.get(H(a)):null};
function Od(a,b,c){if(b.e())return c;var d=E(b);b=Od(a.children.get(d)||Pd,H(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new Me(a.value,d)}function Re(a,b){return Se(a,G,b)}function Se(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Se(f,b.u(a),c)});return c(b,a.value,d)}function Te(a,b,c){return Ue(a,b,G,c)}function Ue(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=E(b);return(a=a.children.get(e))?Ue(a,H(b),c.u(e),d):null}
function Ve(a,b,c){var d=G;if(!b.e()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=E(b),(a=a.children.get(e))&&We(a,H(b),d.u(e),c))}}function We(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=E(b);return(a=a.children.get(e))?We(a,H(b),c.u(e),d):Pd}function Md(a,b){Xe(a,G,b)}function Xe(a,b,c){a.children.ia(function(a,e){Xe(e,b.u(a),c)});a.value&&c(b,a.value)}function Ye(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Pd=new Me(null);
Me.prototype.toString=function(){var a={};Md(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Ze(a,b,c){this.type=Ed;this.source=$e;this.path=a;this.Qb=b;this.Vd=c}Ze.prototype.Xc=function(a){if(this.path.e()){if(null!=this.Qb.value)return K(this.Qb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Qb.subtree(new L(a));return new Ze(G,a,this.Vd)}K(E(this.path)===a,"operationForChild called for unrelated child.");return new Ze(H(this.path),this.Qb,this.Vd)};
Ze.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Vd+" affectedTree="+this.Qb+")"};var Yb=0,Bd=1,Ed=2,$b=3;function af(a,b,c,d){this.we=a;this.pf=b;this.Hb=c;this.af=d;K(!d||b,"Tagged queries must be from server.")}var $e=new af(!0,!1,null,!1),bf=new af(!1,!0,null,!1);af.prototype.toString=function(){return this.we?"user":this.af?"server(queryID="+this.Hb+")":"server"};function cf(a){this.X=a}var df=new cf(new Me(null));function ef(a,b,c){if(b.e())return new cf(new Me(c));var d=Qe(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.G(b,c);return new cf(a.X.set(e,d))}a=Od(a.X,b,new Me(c));return new cf(a)}function ff(a,b,c){var d=a;ib(c,function(a,c){d=ef(d,b.u(a),c)});return d}cf.prototype.Rd=function(a){if(a.e())return df;a=Od(this.X,a,Pd);return new cf(a)};function gf(a,b){var c=Qe(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
function hf(a){var b=[],c=a.X.value;null!=c?c.K()||c.P(N,function(a,c){b.push(new F(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new F(a,c.value))});return b}function jf(a,b){if(b.e())return a;var c=gf(a,b);return null!=c?new cf(new Me(c)):new cf(a.X.subtree(b))}cf.prototype.e=function(){return this.X.e()};cf.prototype.apply=function(a){return kf(G,this.X,a)};
function kf(a,b,c){if(null!=b.value)return c.G(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(K(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=kf(a.u(b),f,c)});c.Q(a).e()||null===d||(c=c.G(a.u(".priority"),d));return c};function lf(){this.T=df;this.na=[];this.Mc=-1}function mf(a,b){for(var c=0;c<a.na.length;c++){var d=a.na[c];if(d.kd===b)return d}return null}g=lf.prototype;
g.Rd=function(a){var b=Ua(this.na,function(b){return b.kd===a});K(0<=b,"removeWrite called with nonexistent writeId.");var c=this.na[b];this.na.splice(b,1);for(var d=c.visible,e=!1,f=this.na.length-1;d&&0<=f;){var h=this.na[f];h.visible&&(f>=b&&nf(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=of(this.na,pf,G),this.Mc=0<this.na.length?this.na[this.na.length-1].kd:-1;else if(c.Ga)this.T=this.T.Rd(c.path);else{var k=this;r(c.children,function(a,b){k.T=k.T.Rd(c.path.u(b))})}return!0}return!1};
g.za=function(a,b,c,d){if(c||d){var e=jf(this.T,a);return!d&&e.e()?b:d||null!=b||null!=gf(e,G)?(e=of(this.na,function(b){return(b.visible||d)&&(!c||!(0<=Na(c,b.kd)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||C,e.apply(b)):null}e=gf(this.T,a);if(null!=e)return e;e=jf(this.T,a);return e.e()?b:null!=b||null!=gf(e,G)?(b=b||C,e.apply(b)):null};
g.yc=function(a,b){var c=C,d=gf(this.T,a);if(d)d.K()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=jf(this.T,a);b.P(N,function(a,b){var d=jf(e,new L(a)).apply(b);c=c.U(a,d)});Oa(hf(e),function(a){c=c.U(a.name,a.S)})}else e=jf(this.T,a),Oa(hf(e),function(a){c=c.U(a.name,a.S)});return c};g.ld=function(a,b,c,d){K(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.u(b);if(null!=gf(this.T,a))return null;a=jf(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
g.xc=function(a,b,c){a=a.u(b);var d=gf(this.T,a);return null!=d?d:sb(c,b)?jf(this.T,a).apply(c.j().R(b)):null};g.tc=function(a){return gf(this.T,a)};g.ne=function(a,b,c,d,e,f){var h;a=jf(this.T,a);h=gf(a,G);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.lb(f);if(h.e()||h.K())return[];b=[];a=td(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=J(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=J(e);return b};
function nf(a,b){return a.Ga?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.u(d).contains(b)})}function pf(a){return a.visible}
function of(a,b,c){for(var d=df,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=T(c,h),d=ef(d,h,f.Ga)):h.contains(c)&&(h=T(h,c),d=ef(d,G,f.Ga.Q(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=ff(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=ff(d,G,f.children);else if(f=w(f.children,E(h)))f=f.Q(H(h)),d=ef(d,G,f)}else throw Fc("WriteRecord should have .snap or .children");}}return d}function qf(a,b){this.Mb=a;this.X=b}g=qf.prototype;
g.za=function(a,b,c){return this.X.za(this.Mb,a,b,c)};g.yc=function(a){return this.X.yc(this.Mb,a)};g.ld=function(a,b,c){return this.X.ld(this.Mb,a,b,c)};g.tc=function(a){return this.X.tc(this.Mb.u(a))};g.ne=function(a,b,c,d,e){return this.X.ne(this.Mb,a,b,c,d,e)};g.xc=function(a,b){return this.X.xc(this.Mb,a,b)};g.u=function(a){return new qf(this.Mb.u(a),this.X)};function rf(){this.ya={}}g=rf.prototype;g.e=function(){return wa(this.ya)};g.ab=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.ya,d),K(null!=d,"SyncTree gave us an op for an invalid query."),d.ab(a,b,c);var e=[];r(this.ya,function(d){e=e.concat(d.ab(a,b,c))});return e};g.Pb=function(a,b,c,d,e){var f=a.va(),h=w(this.ya,f);if(!h){var h=c.za(e?d:null),k=!1;h?k=!0:(h=d instanceof R?c.yc(d):C,k=!1);h=new ve(a,new Id(new tb(h,k,!1),new tb(d,e,!1)));this.ya[f]=h}h.Pb(b);return ye(h,b)};
g.jb=function(a,b,c){var d=a.va(),e=[],f=[],h=null!=sf(this);if("default"===d){var k=this;r(this.ya,function(a,d){f=f.concat(a.jb(b,c));a.e()&&(delete k.ya[d],S(a.W.n)||e.push(a.W))})}else{var l=w(this.ya,d);l&&(f=f.concat(l.jb(b,c)),l.e()&&(delete this.ya[d],S(l.W.n)||e.push(l.W)))}h&&null==sf(this)&&e.push(new U(a.k,a.path));return{Kg:e,mg:f}};function tf(a){return Pa(ra(a.ya),function(a){return!S(a.W.n)})}g.fb=function(a){var b=null;r(this.ya,function(c){b=b||c.fb(a)});return b};
function uf(a,b){if(S(b.n))return sf(a);var c=b.va();return w(a.ya,c)}function sf(a){return va(a.ya,function(a){return S(a.W.n)})||null};function vf(a){this.ta=Pd;this.ib=new lf;this.$e={};this.mc={};this.Nc=a}function wf(a,b,c,d,e){var f=a.ib,h=e;K(d>f.Mc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.na.push({path:b,Ga:c,kd:d,visible:h});h&&(f.T=ef(f.T,b,c));f.Mc=d;return e?xf(a,new Xb($e,b,c)):[]}function yf(a,b,c,d){var e=a.ib;K(d>e.Mc,"Stacking an older merge on top of newer ones");e.na.push({path:b,children:c,kd:d,visible:!0});e.T=ff(e.T,b,c);e.Mc=d;c=Oe(c);return xf(a,new ze($e,b,c))}
function zf(a,b,c){c=c||!1;var d=mf(a.ib,b);if(a.ib.Rd(b)){var e=Pd;null!=d.Ga?e=e.set(G,!0):ib(d.children,function(a,b){e=e.set(new L(a),b)});return xf(a,new Ze(d.path,e,c))}return[]}function Af(a,b,c){c=Oe(c);return xf(a,new ze(bf,b,c))}function Bf(a,b,c,d){d=Cf(a,d);if(null!=d){var e=Df(d);d=e.path;e=e.Hb;b=T(d,b);c=new Xb(new af(!1,!0,e,!0),b,c);return Ef(a,d,c)}return[]}
function Ff(a,b,c,d){if(d=Cf(a,d)){var e=Df(d);d=e.path;e=e.Hb;b=T(d,b);c=Oe(c);c=new ze(new af(!1,!0,e,!0),b,c);return Ef(a,d,c)}return[]}
vf.prototype.Pb=function(a,b){var c=a.path,d=null,e=!1;Ve(this.ta,c,function(a,b){var f=T(a,c);d=b.fb(f);e=e||null!=sf(b);return!d});var f=this.ta.get(c);f?(e=e||null!=sf(f),d=d||f.fb(G)):(f=new rf,this.ta=this.ta.set(c,f));var h;null!=d?h=!0:(h=!1,d=C,Ye(this.ta.subtree(c),function(a,b){var c=b.fb(G);c&&(d=d.U(a,c))}));var k=null!=uf(f,a);if(!k&&!S(a.n)){var l=Gf(a);K(!(l in this.mc),"View does not exist, but we have a tag");var m=Hf++;this.mc[l]=m;this.$e["_"+m]=l}h=f.Pb(a,b,new qf(c,this.ib),d,
h);k||e||(f=uf(f,a),h=h.concat(If(this,a,f)));return h};
vf.prototype.jb=function(a,b,c){var d=a.path,e=this.ta.get(d),f=[];if(e&&("default"===a.va()||null!=uf(e,a))){f=e.jb(a,b,c);e.e()&&(this.ta=this.ta.remove(d));e=f.Kg;f=f.mg;b=-1!==Ua(e,function(a){return S(a.n)});var h=Te(this.ta,d,function(a,b){return null!=sf(b)});if(b&&!h&&(d=this.ta.subtree(d),!d.e()))for(var d=Jf(d),k=0;k<d.length;++k){var l=d[k],m=l.W,l=Kf(this,l);this.Nc.Xe(Lf(m),Mf(this,m),l.xd,l.H)}if(!h&&0<e.length&&!c)if(b)this.Nc.ae(Lf(a),null);else{var t=this;Oa(e,function(a){a.va();
var b=t.mc[Gf(a)];t.Nc.ae(Lf(a),b)})}Nf(this,e)}return f};vf.prototype.za=function(a,b){var c=this.ib,d=Te(this.ta,a,function(b,c){var d=T(b,a);if(d=c.fb(d))return d});return c.za(a,d,b,!0)};function Jf(a){return Re(a,function(a,c,d){if(c&&null!=sf(c))return[sf(c)];var e=[];c&&(e=tf(c));r(d,function(a){e=e.concat(a)});return e})}function Nf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Gf(d),e=a.mc[d];delete a.mc[d];delete a.$e["_"+e]}}}
function Lf(a){return S(a.n)&&!fe(a.n)?a.Ib():a}function If(a,b,c){var d=b.path,e=Mf(a,b);c=Kf(a,c);b=a.Nc.Xe(Lf(b),e,c.xd,c.H);d=a.ta.subtree(d);if(e)K(null==sf(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Re(d,function(a,b,c){if(!a.e()&&b&&null!=sf(b))return[we(sf(b))];var d=[];b&&(d=d.concat(Qa(tf(b),function(a){return a.W})));r(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Nc.ae(Lf(c),Mf(a,c));return b}
function Kf(a,b){var c=b.W,d=Mf(a,c);return{xd:function(){return(b.w()||C).hash()},H:function(b){if("ok"===b){if(d){var f=c.path;if(b=Cf(a,d)){var h=Df(b);b=h.path;h=h.Hb;f=T(b,f);f=new Zb(new af(!1,!0,h,!0),f);b=Ef(a,b,f)}else b=[]}else b=xf(a,new Zb(bf,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.jb(c,null,f)}}}function Gf(a){return a.path.toString()+"$"+a.va()}function Df(a){var b=a.indexOf("$");K(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new L(a.substr(0,b))}}function Cf(a,b){var c=a.$e,d="_"+b;return d in c?c[d]:void 0}function Mf(a,b){var c=Gf(b);return w(a.mc,c)}var Hf=1;
function Ef(a,b,c){var d=a.ta.get(b);K(d,"Missing sync point for query tag that we're tracking");return d.ab(c,new qf(b,a.ib),null)}function xf(a,b){return Of(a,b,a.ta,null,new qf(G,a.ib))}function Of(a,b,c,d,e){if(b.path.e())return Pf(a,b,c,d,e);var f=c.get(G);null==d&&null!=f&&(d=f.fb(G));var h=[],k=E(b.path),l=b.Xc(k);if((c=c.children.get(k))&&l)var m=d?d.R(k):null,k=e.u(k),h=h.concat(Of(a,l,c,m,k));f&&(h=h.concat(f.ab(b,e,d)));return h}
function Pf(a,b,c,d,e){var f=c.get(G);null==d&&null!=f&&(d=f.fb(G));var h=[];c.children.ia(function(c,f){var m=d?d.R(c):null,t=e.u(c),z=b.Xc(c);z&&(h=h.concat(Pf(a,z,f,m,t)))});f&&(h=h.concat(f.ab(b,e,d)));return h};function Qf(){this.children={};this.nd=0;this.value=null}function Rf(a,b,c){this.Gd=a?a:"";this.Zc=b?b:null;this.A=c?c:new Qf}function Sf(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=E(c));)d=new Rf(e,d,w(d.A.children,e)||new Qf),c=H(c);return d}g=Rf.prototype;g.Ca=function(){return this.A.value};function Tf(a,b){K("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Uf(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.nd=0;Uf(this)};
g.wd=function(){return 0<this.A.nd};g.e=function(){return null===this.Ca()&&!this.wd()};g.P=function(a){var b=this;r(this.A.children,function(c,d){a(new Rf(d,b,c))})};function Vf(a,b,c,d){c&&!d&&b(a);a.P(function(a){Vf(a,b,!0,d)});c&&d&&b(a)}function Wf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Zc?this.Gd:this.Zc.path()+"/"+this.Gd)};g.name=function(){return this.Gd};g.parent=function(){return this.Zc};
function Uf(a){if(null!==a.Zc){var b=a.Zc,c=a.Gd,d=a.e(),e=v(b.A.children,c);d&&e?(delete b.A.children[c],b.A.nd--,Uf(b)):d||e||(b.A.children[c]=a.A,b.A.nd++,Uf(b))}};var Xf=/[\[\].#$\/\u0000-\u001F\u007F]/,Yf=/[\[\].#$\u0000-\u001F\u007F]/,Zf=/^[a-zA-Z][a-zA-Z._\-+]+$/;function $f(a){return p(a)&&0!==a.length&&!Xf.test(a)}function ag(a){return null===a||p(a)||ga(a)&&!Qc(a)||ia(a)&&v(a,".sv")}function bg(a,b,c,d){d&&!n(b)||cg(y(a,1,d),b,c)}
function cg(a,b,c){c instanceof L&&(c=new Je(c,a));if(!n(b))throw Error(a+"contains undefined "+Le(c));if(ha(b))throw Error(a+"contains a function "+Le(c)+" with contents: "+b.toString());if(Qc(b))throw Error(a+"contains "+b.toString()+" "+Le(c));if(p(b)&&b.length>10485760/3&&10485760<Zc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Le(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;ib(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!$f(b)))throw Error(a+" contains an invalid key ("+b+") "+Le(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);cg(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Le(c)+" in addition to actual children.");}}
function dg(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!$f(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Ie);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function eg(a,b,c){var d=y(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];ib(b,function(a,b){var k=new L(a);cg(d,b,c.u(k));if(".priority"===Ld(k)&&!ag(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});dg(d,e)}
function fg(a,b,c){if(Qc(c))throw Error(y(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ag(c))throw Error(y(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function gg(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function hg(a,b){if(n(b)&&!$f(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function ig(a,b){if(!p(b)||0===b.length||Yf.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function jg(a,b){if(".info"===E(b))throw Error(a+" failed: Can't modify data under /.info/");}function kg(a,b){if(!p(b))throw Error(y(a,1,!1)+"must be a valid credential (a string).");}function lg(a,b,c){if(!p(c))throw Error(y(a,b,!1)+"must be a valid string.");}
function mg(a,b){lg(a,1,b);if(!Zf.test(b))throw Error(y(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function ng(a,b,c,d){if(!d||n(c))if(!ia(c)||null===c)throw Error(y(a,b,d)+"must be a valid object.");}function og(a,b,c){if(!ia(b)||!v(b,c))throw Error(y(a,1,!1)+'must contain the key "'+c+'"');if(!p(w(b,c)))throw Error(y(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function pg(){this.set={}}g=pg.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return v(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return wa(this.set)};g.count=function(){return pa(this.set)};function qg(a,b){r(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];r(this.set,function(b,c){a.push(c)});return a};function qc(){this.m=this.B=null}qc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.m)return null;var b=E(a);a=H(a);return this.m.contains(b)?this.m.get(b).find(a):null};qc.prototype.nc=function(a,b){if(a.e())this.B=b,this.m=null;else if(null!==this.B)this.B=this.B.G(a,b);else{null==this.m&&(this.m=new pg);var c=E(a);this.m.contains(c)||this.m.add(c,new qc);c=this.m.get(c);a=H(a);c.nc(a,b)}};
function rg(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.K())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){a.nc(new L(b),c)});return rg(a,b)}return null!==a.m?(c=E(b),b=H(b),a.m.contains(c)&&rg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);rc(e,f,c)})}qc.prototype.P=function(a){null!==this.m&&qg(this.m,function(b,c){a(b,c)})};var sg="auth.firebase.com";function tg(a,b,c){this.od=a||{};this.ee=b||{};this.$a=c||{};this.od.remember||(this.od.remember="default")}var ug=["remember","redirectTo"];function vg(a){var b={},c={};ib(a||{},function(a,e){0<=Na(ug,a)?b[a]=e:c[a]=e});return new tg(b,{},c)};function wg(a,b){this.Qe=["session",a.Od,a.hc].join(":");this.be=b}wg.prototype.set=function(a,b){if(!b)if(this.be.length)b=this.be[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Qe,a)};wg.prototype.get=function(){var a=Qa(this.be,q(this.qg,this)),a=Pa(a,function(a){return null!==a});Xa(a,function(a,c){return ad(c.token)-ad(a.token)});return 0<a.length?a.shift():null};wg.prototype.qg=function(a){try{var b=a.get(this.Qe);if(b&&b.token)return b}catch(c){}return null};
wg.prototype.clear=function(){var a=this;Oa(this.be,function(b){b.remove(a.Qe)})};function xg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function yg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xg())}function zg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
function Ag(a){var b=xg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function Bg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Cg(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Dg(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function Eg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Fg(a){var b="";try{a=a.replace("#","");var c=lb(a);c&&v(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function Gg(){var a=Pc(sg);return a.scheme+"://"+a.host+"/v2"}function Hg(a){return Gg()+"/"+a+"/auth/channel"};function Ig(a){var b=this;this.Ac=a;this.ce="*";Ag(8)?this.Rc=this.zd=Bg():(this.Rc=window.opener,this.zd=window);if(!b.Rc)throw"Unable to find relay frame";Cg(this.zd,"message",q(this.jc,this));Cg(this.zd,"message",q(this.Bf,this));try{Jg(this,{a:"ready"})}catch(c){Cg(this.Rc,"load",function(){Jg(b,{a:"ready"})})}Cg(window,"unload",q(this.Bg,this))}function Jg(a,b){b=B(b);Ag(8)?a.Rc.doPost(b,a.ce):a.Rc.postMessage(b,a.ce)}
Ig.prototype.jc=function(a){var b=this,c;try{c=nb(a.data)}catch(d){}c&&"request"===c.a&&(Dg(window,"message",this.jc),this.ce=a.origin,this.Ac&&setTimeout(function(){b.Ac(b.ce,c.d,function(a,c){b.dg=!c;b.Ac=void 0;Jg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Ig.prototype.Bg=function(){try{Dg(this.zd,"message",this.Bf)}catch(a){}this.Ac&&(Jg(this,{a:"error",d:"unknown closed window"}),this.Ac=void 0);try{window.close()}catch(b){}};Ig.prototype.Bf=function(a){if(this.dg&&"die"===a.data)try{window.close()}catch(b){}};function Kg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}Kg.prototype.open=function(a,b){yc.set("redirect_request_id",this.pc);yc.set("redirect_request_id",this.pc);b.requestId=this.pc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+kb(b);window.location=a};Kg.isAvailable=function(){return!zg()&&!yg()};Kg.prototype.Cc=function(){return"redirect"};var Lg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Mg(a){var b=Error(w(Lg,a),a);b.code=a;return b};function Ng(a){var b;(b=!a.window_features)||(b=xg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
Ng.prototype.open=function(a,b,c){function d(a){h&&(document.body.removeChild(h),h=void 0);t&&(t=clearInterval(t));Dg(window,"message",e);Dg(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=nb(a.data);"ready"===b.a?k.postMessage(z,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Ag(8),h,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=Eg(a);if(l!==Eg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(h=document.createElement("iframe"),h.setAttribute("src",this.options.relay_url),h.style.display="none",h.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(h),k=h.contentWindow);a+=(/\?/.test(a)?"":"?")+kb(b);var m=window.open(a,this.options.window_name,this.options.window_features);k||(k=m);var t=setInterval(function(){m&&m.closed&&
(d(!1),c&&(c(Mg("USER_CANCELLED")),c=null))},500),z=B({a:"request",d:b});Cg(window,"unload",d);Cg(window,"message",e)}};
Ng.isAvailable=function(){var a;if(a="postMessage"in window&&!zg())(a=yg()||"undefined"!==typeof navigator&&(!!xg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=xg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!xg().match(/PhantomJS/)};Ng.prototype.Cc=function(){return"popup"};function Og(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Og.prototype.open=function(a,b,c){function d(){c&&(c(Mg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),h;Cg(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=nb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Mg("SERVER_ERROR")):c(Mg("NETWORK_ERROR"));c=null;Dg(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+kb(b),h=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(h=B(b));"application/x-www-form-urlencoded"===k&&(h=kb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};za(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(h)};Og.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=xg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||Ag(10);return a};Og.prototype.Cc=function(){return"json"};function Pg(a){this.pc=Ga()+Ga()+Ga();this.Ef=a}
Pg.prototype.open=function(a,b,c){function d(){c&&(c(Mg("USER_CANCELLED")),c=null)}var e=this,f=Pc(sg),h;b.requestId=this.pc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=kb(b);(h=window.open(a,"_blank","location=no"))&&ha(h.addEventListener)?(h.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(t){}b=!1}b&&(a=Fg(a.url),h.removeEventListener("exit",
d),h.close(),a=new tg(null,null,{requestId:e.pc,requestKey:a}),e.Ef.requestWithCredential("/auth/session",a,c),c=null)}),h.addEventListener("exit",d)):c(Mg("TRANSPORT_UNAVAILABLE"))};Pg.isAvailable=function(){return yg()};Pg.prototype.Cc=function(){return"redirect"};function Qg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Qg.prototype.open=function(a,b,c){function d(){c&&(c(Mg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Dg(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+kb(b);
Cg(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Rg(f,a,c)};
function Rg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Mg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Mg("NETWORK_ERROR"))}},0)}Qg.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
Qg.prototype.Cc=function(){return"json"};function Sg(a,b,c,d){De.call(this,["auth_status"]);this.F=a;this.df=b;this.Vg=c;this.Le=d;this.sc=new wg(a,[xc,yc]);this.mb=null;this.Se=!1;Tg(this)}ma(Sg,De);g=Sg.prototype;g.xe=function(){return this.mb||null};function Tg(a){yc.get("redirect_request_id")&&Ug(a);var b=a.sc.get();b&&b.token?(Vg(a,b),a.df(b.token,function(c,d){Wg(a,c,d,!1,b.token,b)},function(b,d){Xg(a,"resumeSession()",b,d)})):Vg(a,null)}
function Yg(a,b,c,d,e,f){"firebaseio-demo.com"===a.F.domain&&O("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.df(b,function(f,k){Wg(a,f,k,!0,b,c,d||{},e)},function(b,c){Xg(a,"auth()",b,c,f)})}function Zg(a,b){a.sc.clear();Vg(a,null);a.Vg(function(a,d){if("ok"===a)P(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;P(b,f)}})}
function Wg(a,b,c,d,e,f,h,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=bd(e)?e:"",c=null,b&&v(b,"uid")?c=w(b,"uid"):v(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&v(b,"provider")?c=w(b,"provider"):v(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.sc.clear(),bd(e)&&(h=h||{},c=xc,"sessionOnly"===h.remember&&(c=yc),"none"!==h.remember&&a.sc.set(f,c)),Vg(a,f)),P(k,null,f)):(a.sc.clear(),Vg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,P(k,f))}
function Xg(a,b,c,d,e){O(b+" was canceled: "+d);a.sc.clear();Vg(a,null);a=Error(d);a.code=c.toUpperCase();P(e,a)}function $g(a,b,c,d,e){ah(a);c=new tg(d||{},{},c||{});bh(a,[Og,Qg],"/auth/"+b,c,e)}
function ch(a,b,c,d){ah(a);var e=[Ng,Pg];c=vg(c);"anonymous"===b||"password"===b?setTimeout(function(){P(d,Mg("TRANSPORT_UNAVAILABLE"))},0):(c.ee.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.ee.relay_url=Hg(a.F.hc),c.ee.requestWithCredential=q(a.qc,a),bh(a,e,"/auth/"+b,c,d))}
function Ug(a){var b=yc.get("redirect_request_id");if(b){var c=yc.get("redirect_client_options");yc.remove("redirect_request_id");yc.remove("redirect_client_options");var d=[Og,Qg],b={requestId:b,requestKey:Fg(document.location.hash)},c=new tg(c,{},b);a.Se=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}bh(a,d,"/auth/session",c,function(){this.Se=!1}.bind(a))}}
g.se=function(a,b){ah(this);var c=vg(a);c.$a._method="POST";this.qc("/users",c,function(a,c){a?P(b,a):P(b,a,c)})};g.Te=function(a,b){var c=this;ah(this);var d="/users/"+encodeURIComponent(a.email),e=vg(a);e.$a._method="DELETE";this.qc(d,e,function(a,d){!a&&d&&d.uid&&c.mb&&c.mb.uid&&c.mb.uid===d.uid&&Zg(c);P(b,a)})};g.pe=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=vg(a);d.$a._method="PUT";d.$a.password=a.newPassword;this.qc(c,d,function(a){P(b,a)})};
g.oe=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=vg(a);d.$a._method="PUT";d.$a.email=a.newEmail;d.$a.password=a.password;this.qc(c,d,function(a){P(b,a)})};g.Ve=function(a,b){ah(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=vg(a);d.$a._method="POST";this.qc(c,d,function(a){P(b,a)})};g.qc=function(a,b,c){dh(this,[Og,Qg],a,b,c)};
function bh(a,b,c,d,e){dh(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Yg(a,c.token,c,d.od,function(a,b){a?P(e,a):P(e,null,b)}):P(e,b||Mg("UNKNOWN_ERROR"))})}
function dh(a,b,c,d,e){b=Pa(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){P(e,Mg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.ee),d=jb(d.$a),d.v="js-"+hb,d.transport=b.Cc(),d.suppress_status_codes=!0,a=Gg()+"/"+a.F.hc+c,b.open(a,d,function(a,b){if(a)P(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;P(e,c)}else P(e,null,b)}))}
function Vg(a,b){var c=null!==a.mb||null!==b;a.mb=b;c&&a.fe("auth_status",b);a.Le(null!==b)}g.Ae=function(a){K("auth_status"===a,'initial event must be of type "auth_status"');return this.Se?null:[this.mb]};function ah(a){var b=a.F;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===sg)throw Error("This custom Firebase server ('"+a.F.domain+"') does not support delegated login.");};var Cc="websocket",Dc="long_polling";function eh(a){this.jc=a;this.Nd=[];this.Sb=0;this.qe=-1;this.Fb=null}function fh(a,b,c){a.qe=b;a.Fb=c;a.qe<a.Sb&&(a.Fb(),a.Fb=null)}function gh(a,b,c){for(a.Nd[b]=c;a.Nd[a.Sb];){var d=a.Nd[a.Sb];delete a.Nd[a.Sb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Db(function(){f.jc(d[e])})}if(a.Sb===a.qe){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Sb++}};function hh(a,b,c,d){this.re=a;this.f=Mc(a);this.nb=this.ob=0;this.Ua=Rb(b);this.Qf=c;this.Hc=!1;this.Bb=d;this.jd=function(a){return Bc(b,Dc,a)}}var ih,jh;
hh.prototype.open=function(a,b){this.hf=0;this.la=b;this.Af=new eh(a);this.zb=!1;var c=this;this.qb=setTimeout(function(){c.f("Timed out trying to connect.");c.gb();c.qb=null},Math.floor(3E4));Rc(function(){if(!c.zb){c.Sa=new kh(function(a,b,d,k,l){lh(c,arguments);if(c.Sa)if(c.qb&&(clearTimeout(c.qb),c.qb=null),c.Hc=!0,"start"==a)c.id=b,c.Gf=d;else if("close"===a)b?(c.Sa.Xd=!1,fh(c.Af,b,function(){c.gb()})):c.gb();else throw Error("Unrecognized command received: "+a);},function(a,b){lh(c,arguments);
gh(c.Af,a,b)},function(){c.gb()},c.jd);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Sa.he&&(a.cb=c.Sa.he);a.v="5";c.Qf&&(a.s=c.Qf);c.Bb&&(a.ls=c.Bb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.jd(a);c.f("Connecting via long-poll to "+a);mh(c.Sa,a,function(){})}})};
hh.prototype.start=function(){var a=this.Sa,b=this.Gf;a.ug=this.id;a.vg=b;for(a.le=!0;nh(a););a=this.id;b=this.Gf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.jd(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
hh.isAvailable=function(){return ih||!jh&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Xg)&&!0};g=hh.prototype;g.Ed=function(){};g.dd=function(){this.zb=!0;this.Sa&&(this.Sa.close(),this.Sa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.qb&&(clearTimeout(this.qb),this.qb=null)};
g.gb=function(){this.zb||(this.f("Longpoll is closing itself"),this.dd(),this.la&&(this.la(this.Hc),this.la=null))};g.close=function(){this.zb||(this.f("Longpoll is being closed."),this.dd())};g.send=function(a){a=B(a);this.ob+=a.length;Ob(this.Ua,"bytes_sent",a.length);a=Ic(a);a=fb(a,!0);a=Vc(a,1840);for(var b=0;b<a.length;b++){var c=this.Sa;c.ad.push({Mg:this.hf,Ug:a.length,kf:a[b]});c.le&&nh(c);this.hf++}};function lh(a,b){var c=B(b).length;a.nb+=c;Ob(a.Ua,"bytes_received",c)}
function kh(a,b,c,d){this.jd=d;this.hb=c;this.Pe=new pg;this.ad=[];this.te=Math.floor(1E8*Math.random());this.Xd=!0;this.he=Ec();window["pLPCommand"+this.he]=a;window["pRTLPCB"+this.he]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||Cb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.eb=a.contentDocument:a.contentWindow?a.eb=a.contentWindow.document:a.document&&(a.eb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.eb.open(),this.Ea.eb.write(a),this.Ea.eb.close()}catch(f){Cb("frame writing exception"),f.stack&&Cb(f.stack),Cb(f)}}
kh.prototype.close=function(){this.le=!1;if(this.Ea){this.Ea.eb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.hb;b&&(this.hb=null,b())};
function nh(a){if(a.le&&a.Xd&&a.Pe.count()<(0<a.ad.length?2:1)){a.te++;var b={};b.id=a.ug;b.pw=a.vg;b.ser=a.te;for(var b=a.jd(b),c="",d=0;0<a.ad.length;)if(1870>=a.ad[0].kf.length+30+c.length){var e=a.ad.shift(),c=c+"&seg"+d+"="+e.Mg+"&ts"+d+"="+e.Ug+"&d"+d+"="+e.kf;d++}else break;oh(a,b+c,a.te);return!0}return!1}function oh(a,b,c){function d(){a.Pe.remove(c);nh(a)}a.Pe.add(c,1);var e=setTimeout(d,Math.floor(25E3));mh(a,b,function(){clearTimeout(e);d()})}
function mh(a,b,c){setTimeout(function(){try{if(a.Xd){var d=a.Ea.eb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){Cb("Long-poll script failed to load: "+b);a.Xd=!1;a.close()};a.Ea.eb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var ph=null;"undefined"!==typeof MozWebSocket?ph=MozWebSocket:"undefined"!==typeof WebSocket&&(ph=WebSocket);function qh(a,b,c,d){this.re=a;this.f=Mc(this.re);this.frames=this.Kc=null;this.nb=this.ob=this.bf=0;this.Ua=Rb(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.ef=Bc(b,Cc,a)}var rh;
qh.prototype.open=function(a,b){this.hb=b;this.zg=a;this.f("Websocket connecting to "+this.ef);this.Hc=!1;xc.set("previous_websocket_failure",!0);try{this.ua=new ph(this.ef)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.gb();return}var e=this;this.ua.onopen=function(){e.f("Websocket connected.");e.Hc=!0};this.ua.onclose=function(){e.f("Websocket connection was disconnected.");e.ua=null;e.gb()};this.ua.onmessage=function(a){if(null!==e.ua)if(a=a.data,e.nb+=
a.length,Ob(e.Ua,"bytes_received",a.length),sh(e),null!==e.frames)th(e,a);else{a:{K(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.bf=b;e.frames=[];a=null;break a}}e.bf=1;e.frames=[]}null!==a&&th(e,a)}};this.ua.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.gb()}};qh.prototype.start=function(){};
qh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ph&&!rh};qh.responsesRequiredToBeHealthy=2;qh.healthyTimeout=3E4;g=qh.prototype;g.Ed=function(){xc.remove("previous_websocket_failure")};function th(a,b){a.frames.push(b);if(a.frames.length==a.bf){var c=a.frames.join("");a.frames=null;c=nb(c);a.zg(c)}}
g.send=function(a){sh(this);a=B(a);this.ob+=a.length;Ob(this.Ua,"bytes_sent",a.length);a=Vc(a,16384);1<a.length&&this.ua.send(String(a.length));for(var b=0;b<a.length;b++)this.ua.send(a[b])};g.dd=function(){this.zb=!0;this.Kc&&(clearInterval(this.Kc),this.Kc=null);this.ua&&(this.ua.close(),this.ua=null)};g.gb=function(){this.zb||(this.f("WebSocket is closing itself"),this.dd(),this.hb&&(this.hb(this.Hc),this.hb=null))};g.close=function(){this.zb||(this.f("WebSocket is being closed"),this.dd())};
function sh(a){clearInterval(a.Kc);a.Kc=setInterval(function(){a.ua&&a.ua.send("0");sh(a)},Math.floor(45E3))};function uh(a){vh(this,a)}var wh=[hh,qh];function vh(a,b){var c=qh&&qh.isAvailable(),d=c&&!(xc.wf||!0===xc.get("previous_websocket_failure"));b.Wg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.gd=[qh];else{var e=a.gd=[];Wc(wh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function xh(a){if(0<a.gd.length)return a.gd[0];throw Error("No transports available");};function yh(a,b,c,d,e,f,h){this.id=a;this.f=Mc("c:"+this.id+":");this.jc=c;this.Wc=d;this.la=e;this.Ne=f;this.F=b;this.Md=[];this.ff=0;this.Pf=new uh(b);this.Ta=0;this.Bb=h;this.f("Connection created");zh(this)}
function zh(a){var b=xh(a.Pf);a.J=new b("c:"+a.id+":"+a.ff++,a.F,void 0,a.Bb);a.Re=b.responsesRequiredToBeHealthy||0;var c=Ah(a,a.J),d=Bh(a,a.J);a.hd=a.J;a.cd=a.J;a.D=null;a.Ab=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.yd=setTimeout(function(){a.yd=null;a.Ab||(a.J&&102400<a.J.nb?(a.f("Connection exceeded healthy timeout but has received "+a.J.nb+" bytes.  Marking connection healthy."),a.Ab=!0,a.J.Ed()):a.J&&10240<a.J.ob?a.f("Connection exceeded healthy timeout but has sent "+
a.J.ob+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Bh(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Ta?1===a.Ta&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.F.Ya.substr(0,2)&&(xc.remove("host:"+a.F.host),a.F.Ya=a.F.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.hd!==c&&a.cd!==c||a.close()):a.f("closing an old connection")}}
function Ah(a,b){return function(c){if(2!=a.Ta)if(b===a.cd){var d=Tc("t",c);c=Tc("d",c);if("c"==d){if(d=Tc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Nf=c.s;Ac(a.F,f);0==a.Ta&&(a.J.start(),Ch(a,a.J,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Pf,(c=1<c.gd.length?c.gd[1]:null)&&Dh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.cd=a.D;for(c=0;c<a.Md.length;++c)a.Id(a.Md[c]);a.Md=[];Eh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Ne&&(a.Ne(c),a.Ne=null),a.la=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ac(a.F,c),1===a.Ta?a.close():(Fh(a),zh(a))):"e"===d?Nc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Gh(a),Hh(a)):Nc("Unknown control packet command: "+d)}else"d"==d&&a.Id(c)}else if(b===a.D)if(d=Tc("t",c),c=Tc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ih(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.hd!==a.D&&a.cd!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.Mf--,Ih(a)));else if("d"==d)a.Md.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}yh.prototype.Fa=function(a){Jh(this,{t:"d",d:a})};function Eh(a){a.hd===a.D&&a.cd===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.re),a.J=a.D,a.D=null)}
function Ih(a){0>=a.Mf?(a.f("Secondary connection is healthy."),a.Ab=!0,a.D.Ed(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.hd=a.D,Eh(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}yh.prototype.Id=function(a){Gh(this);this.jc(a)};function Gh(a){a.Ab||(a.Re--,0>=a.Re&&(a.f("Primary connection is healthy."),a.Ab=!0,a.J.Ed()))}
function Dh(a,b){a.D=new b("c:"+a.id+":"+a.ff++,a.F,a.Nf);a.Mf=b.responsesRequiredToBeHealthy||0;a.D.open(Ah(a,a.D),Bh(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function Ch(a,b,c){a.f("Realtime connection established.");a.J=b;a.Ta=1;a.Wc&&(a.Wc(c,a.Nf),a.Wc=null);0===a.Re?(a.f("Primary connection is healthy."),a.Ab=!0):setTimeout(function(){Hh(a)},Math.floor(5E3))}
function Hh(a){a.Ab||1!==a.Ta||(a.f("sending ping on primary."),Jh(a,{t:"c",d:{t:"p",d:{}}}))}function Jh(a,b){if(1!==a.Ta)throw"Connection is not connected";a.hd.send(b)}yh.prototype.close=function(){2!==this.Ta&&(this.f("Closing realtime connection."),this.Ta=2,Fh(this),this.la&&(this.la(),this.la=null))};function Fh(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.D&&(a.D.close(),a.D=null);a.yd&&(clearTimeout(a.yd),a.yd=null)};function Kh(a,b,c,d){this.id=Lh++;this.f=Mc("p:"+this.id+":");this.xf=this.Ee=!1;this.$={};this.qa=[];this.Yc=0;this.Vc=[];this.oa=!1;this.Za=1E3;this.Fd=3E5;this.Gb=b;this.Uc=c;this.Oe=d;this.F=a;this.sb=this.Aa=this.Ia=this.Bb=this.We=null;this.Ob=!1;this.Td={};this.Lg=0;this.nf=!0;this.Lc=this.Ge=null;Mh(this,0);He.ub().Eb("visible",this.Cg,this);-1===a.host.indexOf("fblocal")&&Ge.ub().Eb("online",this.Ag,this)}var Lh=0,Nh=0;g=Kh.prototype;
g.Fa=function(a,b,c){var d=++this.Lg;a={r:d,a:a,b:b};this.f(B(a));K(this.oa,"sendRequest call when we're not connected not allowed.");this.Ia.Fa(a);c&&(this.Td[d]=c)};g.yf=function(a,b,c,d){var e=a.va(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};K(fe(a.n)||!S(a.n),"listen() called for non-default but complete query");K(!this.$[f][e],"listen() called twice for same path/queryId.");a={H:d,xd:b,Ig:a,tag:c};this.$[f][e]=a;this.oa&&Oh(this,a)};
function Oh(a,b){var c=b.Ig,d=c.path.toString(),e=c.va();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=ee(c.n),f.t=b.tag);f.h=b.xd();a.Fa("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&v(k,"w")){var m=w(k,"w");ea(m)&&0<=Na(m,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==l&&Ph(a,d,e),b.H&&b.H(l,
k))})}g.M=function(a,b,c){this.Aa={ig:a,of:!1,zc:b,md:c};this.f("Authenticating using credential: "+a);Qh(this);(b=40==a.length)||(a=$c(a).Bc,b="object"===typeof a&&!0===w(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Fd=3E4)};g.ge=function(a){delete this.Aa;this.oa&&this.Fa("unauth",{},function(b){a(b.s,b.d)})};
function Qh(a){var b=a.Aa;a.oa&&b&&a.Fa("auth",{cred:b.ig},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Aa===b&&delete a.Aa;b.of?"ok"!==d&&b.md&&b.md(d,c):(b.of=!0,b.zc&&b.zc(d,c))})}g.Rf=function(a,b){var c=a.path.toString(),d=a.va();this.f("Unlisten called for "+c+" "+d);K(fe(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(Ph(this,c,d)&&this.oa){var e=ee(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Fa("n",c)}};
g.Me=function(a,b,c){this.oa?Rh(this,"o",a,b,c):this.Vc.push({$c:a,action:"o",data:b,H:c})};g.Cf=function(a,b,c){this.oa?Rh(this,"om",a,b,c):this.Vc.push({$c:a,action:"om",data:b,H:c})};g.Jd=function(a,b){this.oa?Rh(this,"oc",a,null,b):this.Vc.push({$c:a,action:"oc",data:null,H:b})};function Rh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Fa(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Sh(this,"p",a,b,c,d)};
g.zf=function(a,b,c,d){Sh(this,"m",a,b,c,d)};function Sh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.qa.push({action:b,Jf:d,H:e});a.Yc++;b=a.qa.length-1;a.oa?Th(a,b):a.f("Buffering put: "+c)}function Th(a,b){var c=a.qa[b].action,d=a.qa[b].Jf,e=a.qa[b].H;a.qa[b].Jg=a.oa;a.Fa(c,d,function(d){a.f(c+" response",d);delete a.qa[b];a.Yc--;0===a.Yc&&(a.qa=[]);e&&e(d.s,d.d)})}
g.Ue=function(a){this.oa&&(a={c:a},this.f("reportStats",a),this.Fa("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.Id=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Td[b];c&&(delete this.Td[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Gb(c.p,c.d,!1,c.t):"m"===b?this.Gb(c.p,c.d,!0,c.t):"c"===b?Uh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Aa,delete this.Aa,c&&c.md&&c.md(a,b)):"sd"===b?this.We?this.We(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):Nc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}};g.Wc=function(a,b){this.f("connection ready");this.oa=!0;this.Lc=(new Date).getTime();this.Oe({serverTimeOffset:a-(new Date).getTime()});this.Bb=b;if(this.nf){var c={};c["sdk.js."+hb.replace(/\./g,"-")]=1;yg()&&(c["framework.cordova"]=1);this.Ue(c)}Vh(this);this.nf=!1;this.Uc(!0)};
function Mh(a,b){K(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.sb&&clearTimeout(a.sb);a.sb=setTimeout(function(){a.sb=null;Wh(a)},Math.floor(b))}g.Cg=function(a){a&&!this.Ob&&this.Za===this.Fd&&(this.f("Window became visible.  Reducing delay."),this.Za=1E3,this.Ia||Mh(this,0));this.Ob=a};g.Ag=function(a){a?(this.f("Browser went online."),this.Za=1E3,this.Ia||Mh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
g.Df=function(){this.f("data client disconnected");this.oa=!1;this.Ia=null;for(var a=0;a<this.qa.length;a++){var b=this.qa[a];b&&"h"in b.Jf&&b.Jg&&(b.H&&b.H("disconnect"),delete this.qa[a],this.Yc--)}0===this.Yc&&(this.qa=[]);this.Td={};Xh(this)&&(this.Ob?this.Lc&&(3E4<(new Date).getTime()-this.Lc&&(this.Za=1E3),this.Lc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Za=this.Fd,this.Ge=(new Date).getTime()),a=Math.max(0,this.Za-((new Date).getTime()-this.Ge)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Mh(this,a),this.Za=Math.min(this.Fd,1.3*this.Za));this.Uc(!1)};function Wh(a){if(Xh(a)){a.f("Making a connection attempt");a.Ge=(new Date).getTime();a.Lc=null;var b=q(a.Id,a),c=q(a.Wc,a),d=q(a.Df,a),e=a.id+":"+Nh++;a.Ia=new yh(e,a.F,b,c,d,function(b){O(b+" ("+a.F.toString()+")");a.xf=!0},a.Bb)}}g.yb=function(){this.Ee=!0;this.Ia?this.Ia.close():(this.sb&&(clearTimeout(this.sb),this.sb=null),this.oa&&this.Df())};g.rc=function(){this.Ee=!1;this.Za=1E3;this.Ia||Mh(this,0)};
function Uh(a,b,c){c=c?Qa(c,function(a){return Uc(a)}).join("$"):"default";(a=Ph(a,b,c))&&a.H&&a.H("permission_denied")}function Ph(a,b,c){b=(new L(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===pa(a.$[b])&&delete a.$[b]):d=void 0;return d}function Vh(a){Qh(a);r(a.$,function(b){r(b,function(b){Oh(a,b)})});for(var b=0;b<a.qa.length;b++)a.qa[b]&&Th(a,b);for(;a.Vc.length;)b=a.Vc.shift(),Rh(a,b.action,b.$c,b.data,b.H)}function Xh(a){var b;b=Ge.ub().kc;return!a.xf&&!a.Ee&&b};var V={og:function(){ih=rh=!0}};V.forceLongPolling=V.og;V.pg=function(){jh=!0};V.forceWebSockets=V.pg;V.Pg=function(a,b){a.k.Ra.We=b};V.setSecurityDebugCallback=V.Pg;V.Ye=function(a,b){a.k.Ye(b)};V.stats=V.Ye;V.Ze=function(a,b){a.k.Ze(b)};V.statsIncrementCounter=V.Ze;V.sd=function(a){return a.k.sd};V.dataUpdateCount=V.sd;V.sg=function(a,b){a.k.De=b};V.interceptServerData=V.sg;V.yg=function(a){new Ig(a)};V.onPopupOpen=V.yg;V.Ng=function(a){sg=a};V.setAuthenticationServer=V.Ng;function Q(a,b,c){this.A=a;this.W=b;this.g=c}Q.prototype.I=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.I()};Q.prototype.val=Q.prototype.I;Q.prototype.mf=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.I(!0)};Q.prototype.exportVal=Q.prototype.mf;Q.prototype.ng=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};Q.prototype.exists=Q.prototype.ng;
Q.prototype.u=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));ig("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.u(b);return new Q(this.A.Q(b),c,N)};Q.prototype.child=Q.prototype.u;Q.prototype.Da=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ig("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};Q.prototype.hasChild=Q.prototype.Da;
Q.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().I()};Q.prototype.getPriority=Q.prototype.C;Q.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.K())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new Q(d,b.W.u(c),N))})};Q.prototype.forEach=Q.prototype.forEach;
Q.prototype.wd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.K()?!1:!this.A.e()};Q.prototype.hasChildren=Q.prototype.wd;Q.prototype.name=function(){O("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};Q.prototype.name=Q.prototype.name;Q.prototype.key=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.key()};
Q.prototype.key=Q.prototype.key;Q.prototype.Db=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Db()};Q.prototype.numChildren=Q.prototype.Db;Q.prototype.Ib=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};Q.prototype.ref=Q.prototype.Ib;function Yh(a,b){this.F=a;this.Ua=Rb(a);this.fd=null;this.da=new vb;this.Hd=1;this.Ra=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ba=new Ae(this.F,q(this.Gb,this)),setTimeout(q(this.Uc,this,!0),0)):this.ba=this.Ra=new Kh(this.F,q(this.Gb,this),q(this.Uc,this),q(this.Oe,this));this.Sg=Sb(a,q(function(){return new Mb(this.Ua,this.ba)},this));this.uc=new Rf;
this.Ce=new ob;var c=this;this.Cd=new vf({Xe:function(a,b,f,h){b=[];f=c.Ce.j(a.path);f.e()||(b=xf(c.Cd,new Xb(bf,a.path,f)),setTimeout(function(){h("ok")},0));return b},ae:ba});Zh(this,"connected",!1);this.la=new qc;this.M=new Sg(a,q(this.ba.M,this.ba),q(this.ba.ge,this.ba),q(this.Le,this));this.sd=0;this.De=null;this.L=new vf({Xe:function(a,b,f,h){c.ba.yf(a,f,b,function(b,e){var f=h(b,e);Ab(c.da,a.path,f)});return[]},ae:function(a,b){c.ba.Rf(a,b)}})}g=Yh.prototype;
g.toString=function(){return(this.F.kb?"https://":"http://")+this.F.host};g.name=function(){return this.F.hc};function $h(a){a=a.Ce.j(new L(".info/serverTimeOffset")).I()||0;return(new Date).getTime()+a}function ai(a){a=a={timestamp:$h(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.sd++;var e=new L(a);b=this.De?this.De(a,b):b;a=[];d?c?(b=na(b,function(a){return M(a)}),a=Ff(this.L,e,b,d)):(b=M(b),a=Bf(this.L,e,b,d)):c?(d=na(b,function(a){return M(a)}),a=Af(this.L,e,d)):(d=M(b),a=xf(this.L,new Xb(bf,e,d)));d=e;0<a.length&&(d=bi(this,e));Ab(this.da,d,a)};g.Uc=function(a){Zh(this,"connected",a);!1===a&&ci(this)};g.Oe=function(a){var b=this;Wc(a,function(a,d){Zh(b,d,a)})};g.Le=function(a){Zh(this,"authenticated",a)};
function Zh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.Ce;d.Wd=d.Wd.G(b,c);c=xf(a.Cd,new Xb(bf,b,c));Ab(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,$g:c});var e=ai(this);b=M(b,c);var e=sc(b,e),f=this.Hd++,e=wf(this.L,a,e,f,!0);wb(this.da,e);var h=this;this.ba.put(a.toString(),b.I(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=zf(h.L,f,!e);Ab(h.da,a,e);di(d,b,c)});e=ei(this,a);bi(this,e);Ab(this.da,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=ai(this),f={};r(b,function(a,b){d=!1;var c=M(a);f[b]=sc(c,e)});if(d)Cb("update() called with empty data.  Don't do anything."),di(c,"ok");else{var h=this.Hd++,k=yf(this.L,a,f,h);wb(this.da,k);var l=this;this.ba.zf(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=zf(l.L,h,!e),f=a;0<e.length&&(f=bi(l,a));Ab(l.da,f,e);di(c,b,d)});b=ei(this,a);bi(this,b);Ab(this.da,a,[])}};
function ci(a){a.f("onDisconnectEvents");var b=ai(a),c=[];rc(pc(a.la,b),G,function(b,e){c=c.concat(xf(a.L,new Xb(bf,b,e)));var f=ei(a,b);bi(a,f)});a.la=new qc;Ab(a.da,G,c)}g.Jd=function(a,b){var c=this;this.ba.Jd(a.toString(),function(d,e){"ok"===d&&rg(c.la,a);di(b,d,e)})};function fi(a,b,c,d){var e=M(c);a.ba.Me(b.toString(),e.I(!0),function(c,h){"ok"===c&&a.la.nc(b,e);di(d,c,h)})}function gi(a,b,c,d,e){var f=M(c,d);a.ba.Me(b.toString(),f.I(!0),function(c,d){"ok"===c&&a.la.nc(b,f);di(e,c,d)})}
function hi(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(Cb("onDisconnect().update() called with empty data.  Don't do anything."),di(d,"ok")):a.ba.Cf(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=M(c[l]);a.la.nc(b.u(l),m)}di(d,e,f)})}function ii(a,b,c){c=".info"===E(b.path)?a.Cd.Pb(b,c):a.L.Pb(b,c);yb(a.da,b.path,c)}g.yb=function(){this.Ra&&this.Ra.yb()};g.rc=function(){this.Ra&&this.Ra.rc()};
g.Ye=function(a){if("undefined"!==typeof console){a?(this.fd||(this.fd=new Lb(this.Ua)),a=this.fd.get()):a=this.Ua.get();var b=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ze=function(a){Ob(this.Ua,a);this.Sg.Of[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");Cb(b,arguments)};
function di(a,b,c){a&&Db(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ji(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.Eb("value",f);c={path:b,update:c,H:d,status:null,Ff:Ec(),cf:e,Lf:0,ie:function(){h.ic("value",f)},ke:null,Ba:null,pd:null,qd:null,rd:null};d=a.L.za(b,void 0)||C;c.pd=d;d=c.update(d.I());if(n(d)){cg("transaction failed: Data returned ",d,c.path);c.status=1;e=Sf(a.uc,b);var k=e.Ca()||[];k.push(c);Tf(e,k);"object"===typeof d&&null!==d&&v(d,".priority")?(k=w(d,".priority"),K(ag(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.L.za(b)||C).C().I();e=ai(a);d=M(d,k);e=sc(d,e);c.qd=d;c.rd=e;c.Ba=a.Hd++;c=wf(a.L,b,e,c.Ba,c.cf);Ab(a.da,b,c);ki(a)}else c.ie(),c.qd=null,c.rd=null,c.H&&(a=new Q(c.pd,new U(a,c.path),N),c.H(null,!1,a))}function ki(a,b){var c=b||a.uc;b||li(a,c);if(null!==c.Ca()){var d=mi(a,c);K(0<d.length,"Sending zero length transaction queue");Sa(d,function(a){return 1===a.status})&&ni(a,c.path(),d)}else c.wd()&&c.P(function(b){ki(a,b)})}
function ni(a,b,c){for(var d=Qa(c,function(a){return a.Ba}),e=a.L.za(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];K(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.Lf++;var k=T(b,h.path),d=d.G(k,h.qd)}d=d.I(!0);a.ba.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(zf(a.L,c[f].Ba));if(c[f].H){var h=c[f].rd,k=new U(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new Q(h,k,N)))}c[f].ie()}li(a,Sf(a.uc,b));ki(a);Ab(a.da,b,e);for(f=0;f<d.length;f++)Db(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ke=d;bi(a,b)}},e)}function bi(a,b){var c=oi(a,b),d=c.path(),c=mi(a,c);pi(a,c,d);return d}
function pi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],l=T(c,k.path),m=!1,t;K(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,t=k.ke,e=e.concat(zf(a.L,k.Ba,!0));else if(1===k.status)if(25<=k.Lf)m=!0,t="maxretry",e=e.concat(zf(a.L,k.Ba,!0));else{var z=a.L.za(k.path,f)||C;k.pd=z;var I=b[h].update(z.I());n(I)?(cg("transaction failed: Data returned ",I,k.path),l=M(I),"object"===typeof I&&null!=
I&&v(I,".priority")||(l=l.ga(z.C())),z=k.Ba,I=ai(a),I=sc(l,I),k.qd=l,k.rd=I,k.Ba=a.Hd++,Va(f,z),e=e.concat(wf(a.L,k.path,I,k.Ba,k.cf)),e=e.concat(zf(a.L,z,!0))):(m=!0,t="nodata",e=e.concat(zf(a.L,k.Ba,!0)))}Ab(a.da,c,e);e=[];m&&(b[h].status=3,setTimeout(b[h].ie,Math.floor(0)),b[h].H&&("nodata"===t?(k=new U(a,b[h].path),d.push(q(b[h].H,null,null,!1,new Q(b[h].pd,k,N)))):d.push(q(b[h].H,null,Error(t),!1,null))))}li(a,a.uc);for(h=0;h<d.length;h++)Db(d[h]);ki(a)}}
function oi(a,b){for(var c,d=a.uc;null!==(c=E(b))&&null===d.Ca();)d=Sf(d,c),b=H(b);return d}function mi(a,b){var c=[];qi(a,b,c);c.sort(function(a,b){return a.Ff-b.Ff});return c}function qi(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){qi(a,b,c)})}function li(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Tf(b,0<c.length?c:null)}b.P(function(b){li(a,b)})}
function ei(a,b){var c=oi(a,b).path(),d=Sf(a.uc,b);Wf(d,function(b){ri(a,b)});ri(a,d);Vf(d,function(b){ri(a,b)});return c}
function ri(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(K(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].ke="set"):(K(1===c[h].status,"Unexpected transaction status in abort"),c[h].ie(),e=e.concat(zf(a.L,c[h].Ba,!0)),c[h].H&&d.push(q(c[h].H,null,Error("set"),!1,null))));-1===f?Tf(b,null):c.length=f+1;Ab(a.da,b.path(),e);for(h=0;h<d.length;h++)Db(d[h])}};function W(){this.oc={};this.Sf=!1}W.prototype.yb=function(){for(var a in this.oc)this.oc[a].yb()};W.prototype.rc=function(){for(var a in this.oc)this.oc[a].rc()};W.prototype.ve=function(){this.Sf=!0};ca(W);W.prototype.interrupt=W.prototype.yb;W.prototype.resume=W.prototype.rc;function X(a,b){this.bd=a;this.ra=b}X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);this.bd.Jd(this.ra,a||null)};X.prototype.cancel=X.prototype.cancel;X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);jg("Firebase.onDisconnect().remove",this.ra);A("Firebase.onDisconnect().remove",1,a,!0);fi(this.bd,this.ra,null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);jg("Firebase.onDisconnect().set",this.ra);bg("Firebase.onDisconnect().set",a,this.ra,!1);A("Firebase.onDisconnect().set",2,b,!0);fi(this.bd,this.ra,a,b)};X.prototype.set=X.prototype.set;
X.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);jg("Firebase.onDisconnect().setWithPriority",this.ra);bg("Firebase.onDisconnect().setWithPriority",a,this.ra,!1);fg("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);gi(this.bd,this.ra,a,b,c)};X.prototype.setWithPriority=X.prototype.Kb;
X.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);jg("Firebase.onDisconnect().update",this.ra);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}eg("Firebase.onDisconnect().update",a,this.ra);A("Firebase.onDisconnect().update",2,b,!0);
hi(this.bd,this.ra,a,b)};X.prototype.update=X.prototype.update;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.lc=d}
function si(a){var b=null,c=null;a.ma&&(b=nd(a));a.pa&&(c=pd(a));if(a.g===Qd){if(a.ma){if("[MIN_NAME]"!=md(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.pa){if("[MAX_NAME]"!=od(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!ag(b)||null!=c&&!ag(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(K(a.g instanceof Ud||a.g===$d,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function ti(a){if(a.ma&&a.pa&&a.ja&&(!a.ja||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function ui(a,b){if(!0===a.lc)throw Error(b+": You can't combine multiple orderBy calls.");}g=Y.prototype;g.Ib=function(){x("Query.ref",0,0,arguments.length);return new U(this.k,this.path)};
g.Eb=function(a,b,c,d){x("Query.on",2,4,arguments.length);gg("Query.on",a,!1);A("Query.on",2,b,!1);var e=vi("Query.on",c,d);if("value"===a)ii(this.k,this,new id(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;ii(this.k,this,new jd(f,e.cancel,e.Ma))}return b};
g.ic=function(a,b,c){x("Query.off",0,3,arguments.length);gg("Query.off",a,!0);A("Query.off",2,b,!0);mb("Query.off",3,c);var d=null,e=null;"value"===a?d=new id(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new jd(e,null,c||null));e=this.k;d=".info"===E(this.path)?e.Cd.jb(this,d):e.L.jb(this,d);yb(e.da,this.path,d)};
g.Dg=function(a,b){function c(h){f&&(f=!1,e.ic(a,c),b.call(d.Ma,h))}x("Query.once",2,4,arguments.length);gg("Query.once",a,!1);A("Query.once",2,b,!1);var d=vi("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Eb(a,c,function(b){e.ic(a,c);d.cancel&&d.cancel.call(d.Ma,b)})};
g.He=function(a){O("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");x("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.He(a);ti(b);return new Y(this.k,this.path,b,this.lc)};
g.Ie=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ie(a),this.lc)};
g.Je=function(a){x("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ja)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Je(a),this.lc)};
g.Eg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ig("Query.orderByChild",a);ui(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new Ud(b);b=de(this.n,b);si(b);return new Y(this.k,this.path,b,!0)};g.Fg=function(){x("Query.orderByKey",0,0,arguments.length);ui(this,"Query.orderByKey");var a=de(this.n,Qd);si(a);return new Y(this.k,this.path,a,!0)};g.Gg=function(){x("Query.orderByPriority",0,0,arguments.length);ui(this,"Query.orderByPriority");var a=de(this.n,N);si(a);return new Y(this.k,this.path,a,!0)};
g.Hg=function(){x("Query.orderByValue",0,0,arguments.length);ui(this,"Query.orderByValue");var a=de(this.n,$d);si(a);return new Y(this.k,this.path,a,!0)};g.$d=function(a,b){x("Query.startAt",0,2,arguments.length);bg("Query.startAt",a,this.path,!0);hg("Query.startAt",b);var c=this.n.$d(a,b);ti(c);si(c);if(this.n.ma)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new Y(this.k,this.path,c,this.lc)};
g.td=function(a,b){x("Query.endAt",0,2,arguments.length);bg("Query.endAt",a,this.path,!0);hg("Query.endAt",b);var c=this.n.td(a,b);ti(c);si(c);if(this.n.pa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.lc)};
g.kg=function(a,b){x("Query.equalTo",1,2,arguments.length);bg("Query.equalTo",a,this.path,!1);hg("Query.equalTo",b);if(this.n.ma)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.pa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.$d(a,b).td(a,b)};
g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.k.toString()+(b||"/")};g.va=function(){var a=Uc(ee(this.n));return"{}"===a?"default":a};
function vi(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,mb(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(y(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.Ib;Y.prototype.on=Y.prototype.Eb;Y.prototype.off=Y.prototype.ic;Y.prototype.once=Y.prototype.Dg;Y.prototype.limit=Y.prototype.He;Y.prototype.limitToFirst=Y.prototype.Ie;
Y.prototype.limitToLast=Y.prototype.Je;Y.prototype.orderByChild=Y.prototype.Eg;Y.prototype.orderByKey=Y.prototype.Fg;Y.prototype.orderByPriority=Y.prototype.Gg;Y.prototype.orderByValue=Y.prototype.Hg;Y.prototype.startAt=Y.prototype.$d;Y.prototype.endAt=Y.prototype.td;Y.prototype.equalTo=Y.prototype.kg;Y.prototype.toString=Y.prototype.toString;var Z={};Z.vc=Kh;Z.DataConnection=Z.vc;Kh.prototype.Rg=function(a,b){this.Fa("q",{p:a},b)};Z.vc.prototype.simpleListen=Z.vc.prototype.Rg;Kh.prototype.jg=function(a,b){this.Fa("echo",{d:a},b)};Z.vc.prototype.echo=Z.vc.prototype.jg;Kh.prototype.interrupt=Kh.prototype.yb;Z.Vf=yh;Z.RealTimeConnection=Z.Vf;yh.prototype.sendRequest=yh.prototype.Fa;yh.prototype.close=yh.prototype.close;
Z.rg=function(a){var b=Kh.prototype.put;Kh.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Kh.prototype.put=b}};Z.hijackHash=Z.rg;Z.Uf=zc;Z.ConnectionTarget=Z.Uf;Z.va=function(a){return a.va()};Z.queryIdentifier=Z.va;Z.tg=function(a){return a.k.Ra.$};Z.listens=Z.tg;Z.ve=function(a){a.ve()};Z.forceRestClient=Z.ve;function U(a,b){var c,d,e;if(a instanceof Yh)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=Pc(arguments[0]);c=d.Tg;"firebase"===d.domain&&Oc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||Oc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.kb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new zc(d.host,d.kb,c,"ws"===d.scheme||"wss"===d.scheme);d=new L(d.$c);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!$f(c.hc))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Yf.test(e)));if(f)throw Error(y("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof W)e=b;else if(p(b))e=W.ub(),c.Od=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=W.ub();f=c.toString();var h=w(e.oc,f);h||(h=new Yh(c,e.Sf),e.oc[f]=h);c=h}Y.call(this,c,d,be,!1)}ma(U,Y);var wi=U,xi=["Firebase"],yi=aa;xi[0]in yi||!yi.execScript||yi.execScript("var "+xi[0]);for(var zi;xi.length&&(zi=xi.shift());)!xi.length&&n(wi)?yi[zi]=wi:yi=yi[zi]?yi[zi]:yi[zi]={};U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);W.ub().yb()};U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);W.ub().rc()};
function Lc(a,b){K(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Bb=q(console.log,console):"object"===typeof console.log&&(Bb=function(a){console.log(a)})),b&&yc.set("logging_enabled",!0)):a?Bb=a:(Bb=null,yc.remove("logging_enabled"))}U.enableLogging=Lc;U.ServerValue={TIMESTAMP:{".sv":"timestamp"}};U.SDK_VERSION=hb;U.INTERNAL=V;U.Context=W;U.TEST_ACCESS=Z;
U.prototype.name=function(){O("Firebase.name() being deprecated. Please use Firebase.key() instead.");x("Firebase.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;U.prototype.key=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Ld(this.path)};U.prototype.key=U.prototype.key;
U.prototype.u=function(a){x("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof L))if(null===E(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ig("Firebase.child",b)}else ig("Firebase.child",a);return new U(this.k,this.path.u(a))};U.prototype.child=U.prototype.u;U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.k,a)};U.prototype.parent=U.prototype.parent;
U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};U.prototype.root=U.prototype.root;U.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);jg("Firebase.set",this.path);bg("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);this.k.Kb(this.path,a,null,b||null)};U.prototype.set=U.prototype.set;
U.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);jg("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}eg("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);this.k.update(this.path,a,b||null)};U.prototype.update=U.prototype.update;
U.prototype.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);jg("Firebase.setWithPriority",this.path);bg("Firebase.setWithPriority",a,this.path,!1);fg("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Kb(this.path,a,b,c||null)};U.prototype.setWithPriority=U.prototype.Kb;
U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);jg("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);this.set(null,a)};U.prototype.remove=U.prototype.remove;
U.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);jg("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);ji(this.k,this.path,a,b||null,c)};U.prototype.transaction=U.prototype.transaction;
U.prototype.Og=function(a,b){x("Firebase.setPriority",1,2,arguments.length);jg("Firebase.setPriority",this.path);fg("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);this.k.Kb(this.path.u(".priority"),a,null,b)};U.prototype.setPriority=U.prototype.Og;
U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);jg("Firebase.push",this.path);bg("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=$h(this.k),c=Fe(c),c=this.u(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};U.prototype.push=U.prototype.push;U.prototype.hb=function(){jg("Firebase.onDisconnect",this.path);return new X(this.k,this.path)};U.prototype.onDisconnect=U.prototype.hb;
U.prototype.M=function(a,b,c){O("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);kg("Firebase.auth",a);A("Firebase.auth",2,b,!0);A("Firebase.auth",3,b,!0);Yg(this.k.M,a,{},{remember:"none"},b,c)};U.prototype.auth=U.prototype.M;U.prototype.ge=function(a){x("Firebase.unauth",0,1,arguments.length);A("Firebase.unauth",1,a,!0);Zg(this.k.M,a)};U.prototype.unauth=U.prototype.ge;
U.prototype.xe=function(){x("Firebase.getAuth",0,0,arguments.length);return this.k.M.xe()};U.prototype.getAuth=U.prototype.xe;U.prototype.xg=function(a,b){x("Firebase.onAuth",1,2,arguments.length);A("Firebase.onAuth",1,a,!1);mb("Firebase.onAuth",2,b);this.k.M.Eb("auth_status",a,b)};U.prototype.onAuth=U.prototype.xg;U.prototype.wg=function(a,b){x("Firebase.offAuth",1,2,arguments.length);A("Firebase.offAuth",1,a,!1);mb("Firebase.offAuth",2,b);this.k.M.ic("auth_status",a,b)};U.prototype.offAuth=U.prototype.wg;
U.prototype.Zf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);kg("Firebase.authWithCustomToken",a);A("Firebase.authWithCustomToken",2,b,!1);ng("Firebase.authWithCustomToken",3,c,!0);Yg(this.k.M,a,{},c||{},b)};U.prototype.authWithCustomToken=U.prototype.Zf;U.prototype.$f=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);mg("Firebase.authWithOAuthPopup",a);A("Firebase.authWithOAuthPopup",2,b,!1);ng("Firebase.authWithOAuthPopup",3,c,!0);ch(this.k.M,a,c,b)};
U.prototype.authWithOAuthPopup=U.prototype.$f;U.prototype.ag=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);mg("Firebase.authWithOAuthRedirect",a);A("Firebase.authWithOAuthRedirect",2,b,!1);ng("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.M;ah(d);var e=[Kg],f=vg(c);"anonymous"===a||"firebase"===a?P(b,Mg("TRANSPORT_UNAVAILABLE")):(yc.set("redirect_client_options",f.od),bh(d,e,"/auth/"+a,f,b))};U.prototype.authWithOAuthRedirect=U.prototype.ag;
U.prototype.bg=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);mg("Firebase.authWithOAuthToken",a);A("Firebase.authWithOAuthToken",3,c,!1);ng("Firebase.authWithOAuthToken",4,d,!0);p(b)?(lg("Firebase.authWithOAuthToken",2,b),$g(this.k.M,a+"/token",{access_token:b},d,c)):(ng("Firebase.authWithOAuthToken",2,b,!1),$g(this.k.M,a+"/token",b,d,c))};U.prototype.authWithOAuthToken=U.prototype.bg;
U.prototype.Yf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);A("Firebase.authAnonymously",1,a,!1);ng("Firebase.authAnonymously",2,b,!0);$g(this.k.M,"anonymous",{},b,a)};U.prototype.authAnonymously=U.prototype.Yf;
U.prototype.cg=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);ng("Firebase.authWithPassword",1,a,!1);og("Firebase.authWithPassword",a,"email");og("Firebase.authWithPassword",a,"password");A("Firebase.authWithPassword",2,b,!1);ng("Firebase.authWithPassword",3,c,!0);$g(this.k.M,"password",a,c,b)};U.prototype.authWithPassword=U.prototype.cg;
U.prototype.se=function(a,b){x("Firebase.createUser",2,2,arguments.length);ng("Firebase.createUser",1,a,!1);og("Firebase.createUser",a,"email");og("Firebase.createUser",a,"password");A("Firebase.createUser",2,b,!1);this.k.M.se(a,b)};U.prototype.createUser=U.prototype.se;U.prototype.Te=function(a,b){x("Firebase.removeUser",2,2,arguments.length);ng("Firebase.removeUser",1,a,!1);og("Firebase.removeUser",a,"email");og("Firebase.removeUser",a,"password");A("Firebase.removeUser",2,b,!1);this.k.M.Te(a,b)};
U.prototype.removeUser=U.prototype.Te;U.prototype.pe=function(a,b){x("Firebase.changePassword",2,2,arguments.length);ng("Firebase.changePassword",1,a,!1);og("Firebase.changePassword",a,"email");og("Firebase.changePassword",a,"oldPassword");og("Firebase.changePassword",a,"newPassword");A("Firebase.changePassword",2,b,!1);this.k.M.pe(a,b)};U.prototype.changePassword=U.prototype.pe;
U.prototype.oe=function(a,b){x("Firebase.changeEmail",2,2,arguments.length);ng("Firebase.changeEmail",1,a,!1);og("Firebase.changeEmail",a,"oldEmail");og("Firebase.changeEmail",a,"newEmail");og("Firebase.changeEmail",a,"password");A("Firebase.changeEmail",2,b,!1);this.k.M.oe(a,b)};U.prototype.changeEmail=U.prototype.oe;
U.prototype.Ve=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);ng("Firebase.resetPassword",1,a,!1);og("Firebase.resetPassword",a,"email");A("Firebase.resetPassword",2,b,!1);this.k.M.Ve(a,b)};U.prototype.resetPassword=U.prototype.Ve;})();

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});

/**
 * Declares global functions for interacting with the ORM.
 * model - the symbol
 * controller - an object that stores references to functions for initializing views, models, and the ORM.
 *
 */
(function(model, view, controller, iterator, typechecker) {
	window[controller] = {
		view: {},
		color: {},
		module: {}
	};

	window[controller].start = function(url, option) {
		option = window[typechecker].option(option, { func: 'load' });

		window[model] = new FirebaseORM(url, option);
		window[model].load(function() {
			if (window[typechecker].func(option.load))
				option.load();
		});
	};

	window[controller]._module = {};

	// Registering a new module or module function.
	window[controller].module = function(n, f, k, m) {
		if (Is.str(n)) {
			m = window[controller]._module[n];
			if (! m)
				window[controller]._module[n] = m = { };

			// For registering callback functions and data.
			if (Is.str(f)) {
				if (Is.func(m[f]))
					return m[f](k, m);
				else if (Is.def(k))
					m[f] = k;
				return m[f];
			}
			return m;
		}
		else return window[controller]._module;
	};

	window[view] = function(type, data) {
		if (window[typechecker].str(type)) {
			if (window[typechecker].func(data)) {
				window[controller].view[type] = data;
			}
			else if (window[controller].view[type]) {
				return window[controller].view[type](data);
			}
			else return new FirebaseView(type, data);
		}
		else return new FirebaseView('view', type);
	};

	window[typechecker] = {
		/**
		 * @function Is.array( data )
		 * @description Returns true if the given value is an array.
		 * @param data:any - a value to test
		 */
		array: Array.isArray,

		/**
		 * @function Is.member(test, list)
		 * @description Returns true if the given test value is a member of the given list.
		 * @param test:any - an element to test for membership
		 * @param list:array - a list to search for the element in
		 */
		member: function(m, l) {
			if (Array.isArray(l)) {
				return l.indexOf(m) >= 0;
			}
			else if (l != null && (typeof l === 'object')) {
				return l.hasOwnProperty(m);
			}
			return false;
		},

		/**
		 * @function Is.type( data )
		 * @description Returns the string type of the data member, and the view type if it is a view.
		 */
		type: function(d) {
			if (d == null) return 'undef';
			else {
				if (d instanceof FirebaseView)
					return 'view';
				else if (d instanceof FirebaseObject)
					return 'data';
				else if (Array.isArray(d))
					return 'array';
				else if (typeof d === 'object')
					return 'obj';
				else if (typeof d === 'string' || d instanceof String)
					return 'str';
				else if (!isNaN(parseFloat(d)) && isFinite(d))
					return 'num';
				else if (d === true || d === false)
					return 'bool';
				return 'def';
			}
		},

		/**
		 * @function Is.def(data)
		 * @description Returns true if the given value is defined (not `null` or `undefined`).
		 * @param data - a value to test
		 */
		def: function(d) {
			return d != null;
		},

		/**
		 * @function Is.undef( data )
		 * @description Returns true if the given value is undefined (`null` or `undefined`).
		 * @param data - a value to test
		 */
		undef: function(d) {
			return d == null;
		},

		/**
		 * @function 	Is.view( data )
		 * @description Returns true if the given value is a view object.
		 * @param		data - a value to test
		 */
		view: function(v) {
			return v instanceof FirebaseView;
		},

		/**
		 * @function 	Is.data( data )
		 * @description Returns true if the given value is a database object.
		 * @param		data - a value to test
		 */
		data: function(m) {
			return m instanceof FirebaseObject;
		},

		/**
		 * @function 	Is.viewType( view )
		 * @description Returns true if the given string is a recognized view.
		 */
		viewType: function(t) {
			return window[controller].view[t] != null;
		},

		/**
		 * @function Is.obj( data )
		 * @description Returns true if the given value is a JavaScript object.
		 * @param data:any - a value to test
		 */
		obj: function(o) {
			return o != null && (typeof o === 'object') && ! Array.isArray(o);
		},

		/**
		 * @function Is.empty( data )
		 * @description Returns true if the given value is an empty JavaScript object (`{}`),
		 * an empty array (`[]`), or an empty string (`""`).
		 * @param data:any - a value to test
		 */
		empty: function(o) {
			if (Array.isArray(o) || window[typechecker].str(o)) {
				return o.length == 0;
			}
			else if (o != null && typeof o === 'object') {
				return $.isEmptyObject(o);
			}
			else if (o instanceof FirebaseView) {
				return o.is.parenting == 0;
			}
			return false;
		},

		length: function(o) {
			if (Array.isArray(o)) {
				return o.length;
			}
			else if (o != null && typeof o === 'object') {
				return Object.keys(o).length;
			}
			else return 0;
		},

		/**
		 * @function Is.enum( data )
		 * @description Returns true if the given value can be enumerated (as in an object or array).
		 * @param data:any - a value to test
		 */
		enum: function(e) {
			return e != null && (typeof e === 'object');
		},

		/**
		 * @function Is.str( data )
		 * @description Returns true if the given string is a JavaScript string.
		 * @param data:any - a value to test
		 */
		str: function(s) {
			return s != null && (typeof s === 'string' || s instanceof String);
		},

		/**
		 * @function Is.num( data )
		 * @description Returns true if the given value is numeric.
		 * @param data:any - a value to test
		 */
		num: function(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},

		/**
		 * @function Is.bool( data )
		 * @description Returns true if the given value is a boolean (true or false).
		 * @param data:any - a value to test
		 */
		bool: function(b) {
			return b === true || b === false;
		},

		/**
		 * @function Is.func( data )
		 * @description Returns true if the given value is a JavaScript function.
		 * @param data:any - a value to test
		 */
		func: function(f) {
			return f != null && (typeof f === 'function');
		},

		/**
		 * @function Is.option(data)
		 * @description If the given value is a JavaScript object (i.e. an option mapping `{ k1: v1, k2: v2, ... }`),
		 * then return it as-is, and otherwise return an empty JavaScript object (`{}`)
		 * @param data:any - the value to sanitize into an option mapping
		 */

		/**
		 * @function Is.option(data, map)
		 * @description Returns the data input if it is a JavaScript option object (`{ k1: v1, k2: v2, ... }`),
		 * and otherwise returns an option object created from `map`. The option object is generated by
		 * searching `map`'s keys for the type corresponding to `data`, and using the value of the type
		 * key as the key in the resulting option object.
		 * @example Is.option(5) <i class="fa fa-long-arrow-right"></i> {}<br>
		 * Is.option(5, { num: 'foo' }) <i class="fa fa-long-arrow-right"></i> { foo: 5 }<br>
		 * Is.option('bar', { num: 'a', str: 'b' })	<i class="fa fa-long-arrow-right"></i> { b: 'bar' }
		 * Is.option(, { num: 'a', str: 'b' })	<i class="fa fa-long-arrow-right"></i> { b: 'bar' }
		 */
		option: function(opt, construct) {
			if (Is.obj(opt)) {
				return opt;
			}
			else if (Is.obj(construct)) {
				for (var i in construct) {
					if (Is[i] && Is[i](opt)) {
						var ret = {};
						ret[construct[i]] = opt;
						return ret;
					}
				}
			}
			return {};
		},

		emailRegex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,

		/**
		 * @function Is.email(email)
		 * @description Returns true if the given email is a valid email address.
		 * @param email:string - an email address to test.
		 */
		email: function(email) {
			if (window[typechecker].str(email)) {
				return window[typechecker].emailRegex.test(email);
			}
			return false;
		},


		/**
		 * @function Is.firstName(name)
		 * @description Returns the first name for the given full name, or the name itself if no last name was given.
		 */
		firstName: function(name) {
			if (window[typechecker].str(name))
				return name.trim().substring(0, (name.indexOf(' ') > 0) ? name.indexOf(' ') : name.length)
			return '';
		},

		range: function(n) {
			return Array.apply(null, Array(n)).map(function (_, i) {return i;});
		},

		extension: function(o1, o2) {
			$.extend(true, o1, o2);
			return o1;
		},

		extensionOf: function(o1, o2) {
			var o3 = {};
			$.extend(o3, o1, o2);
			return o3;
		}
	};

	window[iterator] = {
		pair: function(e, f) {
			if (window[typechecker].enum(e))
				$.each(e, f);
		},
		key: function(e, f) {
			if (window[typechecker].enum(e))
				$.each(e, f);
		},
		value: function(e, f) {
			if (window[typechecker].enum(e))
				$.each(e, function(_, v) { f(v); });
			else if (e != null)
				f(e);
		}
	};

})('Model', 'View', 'On', 'Each', 'Is');

/**
 * firebase-orm
 *
 */
function FirebaseObject(orm, type, id) {
	var obj = this,
		firebase = orm.firebase.child('data').child(type).child(id),
		schema = orm.getSchema(type);

	// Internal data/functions
	obj.is = {};

	// Unique ID
	obj.id = id;
	obj.getId = function() {
		return obj.id;
	};

	// Object type
	obj.type = type;
	obj.getType = function() {
		return obj.type;
	};

	// Returns the read/write permission of the object
	obj.permission = false;
	obj.getPermission = function(userId, onPermission) {
		if (Is.undef(userId)) {
			return obj.permission;
		}
		else if (Is.func(userId)) {
			onPermission = userId;
			userId = orm.getId();
		}
		if (Is.func(onPermission)) {
			if (orm.is.admin || orm.is.server) {
				onPermission(obj.permission = 'write');
				obj.on('permission');
			}
			// First check for write permissions
			else firebase.child('write').child(userId).once('value', function(writeData) {
				if (writeData.val()) {
					onPermission(obj.permission = 'write');
					obj.on('permission');
				}
				// Then check if the file is publicly viewable
				else firebase.child('read/public').once('value', function(publicData) {
					if (publicData.val()) {
						onPermission(obj.permission = 'read');
						obj.on('permission');
					}

					// Then check if the file is readable by this user
					else firebase.child('read').child(userId).once('value', function(readPublicData) {
						if (readPublicData.val()) {
							onPermission(obj.permission = 'read');
							obj.on('permission');
						}

						// Otherwise return a false
						else {
							onPermission(obj.permission = false);
							obj.on('permission');
						}
					});
				});
			});
		}
		else return obj.permission;
	};

	obj.getTime = function(k, f) {
		firebase.child('time').child(k).once('value', function(timeUpdate) {
			f(timeUpdate.val());
		});
	};

	obj.setTime = function(k, v) {
		firebase.child('time').child(k).set(v || new Date().getTime());
	};

	// Store handlers
	obj.is.handling = {};
	obj.is.handlingOnce = {};

	/**
	 * @function .on( event )
	 * @param event:string - name of an event
	 * @param event:array - list of events
	 */
	/**
	 * @function .on( event, handler )
	 */
	obj.on = function(e, f) {
		// For event lists.
		if (Is.array(e)) {
			Each.pair(e, function(idx, ev) {
				obj.on(ev, f);
			});
		}
		// For adding new listeners.
		else if (Is.str(e) && Is.func(f)) {
			if (Is.undef(obj.is.handling[e])) {
				obj.is.handling[e] = [];
			}
			obj.is.handling[e].push(f);
		}
		// For having an event trigger another event.
		else if (Is.str(e) && Is.str(f)) {
			obj.on(e, function() {
				obj.on(f);
			});
		}
		// For triggering an event.
		else if (Is.str(e)) {
			// If the object has a one-time handler for this function, it gets triggered first, then removed.
			if (obj.is.handlingOnce[e]) {
				Each.pair(obj.is.handlingOnce[e], function(idx, handler) {
					handler(obj);
				});
				delete obj.is.handlingOnce[e];
			}
			// If the view is handling this event, iterate over the handlers with the view.
			if (obj.is.handling[e]) {
				Each.pair(obj.is.handling[e], function(idx, handler) {
					handler(obj);
				});
			}
		}
		return obj;
	};

	/**
	 * @function .once( event )
	 */
	obj.once = function(e, f) {
		// For lists of events.
		if (Is.array(e)) {
			Each.pair(e, function(idx, ev) {
				obj.once(ev, f);
			});
		}

		// For adding a new event.
		else if (Is.str(e) && Is.func(f)) {
			if (! obj.is.handlingOnce[e]) {
				obj.is.handlingOnce[e] = [];
			}
			obj.is.handlingOnce[e].push(f);
		}

		// Uses the callback mechanism in obj.on to execute events.
		else if (Is.str(e)) {
			obj.on(e);
		}
		return obj;
	};


	// Store state handlers
	obj.is.handlingState = {};
	obj.is.inState = 'start';

	/**
	 * @function .state( state, callback )
	 */
	obj.state = function(state, callback) {
		if (Is.str(state)) {
			// For assigning a new callback function to the state.
			if (Is.func(callback)) {
				// Add the callback function to a list of callbacks for the given state.
				if (! obj.is.handlingState[state])
					obj.is.handlingState[state] = [];
				obj.is.handlingState[state].push(callback);

				// Run the callback function if the object is currently in the given state.
				if (obj.is.inState == state)
					callback();
			}
			// For changing the state.
			else if (obj.is.inState != state) {
				obj.is.inState = state;
				if (obj.is.handlingState[state]) {
					Each.value(obj.is.handlingState[state], function(cb) {
						cb();
					});
				}
			}
		}
		else return obj.is.inState;
	};

	obj.getState = function() {
		return obj.is.inState;
	};

	// Child values/events
	obj.is.parentTo = {};		// Reference to children
	obj.is.parentOf = {};		// Count children

	// Ordering of the child objects
	obj.is.ordering = [];

	// Handle child add/change/remove
	obj.is.handlingChild = {};
	obj.is.handlingAdd = {};
	obj.is.handlingMove = {};
	obj.is.handlingRemove = {};

	/**
	 * Adds a child object to obj object.
	 */
	obj.addChild = function(child, writeChild) {
		if (child instanceof FirebaseObject && obj.is.parentTo[child.type]) {

			// Set the firebase reference to the child object
			if (writeChild !== false) {
				firebase.child('child').child(child.type).child(child.id).set(true);
			}

			// If the child has not yet been added as a child
			if (! obj.is.parentTo[child.type][child.id]) {

				// Add to the ordering list
				if (child.before) {
					obj.is.ordering[child.type].splice(
						obj.is.ordering[child.type].indexOf(child.before), 0, child.id);

					Each.pair(obj.is.ordering[child.type], function(index, childId) {
						firebase.child('child').child(child.type).child(childId).setPriority(index);
					});
				}
				else {
					obj.is.ordering[child.type].push(child.id);
					firebase.child('child').child(child.type).child(child.id)
						.setPriority(obj.is.ordering[child.type].length);
				}


				// Set parent reference and increment count
				obj.is.parentTo[child.type][child.id] = child;
				obj.is.parentOf[child.type]++;
			}

			// Call the child handler with the new object
			Each.value(obj.is.handlingAdd[child.type], function(handler) {
				handler(child);
			});

			return child;
		}
	};

	/**
	 * Returns true if the given child type, child object, or object of the given type with id is a
	 * child of this object.
	 */
	obj.hasChild = function(child, id) {
		if (child instanceof FirebaseObject) {
			if (obj.is.parentTo[child.type])
				return Is.def(obj.is.parentTo[child.type][child.id]);
			else return false;
		}
		else if (Is.str(child) && Is.def(id)) {
			return Is.def(obj.is.parentTo[child]) &&
				   Is.def(obj.is.parentTo[child][id]);
		}
		else return false;
	};

	/**
	 * Returns the child with the given id.
	 */
	obj.getChild = function(type, id) {
		if (Is.str(type) && obj.is.parentTo[type]) {
			return (Is.def(id)) ? obj.is.parentTo[type][id] : obj.is.parentTo[type];
		}
	};

	/**
	 * Moves the child after the given id.
	 */
	obj.moveChild = function(child, before) {
		var childIndex = obj.is.ordering[child.type].indexOf(child.id),
			childOrder = firebase.child('child').child(child.type);
		if (childIndex >= 0) {
			obj.is.ordering[child.type].splice(childIndex, 1);
		}
		obj.is.ordering[child.type].splice(
			(before) ? obj.ordering[child.type].indexOf(before) : 0, 0, child.id);

		Each.pair(obj.is.ordering[child.type], function(index, childId) {
			childOrder.child(childId).setPriority(index);
		});

		// Call the child handler with the new object
		Each.value(obj.is.handlingMove[child.type], function(handler) {
			handler(child, before);
		});
	};

	/**
	 * Passes a child to a callback function whenever it is added or removed.
	 */
	 obj.onChild = function(childType, childHandler) {
		 childHandler = Is.option(childHandler, { func: 'add' });

		 // Add handler
		 if (childHandler.add) {
			if (! obj.is.handlingAdd[childType])
				obj.is.handlingAdd[childType] = [];
		 	obj.is.handlingAdd[childType].push(childHandler.add);

			// If there are child objects already added
			if (obj.is.parentOf[childType] > 0)
				Each.value(obj.is.parentTo[childType], function(child) {
					childHandler.add(child);
				});
		}

		// Ordering handler
		if (childHandler.move) {
			if (! obj.is.handlingMove[childType])
				obj.is.handlingMove[childType] = [];
			obj.is.handlingMove[childType].push(childHandler.move);

			// If there are child objects already added
			if (obj.is.parentOf[childType] > 0)
				Each.value(obj.is.parentTo[type], function(child) {
					childHandler.move(child);
				});
		}

		// Removal handler
		if (childHandler.remove) {
			if (! obj.is.handlingRemove[childType])
				obj.is.handlingRemove[childType] = [];
			obj.is.handlingRemove[childType].push(childHandler.remove);
		}
	 }

	 /**
	  * Iterate through each child in the list.
	  */
	obj.eachChild = function(childType, childHandler) {
		// If there are child objects already added
		if (obj.is.parentTo[childType]) {
			if (Is.func(childHandler)) {
				Each.value(obj.is.parentTo[childType], function(child) {
					child.load(function() {
						if (child.permission)
							childHandler(child);
					});
				});
			}
			else return {
				// Load all children
				load: function(onLoad) {
					var loading = 0,
						loaded = 0,
						done = false;

					Each.value(obj.is.parentTo[childType], function(child) {
						loading++;
						child.load(function() {
							loaded++;
							if (done && loading == loaded && Is.func(onLoad))
								onLoad();
						});
					});

					done = true;
					if (loading == loaded && Is.func(onLoad))
						onLoad();
				}
			};
		}
	};

	/**
	 * Removes the given child object from obj object.
	 */
	obj.removeChild = function(child, id) {
		var childType, childId, childObject;
		// Removes an object
		if (child instanceof FirebaseObject) {
			childId = child.id;
			childType = child.type;
			childObject = child;
		}
		else if (id instanceof FirebaseObject) {
			childType = id.type;
			childId = id.id;
			childObject = id;
		}
		else {
			childType = child;
			childId = id;
		}
		// Remove an object by child and id
		if (Is.str(childType) && Is.def(childId)) {
			if (obj.is.parentTo[childType] && Is.def(obj.is.parentTo[childType][childId])) {
				// Remove the order
				obj.is.ordering[childType].splice(obj.is.ordering[childType].indexOf(childId), 1);

				// Delete the object
				delete obj.is.parentTo[childType][childId];
				obj.is.parentOf[childType]--;

				// Remove the object in Firebase
				firebase.child('child').child(childType).child(childId).remove();

				if (! childObject)
					childObject = orm.get(childType, childId);

				// Call the child handler with the new object
				Each.value(obj.is.handlingRemove[childType], function(handler) {
					handler(childObject);
				});
			}
		}
	};

	/**
	 * Returns the number of children of the given type.
	 */
	obj.countChild = function(childType) {
		if (childType instanceof FirebaseObject)
			childType = childType.type;
		if (obj.is.ordering[childType])
			return obj.is.parentOf[childType];
		else return 0;
	};

	// Set the value of a given field
	obj.set = function(field, value) {
		if (Is.obj(field)) {
			Each.pair(field, function(k, v) {
				if (schema.data[k]) {
					obj[k] = v;
					firebase.child('data').child(k).set(v);
				}
			});
		}
		else if (Is.def(field)) {
			if (Is.def(value)) {
				obj[field] = value;
				firebase.child('data').child(field).set(value);
			}
			else {
				delete obj[field];
				firebase.child('data').child(field).remove();
			}
		}
	};

	/**
	 * Deep copy of the object's data.
	 */
	obj.val = function() {
		var e = {};
		Each.pair(schema.data, function(k, v) {
			if (Is.def(obj[k]))
				e[k] = obj[k];
		});
		return e;
	};

	/**
	 * Remove a field or remove the entire object.
	 */
	obj.remove = function(dataField) {
		if (Is.str(dataField) || Is.num(dataField)) {
			firebase.child('data').child(dataField).remove();
			if (obj[dataField])
				delete obj[dataField];
		}
		else {
			firebase.remove();
			obj.unload();
		}
	}

	// Loading handlers
	obj.is.loaded = false;
	obj.is.listening = {};

	// Load the child types
	Each.pair(schema.child, function(childType, childCount) {
		var ctype = childType.substring(0, 1).toUpperCase() + childType.substring(1);

		obj.is.parentTo[childType] = {};
		obj.is.parentOf[childType] = 0;
		obj.is.ordering[childType] = [];

		// Specific child add, move, and remove handlers with the
		// child type as part of the function name.
		obj['add' + ctype] = function(child) {
			if (child instanceof FirebaseObject) {
				return obj.addChild(child);
			}
			else if (Is.obj(child)) {
				return obj.addChild(orm.push(childType), { data: child });
			}
			else if (Is.undef(child))
				return obj.addChild(orm.push(childType));
		};

		obj['has' + ctype] = function(childId) {
			if (childId instanceof FirebaseObject)
				return obj.hasChild(childId);
			else
				return obj.hasChild(childType, childId);
		};

		obj['get' + ctype] = function(childId) {
			return obj.getChild(childType, childId);
		};

		obj['move' + ctype] = function(child, previous) {
			return obj.moveChild(child, previous);
		};

		obj['remove' + ctype] = function(childId) {
			return obj.removeChild(childType, childId);
		};

		obj['each' + ctype] = function(handler) {
			return obj.eachChild(childType, handler);
		};

		obj['count' + ctype] = function(handler) {
			return obj.countChild(childType);
		};

		obj['on' + ctype] = function(handler) {
			return obj.onChild(childType, handler);
		};

		obj['on' + ctype + 'Added'] = function(handler) {
			return obj.onChild(childType, { add: handler });
		};

		obj['on' + ctype + 'Moved'] = function(handler) {
			return obj.onChild(childType, { move: handler });
		};

		obj['on' + ctype + 'Removed'] = function(handler) {
			return obj.onChild(childType, { remove: handler });
		};
	});

	// Create a getter, setter, listener, and remover for each field
	Each.pair(schema.data, function(fieldName, fieldType) {
		var fname = fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1),
			fieldSchema = orm.getSchema(fieldType);

		// For single values
		if (fieldType === 'str' || fieldType === 'num' || fieldType === 'bool' || fieldSchema) {

			// Sets the field value
			obj['set' + fname] = function(value) {
				if (Is.data(value))
					value = value.getId();
				obj.set(fieldName, value);
			};

			// Returns the field value
			obj['get' + fname] = function() {
				if (fieldSchema)
					return orm.get(fieldType, obj[fieldName]);
				return obj[fieldName];
			};

			obj['remove' + fname] = function() {
				obj.remove(fieldName);
			};
		}

		// For object mappings
		else if (fieldType.indexOf('obj') == 0) {
			var ftype = fieldType.match(/(\w+)\((\w+)\:(\w+)\)/);
			if (! ftype) ftype = ['', 'obj', 'def', 'def'];
			if (! obj[fieldName]) obj[fieldName] = {};

			// Sets a key-value pair in the object field
			obj['set' + fname] = function(key, value) {
				if (orm.getSchema(ftype[2]) || orm.getSchema(ftype[3])) {
					if (Is.data(key))
						key = key.getId();
					if (Is.data(value))
						value = value.getId();
					firebase.child('data').child(fieldName).child(key).set(value);
					obj[fieldName][key] = value;
				}
				else if (Is.obj(key)) {
					firebase.child('data').child(fieldName).set(key);
					obj[fieldName] = key;
				}
				else if (Is[ftype[2]](key) && Is[ftype[3]](value)) {
					if (! obj[fieldName]) obj[fieldName] = {};
					firebase.child('data').child(fieldName).child(key).set(value);
					obj[fieldName][key] = value;
				}
			};

			// Gets a key-value pair from the object field
			obj['get' + fname] = function(key) {
				if (Is.data(key))
					key = key.getId();
				if (Is.def(key) && Is.def(obj[fieldName]))
					return obj[fieldName][key];
				else return obj[fieldName];
			};

			obj['remove' + fname] = function(key) {
				if (Is.def(key)) {
					if (Is.data(key))
						key = key.getId();
					firebase.child('data').child(fieldName).child(key).remove();
					if (obj[fieldName][key])
						delete obj[fieldName][key];
				}
				else obj.remove(fieldName);
			};
		}

		// Listener for value changes to the field
		obj['on' + fname] = function(onValue) {
			if (! obj.is.listening[fieldName]) {

				// Store listener data
				obj.is.listening[fieldName] = {
					handler: (Is.func(onValue)) ? [ onValue ] : [],

					// The Firebase handler
					listener: function(valueData) {
						obj[fieldName] = valueData.val();

						Each.value(obj.is.listening[fieldName].handler, function(handler) {
							handler(obj[fieldName]);
						});
					}
				};

				firebase.child('data').child(fieldName)
					.on('value', obj.is.listening[fieldName].listener);
			}
			else if (Is.func(onValue))
				obj.is.listening[fieldName].handler.push(onValue);
		};
	});

	obj.is.attachingTo = function(target) {
		Each.key(schema.child, function(childType) {
			var ctype = childType.substring(0, 1).toUpperCase() + childType.substring(1);

			target['add' + ctype] = obj['add' + ctype];
			target['has' + ctype] = obj['has' + ctype];
			target['get' + ctype] = obj['get' + ctype];
			target['each' + ctype] = obj['each' + ctype];
			target['move' + ctype] = obj['move' + ctype];
			target['remove' + ctype] = obj['remove' + ctype];
			target['count' + ctype] = obj['count' + ctype];
			target['on' + ctype] = obj['on' + ctype];
			target['on' + ctype + 'Added'] = obj['on' + ctype + 'Added'];
			target['on' + ctype + 'Moved'] = obj['on' + ctype + 'Moved'];
			target['on' + ctype + 'Removed'] = obj['on' + ctype + 'Removed'];
		});

		Each.key(schema.data, function(fieldName) {
			var fname = fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);

			target['set' + fname] = obj['set' + fname];
			target['get' + fname] = obj['get' + fname];
			target['on' + fname]  = obj['on'  + fname];
		});
	};

	/**
	 * Attaches and detaches listeners for child objects. (internal)
	 */
	obj.is.listeningToChild = function(state) {
		if (state == 'on' || state == 'off') {

			// Attach/detach the listeners from the child list
			Each.key(schema.child, function(childType) {

				// When child object references are added
				firebase.child('child').child(childType).orderByPriority()[state]
					('child_added', (state == 'on') ?
						function(childData, previousChild) {
							var newChild = orm.get(childType, childData.key());
							newChild.previous = previousChild;
							obj.addChild( newChild, false );
						} : undefined);

				// When child objects references are moved
				firebase.child('child').child(childType)[state]
					('child_moved', (state == 'on') ?
						function(childData, previousChild) {
							obj.moveChild(obj.getChild(childType, childData.key()), previousChild);
						} : undefined);

				// When child objects references are removed
				firebase.child('child').child(childType)[state]
					('child_removed', (state == 'on') ?
						function(childData) {
							obj.removeChild(childType, childData.key());
						} : undefined);
			});
		}
	};

	/**
	 * Loads the object data and attaches the child listeners.
	 */
	obj.load = function(onLoad) {
		if (! obj.is.loaded) {
			obj.is.loaded = true;
			obj.getPermission(function(permission) {
				if (permission) {
					obj.is.listeningToChild('on');

					// Load the object's data
					firebase.child('data').once('value', function(objData) {
						var o = objData.val();
						if (Is.def(o)) {
							Each.pair(schema.data, function(fieldName, fieldType) {
								if (Is.def(o[fieldName])) {
									if (orm.getSchema(fieldType))
										obj[fieldName] = orm.get(fieldType, o[fieldName]);
									else
										obj[fieldName] = o[fieldName];
								}
							});
						}
						if (Is.func(onLoad)) onLoad(obj);
					});
				}
				else if (Is.func(onLoad)) onLoad(obj);
			});
		}
		else if (Is.func(onLoad)) onLoad(obj);
	};

	/**
	 * Unloads the object.
	 */
	obj.unload = function() {
		if (obj.is.loaded) {
			obj.is.loaded = false;

			// Turn off child listeners
			obj.is.listeningToChild('off');

			// Check each field for listeners.
			if (schema.data)
				Each.key(schema.data, function(fieldName) {
					if (obj.is.listening[fieldName]) {
						firebase.child('data').child(fieldName).off('value', obj.is.listening[fieldName].listener);

						delete obj.is.listening[fieldName].handler;
						delete obj.is.listening[fieldName].listener;
					}
				});
		}
	};

	// Set write privileges on the object.
	obj.write = function(writeId, writeState, writeChildren) {
		Each.value(writeId, function(uid) {
			firebase.child('write').child(uid).set(writeState !== false);
		});

		if (writeChildren === true) {
			firebase.child('child').once('value', function(childData) {
				Each.pair(childData.val(), function(childType, childObjects) {
					Each.key(childObjects, function(childId) {
						orm.get(childType, childId).write(writeId, writeState, writeChildren);
					});
				});
			});
		}
	};

	// Set read privileges on the object
	obj.read = function(readId, readState, readChildren) {
		Each.value(readId, function(uid) {
			firebase.child('read').child(uid).set(readState !== false);
		});

		if (readChildren === true) {
			firebase.child('child').once('value', function(childData) {
				Each.pair(childData.val(), function(childType, childObjects) {
					Each.key(childObjects, function(childId) {
						orm.get(childType, childId).read(readId, readState, readChildren);
					});
				});
			});
		}
	};
}

/**
* @global FirebaseORM
*/
function FirebaseORM(url, option) {
	option = Is.option(option);

	// The ORM object and Firebase reference.
	var orm = this,
		firebase = new Firebase(url);

	// References to data and schema locations.
	var data = firebase.child(option.data || 'data'),
		schema = firebase.child(option.schema || 'schema'),
		task = firebase.child(option.task || 'tasks'),

		// Internal cache of schema and data
		schemaCache = {},
		cache = {};

	// Pull schema and data from modules.
	Each.pair(On.module(), function(moduleId, module) {
		if (module.schema)
			schemaCache = $.extend(true, {}, schemaCache, module.schema);
	});

	// Stores internal data under the "is" key.
	orm.is = {};
	orm.firebase = firebase;

	// The user that is interacting with the ORM.
	orm.user = new FirebaseUser(orm);

	// Returns the base FirebaseUser object
	orm.getUser = function() {
		return orm.user;
	};

	orm.getData = function() {
		if (orm.user)
			return orm.user.data;
	};

	// Gets the user id.
	orm.getId = function() {
		return orm.user.getId();
	};

	// Gets the schema for the given data type.
	orm.getSchema = function(type) {
		return (Is.def(type)) ? schemaCache[type] : schemaCache;
	};

	orm.getCache = function(type) {
		return (Is.def(type)) ? cache[type] : cache;
	};

	// Wrapper for the FirebaseUser authentication function.
	orm.auth = orm.user.auth;
	orm.onAuth = orm.user.onAuth;

	orm.onAuth(function() {
		Each.pair(cache, function(cacheType, cacheObjects) {
			Each.pair(cacheObjects, function(cacheId, cacheObject) {
				cacheObject.getPermission(function() {

				});
			});
		});
	});

	// Creates a new FirebaseObject
	orm.get = function(type, id) {
		if (Is.str(type) && Is.def(id)) {
			// If this type is not yet in the cache
			if (! cache[type])
				cache[type] = {};

			// If this object is not in the cache for the given type
			if (! cache[type][id])
				cache[type][id] = new FirebaseObject(orm, type, id);

			// Return the object
			return cache[type][id];
		}
	};

	// Pushes a new FirebaseObject and returns it
	orm.push = function(type, objectOption) {
		objectOption = Is.option({ func: 'complete' });
		if (orm.is.loaded) {
			// Base object
			var obj = { write: {}, read: {}, time: {} };

			// Read/write permissions
			obj.write[orm.getId()] = true;
			obj.read[orm.getId()] = true;

			Each.value(objectOption.write, function(writeId) {
				obj.write[writeId] = true;
			});
			Each.value(objectOption.read, function(readId) {
				obj.read[readId] = true;
			});

			if (objectOption.data)
				obj.data = objectOption.data;

			// Timestamp
			obj.time.created = obj.time.loaded = new Date().getTime();
			var objRef = data.child(type).push(obj);
			var objId = objRef.key();

			// Save the object into the local cache
			if (! cache[type])
				cache[type] = {};
			cache[type][objId] = new FirebaseObject(orm, type, objId);
			cache[type][objId].load(function() {
				if (Is.func(objectOption.complete))
					objectOption.complete(cache[type][objId]);
			});

			// Return the object
			return cache[type][objId];
		}
	};

	// Runs the callback function when the schema has been loaded.
	orm.load = function(onLoad) {
		orm.is.loaded = true;
		// Read the schema
		schema.once('value', function(s) {
			schemaCache = $.extend(true, schemaCache, s.val());

			// Pull schema and data from modules.
			Each.pair(On.module(), function(moduleId, moduleData) {
				if (Is.func(moduleData.load))
					moduleData.load(option, orm);
			});

			orm.user.auth(function() {
				if (Is.func(onLoad)) onLoad();
			});
		});
	};

	// Querying
	orm.find = function(query, onResult) {
		query = Is.option(query, { str: 'type' });

		// The type is the only required query parameter
		if (Is.str(query.type)) {
			query.firebase = query.firebase || firebase.child('data').child(query.type);

			// Starting and ending points
			if (query.start)
				query.firebase = query.firebase.startAt(query.start);
			if (query.end)
				query.firebase = query.firebase.endAt(query.end);

			// Limiting number of results
			if (query.first)
				query.firebase = query.firebase.limitToFirst(query.first);
			if (query.last)
				query.firebase = query.firebase.limitToLast(query.last);

			// Default ordering is by key, but priority and child values can also be used
			if (query.order === 'priority')
				query.firebase.orderByPriority();
			else if (Is.str(query.order))
				query.firebase.orderByChild(query.order);
			else
				query.firebase.orderByKey();

			query.firebase.once('value', function(queryData) {
				if (queryData.numChildren() > 0) {
					queryData.forEach(function(queryResult) {
						var queryObject = orm.get(query.type, queryResult.key());
						queryObject.load(function() {
							onResult(queryObject);
						});
					});
				}
			});
		}
	};
}

Date.prototype.fileFormat = function() {
	return this.formatInformalDate() + ' at ' + this.formatTime();
};
Date.prototype.ago = function() {
    var d = new Date().getTime() - this.getTime();
    if (d < 1000) return 'just now';
    else if (d < 10000) return 'a few seconds ago';
    else if (d < 60000) return 'less than a minute ago';
    else if (d < 120000) return 'about a minute ago';
    else if (d < 3600000) return Math.floor(d / 60000) + ' minutes ago';
    else if (d < 7200000) return 'about an hour ago';
    else if (d < 86400000) return Math.floor(d / 3600000) + ' hours ago';
    else if (d < 172800000) return 'yesterday';
    else return Math.floor(d / 86400000) + ' days ago';
};
Date.prototype.formatTime = function() {
    return ((this.getHours() == 0) ? 12 : ((this.getHours() > 12) ? this.getHours() - 12 : this.getHours())) + ':' +
           ((this.getMinutes() < 10) ? '0' + this.getMinutes() : this.getMinutes()) + ((this.getHours() > 11) ? ' pm' : ' am');
};
Date.prototype.lc_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
Date.prototype.inf_months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
Date.prototype.formatDay = function() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][this.getDay()];
};
Date.prototype.formatDate = function() {
    return Date.prototype.lc_months[this.getMonth()] + ' ' +
        this.getDate() + ((this.getDate() == 1 || this.getDate() == 21 || this.getDate() == 31) ? 'st' :
                          (this.getDate() == 2 || this.getDate() == 22) ? 'nd' :
                          (this.getDate() == 3 || this.getDate() == 23) ? 'rd' : 'th');
};
Date.prototype.formatInformalDate = function() {
    return Date.prototype.inf_months[this.getMonth()] + ' ' + this.getDate();
};
Date.prototype.formatFormalDate = function() {
    return (this.getMonth() + 1) + ' / ' + this.getDate() + ' / ' + this.getFullYear();
};

function FirebaseUser(orm) {
	var user = this;
	user.is = {
		handlingAuth: []
	};

	// Returns the authentication data
	user.getAuth = function() {
		return user.is.authenticatedBy || { uid: 0, provider: 'none' };
	};

	// Returns true if there is an authentication profile for this user
	user.hasAuth = function() {
		return user.is.authenticatedBy != null;
	};

	// The unique ID of the authenticated user
	user.getId = function() {
		return user.id;
	};

	/**
	 * @function auth( credentials, onAuth )
	 */
	user.auth = function(auth, onAuth) {
		// For anonymous/cookie authentication
		if (Is.func(auth) && Is.undef(onAuth)) {
			onAuth = auth;
			auth = null;
		}

		// To log out, user.auth(false)
		if (auth === false) {
			// Log out of Firebase
			orm.firebase.unauth();

			// Unload cached objects
			Each.value(user.cache, function(cacheData) {
				Each.value(cacheData, function(cacheValue) {
					cacheValue.unload();
				});
			});

			// Issue an anonymous ID
			orm.firebase.authAnonymously(function(_, anonymousAuth) {
				user.setAuth(anonymousAuth, onAuth);
			});
		}

		// Parses authentication data and passes success/error to the callback
		else if (Is.def(auth)) {
			user.getAuth(auth, onAuth);
		}

		// If the authentication profile has not yet been loaded
		else if (! user.hasAuth()) {
			var currentAuth = orm.firebase.getAuth();

			if (currentAuth)
				user.setAuth(currentAuth, onAuth);
			else
				orm.firebase.authAnonymously(function(_, anonymousAuth) {
					user.setAuth(anonymousAuth, onAuth);
				});
		}

		// Pass user to callback
		else if (Is.func(onAuth))
			onAuth(user.is.authenticatedBy);
	};


	// Creates an authentication session
	user.getAuth = function(auth, onAuth) {
		auth = Is.option(auth, { str: 'provider' });

		var authResult = function(error, auth) {
			if (Is.def(error)) {
				if (Is.func(onAuth)) onAuth(error);
			}
			else if (Is.def(auth))
				user.setAuth(auth, onAuth);
		};

		// For email authentication.
		if (Is.def(auth.email) && Is.def(auth.password)) {
			// Pass email and password to the Firebase API.
			orm.firebase.authWithPassword(auth, authResult);
		}

		// For OAuth and anonymous login.
		else if (Is.str(auth.provider)) {
			// Authenticate with the Firebase.
			orm.firebase[(auth.redirect) ? 'authWithOAuthRedirect' : 'authWithOAuthPopup']
			  ( auth.provider,
				authResult,
				{ scope: auth.scope || 'email' });
		}

		// For custom tokens.
		else if (Is.str(auth.token)) {
			orm.firebase.authWithCustomToken(auth.token, authResult);
		}
	};

	// Create a new authentication profile
	user.newAuth = function(auth, onAuth) {
		// Ensure a name, email address, and password is provided.
		if (Is.obj(auth) && Is.str(auth.name) && Is.str(auth.email) && Is.str(auth.password)) {
			// Check for no provided name.
			if (auth.name.length == 0) {
				if (Is.func(onAuth)) onAuth('NO_NAME');
			}
			// Check for an invalid name.
			else if (auth.name.replace(/[^a-zA-Z]/g, '').length == 0) {
				if (Is.func(onAuth)) onAuth('INVALID_NAME');
			}
			// Create the user.
			else {
				orm.firebase.createUser(auth, function(error, createdAuth) {
					if (error) {
						if (Is.func(onAuth)) onAuth(error);
					}
					else {
						createdAuth.name = auth.name ||
							auth[auth.provider].displayName ||
							auth[auth.provider].name;
						createdAuth.email = auth.email ||
							auth[auth.provider].email;

						user.setAuth(createdAuth, function(user) {
							user.setName(auth.name);
							user.setEmail(auth.email);

							if (auth.login === true) {
								user.auth(auth, onAuth);
							}
							else if (Is.func(onAuth)) onAuth();
						});
					}
				});
			}
		}
	};

	// Sets the authentication data
	user.setAuth = function(auth, onAuth) {
		user.is.authenticatedBy = auth;
		user.id = auth.uid;
		user.provider = auth.provider;

		orm.firebase.child('user').child(auth.provider).child(auth.uid)
			.once('value', function(userData) {
				if (Is.undef(userData.val())) {
					user.data = orm.push('user');
					user.data.setUid(auth.uid);
					user.data.setProvider(auth.provider);

					orm.firebase.child('user')
						.child(auth.provider).child(auth.uid)
						.set(user.data.getId());
				}
				else {
					user.data = orm.get('user', userData.val());
				}

				// Write a device fingerprint to the user data
				if (orm.getSchema('user').data.device) {
					if (orm.fingerprint)
						user.data.setDevice(orm.fingerprint, new Date().getTime());

					// Otherwise run the Fingerprint2 library's algorithm
					else new Fingerprint2().get(function(fingerprint) {
						orm.fingerprint = fingerprint;
					 	user.data.setDevice(fingerprint, new Date().getTime());
					});
				}

				// Attach to the ORM and load data
				user.data.is.attachingTo(orm);
				user.data.load(function() {
					if (Is.func(onAuth)) onAuth(null, user.data);

					Each.value(user.is.handlingAuth, function(authChanged) {
						authChanged(user.data);
					});
				});
			});
	};

	user.onAuth = function(authChanged) {
		if (Is.func(authChanged))
			user.is.handlingAuth.push(authChanged);
		else return;

		if (user.data)
			authChanged(user.data);
	};
}

/**
 * @global FirebaseView
 * @description FirebaseViews are the visual building blocks of an application. They allow for
 * efficient DOM manipulation, enhanced code readability, and a means of binding the structure of
 * ORM objects with their visual presentation and underlying functionality.
 */
function FirebaseView(type, data) {
	// Base values for generating the view
	data = Is.option(data);
	var view = this;

	/**
	 * @property	is
	 * @description Stores a key-value mapping for the internal data and state of the view
	 */
	view.is = {
		// View type
		a: type || 'view',

		// Internal flags
		displayed: 'block',		// Display style
		visible: true,			// Whether the view is visible
		focused: false,			// By default views are not in focus.

		// References to child views and hierarchy data.
		parentOf: {},			// Mapping between child ID's and corresponding views.
		parenting: 0,			// The number of direct children.
		ordering: [],			// The order of the child ID's
		childOf: null,			// Parent element.
		childId: null,			// The id used by this view's parent to refer to it.

		// Element class, attributes, and callback functions.
		marked: {},				// Classes that are applied to this element.
		attributed: {},			// Attributes that are applied to this element.
		handling: {},			// Event handlers
		handlingOnce: {},		// Event handlers
		handlingListener: {},	// Events that are attached to the element
		clickedAtTime: 0,
		doubleClicking: 400,

		// Callback functions to override default functionality
		generating: null,		// Function for generating child views with .add
		selecting: null,		// Function for selecting child views with .select
		selectingBy: null,		// Function applied to a selected view
		unselectingBy: null,	// Function applied to a deselected view
		settingValue: null,		// Function for updating view with .val
		gettingValue: null,		// Function for updating view with .val
		removing: null			// Function for removing view with .remove
	};

	/**
	 * @property 	element
	 * @description Performs the initialization for the view's underlying DOM element.
	 * 				This can be done by either passing no element, in which case a new
	 * 				element will be created with the specified tag or default to a div.
	 * 				A string can also be passed in as the element, which will attempt to
	 * 				retrieve an existing element with the given ID.
	 */
	if (Is.str(data.element)) {
		view.element = document.getElementById(data.element);
		view.is.visible = (view.element.style.display !== 'none');
	}
	else if (Is.undef(data.element))
		view.element = document.createElement(data.tag || 'div');
	else
		view.element = data.element;

	/**
	 * @property	$
	 * @description jQuery binding to implement sortable, draggable, and other jQuery UI functions
	 */
	if (view.element.nodeType === 1) {
		view.$ = $(view.element).data('view', view);
	}

	// Refreshes the elements class name using the list of markings assigned
	// to this view.
	var refreshMarking = function() {
		var result = '';
		Each.pair(view.is.marked, function(mark, isMarked) {
			if (isMarked) result += mark + ' ';
		});
		// Remove the trailing space
		result = result.substring(0, result.length - 1);

		// Only reload the class if it is different from the current one
		view.element.className = result;
		view.is.ofClass = result;
	};

	// Sanitizes the input string into a class name, by removing spaces and non-alphanumeric
	// characters, and replacing them with dashes.
	var toMarking = function(mark) {
		return mark.replace(/[^a-zA-Z0-9\-\_]/g, '-').toLowerCase();
	};

	/**
	 * @property	can
	 * @description Key mapping of external functions exported by this view or a superview.
	 */
	view.can = {};

	/**
	 * @function 	view.type() -> type:str
	 * @description Returns the string type of this view.
	 */
	/**
	 * @function 	view.type( type:str ) -> this
	 * @description Sets the type of this view
	 */
	view.type = function(t) {
		if (Is.str(t)) {
			view.is.a = toMarking(t);
			view.mark(view.is.a + '-view');
			return view;
		}
		else return view.is.a;
	}

	/**
	 * @function 	view.getType() -> type:str
	 * @description	Returns the type of this view.
	 */
	view.getType = function() {
		return view.is.a;
	};

	/**
	 * @function 	view.getId() -> id:str
	 * @description Returns the child id of this view.
	 */
	view.getId = function() {
		return view.is.childId;
	};

	/**
	 * @function 	view.add(newView:view) -> this:view
	 * @description Adds a view as a child, and gives it a default auto-incrementing id that starts at 0.
	 */
	/**
	 * @function 	view.add(id:str, newView:view) -> this:view
	 * @description Adds a view with the given id, which is used to reference it in the parent->child relationship.
	 */
	 /**
 	 * @function 	view.add(generator:func) -> this:view
 	 * @description Defines a function to use in generating child views from object data passed to .add
 	 */
	view.add = function(id, newView, before) {
		// Auto-assign an ID if one is not given
		if (Is.def(id) && Is.undef(newView)) {
			newView = id;
			id = view.is.parenting;
		}
		// If this is a valid element that can be linked.
		if (Is.view(newView) && view != newView) {
			// Before refers to element successor or null
			if (Is.def(before)) {
				if (Is.view(before) && before.is.childOf == view)
					before = before.element;
				else if (Is.str(before) || Is.num(before))
					before = (view.hasChild(before)) ? view.child(before).element : null;
				else
					before = null;
			}

			// Remove the view if it is already a child
			if (newView.hasParent())
				newView.remove();

			// Replace an existing view if it is already
			// been added with this ID.
			if (view.is.parentOf[id]) {
				if (before) {
					view.is.ordering.splice(view.is.ordering.indexOf(id), 1);
					view.is.ordering.splice(
						view.is.ordering.indexOf(before), 0, id);
					view.element.insertBefore(newView.element, before);
				}
				else {
					newView.show(view.is.parentOf[id].is.visible);
				 	view.element.replaceChild(newView.element, view.is.parentOf[id].element);
				}
				 view.is.parentOf[id] = newView;
			}
			else {
				// Create a parent->child reference between the views.
				view.is.parentOf[id] = newView;
				view.is.parenting++;

				// Insert the child element into this one
				if (before) {
					view.is.ordering.splice(
						view.is.ordering.indexOf(before), 0, id);
					view.element.insertBefore(newView.element, before);
				}
				// Normally just appendChild the element
				else {
					view.is.ordering.push(id);
					view.element.appendChild(newView.element);
				}
			}

			newView.is.childId = id;
			newView.is.childOf = view;
			newView.on('birth');

			view.on(['change', 'add']);
		}
		// If this is a key-value mapping of elements to add or an array of data/elements.
		else if (Is.enum(newView)) {
			if ( Is.func(view.is.generating) ) {
				newView = view.is.generating(id, newView);
				if (Is.view(newView))
					view.add(id, newView, before);
			}
			else Each.pair(newView, view.add);
		}
		// Define a function for generating new views
		else if (Is.func(newView))
			view.is.generating = newView;

		// If this is a primitive value to add as a text node
		else if (Is.def(newView)) {
			view.add(id, new FirebaseView('text', {
				element: document.createTextNode('' + newView)
			}), before);
			return view;
		}
		return view;
	};

	/**
	 * @function view.addFirst(view)
	 * @short Adds the given view as the first child of this view.
	 */
	/**
	 * @function view.addFirst(id, view)
	 * @short Adds the given view as the first child of this view, with the given id.
	 */
	view.addFirst = function(id, newView) {
		return view.add(id, newView, view.element.firstChild);
	};

	/**
	 * @function view.addAfter(child, view)
	 * @short Adds the given view after the view with the given child id.
	 */
	/**
	 * @function view.addAfter(child, id, view)
	 * @short Adds the given view after the view with the given child id, with the given id.
	 */
	view.addAfter = function(child, id, newView) {
		if ((Is.view(child) && child.is.childOf == view) ||
			(Is.def(child) && view.hasChild(child))) {
			return view.add(id, newView, view.child(child).element.nextSibling);
		}
		else return view.add(id, newView);
	};

	/**
	 * Adds the view before the given child.
	 */
	view.addBefore = function(child, id, newView) {
		return view.add(id, newView, child);
	};

	/**
	 * @deprecated
	 * @function	view.replace(id, child)
	 *	  - Deprecated, uses the add function to replace the child view for the given id.
	 */
	view.replace = function(id, child) {
		return view.add(id, child);
	};

	/*
	 **** addHidden(view)
	 *    - Adds a new view as a child to this one, and sets its visibility to hidden. Gives it a default
	 *		numeric ID that auto increments starting from 0 whenever a new view is added.
	 *
	 **** addHidden(id, view)
	 *	  - Adds a hidden view with the given id, useful for addressing it later with the "child" function.
	 */
	view.addHidden = function(id, newView, before) {
		if (Is.def(id) && Is.undef(newView)) {
			newView = id;
			id = view.is.parenting;
		}
		if (Is.view(newView)) {
			newView.hide();
			view.add(id, newView);
		}
		else if (Is.obj(newView)) {
			if (Is.func(view.is.generating)) {
				view.add(id, newView);
				view.child(id).hide();
			}
			else {
				for (i in newView) {
					view.addHidden(i, newView);
				}
			}
		}
		else if (Is.array(newView)) {
			Each.value(newView, function(nv) {
				view.addHidden(nv);
			});
		}
		return view;
	};

	view.move = function(child, before) {
		if (Is.view(child))
			child = child.getId();
		if (Is.view(before))
			before = before.getId();

		if (view.hasChild(child) && view.hasChild(before)) {
			view.element.insertBefore(view.child(child).element, view.child(before).element);
			view.is.ordering.splice(view.is.ordering.indexOf(child), 1);
			view.is.ordering.splice(
				view.is.ordering.indexOf(before), 0, child);
		}

	};

	/**
	 * Activate jQuery UI sortable on this view.
	 */
	view.sortable = function(sort) {
		sort = Is.option(sort, { func: 'change' });
		var sortOptions = {};

		if (sort.helper)
			sortOptions.helper = function(ev, elem) {
				var drag = $(elem).data('view'),
					helper;

				if (Is.func(sort.helper))
					helper = sort.helper(drag.val());
				else
					helper = drag.copy();

				return (Is.view(helper)) ? helper.$ : null;
			};

		if (Is.str(sort.placeholder))
			sortOptions.placeholder = sort.placeholder + '-view';
		if (Is.num(sort.revert))
			sortOptions.revert = sort.revert;

		if (sort.connect)
			sortOptions.connectWith = '.' +
				((Is.str(sort.connect)) ? sort.connect : view.is.a) + '-view';

		sortOptions.start = function() {
			view.mark('sorting');
			if (Is.func(sort.start))
				sort.start(view);
		};

		sortOptions.stop = function() {
			view.unmark('sorting');
			if (Is.func(sort.stop))
				sort.stop(view);
		};

		sortOptions.update = function(ev, ui) {
			var oldOrder = view.is.ordering;
			view.is.ordering = [];
			ui.item.parent().children().each(function(_, sortChild) {
				view.is.ordering.push($(sortChild).data('view').getId());
			});
			if (Is.func(sort.change))
				// Provides a cancel function to stop the sorting
				sort.change(function() {
					view.is.ordering = oldOrder;
					view.$.sortable('cancel');

					// Cancel other sortable events.
					$(view.is.a + '-view').each(function() {
						var e = $(this);
						if (e.hasClass('sorting')) {
							e.sortable('cancel');
							setTimeout(function() {
								e.sortable('cancel');
							}, 100);
						}
					});
				});
		};
		if (view.$.sortable)
			view.$.sortable(sortOptions);

		return view;
	};

	view.droppable = function(drop) {
		drop = Is.option(drop);

		if (view.$.droppable)
			view.$.droppable(drop);

		return view;
	}

	/*
	 **** remove(id)
	 *    - Removes the view with the given id.
	 */
	view.remove = function(id) {
		// Remove from the parent view
		if (Is.undef(id)) {
			if (view.hasParent())
				view.parent().remove(view.is.childId);
			else view.on('death');
		}
		// Remove a specific child by id
		else if (Is.def(id) && view.is.parentOf[id]) {
			// Ensure is parent in DOM before attempting removal
			if (view.is.parentOf[id].element.parentNode == view.element)
				view.element.removeChild(view.is.parentOf[id].element);

			// Remove references and delete relationship
			view.is.parentOf[id].on('death');
			view.is.ordering.splice(view.is.ordering.indexOf(id), 1);
			delete view.is.parentOf[id].childOf;
			delete view.is.parentOf[id];
			view.is.parenting--;

			// Events
			view.on('change').on('remove');
		}
		return view;
	};

	/*
	 **** empty()
	 *    - Removes all subviews of this view.
	 */
	view.empty = function() {
		Each.key(view.is.parentOf, function(id) {
			view.remove(id);
		});
		return view;
	};

	/*
	 **** isEmpty()
	 *	  - Returns whether the view is empty (has no children).
	 */
	 view.isEmpty = function() {
	 	return view.is.parenting == 0;
	};

	/*
	 **** val()
	 *    - Returns the data value of the view. This function relies on view.can.setValue,
	 *		and view.can.getValue, so both must be manually set in order for this function to work
	 *		as expected.
	 */
	view.val = function(set, get) {
		if (Is.func(set)) {
			view.is.settingValue = set;
			if (Is.func(get))
				view.is.gettingValue = get;
		}
		else if (Is.def(set)) {
			if (Is.func(view.is.settingValue)) {
				// Fire the change event if the set-value function returns a true-equivalent value
				if(view.is.settingValue(set, view)) {
					view.on('change');
				}
			}
		}
		// If no value was passed, check for a getValue function and use it to get the
		// current value of this view.
		else if (Is.func(view.is.gettingValue)) {
			return view.is.gettingValue(view);
		}
		return view;
	};

	/*
	 **** click(handler)
	 *    - Convenience method for assigning a click handler or executing the click event.
	 */
	view.click = function(f) {
		if (Is.str(f)) {
			view.on('click', function() {
				view.on(f);
			});
		}
		else if (Is.func(f)) {
			view.on('click', f);
		}
		else if (Is.undef(f)) {
			view.on('click');
		}
		return view;
	};

	/*
	 **** click(handler)
	 *    - Convenience method for assigning hover handlers.
	 */
	view.hover = function(hoverIn, hoverOut) {
		if (Is.func(hoverIn))
			view.on('mouseover', hoverIn);
		if (Is.func(hoverOut))
			view.on('mouseout', hoverOut);
		return view;
	};

	/*
	 **** focus()
	 *    - Shortcut for view.can.focus and for the focus event.
	 */
	view.focus = function(f) {
		if (Is.func(f)) {
			view.on('focus', f);
		}
		else if (Is.str(f)) {
			if (f == 'show' || f == 'hide') {
				view.on('focus', function(self) {
					self[f]();
				});
			}
			else view.on('focus', f);
		}
		else {
			view.on('focus');
			if (Is.func(view.can.focus)) {
				view.can.focus(view);
			}
			view.is.focused = true;
		}
		return view;
	};

	/*
	 **** blur()
	 *    - Shortcut for view.can.blur and for the blur event.
	 */
	view.blur = function(f) {
		if (Is.func(f)) {
			view.on('blur', f);
		}
		else if (Is.str(f)) {
			if (f == 'show' || f == 'hide') {
				view.on('blur', function(self) {
					self[f]();
				});
			}
		}
		else {
			view.on('blur');
			if (Is.func(view.can.blur)) {
				view.can.blur(view);
			}
			view.is.focused = false;
		}
		return view;
	};

	/*
	 **** parent()
	 *    - Returns the parent view of this view.
	 */
	view.parent = function(parentType) {
		if (Is.str(parentType)) {
			var p = view.is.childOf;
			while (p && p.is.a != parentType) {
				p = p.is.childOf;
			}
			return p;
		}
		else if (view.is.childOf) {
			return view.is.childOf;
		}
		else return new FirebaseView();
	};

	/*
	 **** hasParent()
	 *    - Returns whether or not this view has a parent.
	 */
	view.hasParent = function() {
	 	return Is.def(view.is.childOf);
	};

	/*
	 **** child()
	 *	  - Returns a id-view mapping of all children of this view.
	 *
	 **** child(id)
	 *    - Returns the child subview of this view for the corresponding id.
	 */
	view.child = function(id) {
		// For string id's, look up a path
		if (Is.str(id)) {
			if (id.indexOf('/') < 0) {
				if (view.is.parentOf[id])
					return view.is.parentOf[id];
				else return new FirebaseView();
			}
			else {
				var path = id.split('/'), current = view;
				for (var i = 0 ; i < path.length ; i++) {
					current = current.child(path[i]);
				}
				return current;
			}
		}
		else if (Is.num(id) && view.is.parentOf[id])
			return view.is.parentOf[id];
		else return new FirebaseView();
	};

	/**** sibling(id)
	 *	  - Returns the sibling view with the given id.
	 */
	view.sibling = function(id) {
		if (view.hasParent())
			return view.parent().child(id);
		else return new FirebaseView();
	};

	/**
	 * @function sort( order:function )
	 * @short Sorts the children of this view by the given ordering function.
	 */
	view.sort = function(order) {
		var elements = [], i;

		view.each(function(id, child) {
			elements.push({ 'id': id, 'child': child });
		});

		if (Is.undef(order)) {
			order = 'key';
		}
		if (Is.func(order)) {
			elements.sort(order);
		}
		else if (Is.str(order)) {
			if (order == 'key') {
				elements.sort(function(a, b) {
					return a.id == b.id ? 0 : (a.id > b.id ? 1 : -1);
				});
			}
			else if (order == 'child') {
				elements.sort(function(a, b) {
					var aValue = (Is.def(a.child.can.order) ? a.child.can.order : a.id);
					var bValue = (Is.def(b.child.can.order) ? b.child.can.order : b.id);
					return aValue == bValue ? 0 : (aValue > bValue ? 1 : -1);
				});
			}
		}

		view.empty();
		for (i = 0; i < elements.length; i++) {
			view.add(elements[i].id, elements[i].child);
			view.child(elements[i].id).on('sort');
		}
	};

	/*
	 **** hasChild(id)
	 *    - Returns whether this view has a child with the given id.
	 */
	view.hasChild = function(id) {
		return view.is.parentOf[id] != null;
	};

	/**
	 * @function view.hasSibling(id)
	 * @description		Returns true if the view has a sibling with the given id
	 */
	view.hasSibling = function(id) {
		if (view.is.childOf)
			return view.is.childOf.is.parentOf[id] != null;
		else return false;
	}

	/*
	 **** children()
	 *	  - Returns the mapping between ids and subviews.
	 */
	 view.children = function() {
	 	return view.is.parentOf;
	 };

	/*
	 **** copy()
	 *    - Returns an identical copy of this element.
	 */
	view.copy = function() {
		var copy = new FirebaseView(type, {
			tag: view.is.tagged
		});

		// Copy visibility and display settings.
		copy.is.displayed = view.is.displayed;
		copy.is.visible = view.is.visible;
		if (! copy.is.visible) { copy.hide(); }

		// Copy markings.
		Each.pair(view.is.marked, function(marking, isMarked) {
			if (isMarked) copy.mark(marking);
		});
		Each.pair(view.is.attributed, function(attribute, value) {
			copy.attribute(attribute, value);
		});

		// Recursively copy children
		Each.pair(view.is.parentOf, function(childId, child) {
			copy.add(childId, child.copy());
		});
		copy.is.parenting = view.is.parenting;

		return copy;
	};

	/*
	 **** show()
	 *    - Makes this view visible.
	 */
	view.show = function(arg) {
		// Boolean input shows/hides based on value
		if (Is.bool(arg))
			view[(arg) ? 'show' : 'hide']();
		// Show a given child
		else if (Is.str(arg) && view.hasChild(arg))
			view.child(arg).show();
		// Otherwise default action is to show
		else if (Is.undef(arg)) {
			view.element.style.display = (view.is.displayed) ? view.is.displayed : 'block';
			view.is.visible = true;
		}
		return view;
	};

	/*
	 **** hide()
	 *    - Makes this view invisible.
	 */
	view.hide = function(child) {
		if (Is.str(child) || Is.num(child)) {
			view.child(child).hide();
		}
		else if (view.element.style.display != 'none') {
			view.element.style.display = 'none';
			view.is.visible = false;
		}
		return view;
	};

	view.toggle = function() {
		view.element.style.display = (view.is.visible) ? 'none' : ((view.is.displayed) ? view.is.displayed : 'block');
		view.is.visible = ! view.is.visible;
	};

	/**
	 * @function .select( child ):view
	 * @param child:string - the id of the child index.
	 * @return the currently selected
	 */
	view.select = function(select, unselect) {
		// For returning the currently selected view.
		if (Is.undef(select) && Is.undef(unselect)) {
			return view.is.selecting;
		}
		// For selecting a different child.
		else if (Is.def(select) && ! Is.func(select)) {
			// Either run the custom callback function, or hide the selected view if there is one
			if (Is.def(view.is.selecting)) {
				if (Is.def(view.is.unselectingBy))
					view.is.unselectingBy(view.is.selecting);
				else if (Is.view(view.is.selecting))
					view.is.selecting.hide();
			}

			// Call the unselect event for the view being unselected
			if (Is.view(view.is.selecting))
				view.is.selecting.on('unselect');

			if (Is.def(view.is.selectingBy)) {
				view.is.selecting = view.is.selectingBy(select);
				// By default select the view.
				if (Is.view(view.is.selecting))
					view.is.selecting.on('select');
				// Store a child with the select ID
				else if (Is.def(view.is.selecting) && view.hasChild(view.is.selecting))
					view.is.selecting = view.child(view.is.selecting).on('select');
				// By default, store the select value
				else view.is.selecting = select;
			}
			// If the view has the select key as a child
			else if (view.hasChild(select))
				view.is.selecting = view.child(select).show().on('select');
			// By default, store the value
			else view.is.selecting = select;
		}
		// For attaching a selection/unselection function.
		else {
			// Attach selection function
			if (Is.func(select))
				view.is.selectingBy = select;
			// Attach deselection function
			if (Is.func(unselect))
				view.is.unselectingBy = unselect;
		}
	};

	/*
	 **** mark(marking)
	 *	  - Adds the given marking or list of markings to the class name of this element.
	 */
	view.mark = function(marking) {
		// For adding lists of markings.
		if (Is.array(marking)) {
			Each.value(marking, function(m) {
				view.mark(m);
			});
		}
		// Markings must be strings.
		else if (Is.str(marking)) {
			marking = toMarking(marking);
			view.is.marked[marking] = true;
			refreshMarking();
		}
		return view;
	};

	/**
	 * BEM utilities.
	 */
	view.bm = function(b, m, c) {
		return view.bem(b, null, m, c);
	};

	view.be = function(e, m) {
		if (view.is.childOf)
			return view.bem(view.is.childOf.is.bem || view.is.childOf.is.a, e, m, c);
		else view.once('birth', function() {
			view.be(e, m);
		});
		return view;
	};

	view.bem = function(b, e, m, c, marking) {
		marking = b;
		if (b) view.is.bem = b;
		if (e) marking += '__' + e;
		if (m) marking += '--' + m;
		view[(c !== false) ? 'mark' : 'unmark'](marking);

		return view;
	};

	/*
	 **** unmark()
	 *    - Removes all markings from this view.
	 *
	 **** unmark(marking)
	 *	  - Removes the given marking or list of markings from the class name of this element.
	 */
	view.unmark = function(marking) {
		// For lists of markings.
		if (Is.array(marking)) {
			Each.value(marking, function(m) {
				view.unmark(m);
			});
		}
		// Markings must be strings.
		else if (Is.str(marking)) {
			marking = toMarking(marking);
			if (view.is.marked[marking]) {
				view.is.marked[marking] = false;
				refreshMarking();
			}
			else view.is.marked[marking] = false;
		}
		// If there is no input, unmarks all markings.
		else if (Is.undef(marking)) {
			Each.key(view.is.marked, function(mark) {
				view.unmark(mark);
			});
		}
		return view;
	};

	/*
	 **** isMarked(marking)
	 *	  - Returns whether this view has the given marking or any of the markings in the list.
	 */
	view.isMarked = function(marking) {
		if (Is.array(marking)) {
			Each.pair(marking, function(idx, mark) {
				if (view.is.marked[toMarking(mark)]) {
					return true;
				}
			});
			return false;
		}
		return (view.is.marked[toMarking(marking)]) ? true : false;
	};

	/*
	 **** isNotMarked(marking)
	 *	  - Returns whether this view does not have the given marking or list of markings.
	 */
	view.isNotMarked = function(marking) {
		if (Is.array(marking)) {
			Each.pair(marking, function(idx, mark) {
				if (view.is.marked[toMarking(mark)]) {
					return false;
				}
			});
			return true;
		}
		return (view.is.marked[toMarking(marking)]) ? false : true;
	};

	/*
	 **** toggleMark()
	 *	  - Toggles inclusion/exclusion of all markings.
	 *
	 **** toggleMark(marking)
	 *	  - Toggles inclusion/exclusion of the given marking.
	 */
	view.toggleMark = function(marking) {
		var i;
		if (Is.str(marking)) {
			if (view.isMarked(marking)) {
				view.unmark(marking);
			}
			else {
				view.mark(marking);
			}
		}
		else if (Is.array(marking)) {
			for (i = 0 ; i < marking.length ; i++) {
				view.toggleMark(marking[i]);
			}
		}
		else if (Is.undef(marking)) {
			for (i in view.is.marked) {
				view.toggleMark(view.is.marked[i]);
			}
		}
		return view;
	};

	/*
	 **** markAs(marking)
	 *    - Removes all markings and only marks the given marking.
	 */
	 view.markAs = function(marking) {
	 	view.unmark();
	 	view.mark(marking);
	 	return view;
	 };

	/*
	 **** markIf(condition, trueMark, falseMark)
	 *	  - Adds the trueMark to this view if the condition is true, and the falseMark
	 *		otherwise.
	 */
	view.markIf = function(condition, trueMark, falseMark) {
		if (Is.def(trueMark))
			view.is.marked[trueMark] = (condition) ? true : false;
		if (Is.def(falseMark))
			view.is.marked[falseMark] = (condition) ? false : true;
		refreshMarking();
		return view;
	};

	/*
	 **** attribute(attribute)
	 *    - Returns the value of the given attribute.
	 *
	 **** attribute(attributes)
	 *    - Sets the attributes of this element to the given attribute-value object mapping.
	 *
	 **** attribute(attribute, value)
	 *	  - Sets the attribute of this element to the given value.
	 */
	view.attribute = function(a, v) {
		if (Is.str(a) && Is.str(v)) {
			view.is.attributed[a] = v;
			view.element.setAttribute(a, v);
		}
		else if (Is.obj(a)) {
			Each.pair(a, function(attr, val) {
				view.attribute(attr, val);
			});
		}
		else if (Is.str(a)) {
			return view.is.attributed[a];
		}
		return view;
	};

	view.attributeIf = function(c, a, v) {
		if (c) view.attribute(a, v);
		return view;
	};

	/*
	 **** style(style)
	 *    - Returns the value of the given style.
	 *
	 **** style(styles)
	 *    - Sets the styles of this element to the given style-value object mapping.
	 *
	 **** style(style, value)
	 *	  - Sets the style of this element to the given value.
	 */
	view.style = function(s, v) {
		if (Is.str(s)) {
			if (Is.str(v)) {
				// Color rewriting
				if ((s == 'color' || s == 'background') && Is.def(On.color[v]) )
					view.element.style[s] = On.color[v];
				else view.element.style[s] = v;
			}
			else if (Is.num(v)) {
				view.element.style[s] = v + 'px';
			}
			else if (Is.bool(v)) {
				if (Is.def(view.element.style[s]) && v === false) {
					view.element.style[s] = null;
				}
			}
			else {
				return view.element.style[s];
			}
		}
		else if (Is.obj(s)) {
			Each.pair(s, function(st, stv) {
				view.style(st, stv);
			});
		}
		return view;
	};

	/**
	 * For chaining styles in view declarations.
	 */
	view.styleIf = function(c, s, v) {
		if (c) view.style(s, v);
		return view;
	};

	/*
	 **** each(function(id, view) { })
	 *    - Iterates the function with the given arguments over the id-view mapping of
	 *		this view in no particular order.
	 */
	view.each = function(f) {
		if (Is.func(f)) {
			Each.pair(view.is.parentOf, f);
		}
		return view;
	};

	/*
	 **** forEach(function(view) { })
	 *    - Iterates the function with the given arguments over each child of this
	 * 		view in the order of the children.
	 */
	view.forEach = function(f) {
		if (Is.func(f)) {
			Each.value(view.is.ordering, function(id) {
				f(view.is.parentOf[id], id);
			});
		}
		return view;
	};

	/**
	 * Run the function with the given data and modifier function.
	 */
	view.with = function(v, f, t) {
		if (Is.def(v)) {
			if (Is.func(f))
				f(v, view);
			else if (Is.array(f))
				Each.value(f, function(_f) { view.with(v, _f); });
			else if (Is.obj(f)) {
				t = t || Is.type(v);
				if (f[t]) f[t](v, view);
			}
		}
		return view;
	};

	// Attaches DOM listeners
	var onElementListen = function(e) {
		// Single clicking DOM event
		if (! view.is.handlingListener.click &&
			(e == 'click' || e == 'double click')) {

			view.is.handlingListener.click = true;
			view.element.addEventListener('click', function(e) {
				// Stop propagation by default
				if (! view.is.propagating)
					e.stopPropagation();

				if (view.is.handling['double click']) {
					var now = new Date().getTime();
					// Fire a double click or click event based on speed
					view.on((now - view.is.clickedAtTime < view.is.doubleClicking) ? 'double click' : 'click');
					view.is.clickedAtTime = now;
				}
				else view.on('click');
			});
		}
		// Hovering event
		else if (! view.is.handlingListener.hover &&
			(e == 'mouse' || e == 'mouseover' || e == 'mouseout')) {

			view.is.handlingListener.hover = true;
			view.element.addEventListener('mouseover', function(e) {
				view.is.hovered = true;
				view.on('mouseover');
			});
			view.element.addEventListener('mouseout', function(e) {
				view.is.hovered = false;
				view.on('mouseout');
			});
		}
		else if (! view.is.handlingListener.resize && e == 'resize') {
			view.is.handlingListener.resize = true;

			// Attach resize handler via jQuery
			$(window).resize(function() {
				view.on('resize');
			});
			// Ensure the view is sized on birth.
			view.on('birth', function() {
				view.on('resize');
			});
		}
		else if (! view.is.handlingListener.key &&
			(e == 'key' || e == 'keyup' || e == 'keydown' || e == 'keypress')) {
			view.is.handlingListener.key = true;
			view.is.key = {};

			view.element.addEventListener('keyup', function(e) {
				delete view.is.key[e.which];
				view.on(['key', 'keyup']);
			});

			view.element.addEventListener('keydown', function(e) {
				view.is.key[e.which] = true;
				view.on(['key', 'keydown']);
			});

			view.element.addEventListener('keypress', function(e) {
				view.on(['key', 'keypress']);
			});
		}
	};

	/*
	 **** on(event)
	 *    - Triggers the given event.
	 *
	 **** on(events)
	 *    - Triggers the given list of events.
	 *
	 **** on(eventFunctionMapping)
	 *    - Iterates over the event-function mapping and attaches each event listener to its corresponding
	 *      function in the mapping.
	 *
	 **** on(event, function(view) { })
	 *    - When the given event is triggered, the callback function is called with a reference to this view.
	 *
	 **** on(eventListener, function(event) { })
	 *    - For events in view.is.addingListener, attaches the native function to the element. Note that if
	 *		the function is triggered by on(eventListener), the callback function receives a reference to the
	 *		view and not the native JavaScript event object. Therefore, it is necessary to check the event input
	 *		to ensure its type before using it.
	 */
	view.on = function(e, f) {
		// For adding new listeners.
		if (Is.str(e)) {
			if (Is.func(f)) {
				// Create the list for event handlers
				if (Is.undef(view.is.handling[e]))
					view.is.handling[e] = [];
				// Push the callback onto the list
				view.is.handling[e].push(f);
				onElementListen(e);
			}
			else if (Is.str(f)) {
				view.on(e, function() { view.on(f); });
			}
			else {
				// If the view has a one-time handler for this function, it gets triggered first, then removed.
				if (view.is.handlingOnce[e]) {
					Each.value(view.is.handlingOnce[e], function(handler) {
						handler(view);
					});
					delete view.is.handlingOnce[e];
				}
				// If the view is handling this event, iterate over the handlers with the view.
				if (view.is.handling[e])
					Each.value(view.is.handling[e], function(handler) {
						handler(view);
					});
			}
		}
		// For event lists.
		else if (Is.array(e)) {
			Each.value(e, function(ev) {
				view.on(ev, f);
			});
		}
		return view;
	};

	/*
	 **** once(event)
	 *    - Triggers the given event and removes the callback listener upon completion.
	 *
	 **** once(events)
	 *    - Triggers the given list of events and removes them upon completion.
	 *
	 **** once(eventFunctionMapping)
	 *    - Iterates over the event-function mapping and attaches each event listener to its corresponding
	 *      function in the mapping.
	 *
	 **** once(event, function(view) { })
	 *    - When the given event is triggered, the callback function is called with a reference to this view.
	 *
	 **** once(eventListener, function(event) { })
	 *    - For events in view.is.addingListener, attaches the native function to the element. Note that if
	 *		the function is triggered by on(eventListener), the callback function receives a reference to the
	 *		view and not the native JavaScript event object. Therefore, it is necessary to check the event input
	 *		to ensure its type before using it.
	 */
	view.once = function(e, f) {
		if (Is.str(e)) {
			if (Is.func(f)) {
				if (! view.is.handlingOnce[e])
					view.is.handlingOnce[e] = [];
				view.is.handlingOnce[e].push(f);
				onElementListen(e);
			}
			else if (Is.str(f)) {
				view.is.handlingOnce[e].push(function() {
					view.on(f);
				});
			}
			else view.on(e);
		}
		return view;
	};

	/*
	 **** off()
	 *    - Removes all event handlers.
	 *
	 **** off(event)
	 *    - Removes all handlers for the given event.
	 *
	 */
	view.off = function(e) {
		// Turns off the event if the view is handling it.
		if (Is.str(e)) {
			if (view.is.handling[e])
				delete view.is.handling[e];
			if (view.is.handlingOnce[e])
				delete view.is.handlingOnce[e];
		}
		// Turns off all events.
		else if (Is.undef(e)) {
			Each.pair(view.is.handling, function(ev) {
				view.off(ev);
			});
		}
		return view;
	};

	/*
	 **** broadcast(event)
	 *	  - Sends the event to this view and recursively to the children of this view.
	 */
	view.broadcast = function(e) {
		if (Is.str(e)) {
			view.on(e);
			if (! view.isEmpty()) {
				view.forEach(function(child) {
					child.broadcast(e);
				});
			}
		}
		return view;
	}

	/*
	 **** isNow(state)
	 *	  - Assigns the given state to this view.
	 */
	view.isNow = function(t, v) {
		view.is[t] = (Is.def(v)) ? v : true;
		return view;
	};

	/*
	 **** isNoLonger(state)
	 *	  - Removes the given state from this view.
	 */
	view.isNoLonger = function(t) {
		if (view.is[t]) {
			view.is[t] = false;
		}
		return view;
	};

	/*
	 **** isNot(state)
	 *	  - Returns whether this view is not set to the given state.
	 */
	view.isNot = function(t) {
		return view.is[t] == false;
	};

	/*
	 **** fadeIn(args)
	 *	  - Mirrors the jQuery fadeIn function.
	 */
	view.fadeIn = function(arg1, arg2) {
		if (! view.is.visible) {
			view.$.fadeIn(arg1, arg2);
			view.is.visible = true;
		}
		return view;
	};

	/*
	 **** fadeOut(args)
	 *	  - Mirrors the jQuery fadeOut function.
	 */
	view.fadeOut = function(arg1, arg2) {
		if (view.is.visible) {
			view.$.fadeOut(arg1, arg2);
			view.is.visible = false;
		}
		return view;
	};

	/*
	 **** slideToggle(args)
	 *	  - Mirrors the jQuery slideToggle function.
	 */
	view.slideToggle = function(o, c) {
		if (o === 'open') {
			if (! view.is.visible) {
				view.$.slideToggle(o, c);
				view.is.visible = true;
			}
		}
		else if (o === 'close') {
			if (view.is.visible) {
				view.$.slideToggle(o, c);
				view.is.visible = false;
			}
		}
		else {
			view.$.slideToggle(o, c);
			view.is.visible = ! view.is.visible;
		}
		return view;
	};

	view.width = function(opt) {
		if (opt != null) {
			if (opt == 'client') {
				return view.element.clientWidth;
			}
			if (opt == 'scroll') {
				return view.element.scrollWidth;
			}
			return 0;
		}
		return view.element.clientWidth;
	};

	view.height = function(opt) {
		if (opt != null) {
			if (opt == 'client') {
				return view.element.clientHeight;
			}
			if (opt == 'scroll') {
				return view.element.scrollHeight;
			}
			return 0;
		}
		return view.element.clientHeight;
	};

	view.responsive = function(f) {
		onElementListen('resize');
		if (Is.obj(f)) {
			view.on('resize', function() {
				var minWidth = 0,
					lastSize = view.is.responsiveSize;

				// Pick the responsive size
				view.is.responsiveSize = null;
				Each.pair(f, function(size, threshold) {
					// Sentinel value for the view's width
					if (threshold == 0)
						threshold = view.width();

					if (! view.is.responsiveSize ||
						( view.width() > minWidth && view.width() <= threshold)) {
						view.is.responsiveSize = size;
						minWidth = threshold;
					}
				});

				if (view.is.responsiveSize != lastSize) {
					if (lastSize)
						view.unmark(lastSize);
					view.mark(view.is.responsiveSize);
				}
			});
		}
		else if (Is.func(f)) {
			view.on('resize', f);
		}
		return view;
	};

	return view;
};


View('button', function(data) {
	// Set up the options and data for the view.
	data = Is.option(data, {
		str: 'text',
		view: 'text'
	});
	data.tag = 'button';

	// The button element.
	var view = View(data).type('button');

	view.val(function(v) {
		view.add('text', v);
	});

	if (data.prepend)
		view.add('prepend', data.prepend);

	if (Is.def(data.text))
		view.add('text', data.text);

	if (data.append)
		view.add('append', data.append);

	return view;
});

View('form', function() {
	return View({
		tag: 'form'
	}).type('form');
});
View('grid', function() {
	return View().type('grid').style('width', '100%');
});

View('row', function() {
	return View().type('row')
		.style('width', '100%')
		.style('content', '""')
		.style('display', 'table')
		.style('clear', 'both');
});

View('column', function(width) {
	var column = View().type('column')
				.style('float', 'left');

	// Numbers correspond to percentages
	if (Is.num(width))
		column.style('width', width + '%');

	// Other width values can be given as pixels or em
	else if (Is.str(width))
		column.style('width', width);

	return column;
});


View('icon', function(data) {
	if (Is.array(data) && data.length == 2) {
		var stack = View({ tag: 'span' })
			.mark('fa stack').mark('fa lg')
			.add('back', View('icon', data[0]).mark('fa stack 2x'))
			.add('front', View('icon', data[1]).mark('fa stack 1x'));

		return stack;
	}

	data = Is.option(data, { str: 'icon' });

	// The input element.
	var icon = View({ tag: 'i' }).mark('fa').mark('fa-fw');
	icon.is.displayed = 'inline-block';
	icon.can.display = data.icon;

	icon.val(function(iconName, self) {
		if (Is.str(iconName)) {
			if (icon.can.display) {
				icon.unmark('fa ' + icon.can.display);
			}
			icon.can.display = iconName;
			icon.mark('fa ' + icon.can.display);
		}
	}, function() {
		return icon.can.display;
	});

	if (Is.str(data.icon)) {
		icon.mark('fa-' + data.icon);
	}

	if (data.size) {
		icon.style('fontSize', data.size + 'px');
	}

	icon.on('spin', function() {
		icon.toggleMark('fa spin');
	});

	return icon;
});


View('image', function(data) {
	data = Is.option(data, { str: 'source' });

	var image = View({
		tag: 'img'
	}).type('image');

	if (Is.str(data.source)) {
		image.attribute('src', data.source);
	}

	image.val(function(source) {
		image.attribute('src', source);
	});

	return image;
});


View('input', function(data) {
	data = Is.option(data);
	data.tag = (data.textarea) ? 'textarea' : 'input';

	// The input element.
	var input = View(data)
	.type('input')
	.mark('selectable');
	input.is.displayed = 'inline-block';
	input.is.key = {};

	// Event listeners that are binded to the DOM element for inputs/textareas only.
	input.val(function(t) {
		if (Is.str(t)) {
			input.element.value = t;
			return true;
		}
	}, function() {
		return input.element.value;
	});

	input.on('focus', function() {
		input.element.focus();
	});

	input.on('blur', function() {
		input.element.blur();
	});

	input.attribute('placeholder', data.placeholder || '');

	if (Is.member(data.type, ['password', 'email', 'date', 'time'])) {
		input.attribute('type', data.type);
	}
	else {
		input.attribute('type', 'text');
	}

	input.on('keyup', function() {
		if (input.is.key[13]) {
			if (Is.func(data.submit)) {
				data.submit(input.element.value, input);
				e.stopPropagation();
			}
		}
		if (Is.func(data.change)) {
			data.change(input.element.value, input);
		}
		input.on('change');
	});

	input.on('highlight', function() {
		if (input.element.select) {
			input.element.select();
		}
		else if (input.element.setSelectionRange) {
			input.element.setSelectionRange(0, input.element.value.length);
		}
	});

	input.on('propagation', function() {
		input.on('click', function(e) {
			e.stopPropagation();
		});
	});

	if (Is.str(data.value)) {
		input.val(data.value);
	}

	return input;
});

/**
 * @view text area
 */
View('textarea', function(data) {
	data = Is.option(data);
	data.textarea = true;
	var textarea = View('input', data);
	textarea.can.maxHeight = 250;
	textarea.can.cacheHeight = 100;
	textarea.can.addEventListener.mouseout = true;

	textarea.on('responsive', function() {
		textarea.on('change', function() {
			if (textarea.height('scroll') > textarea.height() && textarea.height('scroll') < textarea.can.maxHeight) {
				textarea.style('height', textarea.height('scroll') + 'px');
			}
		});
		textarea.on('change');

		textarea.on('mouseout', function() {
			if (textarea.height() != textarea.can.cacheHeight) {
				textarea.can.cacheHeight = textarea.height();
				textarea.on('resize');
			}
		});
	});

	return textarea;
});

/*global $:false, Create: true, User: false, console: false, window: true */
/*jslint indent: 4, sloppy: true, white: true, plusplus: true */

View('link', function(data) {
	data = Is.option(data, { str: 'text' });

	var link = View({ tag: 'a' }).type('link');


	link.val(function(to) {
		if (Is.str(to)) {
			if (data.tab === true) {
				link.click(function() {
					var win = window.open(to, '_blank');
					win.focus();
				});
			}
			else {
				link.attribute('href', to);
			}
		}
		else if (Is.view(to)) {
			if (to.is.a == 'tab view') {
				//link.can.linkToTabView(to);
			}
		}
		return link;
	});

	// For setting up links.
	if (data.to) {
		link.val(data.to);
	}
	if (Is.view(data.prepend)) {
		link.add(data.prepend);
	}
	if (Is.func(data.click)) {
		link.click(data.click);
	}
	if (Is.str(data.text)) {
		link.add(data.text);
	}
	else if (Is.view(data.content)) {
		link.add(data.content);
	}
	else if (Is.str(data.email)) {
		link.val('mailto:' + data.email);
		link.add(data.email);
	}
	if (Is.view(data.append)) {
		link.add(data.append);
	}
	return link;
});


View('ordered list', function(data) {
	data = Is.option(data);
	var list = View({ tag: 'ol' }).type('list');
	return list;
});

View('unordered list', function(data) {
	data = Is.option(data);
	var list = View({ tag: 'ul' }).type('list');
	return list;
});

View('list item', function(data) {
	data = Is.option(data);
	var item = Create.view({ tag: 'li' }).type('list item');
	return item;
});


View('page', function(data) {
	data = Is.option(data, { str: 'type' });
	var page = View({
		element: document.body
	});
	page.mark('foo');
	page.is.labeled = data.type || 'page';
	return page;
});

View('select', function(data) {
	data = Is.option(data);

	var select = View().type('select');

	select.select(function(choice) {
		if (data.multiple === true) {
			choice.toggleMark('select');
		}
		else {
			choice.mark('select');
		}
		
		if (Is.func(choice.can.select)) {
			choice.can.select(choice);
		}
	}, function(previousChoice) {
		if (data.multiple !== true) {
			previousChoice.unmark('select');
		}
	});
	
	select.can.getValue = function(self) {
		if (self.is.selecting) {
			return self.is.selecting.is.labeled;
		}
		return '';
	};

	select.can.setValue = function(value, self) {
		if (Is.def(value)) {
			self.select(value);
		}
	};
	
	select.add(function(name, choice) {
		var selector;
		choice = Is.option(choice, { str: 'text', db: 'source' });
		if (Is.view(choice.view)) {
			selector = choice.view;
		}
		else if (Is.str(choice.text)) {
			selector = View('text', choice.text);
		}
		else if (Is.str(choice.icon)) {
			selector = View('icon', choice.icon || 'square')
				.mark(['fa-fw', 'clickable']);
		}
		else if (Is.db(choice.source)) {
			selector = View('text');
			On.data(choice.source, function(data) {
				selector.val(data.text || data.name || data.title || '');
			});
		}
		
		if (Is.view(selector)) {
			selector.click(function() {
				select.select(name);
			});
			if (Is.func(choice.select)) {
				selector.can.select = choice.select;
			}
		}
		return selector;
	});

	return select;
});
View('table', function() {
	var view = View({ tag: 'table' });

	return view;
});

View('table row', function() {
	var view = View({ tag: 'tr' });
	view.is.displayed = 'table-row';
	return view;
});

View('table head', function() {
	var view = View({ tag: 'thead' });
	view.is.displayed = 'table-header-group';
	return view;
});

View('table body', function() {
	var view = View({ tag: 'tbody' });
	view.is.displayed = 'table-row-group';
	return view;
});

View('table cell', function(isHead) {
	var view = View({ tag: (isHead) ? 'th' : 'td' });
	view.is.displayed = 'table-cell';
	return view;
});


View('raw text', function(t) {
	var raw = View({
		element: document.createTextNode('' + t)
	});
	raw.is.leaf = true;
	return raw;
});

View('line break', function() {
	var br = View({ tag: 'br' }).type('line break');
	br.is.leaf = true;
	return br;
});

View('line divider', function() {
	var hr = View({ tag: 'hr' }).type('line divider');
	hr.is.leaf = true;
	return hr;
});

View('html', function() {

});

View('markdown', function(text) {
	var md = View().type('markdown');
	if (window.Markdown) {
		md.element.innerHTML = window.Markdown(text);
	}
	else {
		md.add(View('text', text));
	}

	md.can.setValue = function(newText, self) {
		if (Is.str(newText) && window.Markdown) {
			md.element.innerHTML = window.Markdown(newText);
			text = newText;
		}
	};

	md.can.getValue = function() {
		return text;
	}

	return md;
});

Each.pair({
	heading: { tag: 'h1' },
	subheading: { tag: 'h2' },
	title: { tag: 'h3' },
	paragraph: { tag: 'p' },
	text: { tag: 'span' },
	quote: { tag: 'blockquote' }

}, function(type, typography) {

	//	Create a typography element with the given specification.
	View(type, function(data) {
		data = Is.option(data, { str: 'text' });

		var typographyView = View(typography).type(type);
		typographyView.is.displaying = '';
		typographyView.is.displayed = (type == 'text') ? 'inline-block' : 'block';

		typographyView.val(function(text) {
			typographyView.empty().add(View('raw text', text));
			typographyView.is.displaying = text;
		},
		function() {
			return typographyView.is.displaying;
		});

		// Any elements to prepend to this element.
		if (Is.view(data.prepend)) {
			typographyView.add(data.prepend);
		}
		else if (Is.str(data.prepend)) {
			typographyView.add(View('text', data.prepend));
		}

		// The main text content of this typographical element.
		if (data.text) {
			if (Is.view(data.text)) {
				typographyView.add(data.text);
			}
			else if (Is.str(data.text)) {
				typographyView.add(View('raw text', data.text));
				typographyView.is.displaying = data.text;
			}
		}

		// If html is to be set instead.
		else if (Is.str(data.html)) {
			typographyView.element.innerHTML = data.html;
		}

		// Any elements to append to this element.
		if (Is.view(data.append)) {
			typographyView.add(data.append);
		}
		else if (Is.str(data.append)) {
			typographyView.add(View('text', data.append));
		}
		return typographyView;
	});
});

On.module('user', 'schema', {
	user: {
		data: {
			name: 'str',
			email: 'str',
			uid: 'str',
			provider: 'str'
		}
	}
});

(function(controller) {
	if (! window[controller]) window[controller] = {};

	window[controller]._test = {
		group: {},
		context: {},
		current: 0
	};

	var data = window[controller]._test;

	window[controller].test = function(g, n, t, v) {
		if (Is.array(g)) {
			Each.value(g, function(_g) {
				window[controller].test(_g, n, t, v);
			});
		}
		else if (Is.str(g)) {
			// Set test context
			if (Is.obj(n)) {
				if (! data.context[g])
					data.context[g] = {};
				Each.pair(n, function(k, v) {
					data.context[g][k] = v;
				});
			}
			// Create a test
			else if (Is.str(n)) {
				if (! data.group[g])
					data.group[g] = [];
				if (! data.context[g])
					data.context[g] = {};

			    data.group[g].push({
			        name: n,
			        test: t || function(v) { v.done(); },
			        verify: v || function(s, e, c, p, t) {
						if (t) {
							if (p === t) s();
							else e();
						}
						else s();
					},
			        index: data.group[g].length,
					context: data.context[g]
				});
			}
			else if (data.group[g]) {
				var l = View().mark(['test list', g]);

				Each.pair(data.group[g], function(i, t) {
					l.add(i, View('test', t));
					if (i + 1 < data.group[g].length)
						l.child(i).on('verify', function() {
							l.child(i + 1).on('start');
						});
				});

				l.on('birth', function() {
					if (l.is.parenting > 0)
						l.child(0).on('start');
				});

				return l;
			}
			else {
				return View();
			}
	    }
	};
})('On');

// Initialize an empty database
On.test('module', 'Test module loading',
	function(assert, test) {
		test.message('Connecting to ' + test.context.url);

		test.message('Clearing Firebase data.');
		test.context.firebase.remove(function() {
			test.message('Firebase cleared.');

			test.message('Removing authentication data.');
			test.context.firebase.unauth();

			// Test that authentication has been deleted
			assert.True(test.context.firebase.getAuth() === null, 'authentication profile is deleted');
			test.done();
		});
	});

// Set up context object
On.test('schema', {
	url: 'https://orm.firebaseio.com',
	firebase: new Firebase('https://orm.firebaseio.com'),

	// For login
	credential: [{
		uid: '2e04e791-130f-4f79-a7e1-3da57f511ca9',
		name: 'Test Teacher',
		email: 'test@test.com',
		password: 'test',
		provider: 'password'
	}, {
		uid: '69f94a5a-84e3-49f0-951d-e5d9b58cc855',
		name: 'Test Student',
		email: 'student@student.com',
		password: 'student',
		provider: 'password'
	}],

	schema: {
		classroom: {
			data: {
				name: 'str'
			},
			child: {
				homework: true,
				student: true
			}
		},
		teacher: {
			data: {
				name: 'str'
			},
			child: {
				student: true,
				homework: true,
				classroom: true
			}
		},
		student: {
			data: {
				name: 'str'
			},
			child: {
				homework: true
			}
		},
		homework: {
			data: {
				name: 'str',
				score: 'num',
				total: 'num'
			}
		},
		user: {
			data: {
				name: 'str',
				email: 'str',
				perspective: 'str',
				device: 'obj(str:bool)'
			},
			child: {
				homework: true,
				classroom: true
			}
		}
	}
});

// Initialize an empty database
On.test('schema', 'Reset firebase',
	function(assert, test) {
		test.message('Connecting to ' + test.context.url);

		test.message('Clearing Firebase data.');
		test.context.firebase.remove(function() {
			test.message('Firebase cleared.');

			test.message('Removing authentication data.');
			test.context.firebase.unauth();

			// Test that authentication has been deleted
			assert.True(test.context.firebase.getAuth() === null, 'authentication profile is deleted');
			test.done();
		});
	});

// Initialize an empty database
On.test('schema', 'Initialize schema',
	function(assert, test) {
		test.message('Writing schema.')
		test.context.firebase.child('schema').set(test.context.schema, function() {
			test.message('Schema written.', 'success');
			test.done();
		});
	});

// Initialize an empty database
On.test('schema', 'Create the ORM object',
	function(assert, test) {
		var orm = new FirebaseORM(test.context.url);

		// Loads the ORM
		test.message('Loading orm.');
		orm.load(function() {
			test.message('ORM loaded', 'success');
			test.done();
		});

		// Save to the test test.context
		test.context.orm = orm;

		// Save to global variable
		if (! window.ORM) {
			window.ORM = test.context.orm;
			test.message('Set global "ORM" variable to ORM object.')
		}
	});

On.test('schema', 'Write user account data',
	function(assert, test) {
		var orm = test.context.orm;

		Each.value(test.context.credential, function(c) {
			test.message('Writing data for ' + c.email);
			var userData = { data: {
					name: c.name || '',
					email: c.email || ''
				},
				write: {}, read: {} };
			userData.write[c.uid] = true;
			userData.read[c.uid] = true;

			var userRef = orm.firebase.child('data/user').push(userData);

			orm.firebase.child('user/' + c.provider + '/' + c.uid).set(userRef.key());

			c.data = userRef.key();
		});

		test.done();
	});

// Authenticate the user
On.test('schema', 'Authenticate a teacher',
	function(assert, test) {
		var orm = test.context.orm,
			teacher = test.context.credential[0];

		test.message('Authenticating as ' + teacher.email);

		orm.auth({
			email: teacher.email,
			password: teacher.password
		}, function(error) {
			test.message(error);

			assert.True(orm.getId() === teacher.uid, 'user ID match');
			test.done();
		});
	});

// Authenticate the user
On.test('schema', 'Create a homework assignment',
	function(assert, test) {
		var orm = test.context.orm;

		test.message('Calling addHomework on user object.');
		var homework = orm.addHomework();

		assert.True(orm.getHomework(homework.getId()) == homework, 'get homework object');
		assert.True(! Is.empty(orm.getHomework()), 'get homework object');

		test.message('Saving homework object to test.context.');
		test.context.homework = homework;

		test.done();
	});

// Authenticate the user
On.test('schema', 'Create classroom and students',
	function(assert, test) {
		var orm = test.context.orm;

		test.message('Calling addClassroom on user object.');
		var classroom = orm.addClassroom();

		test.context.classroom = classroom;

		test.message('Calling addStudent on classroom object.');
		var student1 = classroom.addStudent();
		var student2 = classroom.addStudent();

		assert.Unequal(student1.getId(), student2.getId(), 'unique ID created for students');
		assert.Equal(Is.length(classroom.getStudent()), 2, 'two students created');

		test.done();
	});

// Authenticate the user
On.test('schema', 'Assign homework to students',
	function(assert, test) {
		var orm = test.context.orm;
		var classroom = test.context.classroom;
		var homework = test.context.homework;

		test.message('Attaching handler to classroom to assign homework.');
		classroom.onStudent(function(student) {
			student.addHomework(homework);
		});

		test.done();
	});

On.test('server', {
	url: 'https://orm.firebaseio.com',
	firebase: new Firebase('https://orm.firebaseio.com')
});

On.test('server', 'Test request',
	function(assert, test) {
		var firebase = test.context.firebase;

		for (var i = 0 ; i < 100 ; i++) {
			firebase.child('queue/tasks').push({
				foo: 'bar',
				baz: 'quux',
				task: i
			});
		}

		test.done();
	});

On.test('stripe', {
	key: 'pk_test_5zOsrow5ZvC5r73B9Ug1tb7W',
	url: 'https://orm.firebaseio.com',
	firebase: new Firebase('https://orm.firebaseio.com'),

	// For login
	user: {
		luke: {
			uid: 'd6bb0139-a698-4bea-8b66-6f8f9f606b63',
			name: 'Luke Skywalker',
			email: 'luke@jedi.com',
			password: 'luke',
			provider: 'password'
		}
	},

	product: {
		LIGHTSABER1: {
			title: 'Blue Lightsaber',
			text: 'Be on the light side',
			price: 100
		},
		LIGHTSABER2: {
			title: 'Red lightsaber',
			text: 'Be on the dark side',
			price: 150
		}
	}
});

// Initialize an empty database
On.test('stripe', 'Reset firebase',
	function(assert, test) {
		test.message('Connecting to ' + test.context.url);

		test.message('Clearing Firebase data.');
		test.context.firebase.remove(function() {
			test.message('Firebase cleared.');

			test.message('Removing authentication data.');
			test.context.firebase.unauth();

			// Test that authentication has been deleted
			assert.True(test.context.firebase.getAuth() === null, 'authentication profile is deleted');
			test.done();
		});
	});

// Initialize an empty database
On.test('stripe', 'Create the ORM object',
	function(assert, test) {
		var orm = new FirebaseORM(test.context.url, {
			stripe: test.context.key
		});

		// Loads the ORM
		test.message('Loading orm.');
		orm.load(function() {
			test.message('ORM loaded', 'success');
			test.done();
		});

		// Save to the test test.context
		test.context.orm = orm;

		// Save to global variable
		if (! window.ORM) {
			window.ORM = test.context.orm;
			test.message('Set global "ORM" variable to ORM object.')
		}
	});

On.test('stripe', 'Write existing user/object data',
	function(assert, test) {
		var orm = test.context.orm;

		test.message('Writing products...');
		Each.pair(test.context.product, function(sku, p) {
			test.message('Writing ' + p.title);

			var droidRef = orm.firebase.child('data/product').child(sku).set({
				data: p,
				write: { public: true },
				read: { public: true }
			});
		});

		test.message('Writing users...');
		Each.value(test.context.user, function(c) {
			if (! c.provider) return;
			test.message('Writing data for ' + c.email);
			var userData = { data: {
					name: c.name || '',
					email: c.email || '',
					uid: c.uid,
					provider: c.provider
				},
				time: {}, write: {}, read: {}, child: { starship: {}, droid: {} } };
			userData.write[c.uid] = true;
			userData.read[c.uid] = true;

			userData.time.created = Math.floor(new Date().getTime() - Math.random() * 100000000);
			userData.time.loaded = Math.floor(userData.time.created + Math.random() * 50000000);

			Each.value(c.starship, function(starshipId) {
				userData.child.starship[test.context.starship[starshipId].key] = true;
			});

			Each.value(c.droid, function(droidId) {
				userData.child.droid[test.context.droid[droidId].key] = true;
			});

			var userRef = orm.firebase.child('data/user').push(userData);
			c.key = userRef.key();

			orm.firebase.child('user/' + c.provider + '/' + c.uid).set(userRef.key());

			c.data = userRef.key();
		});

		test.done();
	});

// Correct login
On.test('stripe', 'User login',
	function(assert, test) {
		var orm = test.context.orm,
			user = test.context.user.luke;

		orm.auth({
			email: user.email,
			password: user.password
		},
		function(error, user) {
			assert.True(error == null, 'no error in logging in');
			assert.True(user.getName() == user.name, 'name matches ' + user.name);
			assert.True(user.getEmail() == user.email, 'email matches ' + user.email);
			test.done();
		});

	});

On.test('stripe', 'Add product to cart',
	function(assert, test) {
		var orm = test.context.orm;

		On.purchase('LIGHTSABER1');
		On.purchase('LIGHTSABER1', function(q) {
			assert.Equal(q, 1, 'Correct quantity.');
			On.purchase('LIGHTSABER1');
			On.purchase('LIGHTSABER1', function(q2) {
				assert.Equal(q2, 2, 'Correct quantity after adding another.');
				On.purchase('LIGHTSABER1', 5);
				On.purchase('LIGHTSABER1', function(q3) {
					assert.Equal(q3, 7, 'Correct quantity after adding multiple.');
					test.done();
				});
			});
		});
	});

On.test('stripe', 'Remove product from cart',
	function(assert, test) {
		var orm = test.context.orm;

		On.purchase('LIGHTSABER1', 0);
		On.purchase('LIGHTSABER1', function(q) {
			assert.Equal(q, 0, 'Correct quantity.');
			assert.False(orm.getCart().hasProduct('LIGHTSABER1'), 'No lightsaber in cart.');
			On.purchase('LIGHTSABER1');
			On.purchase('LIGHTSABER1', function(q2) {
				assert.Equal(q2, 1, 'Correct quantity after re-adding.');
				assert.True(orm.getCart().hasProduct('LIGHTSABER1'), 'Lightsaber in cart.');
				On.purchase('LIGHTSABER1', false);

				On.purchase('LIGHTSABER1', function(q3) {
					assert.Equal(q3, 0, 'Correct quantity after removing.');
					test.done();
				});
			});
		});
	});

On.test('stripe', 'Get cart total',
	function(assert, test) {

		On.purchase(function(price) {
			assert.Equal(price, 0, 'Price is $0');

			On.purchase('LIGHTSABER1', 1);
			On.purchase(function(price) {
				assert.Equal(price, 100, 'Price is now $100');

				On.purchase('LIGHTSABER2', 2);
				On.purchase(function(price) {
					assert.Equal(price, 400, 'Price is now $400');
					test.message(price);
					test.done();
				});
			});
		});
	});

On.test('stripe', 'Get Stripe.js card token',
	function(assert, test) {
		var orm = test.context.orm;
		var cart = orm.getCart();

		On.purchase({
			number: '4242424242424242',
			expirationMonth: '12',
			expirationYear: '2017',
			cvc: '123',
			name: 'Luke Skywalker'
		},
		function() {
			test.message('Got stripe token ' + cart.getToken());
			test.done();
		});
	});

// Set up context object
On.test('user', {
	url: 'https://orm.firebaseio.com',
	firebase: new Firebase('https://orm.firebaseio.com'),

	// For login
	user: {
		luke: {
			uid: 'd6bb0139-a698-4bea-8b66-6f8f9f606b63',
			name: 'Luke Skywalker',
			email: 'luke@jedi.com',
			password: 'luke',
			provider: 'password',
			starship: [ 'falcon' , 'xwing' ],
			droid: [ 'c3po' ]
		},
		han: {
			uid: 'a81040f2-a693-48c2-bbf8-13b1bc6d7093',
			name: 'Han Solo',
			email: 'han@solo.com',
			password: 'lea',
			provider: 'password',
			starship: [ 'falcon' ]
		},
		chewie: {
			uid: 'ec8312ae-0f42-41fa-92d2-69e225a3a12e',
			name: 'Chewbacca',
			email: 'chewbacca@solo.com',
			password: 'mraaa',
			provider: 'password',
			starship: [ 'falcon' ]
		},
		kenobi: {
			uid: '40feebbd-6f86-4542-b322-e9118151b67a',
			name: 'Obi Wan Kenobi',
			email: 'obiwan@jedi.com',
			password: 'kenobi',
			provider: 'password',
			starship: [ 'falcon' ]
		},
		vader: {
			uid: 'd8a1565e-6468-4dd1-906c-9aafb3a7be79',
			name: 'Darth Vader',
			email: 'vader@empire.com',
			password: 'darth',
			provider: 'password',
			starship: [ 'executor' ],
			droid: [ 'c3po' ]
		},
		keshav: {
			uid: '95b78bd6-d590-43ed-ac9e-54a37f400471',
			name: 'Keshav',
			email: 'keshav@keshav.is',
			password: 'keshav',
			provider: 'password'
		},
		public: {
			uid: 'public'
		}
	},

	// Preset data
	starship: {
		falcon: {
			data: { name: 'Millenium Falcon' },
			write: ['han', 'chewie'],
			read: ['han', 'chewie', 'luke']
		},
		executor: {
			data: { name: 'Executor' },
			write: ['vader'],
			// Everyone can see this enormous starship coming
			read: ['public']
		},
		xwing: {
			// The one that blew up the death star
			data: { name: 'X wing' },
			write: ['luke'],
			// Everyone can see this enormous starship coming
			read: ['public']
		}
	},

	droid: {
		r2d2: {
			data: { name: 'R2D2' },
			write: ['luke'],
			read: ['luke', 'vader']
		},
		c3po: {
			data: { name: 'C3PO' },
			write: ['luke'],
			read: ['luke', 'vader']
		}
	},

	// The schema
	schema: {
		starship: {
			data: {
				name: 'str'
			},
			child: {
				droid: true
			}
		},
		droid: {
			data: {
				name: 'str',
				languages: 'num'
			}
		},
		user: {
			data: {
				name: 'str',
				email: 'str',
				perspective: 'str',
				device: 'obj(str:num)'
			},
			child: {
				starship: true,
				droid: true
			}
		}
	}
});

// Initialize an empty database
On.test('user', 'Reset firebase',
	function(assert, test) {
		test.message('Connecting to ' + test.context.url);

		test.message('Clearing Firebase data.');
		test.context.firebase.remove(function() {
			test.message('Firebase cleared.');

			test.message('Removing authentication data.');
			test.context.firebase.unauth();

			// Test that authentication has been deleted
			assert.True(test.context.firebase.getAuth() === null, 'authentication profile is deleted');
			test.done();
		});
	});

// Initialize an empty database
On.test('user', 'Initialize schema',
	function(assert, test) {
		test.message('Writing schema.')
		test.context.firebase.child('schema').set(test.context.schema, function() {
			test.message('Schema written.', 'success');
			test.done();
		});
	});

// Initialize an empty database
On.test('user', 'Create the ORM object',
	function(assert, test) {
		var orm = new FirebaseORM(test.context.url);

		// Loads the ORM
		test.message('Loading orm.');
		orm.load(function() {
			test.message('ORM loaded', 'success');
			test.done();
		});

		// Save to the test test.context
		test.context.orm = orm;

		// Save to global variable
		if (! window.ORM) {
			window.ORM = test.context.orm;
			test.message('Set global "ORM" variable to ORM object.')
		}
	});

On.test('user', 'Write existing user/object data',
	function(assert, test) {
		var orm = test.context.orm;

		test.message('Writing droids...');
		Each.value(test.context.droid, function(d) {
			test.message('Writing ' + d.data.name);

			// Parse read/write permissions
			var modWrite = {}, modRead = {};
			Each.value(d.write, function(u) { modWrite[test.context.user[u].uid] = true; });
			d.write = modWrite;
			Each.value(d.read, function(u) { modRead[test.context.user[u].uid] = true; });
			d.read = modRead;

			d.time = {};
			d.time.created = Math.floor(new Date().getTime() - Math.random() * 100000000);
			d.time.loaded = Math.floor(d.time.created + Math.random() * 50000000);

			var droidRef = orm.firebase.child('data/droid').push(d);
			d.key = droidRef.key();
		});

		test.message('Writing starships...');
		Each.value(test.context.starship, function(s) {
			test.message('Writing ' + s.data.name);

			s.child = { droid: {} };
			// Parse read/write permissions
			var modWrite = {}, modRead = {};
			Each.value(s.write, function(u) { modWrite[test.context.user[u].uid] = true; });
			s.write = modWrite;
			Each.value(s.read, function(u) { modRead[test.context.user[u].uid] = true; });
			s.read = modRead;

			Each.value(s.droid, function(droidId) {
				s.child.droid[test.context.droid[droidId].key] = true;
			});
			delete s.droid;

			s.time = {};
			s.time.created = Math.floor(new Date().getTime() - Math.random() * 100000000);
			s.time.loaded = Math.floor(s.time.created + Math.random() * 50000000);

			var shipRef = orm.firebase.child('data/starship').push(s);
			s.key = shipRef.key();
		});

		test.message('Writing users...');
		Each.value(test.context.user, function(c) {
			if (! c.provider) return;
			test.message('Writing data for ' + c.email);
			var userData = { data: {
					name: c.name || '',
					email: c.email || '',
					uid: c.uid,
					provider: c.provider
				},
				time: {}, write: {}, read: {}, child: { starship: {}, droid: {} } };
			userData.write[c.uid] = true;
			userData.read[c.uid] = true;

			userData.time.created = Math.floor(new Date().getTime() - Math.random() * 100000000);
			userData.time.loaded = Math.floor(userData.time.created + Math.random() * 50000000);

			Each.value(c.starship, function(starshipId) {
				userData.child.starship[test.context.starship[starshipId].key] = true;
			});

			Each.value(c.droid, function(droidId) {
				userData.child.droid[test.context.droid[droidId].key] = true;
			});

			var userRef = orm.firebase.child('data/user').push(userData);
			c.key = userRef.key();

			orm.firebase.child('user/' + c.provider + '/' + c.uid).set(userRef.key());

			c.data = userRef.key();
		});

		test.done();
	});

// User does not exist
On.test('user', 'Invalid user',
	function(assert, test) {
		var orm = test.context.orm;
		orm.auth({
			email: 'bademail',
			password: 'badpassword'
		}, function(error) {
			assert.True(error.code === 'INVALID_EMAIL', 'email is invalid');

			orm.auth({
				email: 'good@email.com',
				password: 'butnotrealemail'
			}, function(error) {
				assert.True(error.code === 'INVALID_USER', 'user is invalid');
				test.done();
			});
		});
	});

// Password is incorrect
On.test('user', 'Wrong password',
	function(assert, test) {
		var orm = test.context.orm,
			user = test.context.user.luke;

		test.message('Wrong password for ' + user.email);

		orm.auth({
			email: user.email,
			password: 'badpassword'
		}, function(error) {
			assert.Equal(error.code, 'INVALID_PASSWORD', 'password does not match.');
			test.done();
		});
	});

// Anonymous login first
On.test('user', 'Anonymous login',
	function(assert, test) {
		var orm = test.context.orm;

		orm.auth(function() {
			test.message('Anonymous user ' + orm.getId());
			test.context.anonymousId = orm.getId();
			test.done();
		});
	});

// Correct login
On.test('user', 'User login',
	function(assert, test) {
		var orm = test.context.orm,
			user = test.context.user.luke;

		orm.auth({
			email: user.email,
			password: user.password
		}, function(error, user) {
			assert.True(error == null, 'no error in logging in');
			assert.True(user.getName() == user.name, 'name matches ' + user.name);
			assert.True(user.getEmail() == user.email, 'email matches ' + user.email);
			test.done();
		});

	});

// Logout
On.test('user', 'User logout',
	function(assert, test) {
		var orm = test.context.orm;

		orm.auth(false, function() {
			test.message('ID is now ' + orm.getId());
			test.done();
		});
	});

On.test('user', 'Login and read data',
	function(assert, test) {
		var orm = test.context.orm,
			login = test.context.user.luke;

		orm.auth({
			email: login.email,
			password: login.password
		}, function(error, user) {
			assert.Undefined(error, 'successful login');
			assert.Equal(user.getName(), login.name, 'name matches');
			assert.True(user.getEmail() == login.email, 'email matches');

			user.onEmail(function(email) {
				assert.True(email == login.email, 'email callback returns correct value.');
				test.done();
			});
		});
	});

On.test('user', 'Read child data',
	function(assert, test) {
		var orm = test.context.orm;

		test.message(Is.length(orm.getStarship()) == 2, 'has two starships');

		orm.eachStarship(function(starship) {
			assert.True(orm.hasStarship(starship.getId()), 'has ' + starship.getName());
		});

		test.done();
	});


On.test('view event', {
	buttonStyle: {
		background: 'rgba(0, 0, 0, 0.2)',
		padding: '10px 20px',
		borderRadius: 5,
		margin: '5px 0px'
	}
});

On.test('view event', 'click',
function(assert, test) {
	var view = View({ tag: 'button' }).add('click me');
	test.prompt('Click the button');
	test.message(view);

	view.click(function() {
		test.done();
		view.remove();
	});
});

On.test('view event', 'hover',
function(assert, test) {
	var view = View().add('hover over me')
		.style(test.context.buttonStyle);
	test.prompt('Hover over the box');
	test.message(view);

	view.hover(function() {
		test.done();
		view.remove();
	});
});

On.test('view event', 'hover, then exit',
function(assert, test) {
	var view = View().add('hover over me, then hover out')
		.style(test.context.buttonStyle);

	test.prompt(view);

	view.hover(function() {
		test.message('Now hover out');
	}, function() {
		test.done();
		view.remove();
	});
});

On.test('view event', 'double click',
function(assert, test) {
	var view = View().add('double click me')
		.style(test.context.buttonStyle);

	test.prompt(view);

	view.on('double click', function() {
		test.done();
		view.remove();
	});
});


On.test('view', 'view constructor',
    function(assert, test) {
        var view = View();

        assert.Defined(view);
        assert.Equal(view.type(), 'view');
        assert.Equal(view.getType(), 'view');
        assert.Undefined(view.getId());

        assert.True(view.element instanceof HTMLElement, 'element created');
        assert.True(view.element.nodeType == 1, 'element is a DOMElement');

        test.done();
    });

On.test('view', 'view.add( value )',
    function(assert, test) {
        var view = View();

        test.message('Adding text to a view');
        assert.Equal(view.is.parenting, 0, 'view has no children');
        var result = view.add('test');
        assert.Equal(result, view, 'returned parent view on add');
        assert.Equal(view.is.parenting, 1, 'view has one child');
        assert.True(view.hasChild(0), 'child was auto-assigned the ID of 0');
        assert.Equal(view.child(0).element.nodeType, 3, 'child is a text node');
        assert.Equal(view.child(0).element.nodeValue, 'test', 'text node has added text');

        test.message('Adding more text to the view');
        var result = view.add('another');
        assert.Equal(view.is.parenting, 2, 'view has two children');
        assert.HTML(view, '<div>testanother</div>');
        assert.True(view.hasChild(1), 'child was auto-assigned the ID of 1');
        assert.Equal(view.child(1).element.nodeType, 3, 'child is a text node');
        assert.Equal(view.child(1).element.nodeValue, 'another', 'text node has added text');

        test.message('Add a number to the view');
        var result = view.add(42);
        assert.Equal(result, view, 'returned parent view on add');
        assert.Equal(view.is.parenting, 3, 'view has three children');
        assert.True(view.hasChild(2), 'child was auto-assigned the ID of 2');
        assert.Equal(view.child(2).element.nodeType, 3, 'child is a text node');
        assert.Equal(view.child(2).element.nodeValue, '42', 'text node has added text');

        test.done();
    });

On.test('view', 'view.add( view )',
    function(assert, test) {
        var view = View();
        var child = View();

        test.message('Adding view to a view')
        assert.Equal(view.is.parenting, 0, 'view has no children');
        view.add(child);
        assert.Equal(view.is.parenting, 1, 'view has one child');
        assert.True(view.hasChild(0), 'child was auto-assigned the ID of 0');
        assert.Equal(view.child(0), child, 'child is correct view');
        test.done();
    });

On.test('view', 'view.add( id, view )',
    function(assert, test) {
        var view = View();
        var childOne = View();
        var childTwo = View();

        test.message('Adding multiple labeled views');
        view.add('one', childOne);
        view.add('two', childTwo);
        assert.Equal(view.is.parenting, 2, 'view has two children');
        assert.True(! view.hasChild(0), 'no auto-assigned ID');
        assert.True(view.hasChild('one') && view.hasChild('two'), 'has children with ids');
        assert.True(view.child('one') == childOne && view.child('two') == childTwo);
        test.done();
    });

On.test('view', 'view.add( id, view, before )',
    function(assert, test) {
        var view = View();
        var childOne = View().add('one');
        var childTwo = View().add('two');

        test.message('Adding multiple labeled views');
        view.add('one', childOne);
        view.add('two', childTwo, 'one');
        assert.HTML(view, '<div><div>two</div><div>one</div></div>',
            'correct ordering');

        view.add('three', View().add('three'), 'one');
            assert.HTML(view, '<div><div>two</div><div>three</div><div>one</div></div>',
                'correct ordering');

        view.add('four', View().add('four'), 'two');
            assert.HTML(view, '<div><div>four</div><div>two</div><div>three</div><div>one</div></div>',
                'correct ordering');

        view.add('five', View().add('five'));
            assert.HTML(view, '<div><div>four</div><div>two</div><div>three</div><div>one</div><div>five</div></div>',
                'correct ordering');

        test.done();
    });

On.test('view', 'view.addFirst( view )',
    function(assert, test) {
        test.done();
    });

On.test('view', 'view.addAfter( view, after )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addBefore( view, before )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.replace( id, view )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addHidden( view )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addHidden(id, view, before )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.remove',
function(assert, test) {
    test.done();
});
On.test('view', 'view.empty()',
function(assert, test) {
    test.done();
});
On.test('view', 'view.val',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addFirst( view )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addFirst( view )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addFirst( view )',
function(assert, test) {
    test.done();
});
On.test('view', 'view.addFirst( view )',
function(assert, test) {
    test.done();
});

On.test('sortable', {
	timeout: 120000,
	sortableStyle: {
		margin: '5px 0px',
		padding: '10px 15px',
		background: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 5
	}
});

On.test('sortable', 'sortable list',
function(assert, test) {
	var view = View().add(function(id, t) {
		return View().add(View().add(t.text)
			.style(test.context.sortableStyle));
	});

	view.add('fourth', { text: 'fourth' });
	view.add('second', { text: 'second' });
	view.add('first', { text: 'first' });
	view.add('third', { text: 'third' });

	test.prompt('Sort the view contents into order');
	test.message(view);

	view.sortable({
		//helper: true,

		change: function(cancel) {
			//cancel();
			test.message(view.is.ordering + '');
			if ('' + view.is.ordering == 'first,second,third,fourth') {
				test.done();
			}
		}
	});
});

On.test('sortable', 'connected sortable',
function(assert, test) {
	var createView = function(l) {
		var lv = View()
			.type('sort list')
			.style({
				width: 300,
				display: 'inline-block',
				marginRight: 20,
				background: 'rgba(0, 0, 0, 0.05)',
				minHeight: 50
			})
			.sortable({
				connect: true,
				change: function(cancel) {
					//cancel();
					test.message('List ' + lv.getId() + ': ' + lv.is.ordering);

					if (lv.is.ordering + '' == 'sixth,fifth,fourth,third,second,first')
						test.done();
				}
			});

		Each.value(l, function(li) {
			lv.add(li, View().add(View().add(li)
				.style(test.context.sortableStyle)));
		});

		return lv;
	}
	var left = createView(['first', 'second', 'third']);
	var right = createView(['fourth', 'fifth', 'sixth']);


	test.prompt('Move all items to the left list in reverse numeric order (sixth ... first)');
	test.message(View().add(left).add(right));
});

/**
 * @view test
 */
View('test', function(test) {
    var view = View().mark(['test', 'pending']);

    view.add('title', View().mark('title').add(test.name));

    view.on('start', function() {
        view.unmark('pending');

        // Adds a message to the text view.
        var addMessage = function(message, type) {
            view.add((Is.view(message)) ? message :
                View().mark(type || 'message').add(message));
        };

        var timeout = setTimeout(function() {
            timedOut = true;
            view.on(['stop', 'verify', 'error']);
            addMessage('Timed out after ' +
                (test.timeout || test.context.timeout || 10000) + ' ms.', 'error');
        }, test.timeout || test.context.timeout || 10000),

            // Flags
            timedOut = false,

            timeStart = new Date().getTime();
            view.on('verify', function() {
                view.child('title').add(View()
                    .add((new Date().getTime() - timeStart) + ' ms')
                    .style({
                        float: 'right',
                        opacity: '0.3'
                    }));
            });

        try {
            var passedTest = 0, totalTests = 0,
            completeTest = function(pass, message) {
                totalTests++;
                if (pass) passedTest++;
                addMessage('Test ' + totalTests + ((pass) ? ' passed' : ' failed') +
                        ((Is.str(message)) ? (': ' + message) : '.'),
                        (pass) ? 'success' : 'error');
            };

            test.test({
                Equal: function(a, b, message) {
                    if (a === b) completeTest(true, message);
                    else {
                        completeTest(false, message);
                        addMessage(a + ' != ' + b);
                    }
                },
                Unequal: function(a, b, message) {
                    if (a !== b) completeTest(true, message);
                    else {
                        completeTest(false, message);
                        addMessage(a + ' == ' + b);
                    }
                },
                True: function(c, message) {
                    completeTest(c === true, message);
                },
                False: function(c, message) {
                    completeTest(c === false, message);
                },
                HTML: function(v, html, message) {
                    if (Is.view(v) && v.element.outerHTML == html)
                        completeTest(true, message);
                    else {
                        completeTest(false, message);
                        addMessage(v.element.outerHTML);
                    }
                },
                Defined: function(v, message) {
                    completeTest(v != null, message);
                },
                Undefined: function(v, message) {
                    completeTest(v == null, message);
                },
                InnerHTML: function(v, html, message) {
                    completeTest(Is.view(v) && v.element.innerHTML == html, message);
                }
            }, {
                message: addMessage,
                context: test.context,
                prompt: function(message) {
                    if (message) addMessage(message);
                    $('html, body').animate({
                        scrollTop: view.$.offset().top
                    }, 1000);
                },
                done: function() {
                    if (! view.is.done) {
                        view.isNow('done');
                        clearTimeout(timeout);
                        view.on('stop');
                        test.verify(
                            function(message) {
                                if (message) addMessage(message, 'success');
                                view.on(['verify', 'success']);
                            },
                            function(message) {
                                if (message) addMessage(message, 'error');
                                view.on(['verify', 'error']);
                            },
                            test.context, passedTest, totalTests);
                    }
                }
            });
        }
        catch(e) {
            console.error(e);
            clearTimeout(timeout);
            addMessage('' + e, 'error');
            view.on(['stop', 'verify', 'error']);
        }
    });

    view.on('stop', function() {
        view.unmark('pending');
    });

    view.on('success', function() {
        view.mark('success');
    });

    view.on('error', function() {
        view.mark('error');
        $('html, body').animate({
            scrollTop: view.$.offset().top
        }, 1000);
    });

    return view;
});

On.module('stripe', 'load', function(option, orm) {
	$.getScript('https://js.stripe.com/v2/', function() {
		Stripe.setPublishableKey(option.stripe);
	});

	// Controller method for adding/removing purchases from the shopping cart.
	On.purchase = function(product, quantity) {
		// Get the shopping cart object.
		var payment = orm.getCart();
		// Create a shopping cart object if there isn't already one for the user.
		if (! payment) {
			payment = orm.push('payment');
			orm.addPayment(payment);
			orm.setCart(payment);
		}
		
		// Load the payment object's data.
		payment.load(function() {
			// For returning the total price of the current purchase to a callback.
			if (Is.func(product)) {
				var totalPrice = 0,
					totalProducts = payment.countProduct();

				if (totalProducts == 0)
					product(0);

				// Add the total price of each product.
				else payment.eachProduct(function(pr) {
					totalPrice += payment.getQuantity(pr) * pr.getPrice();
					totalProducts--;

					// If all products have been added
					if (totalProducts == 0)
						product(totalPrice);
				});
			}

			// For adding a new product to the cart by ID or by its object
			if (Is.str(product) || Is.data(product)) {
				// Convert ID to product object.
				if (Is.str(product))
					product = orm.get('product', product);

				// Add the product object as a child of the payment
				var currentQuantity = payment.getQuantity(product) || 0;

				// Pass the current quantity to a callback function if there is one.
				if (Is.func(quantity)) {
					quantity(currentQuantity);
				}
				// Otherwise, update the current quantity.
				else {
					// Increment the quantity
					if (Is.undef(quantity))
						quantity = currentQuantity + 1;
					// Remove the object (i.e. set quantity to 0)
					else if (quantity === 0 || quantity === false)
						quantity = 0;
					// Add to quantity by a given amount
					else if (Is.num(quantity))
						quantity += currentQuantity;
					// Otherwise remove the product
					else quantity = 0;

					// Modify the relation between the product and the payment object.
					if (quantity > 0) {
						payment.addProduct(product);
						payment.setQuantity(product, quantity);
					}
					else {
						payment.removeProduct(product);
						payment.removeQuantity(product);
					}
				}
			}
			//
			else if (Is.obj(product)) {
				payment.set(product);

				if (payment.getNumber() && payment.getCvc() &&
					payment.getExpirationMonth() && payment.getExpirationYear()) {
					var paymentData = payment.val();
					paymentData.exp_month = paymentData.expirationMonth;
					paymentData.exp_year = paymentData.expirationYear;

					Stripe.card.createToken(paymentData, function(status, response) {
						if (response.error) {
							payment.setError(response.error.message);
							if (Is.func(quantity)) quantity(response.error.message);
						}
						else {
							payment.setToken(response.id);
							if (Is.func(quantity)) quantity();
						}
					});
				}
			}
		});
	}
});

On.module('stripe', 'schema', {
    user: {
        data: {
            cart: 'payment'
        },
        child: {
            payment: true
        }
    },
    product: {
        data: {
            title: 'str',
            text: 'str',
            receipt: 'str',
            price: 'num',
            discount: 'num'
        }
    },
    payment: {
        data: {
            name: 'str',
            number: 'str',
            cvc: 'str',
            expirationMonth: 'str',
            expirationYear: 'str',
            token: 'str',
            error: 'str',
            quantity: 'obj(product:num)'
        },
        child: {
            receipt: 1,
            product: true
        },
        server: {
            process: true
        }
    },
    receipt: {
        data: {

        }
    }
});

On.module('stripe', 'load', function(option, orm) {
	$.getScript('https://js.stripe.com/v2/', function() {
		Stripe.setPublishableKey(option.stripe);
	});

	// Controller method for adding/removing purchases from the shopping cart.
	On.purchase = function(product, quantity) {
		// Get the shopping cart object.
		var payment = orm.getCart();
		// Create a shopping cart object if there isn't already one for the user.
		if (! payment) {
			payment = orm.push('payment');
			orm.addPayment(payment);
			orm.setCart(payment);
		}
		
		// Load the payment object's data.
		payment.load(function() {
			// For returning the total price of the current purchase to a callback.
			if (Is.func(product)) {
				var totalPrice = 0,
					totalProducts = payment.countProduct();

				if (totalProducts == 0)
					product(0);

				// Add the total price of each product.
				else payment.eachProduct(function(pr) {
					totalPrice += payment.getQuantity(pr) * pr.getPrice();
					totalProducts--;

					// If all products have been added
					if (totalProducts == 0)
						product(totalPrice);
				});
			}

			// For adding a new product to the cart by ID or by its object
			if (Is.str(product) || Is.data(product)) {
				// Convert ID to product object.
				if (Is.str(product))
					product = orm.get('product', product);

				// Add the product object as a child of the payment
				var currentQuantity = payment.getQuantity(product) || 0;

				// Pass the current quantity to a callback function if there is one.
				if (Is.func(quantity)) {
					quantity(currentQuantity);
				}
				// Otherwise, update the current quantity.
				else {
					// Increment the quantity
					if (Is.undef(quantity))
						quantity = currentQuantity + 1;
					// Remove the object (i.e. set quantity to 0)
					else if (quantity === 0 || quantity === false)
						quantity = 0;
					// Add to quantity by a given amount
					else if (Is.num(quantity))
						quantity += currentQuantity;
					// Otherwise remove the product
					else quantity = 0;

					// Modify the relation between the product and the payment object.
					if (quantity > 0) {
						payment.addProduct(product);
						payment.setQuantity(product, quantity);
					}
					else {
						payment.removeProduct(product);
						payment.removeQuantity(product);
					}
				}
			}
			//
			else if (Is.obj(product)) {
				payment.set(product);

				if (payment.getNumber() && payment.getCvc() &&
					payment.getExpirationMonth() && payment.getExpirationYear()) {
					var paymentData = payment.val();
					paymentData.exp_month = paymentData.expirationMonth;
					paymentData.exp_year = paymentData.expirationYear;

					Stripe.card.createToken(paymentData, function(status, response) {
						if (response.error) {
							payment.setError(response.error.message);
							if (Is.func(quantity)) quantity(response.error.message);
						}
						else {
							payment.setToken(response.id);
							if (Is.func(quantity)) quantity();
						}
					});
				}
			}
		});
	}
});

On.module('stripe', 'schema', {
    user: {
        data: {
            cart: 'payment'
        },
        child: {
            payment: true
        }
    },
    product: {
        data: {
            title: 'str',
            text: 'str',
            receipt: 'str',
            price: 'num',
            discount: 'num'
        }
    },
    payment: {
        data: {
            name: 'str',
            number: 'str',
            cvc: 'str',
            expirationMonth: 'str',
            expirationYear: 'str',
            token: 'str',
            error: 'str',
            quantity: 'obj(product:num)'
        },
        child: {
            receipt: 1,
            product: true
        },
        server: {
            process: true
        }
    },
    receipt: {
        data: {

        }
    }
});

On.module('user', 'schema', {
	user: {
		data: {
			name: 'str',
			email: 'str',
			uid: 'str',
			provider: 'str'
		}
	}
});

//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);

/*!
 * FullCalendar v2.2.5
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):t(jQuery,moment)})(function(t,e){function n(t){i(Ee,t)}function i(e){function n(n,s){t.isPlainObject(s)&&t.isPlainObject(e[n])&&!r(n)?e[n]=i({},e[n],s):void 0!==s&&(e[n]=s)}for(var s=1;arguments.length>s;s++)t.each(arguments[s],n);return e}function r(t){return/(Time|Duration)$/.test(t)}function s(t){var n=e.localeData||e.langData;return n.call(e,t)||n.call(e,"en")}function o(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function l(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function a(){t("body").addClass("fc-not-allowed")}function u(){t("body").removeClass("fc-not-allowed")}function d(e,n,i){var r=Math.floor(n/e.length),s=Math.floor(n-r*(e.length-1)),o=[],l=[],a=[],u=0;c(e),e.each(function(n,i){var d=n===e.length-1?s:r,c=t(i).outerHeight(!0);d>c?(o.push(i),l.push(c),a.push(t(i).height())):u+=c}),i&&(n-=u,r=Math.floor(n/o.length),s=Math.floor(n-r*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?s:r,u=l[e],d=a[e],c=i-(u-d);i>u&&t(n).height(c)})}function c(t){t.height("")}function h(e){var n=0;return e.find("> *").each(function(e,i){var r=t(i).outerWidth();r>n&&(n=r)}),n++,e.width(n),n}function f(t,e){return t.height(e).addClass("fc-scroller"),t[0].scrollHeight-1>t[0].clientHeight?!0:(g(t),!1)}function g(t){t.height("").removeClass("fc-scroller")}function p(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function m(t){var e=t.offset().left,n=e+t.width(),i=t.children(),r=i.offset().left,s=r+i.outerWidth();return{left:r-e,right:n-s}}function v(t){return 1==t.which&&!t.ctrlKey}function y(t,e){var n,i,r,s,o=t.start,l=t.end,a=e.start,u=e.end;return l>a&&u>o?(o>=a?(n=o.clone(),r=!0):(n=a.clone(),r=!1),u>=l?(i=l.clone(),s=!0):(i=u.clone(),s=!1),{start:n,end:i,isStart:r,isEnd:s}):void 0}function w(t,e){if(t=t||{},void 0!==t[e])return t[e];for(var n,i=e.split(/(?=[A-Z])/),r=i.length-1;r>=0;r--)if(n=t[i[r].toLowerCase()],void 0!==n)return n;return t["default"]}function E(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function S(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days")})}function b(t,e){var n,i;for(n=0;ze.length>n&&(i=ze[n],!D(i,t,e));n++);return i}function D(t,n,i){var r;return r=null!=i?i.diff(n,t,!0):e.isDuration(n)?n.as(t):n.end.diff(n.start,t,!0),r>=1&&_(r)?r:!1}function C(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function T(t){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function x(t){var e=function(){};return e.prototype=t,new e}function H(t,e){for(var n in t)R(t,n)&&(e[n]=t[n])}function R(t,e){return Le.call(t,e)}function k(e){return/undefined|null|boolean|number|string/.test(t.type(e))}function M(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var r,s;for(r=0;e.length>r;r++)s=e[r].apply(n,i)||s;return s}}function F(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t]}function z(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function L(t){return t.replace(/&.*?;/g,"")}function P(t){return t.charAt(0).toUpperCase()+t.slice(1)}function V(t,e){return t-e}function _(t){return 0===t%1}function G(t,e){var n,i,r,s,o=function(){var l=+new Date-s;e>l&&l>0?n=setTimeout(o,e-l):(n=null,t.apply(r,i),n||(r=i=null))};return function(){r=this,i=arguments,s=+new Date,n||(n=setTimeout(o,e))}}function A(n,i,r){var s,o,l,a,u=n[0],d=1==n.length&&"string"==typeof u;return e.isMoment(u)?(a=e.apply(null,n),Y(u,a)):C(u)||void 0===u?a=e.apply(null,n):(s=!1,o=!1,d?Pe.test(u)?(u+="-01",n=[u],s=!0,o=!0):(l=Ve.exec(u))&&(s=!l[5],o=!0):t.isArray(u)&&(o=!0),a=i||s?e.utc.apply(e,n):e.apply(null,n),s?(a._ambigTime=!0,a._ambigZone=!0):r&&(o?a._ambigZone=!0:d&&a.zone(u))),a._fullCalendar=!0,a}function N(t,n){var i,r,s=!1,o=!1,l=t.length,a=[];for(i=0;l>i;i++)r=t[i],e.isMoment(r)||(r=De.moment.parseZone(r)),s=s||r._ambigTime,o=o||r._ambigZone,a.push(r);for(i=0;l>i;i++)r=a[i],n||!s||r._ambigTime?o&&!r._ambigZone&&(a[i]=r.clone().stripZone()):a[i]=r.clone().stripTime();return a}function Y(t,e){t._ambigTime?e._ambigTime=!0:e._ambigTime&&(e._ambigTime=!1),t._ambigZone?e._ambigZone=!0:e._ambigZone&&(e._ambigZone=!1)}function O(t,e){t.year(e[0]||0).month(e[1]||0).date(e[2]||0).hours(e[3]||0).minutes(e[4]||0).seconds(e[5]||0).milliseconds(e[6]||0)}function B(t,e){return Ge.format.call(t,e)}function Z(t,e){return I(t,U(e))}function I(t,e){var n,i="";for(n=0;e.length>n;n++)i+=W(t,e[n]);return i}function W(t,e){var n,i;return"string"==typeof e?e:(n=e.token)?Ae[n]?Ae[n](t):B(t,n):e.maybe&&(i=I(t,e.maybe),i.match(/[1-9]/))?i:""}function j(t,e,n,i,r){var s;return t=De.moment.parseZone(t),e=De.moment.parseZone(e),s=(t.localeData||t.lang).call(t),n=s.longDateFormat(n)||n,i=i||" - ",X(t,e,U(n),i,r)}function X(t,e,n,i,r){var s,o,l,a,u="",d="",c="",h="",f="";for(o=0;n.length>o&&(s=$(t,e,n[o]),s!==!1);o++)u+=s;for(l=n.length-1;l>o&&(s=$(t,e,n[l]),s!==!1);l--)d=s+d;for(a=o;l>=a;a++)c+=W(t,n[a]),h+=W(e,n[a]);return(c||h)&&(f=r?h+i+c:c+i+h),u+f+d}function $(t,e,n){var i,r;return"string"==typeof n?n:(i=n.token)&&(r=Ne[i.charAt(0)],r&&t.isSame(e,r))?B(t,i):!1}function U(t){return t in Ye?Ye[t]:Ye[t]=q(t)}function q(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push(e[1]):e[2]?n.push({maybe:q(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push(e[5]);return n}function K(){}function Q(t,e){return t||e?t&&e?t.grid===e.grid&&t.row===e.row&&t.col===e.col:!1:!0}function J(t){var e=ee(t);return"background"===e||"inverse-background"===e}function te(t){return"inverse-background"===ee(t)}function ee(t){return F((t.source||{}).rendering,t.rendering)}function ne(t){var e,n,i={};for(e=0;t.length>e;e++)n=t[e],(i[n._id]||(i[n._id]=[])).push(n);return i}function ie(t,e){return t.eventStartMS-e.eventStartMS}function re(t,e){return t.eventStartMS-e.eventStartMS||e.eventDurationMS-t.eventDurationMS||e.event.allDay-t.event.allDay||(t.event.title||"").localeCompare(e.event.title)}function se(n){var i,r,s,o,l=De.dataAttrPrefix;return l&&(l+="-"),i=n.data(l+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},r=i.start,null==r&&(r=i.time),s=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(l+"start")),null==r&&(r=n.data(l+"time")),null==s&&(s=n.data(l+"duration")),null==o&&(o=n.data(l+"stick")),r=null!=r?e.duration(r):null,s=null!=s?e.duration(s):null,o=Boolean(o),{eventProps:i,startTime:r,duration:s,stick:o}}function oe(t,e){var n,i;for(n=0;e.length>n;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function le(t,e){return t.leftCol-e.leftCol}function ae(t){var e,n,i;if(t.sort(re),e=ue(t),de(e),n=e[0]){for(i=0;n.length>i;i++)ce(n[i]);for(i=0;n.length>i;i++)he(n[i],0,0)}}function ue(t){var e,n,i,r=[];for(e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&fe(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function de(t){var e,n,i,r,s;for(e=0;t.length>e;e++)for(n=t[e],i=0;n.length>i;i++)for(r=n[i],r.forwardSegs=[],s=e+1;t.length>s;s++)fe(r,t[s],r.forwardSegs)}function ce(t){var e,n,i=t.forwardSegs,r=0;if(void 0===t.forwardPressure){for(e=0;i.length>e;e++)n=i[e],ce(n),r=Math.max(r,1+n.forwardPressure);t.forwardPressure=r}}function he(t,e,n){var i,r=t.forwardSegs;if(void 0===t.forwardCoord)for(r.length?(r.sort(pe),he(r[0],e+1,n),t.forwardCoord=r[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;r.length>i;i++)he(r[i],0,t.forwardCoord)}function fe(t,e,n){n=n||[];for(var i=0;e.length>i;i++)ge(t,e[i])&&n.push(e[i]);return n}function ge(t,e){return t.bottom>e.top&&t.top<e.bottom}function pe(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||re(t,e)}function me(n,r){function o(t){return(t.locale||t.lang).call(t,te.lang).humanize()}function l(t){se?d()&&(y(),h(t)):a()}function a(){oe=te.theme?"ui":"fc",n.addClass("fc"),te.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),te.theme?n.addClass("ui-widget"):n.addClass("fc-unthemed"),se=t("<div class='fc-view-container'/>").prependTo(n),ie=new ve(Q,te),re=ie.render(),re&&n.prepend(re),c(te.defaultView),te.handleWindowResize&&(ue=G(E,te.windowResizeDelay),t(window).resize(ue))}function u(){le&&le.destroyView(),ie.destroy(),se.remove(),n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),t(window).unbind("resize",ue)}function d(){return n.is(":visible")}function c(t){h(0,t)}function h(e,n){pe++,le&&n&&le.type!==n&&(ie.deactivateButton(le.type),j(),le.start&&le.destroyView(),le.el.remove(),le=null),!le&&n&&(le=f(n),le.el=t("<div class='fc-view fc-"+n+"-view' />").appendTo(se),ie.activateButton(n)),le&&(0>e?de=le.computePrevDate(de):e>0&&(de=le.computeNextDate(de)),le.start&&!e&&de.isWithin(le.intervalStart,le.intervalEnd)||d()&&(j(),le.start&&le.destroyView(),le.setDate(de),le.renderView(),X(),F(),z(),H())),X(),pe--}function f(t){var e=g(t);return new e["class"](Q,e.options,t)}function g(n){function i(e){"function"==typeof e?s=e:"object"==typeof e&&t.extend(r,e)}var r,s,l,a,u,d=te.defaultButtonText||{},c=te.buttonText||{},h=te.views||{},f=n,g=[],p=!1;if(ge[n])return ge[n];for(;f&&!s;)r={},i(Ce[f]),i(h[f]),g.unshift(r),f=r.type;return g.unshift({}),r=t.extend.apply(t,g),s?(l=r.duration||s.duration,l&&(l=e.duration(l),a=b(l),p=1===D(a,l)),p&&h[a]&&(r=t.extend({},h[a],r)),u=c[n]||(p?c[a]:null)||d[n]||(p?d[a]:null)||r.buttonText||s.buttonText||(l?o(l):null)||n,ge[n]={"class":s,options:r,buttonText:u}):void 0}function p(t){return Boolean(g(t))}function m(t){var e=g(t);return e?e.buttonText:void 0}function v(t){return d()?(t&&w(),pe++,le.updateSize(!0),pe--,!0):void 0}function y(){d()&&w()}function w(){ae="number"==typeof te.contentHeight?te.contentHeight:"number"==typeof te.height?te.height-(re?re.outerHeight(!0):0):Math.round(se.width()/Math.max(te.aspectRatio,.5))}function E(t){!pe&&t.target===window&&le.start&&v(!0)&&le.trigger("windowResize",fe)}function S(){T(),R()}function C(){d()&&(j(),le.destroyViewEvents(),le.renderViewEvents(me),X())}function T(){j(),le.destroyViewEvents(),X()}function H(){!te.lazyFetching||ce(le.start,le.end)?R():C()}function R(){he(le.start,le.end)}function k(t){me=t,C()}function M(){C()}function F(){ie.updateTitle(le.computeTitle())}function z(){var t=Q.getNow();t.isWithin(le.intervalStart,le.intervalEnd)?ie.disableButton("today"):ie.enableButton("today")}function L(t,e){t=Q.moment(t),e=e?Q.moment(e):t.hasTime()?t.clone().add(Q.defaultTimedEventDuration):t.clone().add(Q.defaultAllDayEventDuration),le.select({start:t,end:e})}function V(){le&&le.unselect()}function _(){h(-1)}function A(){h(1)}function N(){de.add(-1,"years"),h()}function Y(){de.add(1,"years"),h()}function O(){de=Q.getNow(),h()}function B(t){de=Q.moment(t),h()}function Z(t){de.add(e.duration(t)),h()}function I(t,e){var n,i;e&&p(e)||(e=e||"day",n=ie.getViewsWithButtons().join(" "),i=n.match(RegExp("\\w+"+P(e))),i||(i=n.match(/\w+Day/)),e=i?i[0]:"agendaDay"),de=t,c(e)}function W(){return de.clone()}function j(){se.css({width:"100%",height:se.height(),overflow:"hidden"})}function X(){se.css({width:"",height:"",overflow:""})}function $(){return Q}function U(){return le}function q(t,e){return void 0===e?te[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(te[t]=e,v(!0)),void 0)}function K(t,e){return te[t]?te[t].apply(e||fe,Array.prototype.slice.call(arguments,2)):void 0}var Q=this;r=r||{};var J,te=i({},Ee,r);J=te.lang in Te?Te[te.lang]:Te[Ee.lang],J&&(te=i({},Ee,J,r)),te.isRTL&&(te=i({},Ee,be,J||{},r)),Q.options=te,Q.render=l,Q.destroy=u,Q.refetchEvents=S,Q.reportEvents=k,Q.reportEventChange=M,Q.rerenderEvents=C,Q.changeView=c,Q.select=L,Q.unselect=V,Q.prev=_,Q.next=A,Q.prevYear=N,Q.nextYear=Y,Q.today=O,Q.gotoDate=B,Q.incrementDate=Z,Q.zoomTo=I,Q.getDate=W,Q.getCalendar=$,Q.getView=U,Q.option=q,Q.trigger=K,Q.isValidViewType=p,Q.getViewButtonText=m;var ee=x(s(te.lang));if(te.monthNames&&(ee._months=te.monthNames),te.monthNamesShort&&(ee._monthsShort=te.monthNamesShort),te.dayNames&&(ee._weekdays=te.dayNames),te.dayNamesShort&&(ee._weekdaysShort=te.dayNamesShort),null!=te.firstDay){var ne=x(ee._week);ne.dow=te.firstDay,ee._week=ne}Q.defaultAllDayEventDuration=e.duration(te.defaultAllDayEventDuration),Q.defaultTimedEventDuration=e.duration(te.defaultTimedEventDuration),Q.moment=function(){var t;return"local"===te.timezone?(t=De.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===te.timezone?De.moment.utc.apply(null,arguments):De.moment.parseZone.apply(null,arguments),"_locale"in t?t._locale=ee:t._lang=ee,t},Q.getIsAmbigTimezone=function(){return"local"!==te.timezone&&"UTC"!==te.timezone},Q.rezoneDate=function(t){return Q.moment(t.toArray())},Q.getNow=function(){var t=te.now;return"function"==typeof t&&(t=t()),Q.moment(t)},Q.calculateWeekNumber=function(t){var e=te.weekNumberCalculation;return"function"==typeof e?e(t):"local"===e?t.week():"ISO"===e.toUpperCase()?t.isoWeek():void 0},Q.getEventEnd=function(t){return t.end?t.end.clone():Q.getDefaultEventEnd(t.allDay,t.start)},Q.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(Q.defaultAllDayEventDuration):n.add(Q.defaultTimedEventDuration),Q.getIsAmbigTimezone()&&n.stripZone(),n},ye.call(Q,te);var ie,re,se,oe,le,ae,ue,de,ce=Q.isFetchNeeded,he=Q.fetchEvents,fe=n[0],ge={},pe=0,me=[];de=null!=te.defaultDate?Q.moment(te.defaultDate):Q.getNow(),Q.getSuggestedViewHeight=function(){return void 0===ae&&y(),ae},Q.isHeightAuto=function(){return"auto"===te.contentHeight||"auto"===te.height}}function ve(e,n){function i(){var e=n.header;return f=n.theme?"ui":"fc",e?g=t("<div class='fc-toolbar'/>").append(s("left")).append(s("right")).append(s("center")).append('<div class="fc-clear"/>'):void 0}function r(){g.remove()}function s(i){var r=t('<div class="fc-'+i+'"/>'),s=n.header[i];return s&&t.each(s.split(" "),function(){var i,s=t(),o=!0;t.each(this.split(","),function(i,r){var l,a,u,d,c,h,g,m,v;"title"==r?(s=s.add(t("<h2>&nbsp;</h2>")),o=!1):(e[r]?l=function(){e[r]()}:e.isValidViewType(r)&&(l=function(){e.changeView(r)},p.push(r),c=e.getViewButtonText(r)),l&&(a=w(n.themeButtonIcons,r),u=w(n.buttonIcons,r),d=w(n.defaultButtonText,r),h=w(n.buttonText,r),g=c||h?z(c||h):a&&n.theme?"<span class='ui-icon ui-icon-"+a+"'></span>":u&&!n.theme?"<span class='fc-icon fc-icon-"+u+"'></span>":z(d||r),m=["fc-"+r+"-button",f+"-button",f+"-state-default"],v=t('<button type="button" class="'+m.join(" ")+'">'+g+"</button>").click(function(){v.hasClass(f+"-state-disabled")||(l(),(v.hasClass(f+"-state-active")||v.hasClass(f+"-state-disabled"))&&v.removeClass(f+"-state-hover"))}).mousedown(function(){v.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-down")}).mouseup(function(){v.removeClass(f+"-state-down")}).hover(function(){v.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-hover")},function(){v.removeClass(f+"-state-hover").removeClass(f+"-state-down")}),s=s.add(v)))}),o&&s.first().addClass(f+"-corner-left").end().last().addClass(f+"-corner-right").end(),s.length>1?(i=t("<div/>"),o&&i.addClass("fc-button-group"),i.append(s),r.append(i)):r.append(s)}),r}function o(t){g.find("h2").text(t)}function l(t){g.find(".fc-"+t+"-button").addClass(f+"-state-active")}function a(t){g.find(".fc-"+t+"-button").removeClass(f+"-state-active")}function u(t){g.find(".fc-"+t+"-button").attr("disabled","disabled").addClass(f+"-state-disabled")}function d(t){g.find(".fc-"+t+"-button").removeAttr("disabled").removeClass(f+"-state-disabled")}function c(){return p}var h=this;h.render=i,h.destroy=r,h.updateTitle=o,h.activateButton=l,h.deactivateButton=a,h.disableButton=u,h.enableButton=d,h.getViewsWithButtons=c;var f,g=t(),p=[]}function ye(n){function i(t,e){return!B||t.clone().stripZone()<B.clone().stripZone()||e.clone().stripZone()>Z.clone().stripZone()}function r(t,e){B=t,Z=e,Q=[];var n=++U,i=$.length;q=i;for(var r=0;i>r;r++)s($[r],n)}function s(e,n){o(e,function(i){var r,s,o,l=t.isArray(e.events);if(n==U){if(i)for(r=0;i.length>r;r++)s=i[r],o=l?s:b(s,e),o&&Q.push.apply(Q,H(o));q--,q||j(Q)}})}function o(e,i){var r,s,l=De.sourceFetchers;for(r=0;l.length>r;r++){if(s=l[r].call(O,e,B.clone(),Z.clone(),n.timezone,i),s===!0)return;if("object"==typeof s)return o(s,i),void 0}var a=e.events;if(a)t.isFunction(a)?(y(),a.call(O,B.clone(),Z.clone(),n.timezone,function(t){i(t),w()})):t.isArray(a)?i(a):i();else{var u=e.url;if(u){var d,c=e.success,h=e.error,f=e.complete;d=t.isFunction(e.data)?e.data():e.data;var g=t.extend({},d||{}),p=F(e.startParam,n.startParam),m=F(e.endParam,n.endParam),v=F(e.timezoneParam,n.timezoneParam);p&&(g[p]=B.format()),m&&(g[m]=Z.format()),n.timezone&&"local"!=n.timezone&&(g[v]=n.timezone),y(),t.ajax(t.extend({},Ke,e,{data:g,success:function(e){e=e||[];var n=M(c,this,arguments);t.isArray(n)&&(e=n),i(e)},error:function(){M(h,this,arguments),i()},complete:function(){M(f,this,arguments),w()}}))}else i()}}function l(t){var e=a(t);e&&($.push(e),q++,s(e,U))}function a(e){var n,i,r=De.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],t.isArray(n.events)&&(n.origArray=n.events,n.events=t.map(n.events,function(t){return b(t,n)})),i=0;r.length>i;i++)r[i].call(O,n);return n}}function u(e){$=t.grep($,function(t){return!d(t,e)}),Q=t.grep(Q,function(t){return!d(t.source,e)}),j(Q)}function d(t,e){return t&&e&&c(t)==c(e)}function c(t){return("object"==typeof t?t.origArray||t.googleCalendarId||t.url||t.events:null)||t}function h(t){t.start=O.moment(t.start),t.end=t.end?O.moment(t.end):null,R(t,f(t)),j(Q)}function f(e){var n={};return t.each(e,function(t,e){g(t)&&void 0!==e&&k(e)&&(n[t]=e)}),n}function g(t){return!/^_|^(id|allDay|start|end)$/.test(t)}function p(t,e){var n,i,r,s=b(t);if(s){for(n=H(s),i=0;n.length>i;i++)r=n[i],r.source||(e&&(X.events.push(r),r.source=X),Q.push(r));return j(Q),n}return[]}function m(e){var n,i;for(null==e?e=function(){return!0}:t.isFunction(e)||(n=e+"",e=function(t){return t._id==n}),Q=t.grep(Q,e,!0),i=0;$.length>i;i++)t.isArray($[i].events)&&($[i].events=t.grep($[i].events,e,!0));j(Q)}function v(e){return t.isFunction(e)?t.grep(Q,e):null!=e?(e+="",t.grep(Q,function(t){return t._id==e})):Q}function y(){K++||I("loading",null,!0,W())}function w(){--K||I("loading",null,!1,W())}function b(i,r){var s,o,l,a={};if(n.eventDataTransform&&(i=n.eventDataTransform(i)),r&&r.eventDataTransform&&(i=r.eventDataTransform(i)),t.extend(a,i),r&&(a.source=r),a._id=i._id||(void 0===i.id?"_fc"+Qe++:i.id+""),a.className=i.className?"string"==typeof i.className?i.className.split(/\s+/):i.className:[],s=i.start||i.date,o=i.end,T(s)&&(s=e.duration(s)),T(o)&&(o=e.duration(o)),i.dow||e.isDuration(s)||e.isDuration(o))a.start=s?e.duration(s):null,a.end=o?e.duration(o):null,a._recurring=!0;else{if(s&&(s=O.moment(s),!s.isValid()))return!1;o&&(o=O.moment(o),o.isValid()||(o=null)),l=i.allDay,void 0===l&&(l=F(r?r.allDayDefault:void 0,n.allDayDefault)),D(s,o,l,a)}return a}function D(t,e,n,i){i.start=t,i.end=e,i.allDay=n,C(i),we(i)}function C(t){null==t.allDay&&(t.allDay=!(t.start.hasTime()||t.end&&t.end.hasTime())),t.allDay?(t.start.stripTime(),t.end&&t.end.stripTime()):(t.start.hasTime()||(t.start=O.rezoneDate(t.start)),t.end&&!t.end.hasTime()&&(t.end=O.rezoneDate(t.end))),t.end&&!t.end.isAfter(t.start)&&(t.end=null),t.end||(t.end=n.forceEventDuration?O.getDefaultEventEnd(t.allDay,t.start):null)}function x(t){var e;return t.end||(e=t.allDay,null==e&&(e=!t.start.hasTime()),t={start:t.start,end:O.getDefaultEventEnd(e,t.start)}),t}function H(e,n,i){var r,s,o,l,a,u,d,c,h,f=[];if(n=n||B,i=i||Z,e)if(e._recurring){if(s=e.dow)for(r={},o=0;s.length>o;o++)r[s[o]]=!0;for(l=n.clone().stripTime();l.isBefore(i);)(!r||r[l.day()])&&(a=e.start,u=e.end,d=l.clone(),c=null,a&&(d=d.time(a)),u&&(c=l.clone().time(u)),h=t.extend({},e),D(d,c,!a&&!u,h),f.push(h)),l.add(1,"days")}else f.push(e);return f}function R(e,n){var i,r,s,o,l={};return n=n||{},n.start||(n.start=e.start.clone()),void 0===n.end&&(n.end=e.end?e.end.clone():null),null==n.allDay&&(n.allDay=e.allDay),C(n),i=null!==e._end&&null===n.end,r=n.allDay?S(n.start,e._start):E(n.start,e._start),!i&&n.end&&(s=E(n.end,n.start).subtract(E(e._end||O.getDefaultEventEnd(e._allDay,e._start),e._start))),t.each(n,function(t,e){g(t)&&void 0!==e&&(l[t]=e)}),o=z(v(e._id),i,n.allDay,r,s,l),{dateDelta:r,durationDelta:s,undo:o}}function z(e,n,i,r,s,o){var l=O.getIsAmbigTimezone(),a=[];return r&&!r.valueOf()&&(r=null),s&&!s.valueOf()&&(s=null),t.each(e,function(e,u){var d,c;d={start:u.start.clone(),end:u.end?u.end.clone():null,allDay:u.allDay},t.each(o,function(t){d[t]=u[t]}),c={start:u._start,end:u._end,allDay:u._allDay},n&&(c.end=null),c.allDay=i,C(c),r&&(c.start.add(r),c.end&&c.end.add(r)),s&&(c.end||(c.end=O.getDefaultEventEnd(c.allDay,c.start)),c.end.add(s)),l&&!c.allDay&&(r||s)&&(c.start.stripZone(),c.end&&c.end.stripZone()),t.extend(u,o,c),we(u),a.push(function(){t.extend(u,d),we(u)})}),function(){for(var t=0;a.length>t;t++)a[t]()}}function L(){var e,i=n.businessHours,r={className:"fc-nonbusiness",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"},s=O.getView();return i&&(e="object"==typeof i?t.extend({},r,i):r),e?H(b(e),s.start,s.end):[]}function P(t,e){var i=e.source||{},r=F(e.constraint,i.constraint,n.eventConstraint),s=F(e.overlap,i.overlap,n.eventOverlap);return t=x(t),G(t,r,s,e)}function V(t){return G(t,n.selectConstraint,n.selectOverlap)}function _(e,n){var i,r;return n&&(i=t.extend({},n,e),r=H(b(i))[0]),r?P(e,r):(e=x(e),V(e))}function G(t,e,n,i){var r,s,o,l,a;if(t={start:t.start.clone().stripZone(),end:t.end.clone().stripZone()},null!=e){for(r=A(e),s=!1,o=0;r.length>o;o++)if(N(r[o],t)){s=!0;break}if(!s)return!1}for(o=0;Q.length>o;o++)if(l=Q[o],(!i||i._id!==l._id)&&Y(l,t)){if(n===!1)return!1;if("function"==typeof n&&!n(l,i))return!1;if(i){if(a=F(l.overlap,(l.source||{}).overlap),a===!1)return!1;if("function"==typeof a&&!a(i,l))return!1}}return!0}function A(t){return"businessHours"===t?L():"object"==typeof t?H(b(t)):v(t)}function N(t,e){var n=t.start.clone().stripZone(),i=O.getEventEnd(t).stripZone();return e.start>=n&&i>=e.end}function Y(t,e){var n=t.start.clone().stripZone(),i=O.getEventEnd(t).stripZone();return i>e.start&&e.end>n}var O=this;O.isFetchNeeded=i,O.fetchEvents=r,O.addEventSource=l,O.removeEventSource=u,O.updateEvent=h,O.renderEvent=p,O.removeEvents=m,O.clientEvents=v,O.mutateEvent=R,O.normalizeEventDateProps=C,O.ensureVisibleEventRange=x;var B,Z,I=O.trigger,W=O.getView,j=O.reportEvents,X={events:[]},$=[X],U=0,q=0,K=0,Q=[];t.each((n.events?[n.events]:[]).concat(n.eventSources||[]),function(t,e){var n=a(e);n&&$.push(n)}),O.getBusinessHoursEvents=L,O.isEventRangeAllowed=P,O.isSelectionRangeAllowed=V,O.isExternalDropRangeAllowed=_}function we(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}var Ee={titleRangeSeparator:" — ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,defaultButtonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:200},Se={dayPopoverFormat:"dddd, MMMM D"},be={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}},De=t.fullCalendar={version:"2.2.5"},Ce=De.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,s){var o,l=t(s),a=l.data("fullCalendar");"string"==typeof e?a&&t.isFunction(a[e])&&(o=a[e].apply(a,n),r||(i=o),"destroy"===e&&l.removeData("fullCalendar")):a||(a=new me(l,e),l.data("fullCalendar",a),a.render())}),i};var Te=De.langs={};De.datepickerLang=function(e,n,i){var r=Te[e]||(Te[e]={});r.isRTL=i.isRTL,r.weekNumberTitle=i.weekHeader,t.each(xe,function(t,e){r[t]=e(i)}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},De.lang=function(e,n){var r,o;r=Te[e]||(Te[e]={}),n&&i(r,n),o=s(e),t.each(He,function(t,e){void 0===r[t]&&(r[t]=e(o,r))}),Ee.lang=e};var xe={defaultButtonText:function(t){return{prev:L(t.prevText),next:L(t.nextText),today:L(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},He={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}};De.lang("en",Se),De.intersectionToSeg=y,De.applyAll=M,De.debounce=G;var Re,ke,Me,Fe=["sun","mon","tue","wed","thu","fri","sat"],ze=["year","month","week","day","hour","minute","second","millisecond"],Le={}.hasOwnProperty,Pe=/^\s*\d{4}-\d\d$/,Ve=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,_e=e.fn,Ge=t.extend({},_e);De.moment=function(){return A(arguments)},De.moment.utc=function(){var t=A(arguments,!0);return t.hasTime()&&t.utc(),t},De.moment.parseZone=function(){return A(arguments,!0,!0)},_e.clone=function(){var t=Ge.clone.apply(this,arguments);return Y(this,t),this._fullCalendar&&(t._fullCalendar=!0),t},_e.time=function(t){if(!this._fullCalendar)return Ge.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},_e.stripTime=function(){var t;return this._ambigTime||(t=this.toArray(),this.utc(),ke(this,t.slice(0,3)),this._ambigTime=!0,this._ambigZone=!0),this},_e.hasTime=function(){return!this._ambigTime},_e.stripZone=function(){var t,e;return this._ambigZone||(t=this.toArray(),e=this._ambigTime,this.utc(),ke(this,t),e&&(this._ambigTime=!0),this._ambigZone=!0),this},_e.hasZone=function(){return!this._ambigZone},_e.zone=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),Ge.zone.apply(this,arguments)},_e.local=function(){var t=this.toArray(),e=this._ambigZone;return Ge.local.apply(this,arguments),e&&Me(this,t),this},_e.format=function(){return this._fullCalendar&&arguments[0]?Z(this,arguments[0]):this._ambigTime?B(this,"YYYY-MM-DD"):this._ambigZone?B(this,"YYYY-MM-DD[T]HH:mm:ss"):Ge.format.apply(this,arguments)},_e.toISOString=function(){return this._ambigTime?B(this,"YYYY-MM-DD"):this._ambigZone?B(this,"YYYY-MM-DD[T]HH:mm:ss"):Ge.toISOString.apply(this,arguments)},_e.isWithin=function(t,e){var n=N([this,t,e]);return n[0]>=n[1]&&n[0]<n[2]},_e.isSame=function(t,e){var n;return this._fullCalendar?e?(n=N([this,t],!0),Ge.isSame.call(n[0],n[1],e)):(t=De.moment.parseZone(t),Ge.isSame.call(this,t)&&Boolean(this._ambigTime)===Boolean(t._ambigTime)&&Boolean(this._ambigZone)===Boolean(t._ambigZone)):Ge.isSame.apply(this,arguments)},t.each(["isBefore","isAfter"],function(t,e){_e[e]=function(t,n){var i;return this._fullCalendar?(i=N([this,t]),Ge[e].call(i[0],i[1],n)):Ge[e].apply(this,arguments)}}),Re="_d"in e()&&"updateOffset"in e,ke=Re?function(t,n){t._d.setTime(Date.UTC.apply(Date,n)),e.updateOffset(t,!1)}:O,Me=Re?function(t,n){t._d.setTime(+new Date(n[0]||0,n[1]||0,n[2]||0,n[3]||0,n[4]||0,n[5]||0,n[6]||0)),e.updateOffset(t,!1)}:O;var Ae={t:function(t){return B(t,"a").charAt(0)},T:function(t){return B(t,"A").charAt(0)}};De.formatRange=j;var Ne={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},Ye={};De.Class=K,K.extend=function(t){var e,n=this;return t=t||{},R(t,"constructor")&&(e=t.constructor),"function"!=typeof e&&(e=t.constructor=function(){n.apply(this,arguments)}),e.prototype=x(n.prototype),H(t,e.prototype),H(n,e),e},K.mixin=function(t){H(t.prototype||t,this.prototype)};var Oe=K.extend({isHidden:!0,options:null,el:null,documentMousedownProxy:null,margin:10,constructor:function(t){this.options=t||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&t(document).on("mousedown",this.documentMousedownProxy=t.proxy(this,"documentMousedown"))},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},destroy:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),t(document).off("mousedown",this.documentMousedownProxy)},position:function(){var e,n,i,r,s,o=this.options,l=this.el.offsetParent().offset(),a=this.el.outerWidth(),u=this.el.outerHeight(),d=t(window),c=p(this.el);r=o.top||0,s=void 0!==o.left?o.left:void 0!==o.right?o.right-a:0,c.is(window)||c.is(document)?(c=d,e=0,n=0):(i=c.offset(),e=i.top,n=i.left),e+=d.scrollTop(),n+=d.scrollLeft(),o.viewportConstrain!==!1&&(r=Math.min(r,e+c.outerHeight()-u-this.margin),r=Math.max(r,e+this.margin),s=Math.min(s,n+c.outerWidth()-a-this.margin),s=Math.max(s,n+this.margin)),this.el.css({top:r-l.top,left:s-l.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}}),Be=K.extend({grid:null,rowCoords:null,colCoords:null,containerEl:null,minX:null,maxX:null,minY:null,maxY:null,constructor:function(t){this.grid=t},build:function(){this.rowCoords=this.grid.computeRowCoords(),this.colCoords=this.grid.computeColCoords(),this.computeBounds()},clear:function(){this.rowCoords=null,this.colCoords=null},getCell:function(t,e){var n,i,r,s=this.rowCoords,o=this.colCoords,l=null,a=null;if(this.inBounds(t,e)){for(n=0;s.length>n;n++)if(i=s[n],e>=i.top&&i.bottom>e){l=n;break}for(n=0;o.length>n;n++)if(i=o[n],t>=i.left&&i.right>t){a=n;break}if(null!==l&&null!==a)return r=this.grid.getCell(l,a),r.grid=this.grid,r}return null},computeBounds:function(){var t;this.containerEl&&(t=this.containerEl.offset(),this.minX=t.left,this.maxX=t.left+this.containerEl.outerWidth(),this.minY=t.top,this.maxY=t.top+this.containerEl.outerHeight())
},inBounds:function(t,e){return this.containerEl?t>=this.minX&&this.maxX>t&&e>=this.minY&&this.maxY>e:!0}}),Ze=K.extend({coordMaps:null,constructor:function(t){this.coordMaps=t},build:function(){var t,e=this.coordMaps;for(t=0;e.length>t;t++)e[t].build()},getCell:function(t,e){var n,i=this.coordMaps,r=null;for(n=0;i.length>n&&!r;n++)r=i[n].getCell(t,e);return r},clear:function(){var t,e=this.coordMaps;for(t=0;e.length>t;t++)e[t].clear()}}),Ie=K.extend({coordMap:null,options:null,isListening:!1,isDragging:!1,origCell:null,cell:null,mouseX0:null,mouseY0:null,mousemoveProxy:null,mouseupProxy:null,scrollEl:null,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollHandlerProxy:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,constructor:function(t,e){this.coordMap=t,this.options=e||{}},mousedown:function(t){v(t)&&(t.preventDefault(),this.startListening(t),this.options.distance||this.startDrag(t))},startListening:function(e){var n,i;this.isListening||(e&&this.options.scroll&&(n=p(t(e.target)),n.is(window)||n.is(document)||(this.scrollEl=n,this.scrollHandlerProxy=G(t.proxy(this,"scrollHandler"),100),this.scrollEl.on("scroll",this.scrollHandlerProxy))),this.computeCoords(),e&&(i=this.getCell(e),this.origCell=i,this.mouseX0=e.pageX,this.mouseY0=e.pageY),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")).on("mouseup",this.mouseupProxy=t.proxy(this,"mouseup")).on("selectstart",this.preventDefault),this.isListening=!0,this.trigger("listenStart",e))},computeCoords:function(){this.coordMap.build(),this.computeScrollBounds()},mousemove:function(t){var e,n;this.isDragging||(e=this.options.distance||1,n=Math.pow(t.pageX-this.mouseX0,2)+Math.pow(t.pageY-this.mouseY0,2),n>=e*e&&this.startDrag(t)),this.isDragging&&this.drag(t)},startDrag:function(t){var e;this.isListening||this.startListening(),this.isDragging||(this.isDragging=!0,this.trigger("dragStart",t),e=this.getCell(t),e&&this.cellOver(e))},drag:function(t){var e;this.isDragging&&(e=this.getCell(t),Q(e,this.cell)||(this.cell&&this.cellOut(),e&&this.cellOver(e)),this.dragScroll(t))},cellOver:function(t){this.cell=t,this.trigger("cellOver",t,Q(t,this.origCell))},cellOut:function(){this.cell&&(this.trigger("cellOut",this.cell),this.cell=null)},mouseup:function(t){this.stopDrag(t),this.stopListening(t)},stopDrag:function(t){this.isDragging&&(this.stopScrolling(),this.trigger("dragStop",t),this.isDragging=!1)},stopListening:function(e){this.isListening&&(this.scrollEl&&(this.scrollEl.off("scroll",this.scrollHandlerProxy),this.scrollHandlerProxy=null),t(document).off("mousemove",this.mousemoveProxy).off("mouseup",this.mouseupProxy).off("selectstart",this.preventDefault),this.mousemoveProxy=null,this.mouseupProxy=null,this.isListening=!1,this.trigger("listenStop",e),this.origCell=this.cell=null,this.coordMap.clear())},getCell:function(t){return this.coordMap.getCell(t.pageX,t.pageY)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))},preventDefault:function(t){t.preventDefault()},computeScrollBounds:function(){var t,e=this.scrollEl;e&&(t=e.offset(),this.scrollBounds={top:t.top,left:t.left,bottom:t.top+e.outerHeight(),right:t.left+e.outerWidth()})},dragScroll:function(t){var e,n,i,r,s=this.scrollSensitivity,o=this.scrollBounds,l=0,a=0;o&&(e=(s-(t.pageY-o.top))/s,n=(s-(o.bottom-t.pageY))/s,i=(s-(t.pageX-o.left))/s,r=(s-(o.right-t.pageX))/s,e>=0&&1>=e?l=-1*e*this.scrollSpeed:n>=0&&1>=n&&(l=n*this.scrollSpeed),i>=0&&1>=i?a=-1*i*this.scrollSpeed:r>=0&&1>=r&&(a=r*this.scrollSpeed)),this.setScrollVel(l,a)},setScrollVel:function(e,n){this.scrollTopVel=e,this.scrollLeftVel=n,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(t.proxy(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;0>this.scrollTopVel?0>=t.scrollTop()&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),0>this.scrollLeftVel?0>=t.scrollLeft()&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.stopScrolling()},stopScrolling:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.computeCoords())},scrollHandler:function(){this.scrollIntervalId||this.computeCoords()}}),We=K.extend({options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,mouseY0:null,mouseX0:null,topDelta:null,leftDelta:null,mousemoveProxy:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()},start:function(e){this.isFollowing||(this.isFollowing=!0,this.mouseY0=e.pageY,this.mouseX0=e.pageX,this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")))},stop:function(e,n){function i(){this.isAnimating=!1,r.destroyEl(),this.top0=this.left0=null,n&&n()}var r=this,s=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,t(document).off("mousemove",this.mousemoveProxy),e&&s&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:s,complete:i})):i())},getEl:function(){var t=this.el;return t||(this.sourceEl.width(),t=this.el=this.sourceEl.clone().css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}).appendTo(this.parentEl)),t},destroyEl:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(this.sourceEl.width(),t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},mousemove:function(t){this.topDelta=t.pageY-this.mouseY0,this.leftDelta=t.pageX-this.mouseX0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),je=K.extend({view:null,isRTL:null,cellHtml:"<td/>",constructor:function(t){this.view=t,this.isRTL=t.opt("isRTL")},rowHtml:function(t,e){var n,i,r=this.getHtmlRenderer("cell",t),s="";for(e=e||0,n=0;this.colCnt>n;n++)i=this.getCell(e,n),s+=r(i);return s=this.bookendCells(s,t,e),"<tr>"+s+"</tr>"},bookendCells:function(t,e,n){var i=this.getHtmlRenderer("intro",e)(n||0),r=this.getHtmlRenderer("outro",e)(n||0),s=this.isRTL?r:i,o=this.isRTL?i:r;return"string"==typeof t?s+t+o:t.prepend(s).append(o)},getHtmlRenderer:function(t,e){var n,i,r,s,o=this.view;return n=t+"Html",e&&(i=e+P(t)+"Html"),i&&(s=o[i])?r=o:i&&(s=this[i])?r=this:(s=o[n])?r=o:(s=this[n])&&(r=this),"function"==typeof s?function(){return s.apply(r,arguments)||""}:function(){return s||""}}}),Xe=De.Grid=je.extend({start:null,end:null,rowCnt:0,colCnt:0,rowData:null,colData:null,el:null,coordMap:null,elsByFill:null,documentDragStartProxy:null,colHeadFormat:null,eventTimeFormat:null,displayEventEnd:null,constructor:function(){je.apply(this,arguments),this.coordMap=new Be(this),this.elsByFill={},this.documentDragStartProxy=t.proxy(this,"documentDragStart")},render:function(){this.bindHandlers()},destroy:function(){this.unbindHandlers()},computeColHeadFormat:function(){},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventEnd:function(){return!1},setRange:function(t){var e=this.view;this.start=t.start.clone(),this.end=t.end.clone(),this.rowData=[],this.colData=[],this.updateCells(),this.colHeadFormat=e.opt("columnFormat")||this.computeColHeadFormat(),this.eventTimeFormat=e.opt("timeFormat")||this.computeEventTimeFormat(),this.displayEventEnd=e.opt("displayEventEnd"),null==this.displayEventEnd&&(this.displayEventEnd=this.computeDisplayEventEnd())},updateCells:function(){},rangeToSegs:function(){},getCell:function(e,n){var i;return null==n&&("number"==typeof e?(n=e%this.colCnt,e=Math.floor(e/this.colCnt)):(n=e.col,e=e.row)),i={row:e,col:n},t.extend(i,this.getRowData(e),this.getColData(n)),t.extend(i,this.computeCellRange(i)),i},computeCellRange:function(){},getRowData:function(t){return this.rowData[t]||{}},getColData:function(t){return this.colData[t]||{}},getRowEl:function(){},getColEl:function(){},getCellDayEl:function(t){return this.getColEl(t.col)||this.getRowEl(t.row)},computeRowCoords:function(){var t,e,n,i=[];for(t=0;this.rowCnt>t;t++)e=this.getRowEl(t),n={top:e.offset().top},t>0&&(i[t-1].bottom=n.top),i.push(n);return n.bottom=n.top+e.outerHeight(),i},computeColCoords:function(){var t,e,n,i=[];for(t=0;this.colCnt>t;t++)e=this.getColEl(t),n={left:e.offset().left},t>0&&(i[t-1].right=n.left),i.push(n);return n.right=n.left+e.outerWidth(),i},bindHandlers:function(){var e=this;this.el.on("mousedown",function(n){t(n.target).is(".fc-event-container *, .fc-more")||t(n.target).closest(".fc-popover").length||e.dayMousedown(n)}),this.bindSegHandlers(),t(document).on("dragstart",this.documentDragStartProxy)},unbindHandlers:function(){t(document).off("dragstart",this.documentDragStartProxy)},dayMousedown:function(t){var e,n,i=this,r=this.view,s=r.opt("selectable"),o=new Ie(this.coordMap,{scroll:r.opt("dragScroll"),dragStart:function(){r.unselect()},cellOver:function(t,r){var l=o.origCell;l&&(e=r?t:null,s&&(n=i.computeSelection(l,t),n?i.renderSelection(n):a()))},cellOut:function(){e=null,n=null,i.destroySelection(),u()},listenStop:function(t){e&&r.trigger("dayClick",i.getCellDayEl(e),e.start,t),n&&r.reportSelection(n,t),u()}});o.mousedown(t)},renderRangeHelper:function(t,e){var n;n=e?x(e.event):{},n.start=t.start.clone(),n.end=t.end?t.end.clone():null,n.allDay=null,this.view.calendar.normalizeEventDateProps(n),n.className=(n.className||[]).concat("fc-helper"),e||(n.editable=!1),this.renderHelper(n,e)},renderHelper:function(){},destroyHelper:function(){},renderSelection:function(t){this.renderHighlight(t)},destroySelection:function(){this.destroyHighlight()},computeSelection:function(t,e){var n,i=[t.start,t.end,e.start,e.end];return i.sort(V),n={start:i[0].clone(),end:i[3].clone()},this.view.calendar.isSelectionRangeAllowed(n)?n:null},renderHighlight:function(t){this.renderFill("highlight",this.rangeToSegs(t))},destroyHighlight:function(){this.destroyFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderFill:function(){},destroyFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,r=this,s=this[e+"SegEl"],o="",l=[];if(n.length){for(i=0;n.length>i;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],a=t(i);s&&(a=s.call(r,o,a)),a&&(a=t(a),a.is(r.fillSegTag)&&(o.el=a,l.push(o)))})}return l},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegStyles"],r=n?n.call(this,e):[],s=i?i.call(this,e):"";return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(s?' style="'+s+'"':"")+" />"},headHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'">'+"<table>"+"<thead>"+this.rowHtml("head")+"</thead>"+"</table>"+"</div>"},headCellHtml:function(t){var e=this.view,n=t.start;return'<th class="fc-day-header '+e.widgetHeaderClass+" fc-"+Fe[n.day()]+'">'+z(n.format(this.colHeadFormat))+"</th>"},bgCellHtml:function(t){var e=this.view,n=t.start,i=this.getDayClasses(n);return i.unshift("fc-day",e.widgetContentClass),'<td class="'+i.join(" ")+'"'+' data-date="'+n.format("YYYY-MM-DD")+'"'+"></td>"},getDayClasses:function(t){var e=this.view,n=e.calendar.getNow().stripTime(),i=["fc-"+Fe[t.day()]];return"month"===e.name&&t.month()!=e.intervalStart.month()&&i.push("fc-other-month"),t.isSame(n,"day")?i.push("fc-today",e.highlightStateClass):n>t?i.push("fc-past"):i.push("fc-future"),i}});Xe.mixin({mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,segs:null,renderEvents:function(t){var e,n,i=this.eventsToSegs(t),r=[],s=[];for(e=0;i.length>e;e++)n=i[e],J(n.event)?r.push(n):s.push(n);r=this.renderBgSegs(r)||r,s=this.renderFgSegs(s)||s,this.segs=r.concat(s)},destroyEvents:function(){this.triggerSegMouseout(),this.destroyFgSegs(),this.destroyBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(){},destroyFgSegs:function(){},renderFgSegEls:function(e,n){var i,r=this.view,s="",o=[];if(e.length){for(i=0;e.length>i;i++)s+=this.fgSegHtml(e[i],n);t(s).each(function(n,i){var s=e[n],l=r.resolveEventEl(s.event,t(i));l&&(l.data("fc-seg",s),s.el=l,o.push(s))})}return o},fgSegHtml:function(){},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},destroyBgSegs:function(){this.destroyFill("bgEvent")},bgEventSegEl:function(t,e){return this.view.resolveEventEl(t.event,e)},bgEventSegClasses:function(t){var e=t.event,n=e.source||{};return["fc-bgevent"].concat(e.className,n.className||[])},bgEventSegStyles:function(t){var e=this.view,n=t.event,i=n.source||{},r=n.color,s=i.color,o=e.opt("eventColor"),l=n.backgroundColor||r||i.backgroundColor||s||e.opt("eventBackgroundColor")||o;return l?"background-color:"+l:""},businessHoursSegClasses:function(){return["fc-nonbusiness","fc-bgevent"]},bindSegHandlers:function(){var e=this,n=this.view;t.each({mouseenter:function(t,n){e.triggerSegMouseover(t,n)},mouseleave:function(t,n){e.triggerSegMouseout(t,n)},click:function(t,e){return n.trigger("eventClick",this,t.event,e)},mousedown:function(i,r){t(r.target).is(".fc-resizer")&&n.isEventResizable(i.event)?e.segResizeMousedown(i,r):n.isEventDraggable(i.event)&&e.segDragMousedown(i,r)}},function(n,i){e.el.on(n,".fc-event-container > *",function(n){var r=t(this).data("fc-seg");return!r||e.isDraggingSeg||e.isResizingSeg?void 0:i.call(this,r,n)})})},triggerSegMouseover:function(t,e){this.mousedOverSeg||(this.mousedOverSeg=t,this.view.trigger("eventMouseover",t.el[0],t.event,e))},triggerSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.trigger("eventMouseout",t.el[0],t.event,e))},segDragMousedown:function(t,e){var n,i=this,r=this.view,s=t.el,o=t.event,l=new We(t.el,{parentEl:r.el,opacity:r.opt("dragOpacity"),revertDuration:r.opt("dragRevertDuration"),zIndex:2}),d=new Ie(r.coordMap,{distance:5,scroll:r.opt("dragScroll"),listenStart:function(t){l.hide(),l.start(t)},dragStart:function(e){i.triggerSegMouseout(t,e),i.isDraggingSeg=!0,r.hideEvent(o),r.trigger("eventDragStart",s[0],o,e,{})},cellOver:function(e,s){var u=t.cell||d.origCell;n=i.computeEventDrop(u,e,o),n?(r.renderDrag(n,t)?l.hide():l.show(),s&&(n=null)):(l.show(),a())},cellOut:function(){n=null,r.destroyDrag(),l.show(),u()},dragStop:function(t){l.stop(!n,function(){i.isDraggingSeg=!1,r.destroyDrag(),r.showEvent(o),r.trigger("eventDragStop",s[0],o,t,{}),n&&r.reportEventDrop(o,n,s,t)}),u()},listenStop:function(){l.stop()}});d.mousedown(e)},computeEventDrop:function(t,e,n){var i,r,s,o,l,a=t.start,u=e.start;return a.hasTime()===u.hasTime()?(i=E(u,a),r=n.start.clone().add(i),s=null===n.end?null:n.end.clone().add(i),o=n.allDay):(r=u.clone(),s=null,o=!u.hasTime()),l={start:r,end:s,allDay:o},this.view.calendar.isEventRangeAllowed(l,n)?l:null},documentDragStart:function(e,n){var i,r,s=this.view;s.opt("droppable")&&(i=t(e.target),r=s.opt("dropAccept"),(t.isFunction(r)?r.call(i[0],i):i.is(r))&&this.startExternalDrag(i,e,n))},startExternalDrag:function(e,n){var i,r,s=this,o=se(e);i=new Ie(this.coordMap,{cellOver:function(t){r=s.computeExternalDrop(t,o),r?s.renderDrag(r):a()},cellOut:function(){r=null,s.destroyDrag(),u()}}),t(document).one("dragstop",function(t,n){s.destroyDrag(),u(),r&&s.view.reportExternalDrop(o,r,e,t,n)}),i.startDrag(n)},computeExternalDrop:function(t,e){var n={start:t.start.clone(),end:null};return e.startTime&&!n.start.hasTime()&&n.start.time(e.startTime),e.duration&&(n.end=n.start.clone().add(e.duration)),this.view.calendar.isExternalDropRangeAllowed(n,e.eventProps)?n:null},renderDrag:function(){},destroyDrag:function(){},segResizeMousedown:function(t,e){function n(){s.destroyEventResize(),o.showEvent(c),u()}var i,r,s=this,o=this.view,l=o.calendar,d=t.el,c=t.event,h=c.start,f=l.getEventEnd(c);r=new Ie(this.coordMap,{distance:5,scroll:o.opt("dragScroll"),dragStart:function(e){s.triggerSegMouseout(t,e),s.isResizingSeg=!0,o.trigger("eventResizeStart",d[0],c,e,{})},cellOver:function(e){i=e.end,i.isAfter(h)||(i=h.clone().add(E(e.end,e.start))),i.isSame(f)?i=null:l.isEventRangeAllowed({start:h,end:i},c)?(s.renderEventResize({start:h,end:i},t),o.hideEvent(c)):(i=null,a())},cellOut:function(){i=null,n()},dragStop:function(t){s.isResizingSeg=!1,n(),o.trigger("eventResizeStop",d[0],c,t,{}),i&&o.reportEventResize(c,i,d,t)}}),r.mousedown(e)},renderEventResize:function(){},destroyEventResize:function(){},getEventTimeText:function(t,e){return e=e||this.eventTimeFormat,t.end&&this.displayEventEnd?this.view.formatRange(t,e):t.start.format(e)},getSegClasses:function(t,e,n){var i=t.event,r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(i.className,i.source?i.source.className:[]);return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),r},getEventSkinCss:function(t){var e=this.view,n=t.source||{},i=t.color,r=n.color,s=e.opt("eventColor"),o=t.backgroundColor||i||n.backgroundColor||r||e.opt("eventBackgroundColor")||s,l=t.borderColor||i||n.borderColor||r||e.opt("eventBorderColor")||s,a=t.textColor||n.textColor||e.opt("eventTextColor"),u=[];return o&&u.push("background-color:"+o),l&&u.push("border-color:"+l),a&&u.push("color:"+a),u.join(";")},eventsToSegs:function(t,e){var n,i=this.eventsToRanges(t),r=[];for(n=0;i.length>n;n++)r.push.apply(r,this.eventRangeToSegs(i[n],e));return r},eventsToRanges:function(e){var n=this,i=ne(e),r=[];return t.each(i,function(t,e){e.length&&r.push.apply(r,te(e[0])?n.eventsToInverseRanges(e):n.eventsToNormalRanges(e))}),r},eventsToNormalRanges:function(t){var e,n,i,r,s=this.view.calendar,o=[];for(e=0;t.length>e;e++)n=t[e],i=n.start.clone().stripZone(),r=s.getEventEnd(n).stripZone(),o.push({event:n,start:i,end:r,eventStartMS:+i,eventDurationMS:r-i});return o},eventsToInverseRanges:function(t){var e,n,i=this.view,r=i.start.clone().stripZone(),s=i.end.clone().stripZone(),o=this.eventsToNormalRanges(t),l=[],a=t[0],u=r;for(o.sort(ie),e=0;o.length>e;e++)n=o[e],n.start>u&&l.push({event:a,start:u,end:n.start}),u=n.end;return s>u&&l.push({event:a,start:u,end:s}),l},eventRangeToSegs:function(t,e){var n,i,r;for(n=e?e(t):this.rangeToSegs(t),i=0;n.length>i;i++)r=n[i],r.event=t.event,r.eventStartMS=t.eventStartMS,r.eventDurationMS=t.eventDurationMS;return n}}),De.compareSegs=re,De.dataAttrPrefix="";var $e=Xe.extend({numbersVisible:!1,bottomCoordPadding:0,breakOnWeeks:null,cellDates:null,dayToCellOffsets:null,rowEls:null,dayEls:null,helperEls:null,render:function(t){var e,n,i,r=this.view,s=this.rowCnt,o=this.colCnt,l=s*o,a="";for(e=0;s>e;e++)a+=this.dayRowHtml(e,t);for(this.el.html(a),this.rowEls=this.el.find(".fc-row"),this.dayEls=this.el.find(".fc-day"),n=0;l>n;n++)i=this.getCell(n),r.trigger("dayRender",null,i.start,this.dayEls.eq(n));Xe.prototype.render.call(this)},destroy:function(){this.destroySegPopover(),Xe.prototype.destroy.call(this)},dayRowHtml:function(t,e){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'">'+'<div class="fc-bg">'+"<table>"+this.rowHtml("day",t)+"</table>"+"</div>"+'<div class="fc-content-skeleton">'+"<table>"+(this.numbersVisible?"<thead>"+this.rowHtml("number",t)+"</thead>":"")+"</table>"+"</div>"+"</div>"},dayCellHtml:function(t){return this.bgCellHtml(t)},computeColHeadFormat:function(){return this.rowCnt>1?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},updateCells:function(){var t,e,n,i;if(this.updateCellDates(),t=this.cellDates,this.breakOnWeeks){for(e=t[0].day(),i=1;t.length>i&&t[i].day()!=e;i++);n=Math.ceil(t.length/i)}else n=1,i=t.length;this.rowCnt=n,this.colCnt=i},updateCellDates:function(){for(var t=this.view,e=this.start.clone(),n=[],i=-1,r=[];e.isBefore(this.end);)t.isHiddenDay(e)?r.push(i+.5):(i++,r.push(i),n.push(e.clone())),e.add(1,"days");this.cellDates=n,this.dayToCellOffsets=r},computeCellRange:function(t){var e=this.colCnt,n=t.row*e+(this.isRTL?e-t.col-1:t.col),i=this.cellDates[n].clone(),r=i.clone().add(1,"day");return{start:i,end:r}},getRowEl:function(t){return this.rowEls.eq(t)},getColEl:function(t){return this.dayEls.eq(t)},getCellDayEl:function(t){return this.dayEls.eq(t.row*this.colCnt+t.col)},computeRowCoords:function(){var t=Xe.prototype.computeRowCoords.call(this);return t[t.length-1].bottom+=this.bottomCoordPadding,t},rangeToSegs:function(t){var e,n,i,r,s,o,l,a,u,d,c=this.isRTL,h=this.rowCnt,f=this.colCnt,g=[];for(t=this.view.computeDayRange(t),e=this.dateToCellOffset(t.start),n=this.dateToCellOffset(t.end.subtract(1,"days")),i=0;h>i;i++)r=i*f,s=r+f-1,a=Math.max(r,e),u=Math.min(s,n),a=Math.ceil(a),u=Math.floor(u),u>=a&&(o=a===e,l=u===n,a-=r,u-=r,d={row:i,isStart:o,isEnd:l},c?(d.leftCol=f-u-1,d.rightCol=f-a-1):(d.leftCol=a,d.rightCol=u),g.push(d));return g},dateToCellOffset:function(t){var e=this.dayToCellOffsets,n=t.diff(this.start,"days");return 0>n?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},renderDrag:function(t,e){var n;return this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)),e&&!e.el.closest(this.el).length?(this.renderRangeHelper(t,e),n=this.view.opt("dragOpacity"),void 0!==n&&this.helperEls.css("opacity",n),!0):void 0},destroyDrag:function(){this.destroyHighlight(),this.destroyHelper()},renderEventResize:function(t,e){this.renderHighlight(t),this.renderRangeHelper(t,e)},destroyEventResize:function(){this.destroyHighlight(),this.destroyHelper()},renderHelper:function(e,n){var i,r=[],s=this.eventsToSegs([e]);s=this.renderFgSegEls(s),i=this.renderSegRows(s),this.rowEls.each(function(e,s){var o,l=t(s),a=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:l.find(".fc-content-skeleton tbody").position().top,a.css("top",o).find("table").append(i[e].tbodyEl),l.append(a),r.push(a[0])}),this.helperEls=t(r)},destroyHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n){var i,r,s,o=[];for(n=this.renderFillSegEls(e,n),i=0;n.length>i;i++)r=n[i],s=this.renderFillRow(e,r),this.rowEls.eq(r.row).append(s),o.push(s[0]);return this.elsByFill[e]=t(o),n},renderFillRow:function(e,n){var i,r,s=this.colCnt,o=n.leftCol,l=n.rightCol+1;return i=t('<div class="fc-'+e.toLowerCase()+'-skeleton">'+"<table><tr/></table>"+"</div>"),r=i.find("tr"),o>0&&r.append('<td colspan="'+o+'"/>'),r.append(n.el.attr("colspan",l-o)),s>l&&r.append('<td colspan="'+(s-l)+'"/>'),this.bookendCells(r,e),i}});$e.mixin({rowStructs:null,destroyEvents:function(){this.destroySegPopover(),Xe.prototype.destroyEvents.apply(this,arguments)},getEventSegs:function(){return Xe.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.event.allDay});return Xe.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},destroyFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;e.length>n;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i=this.view,r=t.event,s=i.isEventDraggable(r),o=!e&&r.allDay&&t.isEnd&&i.isEventResizable(r),l=this.getSegClasses(t,s,o),a=this.getEventSkinCss(r),u="";return l.unshift("fc-day-grid-event"),!r.allDay&&t.isStart&&(u='<span class="fc-time">'+z(this.getEventTimeText(r))+"</span>"),n='<span class="fc-title">'+(z(r.title||"")||"&nbsp;")+"</span>",'<a class="'+l.join(" ")+'"'+(r.url?' href="'+z(r.url)+'"':"")+(a?' style="'+a+'"':"")+">"+'<div class="fc-content">'+(this.isRTL?n+" "+u:u+" "+n)+"</div>"+(o?'<div class="fc-resizer"/>':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;e>o;)d=(v[r-1]||[])[o],d?d.attr("rowspan",parseInt(d.attr("rowspan")||1,10)+1):(d=t("<td/>"),l.append(d)),m[r][o]=d,v[r][o]=d,o++}var r,s,o,l,a,u,d,c=this.colCnt,h=this.buildSegLevels(n),f=Math.max(1,h.length),g=t("<tbody/>"),p=[],m=[],v=[];for(r=0;f>r;r++){if(s=h[r],o=0,l=t("<tr/>"),p.push([]),m.push([]),v.push([]),s)for(a=0;s.length>a;a++){for(u=s[a],i(u.leftCol),d=t('<td class="fc-event-container"/>').append(u.el),u.leftCol!=u.rightCol?d.attr("colspan",u.rightCol-u.leftCol+1):v[r][o]=d;u.rightCol>=o;)m[r][o]=d,p[r][o]=u,o++;l.append(d)}i(c),this.bookendCells(l,"eventSkeleton"),g.append(l)}return{row:e,tbodyEl:g,cellMatrix:m,segMatrix:p,segLevels:h,segs:n}},buildSegLevels:function(t){var e,n,i,r=[];for(t.sort(re),e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&oe(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;r.length>i;i++)r[i].sort(le);return r},groupSegRows:function(t){var e,n=[];for(e=0;this.rowCnt>e;e++)n.push([]);for(e=0;t.length>e;e++)n[t[e].row].push(t[e]);return n}}),$e.mixin({segPopover:null,popoverSegs:null,destroySegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;i.length>e;e++)this.unlimitRow(e),n=t?"number"==typeof t?t:this.computeRowLevelLimit(e):!1,n!==!1&&this.limitRow(e,n)},computeRowLevelLimit:function(t){var e,n,i=this.rowEls.eq(t),r=i.height(),s=this.rowStructs[t].tbodyEl.children();for(e=0;s.length>e;e++)if(n=s.eq(e).removeClass("fc-limited"),n.position().top+n.outerHeight()>r)return e;return!1},limitRow:function(e,n){function i(i){for(;i>D;)r=E.getCell(e,D),d=E.getCellSegs(r,n),d.length&&(f=o[n-1][D],w=E.renderMoreLink(r,d),y=t("<div/>").append(w),f.append(y),b.push(y[0])),D++}var r,s,o,l,a,u,d,c,h,f,g,p,m,v,y,w,E=this,S=this.rowStructs[e],b=[],D=0;if(n&&S.segLevels.length>n){for(s=S.segLevels[n-1],o=S.cellMatrix,l=S.tbodyEl.children().slice(n).addClass("fc-limited").get(),a=0;s.length>a;a++){for(u=s[a],i(u.leftCol),h=[],c=0;u.rightCol>=D;)r=this.getCell(e,D),d=this.getCellSegs(r,n),h.push(d),c+=d.length,D++;if(c){for(f=o[n-1][u.leftCol],g=f.attr("rowspan")||1,p=[],m=0;h.length>m;m++)v=t('<td class="fc-more-cell"/>').attr("rowspan",g),d=h[m],r=this.getCell(e,u.leftCol+m),w=this.renderMoreLink(r,[u].concat(d)),y=t("<div/>").append(w),v.append(y),p.push(v[0]),b.push(v[0]);f.addClass("fc-limited").after(t(p)),l.push(f[0])}}i(this.colCnt),S.moreEls=t(b),S.limitedEls=t(l)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n){var i=this,r=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click",function(s){var o=r.opt("eventLimitClick"),l=e.start,a=t(this),u=i.getCellDayEl(e),d=i.getCellSegs(e),c=i.resliceDaySegs(d,l),h=i.resliceDaySegs(n,l);"function"==typeof o&&(o=r.trigger("eventLimitClick",null,{date:l,dayEl:u,moreEl:a,segs:c,hiddenSegs:h},s)),"popover"===o?i.showSegPopover(e,a,c):"string"==typeof o&&r.calendar.zoomTo(l,o)})},showSegPopover:function(t,e,n){var i,r,s=this,o=this.view,l=e.parent();i=1==this.rowCnt?o.el:this.rowEls.eq(t.row),r={className:"fc-more-popover",content:this.renderSegPopoverContent(t,n),parentEl:this.el,top:i.offset().top,autoHide:!0,viewportConstrain:o.opt("popoverViewportConstrain"),hide:function(){s.segPopover.destroy(),s.segPopover=null,s.popoverSegs=null}},this.isRTL?r.right=l.offset().left+l.outerWidth()+1:r.left=l.offset().left-1,this.segPopover=new Oe(r),this.segPopover.show()},renderSegPopoverContent:function(e,n){var i,r=this.view,s=r.opt("theme"),o=e.start.format(r.opt("dayPopoverFormat")),l=t('<div class="fc-header '+r.widgetHeaderClass+'">'+'<span class="fc-close '+(s?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span>'+'<span class="fc-title">'+z(o)+"</span>"+'<div class="fc-clear"/>'+"</div>"+'<div class="fc-body '+r.widgetContentClass+'">'+'<div class="fc-event-container"></div>'+"</div>"),a=l.find(".fc-event-container");for(n=this.renderFgSegEls(n,!0),this.popoverSegs=n,i=0;n.length>i;i++)n[i].cell=e,a.append(n[i].el);return l},resliceDaySegs:function(e,n){var i=t.map(e,function(t){return t.event}),r=n.clone().stripTime(),s=r.clone().add(1,"days"),o={start:r,end:s};return this.eventsToSegs(i,function(t){var e=y(t,o);return e?[e]:[]})},getMoreLinkText:function(t){var e=this.view.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},getCellSegs:function(t,e){for(var n,i=this.rowStructs[t.row].segMatrix,r=e||0,s=[];i.length>r;)n=i[r][t.col],n&&s.push(n),r++;return s}});var Ue=Xe.extend({slotDuration:null,snapDuration:null,minTime:null,maxTime:null,axisFormat:null,dayEls:null,slatEls:null,slatTops:null,helperEl:null,businessHourSegs:null,constructor:function(){Xe.apply(this,arguments),this.processOptions()},render:function(){this.el.html(this.renderHtml()),this.dayEls=this.el.find(".fc-day"),this.slatEls=this.el.find(".fc-slats tr"),this.computeSlatTops(),this.renderBusinessHours(),Xe.prototype.render.call(this)},renderBusinessHours:function(){var t=this.view.calendar.getBusinessHoursEvents();this.businessHourSegs=this.renderFill("businessHours",this.eventsToSegs(t),"bgevent")},renderHtml:function(){return'<div class="fc-bg"><table>'+this.rowHtml("slotBg")+"</table>"+"</div>"+'<div class="fc-slats">'+"<table>"+this.slatRowHtml()+"</table>"+"</div>"},slotBgCellHtml:function(t){return this.bgCellHtml(t)},slatRowHtml:function(){for(var t,n,i,r=this.view,s=this.isRTL,o="",l=0===this.slotDuration.asMinutes()%15,a=e.duration(+this.minTime);this.maxTime>a;)t=this.start.clone().time(a),n=t.minutes(),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(l&&n?"":"<span>"+z(t.format(this.axisFormat))+"</span>")+"</td>",o+="<tr "+(n?'class="fc-minor"':"")+">"+(s?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(s?i:"")+"</tr>",a.add(this.slotDuration);return o},processOptions:function(){var t=this.view,n=t.opt("slotDuration"),i=t.opt("snapDuration");n=e.duration(n),i=i?e.duration(i):n,this.slotDuration=n,this.snapDuration=i,this.minTime=e.duration(t.opt("minTime")),this.maxTime=e.duration(t.opt("maxTime")),this.axisFormat=t.opt("axisFormat")||t.opt("smallTimeFormat")},computeColHeadFormat:function(){return this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},updateCells:function(){var t,e=this.view,n=[];for(t=this.start.clone();t.isBefore(this.end);)n.push({day:t.clone()}),t.add(1,"day"),t=e.skipHiddenDays(t);this.isRTL&&n.reverse(),this.colData=n,this.colCnt=n.length,this.rowCnt=Math.ceil((this.maxTime-this.minTime)/this.snapDuration)},computeCellRange:function(t){var e=this.computeSnapTime(t.row),n=this.view.calendar.rezoneDate(t.day).time(e),i=n.clone().add(this.snapDuration);return{start:n,end:i}},getColEl:function(t){return this.dayEls.eq(t)},computeSnapTime:function(t){return e.duration(this.minTime+this.snapDuration*t)},rangeToSegs:function(t){var e,n,i,r,s=this.colCnt,o=[];for(t={start:t.start.clone().stripZone(),end:t.end.clone().stripZone()},n=0;s>n;n++)i=this.colData[n].day,r={start:i.clone().time(this.minTime),end:i.clone().time(this.maxTime)},e=y(t,r),e&&(e.col=n,o.push(e));
return o},resize:function(){this.computeSlatTops(),this.updateSegVerticals()},computeRowCoords:function(){var t,e,n=this.el.offset().top,i=[];for(t=0;this.rowCnt>t;t++)e={top:n+this.computeTimeTop(this.computeSnapTime(t))},t>0&&(i[t-1].bottom=e.top),i.push(e);return e.bottom=e.top+this.computeTimeTop(this.computeSnapTime(t)),i},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t.clone().stripZone()-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i,r,s=(t-this.minTime)/this.slotDuration;return s=Math.max(0,s),s=Math.min(this.slatEls.length,s),e=Math.floor(s),n=s-e,i=this.slatTops[e],n?(r=this.slatTops[e+1],i+(r-i)*n):i},computeSlatTops:function(){var e,n=[];this.slatEls.each(function(i,r){e=t(r).position().top,n.push(e)}),n.push(e+this.slatEls.last().outerHeight()),this.slatTops=n},renderDrag:function(t,e){var n;return e?(this.renderRangeHelper(t,e),n=this.view.opt("dragOpacity"),void 0!==n&&this.helperEl.css("opacity",n),!0):(this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)),void 0)},destroyDrag:function(){this.destroyHelper(),this.destroyHighlight()},renderEventResize:function(t,e){this.renderRangeHelper(t,e)},destroyEventResize:function(){this.destroyHelper()},renderHelper:function(e,n){var i,r,s,o,l=this.eventsToSegs([e]);for(l=this.renderFgSegEls(l),i=this.renderSegTable(l),r=0;l.length>r;r++)s=l[r],n&&n.col===s.col&&(o=n.el,s.el.css({left:o.css("left"),right:o.css("right"),"margin-left":o.css("margin-left"),"margin-right":o.css("margin-right")}));this.helperEl=t('<div class="fc-helper-skeleton"/>').append(i).appendTo(this.el)},destroyHelper:function(){this.helperEl&&(this.helperEl.remove(),this.helperEl=null)},renderSelection:function(t){this.view.opt("selectHelper")?this.renderRangeHelper(t):this.renderHighlight(t)},destroySelection:function(){this.destroyHelper(),this.destroyHighlight()},renderFill:function(e,n,i){var r,s,o,l,a,u,d,c,h,f;if(n.length){for(n=this.renderFillSegEls(e,n),r=this.groupSegCols(n),i=i||e.toLowerCase(),s=t('<div class="fc-'+i+'-skeleton">'+"<table><tr/></table>"+"</div>"),o=s.find("tr"),l=0;r.length>l;l++)if(a=r[l],u=t("<td/>").appendTo(o),a.length)for(d=t('<div class="fc-'+i+'-container"/>').appendTo(u),c=this.colData[l].day,h=0;a.length>h;h++)f=a[h],d.append(f.el.css({top:this.computeDateTop(f.start,c),bottom:-this.computeDateTop(f.end,c)}));this.bookendCells(o,e),this.el.append(s),this.elsByFill[e]=s}return n}});Ue.mixin({eventSkeletonEl:null,renderFgSegs:function(e){return e=this.renderFgSegEls(e),this.el.append(this.eventSkeletonEl=t('<div class="fc-content-skeleton"/>').append(this.renderSegTable(e))),e},destroyFgSegs:function(){this.eventSkeletonEl&&(this.eventSkeletonEl.remove(),this.eventSkeletonEl=null)},renderSegTable:function(e){var n,i,r,s,o,l,a=t("<table><tr/></table>"),u=a.find("tr");for(n=this.groupSegCols(e),this.computeSegVerticals(e),s=0;n.length>s;s++){for(o=n[s],ae(o),l=t('<div class="fc-event-container"/>'),i=0;o.length>i;i++)r=o[i],r.el.css(this.generateSegPositionCss(r)),30>r.bottom-r.top&&r.el.addClass("fc-short"),l.append(r.el);u.append(t("<td/>").append(l))}return this.bookendCells(u,"eventSkeleton"),a},updateSegVerticals:function(){var t,e=(this.segs||[]).concat(this.businessHourSegs||[]);for(this.computeSegVerticals(e),t=0;e.length>t;t++)e[t].el.css(this.generateSegVerticalCss(e[t]))},computeSegVerticals:function(t){var e,n;for(e=0;t.length>e;e++)n=t[e],n.top=this.computeDateTop(n.start,n.start),n.bottom=this.computeDateTop(n.end,n.start)},fgSegHtml:function(t,e){var n,i,r,s=this.view,o=t.event,l=s.isEventDraggable(o),a=!e&&t.isEnd&&s.isEventResizable(o),u=this.getSegClasses(t,l,a),d=this.getEventSkinCss(o);return u.unshift("fc-time-grid-event"),s.isMultiDayEvent(o)?(t.isStart||t.isEnd)&&(n=this.getEventTimeText(t),i=this.getEventTimeText(t,"LT"),r=this.getEventTimeText({start:t.start})):(n=this.getEventTimeText(o),i=this.getEventTimeText(o,"LT"),r=this.getEventTimeText({start:o.start})),'<a class="'+u.join(" ")+'"'+(o.url?' href="'+z(o.url)+'"':"")+(d?' style="'+d+'"':"")+">"+'<div class="fc-content">'+(n?'<div class="fc-time" data-start="'+z(r)+'"'+' data-full="'+z(i)+'"'+">"+"<span>"+z(n)+"</span>"+"</div>":"")+(o.title?'<div class="fc-title">'+z(o.title)+"</div>":"")+"</div>"+'<div class="fc-bg"/>'+(a?'<div class="fc-resizer"/>':"")+"</a>"},generateSegPositionCss:function(t){var e,n,i=this.view.opt("slotEventOverlap"),r=t.backwardCoord,s=t.forwardCoord,o=this.generateSegVerticalCss(t);return i&&(s=Math.min(1,r+2*(s-r))),this.isRTL?(e=1-s,n=r):(e=r,n=1-s),o.zIndex=t.level+1,o.left=100*e+"%",o.right=100*n+"%",i&&t.forwardPressure&&(o[this.isRTL?"marginLeft":"marginRight"]=20),o},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},groupSegCols:function(t){var e,n=[];for(e=0;this.colCnt>e;e++)n.push([]);for(e=0;t.length>e;e++)n[t[e].col].push(t[e]);return n}});var qe=De.View=K.extend({type:null,name:null,calendar:null,options:null,coordMap:null,el:null,start:null,end:null,intervalStart:null,intervalEnd:null,intervalDuration:null,intervalUnit:null,isSelected:!1,scrollerEl:null,scrollTop:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,documentMousedownProxy:null,constructor:function(n,i,r){this.calendar=n,this.options=i,this.type=this.name=r,this.nextDayThreshold=e.duration(this.opt("nextDayThreshold")),this.initTheming(),this.initHiddenDays(),this.documentMousedownProxy=t.proxy(this,"documentMousedown"),this.initialize()},initialize:function(){},opt:function(e){var n;return n=this.options[e],void 0!==n?n:(n=this.calendar.options[e],t.isPlainObject(n)&&!r(e)?w(n,this.type):n)},trigger:function(t,e){var n=this.calendar;return n.trigger.apply(n,[t,e||this].concat(Array.prototype.slice.call(arguments,2),[this]))},setDate:function(t){this.setRange(this.computeRange(t))},setRange:function(e){t.extend(this,e)},computeRange:function(t){var n,i,r=e.duration(this.opt("duration")||this.constructor.duration||{days:1}),s=b(r),o=t.clone().startOf(s),l=o.clone().add(r);return D("days",r)?(o.stripTime(),l.stripTime()):(o.hasTime()||(o=this.calendar.rezoneDate(o)),l.hasTime()||(l=this.calendar.rezoneDate(l))),n=o.clone(),n=this.skipHiddenDays(n),i=l.clone(),i=this.skipHiddenDays(i,-1,!0),{intervalDuration:r,intervalUnit:s,intervalStart:o,intervalEnd:l,start:n,end:i}},computePrevDate:function(t){return this.skipHiddenDays(t.clone().startOf(this.intervalUnit).subtract(this.intervalDuration),-1)},computeNextDate:function(t){return this.skipHiddenDays(t.clone().startOf(this.intervalUnit).add(this.intervalDuration))},computeTitle:function(){return this.formatRange({start:this.intervalStart,end:this.intervalEnd},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.intervalUnit?"YYYY":"month"==this.intervalUnit?this.opt("monthYearFormat"):this.intervalDuration.as("days")>1?"ll":"LL"},formatRange:function(t,e,n){var i=t.end;return i.hasTime()||(i=i.clone().subtract(1)),j(t.start,i,e,n,this.opt("isRTL"))},renderView:function(){this.render(),this.updateSize(),this.initializeScroll(),this.trigger("viewRender",this,this,this.el),t(document).on("mousedown",this.documentMousedownProxy)},render:function(){},destroyView:function(){this.unselect(),this.destroyViewEvents(),this.destroy(),this.trigger("viewDestroy",this,this,this.el),t(document).off("mousedown",this.documentMousedownProxy)},destroy:function(){this.el.empty()},initTheming:function(){var t=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=t+"-widget-header",this.widgetContentClass=t+"-widget-content",this.highlightStateClass=t+"-state-highlight"},updateSize:function(t){t&&this.recordScroll(),this.updateHeight(),this.updateWidth()},updateWidth:function(){},updateHeight:function(){var t=this.calendar;this.setHeight(t.getSuggestedViewHeight(),t.isHeightAuto())},setHeight:function(){},computeScrollerHeight:function(t,e){var n,i;return e=e||this.scrollerEl,n=this.el.add(e),n.css({position:"relative",left:-1}),i=this.el.outerHeight()-e.height(),n.css({position:"",left:""}),t-i},initializeScroll:function(){},recordScroll:function(){this.scrollerEl&&(this.scrollTop=this.scrollerEl.scrollTop())},restoreScroll:function(){null!==this.scrollTop&&this.scrollerEl.scrollTop(this.scrollTop)},renderViewEvents:function(t){this.renderEvents(t),this.eventSegEach(function(t){this.trigger("eventAfterRender",t.event,t.event,t.el)}),this.trigger("eventAfterAllRender")},renderEvents:function(){},destroyViewEvents:function(){this.eventSegEach(function(t){this.trigger("eventDestroy",t.event,t.event,t.el)}),this.destroyEvents()},destroyEvents:function(){},resolveEventEl:function(e,n){var i=this.trigger("eventRender",e,e,n);return i===!1?n=null:i&&i!==!0&&(n=t(i)),n},showEvent:function(t){this.eventSegEach(function(t){t.el.css("visibility","")},t)},hideEvent:function(t){this.eventSegEach(function(t){t.el.css("visibility","hidden")},t)},eventSegEach:function(t,e){var n,i=this.getEventSegs();for(n=0;i.length>n;n++)e&&i[n].event._id!==e._id||t.call(this,i[n])},getEventSegs:function(){return[]},isEventDraggable:function(t){var e=t.source||{};return F(t.startEditable,e.startEditable,this.opt("eventStartEditable"),t.editable,e.editable,this.opt("editable"))},reportEventDrop:function(t,e,n,i){var r=this.calendar,s=r.mutateEvent(t,e),o=function(){s.undo(),r.reportEventChange()};this.triggerEventDrop(t,s.dateDelta,o,n,i),r.reportEventChange()},triggerEventDrop:function(t,e,n,i,r){this.trigger("eventDrop",i[0],t,e,n,r,{})},reportExternalDrop:function(e,n,i,r,s){var o,l,a=e.eventProps;a&&(o=t.extend({},a,n),l=this.calendar.renderEvent(o,e.stick)[0]),this.triggerExternalDrop(l,n,i,r,s)},triggerExternalDrop:function(t,e,n,i,r){this.trigger("drop",n[0],e.start,i,r),t&&this.trigger("eventReceive",null,t)},renderDrag:function(){},destroyDrag:function(){},isEventResizable:function(t){var e=t.source||{};return F(t.durationEditable,e.durationEditable,this.opt("eventDurationEditable"),t.editable,e.editable,this.opt("editable"))},reportEventResize:function(t,e,n,i){var r=this.calendar,s=r.mutateEvent(t,{end:e}),o=function(){s.undo(),r.reportEventChange()};this.triggerEventResize(t,s.durationDelta,o,n,i),r.reportEventChange()},triggerEventResize:function(t,e,n,i,r){this.trigger("eventResize",i[0],t,e,n,r,{})},select:function(t,e){this.unselect(e),this.renderSelection(t),this.reportSelection(t,e)},renderSelection:function(){},reportSelection:function(t,e){this.isSelected=!0,this.trigger("select",null,t.start,t.end,e)},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection(),this.trigger("unselect",null,t))},destroySelection:function(){},documentMousedown:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&v(e)&&(n=this.opt("unselectCancel"),n&&t(e.target).closest(n).length||this.unselect(e))},initHiddenDays:function(){var e,n=this.opt("hiddenDays")||[],i=[],r=0;for(this.opt("weekends")===!1&&n.push(0,6),e=0;7>e;e++)(i[e]=-1!==t.inArray(e,n))||r++;if(!r)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(t){return e.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},skipHiddenDays:function(t,e,n){var i=t.clone();for(e=e||1;this.isHiddenDayHash[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i},computeDayRange:function(t){var e,n=t.start.clone().stripTime(),i=t.end,r=null;return i&&(r=i.clone().stripTime(),e=+i.time(),e&&e>=this.nextDayThreshold&&r.add(1,"days")),(!i||n>=r)&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayEvent:function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1}});De.sourceNormalizers=[],De.sourceFetchers=[];var Ke={dataType:"json",cache:!1},Qe=1,Je=Ce.basic=qe.extend({dayGrid:null,dayNumbersVisible:!1,weekNumbersVisible:!1,weekNumberWidth:null,headRowEl:null,initialize:function(){this.dayGrid=new $e(this),this.coordMap=this.dayGrid.coordMap},setRange:function(t){qe.prototype.setRange.call(this,t),this.dayGrid.breakOnWeeks=/year|month|week/.test(this.intervalUnit),this.dayGrid.setRange(t)},computeRange:function(t){var e=qe.prototype.computeRange.call(this,t);return/year|month/.test(e.intervalUnit)&&(e.start.startOf("week"),e.start=this.skipHiddenDays(e.start),e.end.weekday()&&(e.end.add(1,"week").startOf("week"),e.end=this.skipHiddenDays(e.end,-1,!0))),e},render:function(){this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.weekNumbersVisible=this.opt("weekNumbers"),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.weekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderHtml()),this.headRowEl=this.el.find("thead .fc-row"),this.scrollerEl=this.el.find(".fc-day-grid-container"),this.dayGrid.coordMap.containerEl=this.scrollerEl,this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(this.hasRigidRows())},destroy:function(){this.dayGrid.destroy(),qe.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.dayGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+'<div class="fc-day-grid-container">'+'<div class="fc-day-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){return this.weekNumbersVisible?'<th class="fc-week-number '+this.widgetHeaderClass+'" '+this.weekNumberStyleAttr()+">"+"<span>"+z(this.opt("weekNumberTitle"))+"</span>"+"</th>":void 0},numberIntroHtml:function(t){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+">"+"<span>"+this.calendar.calculateWeekNumber(this.dayGrid.getCell(t,0).start)+"</span>"+"</td>":void 0},dayIntroHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number '+this.widgetContentClass+'" '+this.weekNumberStyleAttr()+"></td>":void 0},introHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+"></td>":void 0},numberCellHtml:function(t){var e,n=t.start;return this.dayNumbersVisible?(e=this.dayGrid.getDayClasses(n),e.unshift("fc-day-number"),'<td class="'+e.join(" ")+'" data-date="'+n.format()+'">'+n.date()+"</td>"):"<td/>"},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.weekNumbersVisible&&(this.weekNumberWidth=h(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,i=this.opt("eventLimit");g(this.scrollerEl),l(this.headRowEl),this.dayGrid.destroySegPopover(),i&&"number"==typeof i&&this.dayGrid.limitRows(i),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),i&&"number"!=typeof i&&this.dayGrid.limitRows(i),!e&&f(this.scrollerEl,n)&&(o(this.headRowEl,m(this.scrollerEl)),n=this.computeScrollerHeight(t),this.scrollerEl.height(n),this.restoreScroll())},setGridHeight:function(t,e){e?c(this.dayGrid.rowEls):d(this.dayGrid.rowEls,t,!0)},renderEvents:function(t){this.dayGrid.renderEvents(t),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},destroyEvents:function(){this.recordScroll(),this.dayGrid.destroyEvents()},renderDrag:function(t,e){return this.dayGrid.renderDrag(t,e)},destroyDrag:function(){this.dayGrid.destroyDrag()},renderSelection:function(t){this.dayGrid.renderSelection(t)},destroySelection:function(){this.dayGrid.destroySelection()}});n({fixedWeekCount:!0});var tn=Ce.month=Je.extend({computeRange:function(t){var e=Je.prototype.computeRange.call(this,t);return this.isFixedWeeks()&&e.end.add(6-e.end.diff(e.start,"weeks"),"weeks"),e},setGridHeight:function(t,e){e=e||"variable"===this.opt("weekMode"),e&&(t*=this.rowCnt/6),d(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){var t=this.opt("weekMode");return t?"fixed"===t:this.opt("fixedWeekCount")}});tn.duration={months:1},Ce.basicWeek={type:"basic",duration:{weeks:1}},Ce.basicDay={type:"basic",duration:{days:1}},n({allDaySlot:!0,allDayText:"all-day",scrollTime:"06:00:00",slotDuration:"00:30:00",minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0});var en=5;Ce.agenda=qe.extend({timeGrid:null,dayGrid:null,axisWidth:null,noScrollRowEls:null,bottomRuleEl:null,bottomRuleHeight:null,initialize:function(){this.timeGrid=new Ue(this),this.opt("allDaySlot")?(this.dayGrid=new $e(this),this.coordMap=new Ze([this.dayGrid.coordMap,this.timeGrid.coordMap])):this.coordMap=this.timeGrid.coordMap},setRange:function(t){qe.prototype.setRange.call(this,t),this.timeGrid.setRange(t),this.dayGrid&&this.dayGrid.setRange(t)},render:function(){this.el.addClass("fc-agenda-view").html(this.renderHtml()),this.scrollerEl=this.el.find(".fc-time-grid-container"),this.timeGrid.coordMap.containerEl=this.scrollerEl,this.timeGrid.el=this.el.find(".fc-time-grid"),this.timeGrid.render(),this.bottomRuleEl=t('<hr class="'+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},destroy:function(){this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),qe.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.timeGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="'+this.widgetHeaderClass+'"/>':"")+'<div class="fc-time-grid-container">'+'<div class="fc-time-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){var t,e,n,i;return this.opt("weekNumbers")?(t=this.timeGrid.getCell(0).start,e=this.calendar.calculateWeekNumber(t),n=this.opt("weekNumberTitle"),i=this.opt("isRTL")?e+n:n+e,'<th class="fc-axis fc-week-number '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+">"+"<span>"+z(i)+"</span>"+"</th>"):'<th class="fc-axis '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+"></th>"},dayIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+">"+"<span>"+(this.opt("allDayHtml")||z(this.opt("allDayText")))+"</span>"+"</td>"},slotBgIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+"></td>"},introHtml:function(){return'<td class="fc-axis" '+this.axisStyleAttr()+"></td>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},updateSize:function(t){t&&this.timeGrid.resize(),qe.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=h(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,i;null===this.bottomRuleHeight&&(this.bottomRuleHeight=this.bottomRuleEl.outerHeight()),this.bottomRuleEl.hide(),this.scrollerEl.css("overflow",""),g(this.scrollerEl),l(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.destroySegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=en),n&&this.dayGrid.limitRows(n)),e||(i=this.computeScrollerHeight(t),f(this.scrollerEl,i)?(o(this.noScrollRowEls,m(this.scrollerEl)),i=this.computeScrollerHeight(t),this.scrollerEl.height(i),this.restoreScroll()):(this.scrollerEl.height(i).css("overflow","hidden"),this.bottomRuleEl.show()))},initializeScroll:function(){function t(){n.scrollerEl.scrollTop(r)}var n=this,i=e.duration(this.opt("scrollTime")),r=this.timeGrid.computeTimeTop(i);r=Math.ceil(r),r&&r++,t(),setTimeout(t,0)},renderEvents:function(t){var e,n,i=[],r=[],s=[];for(n=0;t.length>n;n++)t[n].allDay?i.push(t[n]):r.push(t[n]);e=this.timeGrid.renderEvents(r),this.dayGrid&&(s=this.dayGrid.renderEvents(i)),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},destroyEvents:function(){this.recordScroll(),this.timeGrid.destroyEvents(),this.dayGrid&&this.dayGrid.destroyEvents()},renderDrag:function(t,e){return t.start.hasTime()?this.timeGrid.renderDrag(t,e):this.dayGrid?this.dayGrid.renderDrag(t,e):void 0},destroyDrag:function(){this.timeGrid.destroyDrag(),this.dayGrid&&this.dayGrid.destroyDrag()},renderSelection:function(t){t.start.hasTime()||t.end.hasTime()?this.timeGrid.renderSelection(t):this.dayGrid&&this.dayGrid.renderSelection(t)},destroySelection:function(){this.timeGrid.destroySelection(),this.dayGrid&&this.dayGrid.destroySelection()}}),Ce.agendaWeek={type:"agenda",duration:{weeks:1}},Ce.agendaDay={type:"agenda",duration:{days:1}}});

/* en-ca.js */
(function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)})(function(e,t){(t.defineLocale||t.lang).call(t,"en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),e.fullCalendar.lang("en-ca")});

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.card = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = _dereq_('./lib/extend');


},{"./lib/extend":2}],2:[function(_dereq_,module,exports){
/*!
 * node.extend
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * @fileoverview
 * Port of jQuery.extend that actually works on node.js
 */
var is = _dereq_('is');

function extend() {
  var target = arguments[0] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;
  var options, name, src, copy, copy_is_array, clone;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && !is.fn(target)) {
    target = {};
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    options = arguments[i]
    if (options != null) {
      if (typeof options === 'string') {
          options = options.split('');
      }
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (is.hash(copy) || (copy_is_array = is.array(copy)))) {
          if (copy_is_array) {
            copy_is_array = false;
            clone = src && is.array(src) ? src : [];
          } else {
            clone = src && is.hash(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
        } else if (typeof copy !== 'undefined') {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

/**
 * @public
 */
extend.version = '1.1.3';

/**
 * Exports module.
 */
module.exports = extend;


},{"is":3}],3:[function(_dereq_,module,exports){
/* globals window, HTMLElement */
/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = module.exports = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) { return false; }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (--key) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  return isAlert || toStr.call(value) === '[object Function]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */

is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

},{}],4:[function(_dereq_,module,exports){
(function (global){
var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

QJ = _dereq_('qj/src/qj.coffee');

defaultFormat = /(\d{1,4})/g;

cards = [
  {
    type: 'amex',
    pattern: /^3[47]/,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvcLength: [4],
    luhn: true
  }, {
    type: 'dankort',
    pattern: /^5019/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'dinersclub',
    pattern: /^(36|38|30[0-5])/,
    format: defaultFormat,
    length: [14],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'discover',
    pattern: /^(6011|65|64[4-9]|622)/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'jcb',
    pattern: /^35/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'laser',
    pattern: /^(6706|6771|6709)/,
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'maestro',
    pattern: /^(5018|5020|5038|6304|6703|6759|676[1-3])/,
    format: defaultFormat,
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'mastercard',
    pattern: /^5[1-5]/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'unionpay',
    pattern: /^62/,
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: false
  }, {
    type: 'visaelectron',
    pattern: /^4(026|17500|405|508|844|91[37])/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'elo',
    pattern: /^4011|438935|45(1416|76)|50(4175|6699|67|90[4-7])|63(6297|6368)/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true
  }, {
    type: 'visa',
    pattern: /^4/,
    format: defaultFormat,
    length: [13, 16],
    cvcLength: [3],
    luhn: true
  }
];

cardFromNumber = function(num) {
  var card, i, len;
  num = (num + '').replace(/\D/g, '');
  for (i = 0, len = cards.length; i < len; i++) {
    card = cards[i];
    if (card.pattern.test(num)) {
      return card;
    }
  }
};

cardFromType = function(type) {
  var card, i, len;
  for (i = 0, len = cards.length; i < len; i++) {
    card = cards[i];
    if (card.type === type) {
      return card;
    }
  }
};

luhnCheck = function(num) {
  var digit, digits, i, len, odd, sum;
  odd = true;
  sum = 0;
  digits = (num + '').split('').reverse();
  for (i = 0, len = digits.length; i < len; i++) {
    digit = digits[i];
    digit = parseInt(digit, 10);
    if ((odd = !odd)) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
};

hasTextSelected = function(target) {
  var ref;
  if ((target.selectionStart != null) && target.selectionStart !== target.selectionEnd) {
    return true;
  }
  if ((typeof document !== "undefined" && document !== null ? (ref = document.selection) != null ? ref.createRange : void 0 : void 0) != null) {
    if (document.selection.createRange().text) {
      return true;
    }
  }
  return false;
};

reFormatCardNumber = function(e) {
  return setTimeout((function(_this) {
    return function() {
      var target, value;
      target = e.target;
      value = QJ.val(target);
      value = Payment.fns.formatCardNumber(value);
      return QJ.val(target, value);
    };
  })(this));
};

formatCardNumber = function(e) {
  var card, digit, length, re, target, upperLength, value;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  target = e.target;
  value = QJ.val(target);
  card = cardFromNumber(value + digit);
  length = (value.replace(/\D/g, '') + digit).length;
  upperLength = 16;
  if (card) {
    upperLength = card.length[card.length.length - 1];
  }
  if (length >= upperLength) {
    return;
  }
  if ((target.selectionStart != null) && target.selectionStart !== value.length) {
    return;
  }
  if (card && card.type === 'amex') {
    re = /^(\d{4}|\d{4}\s\d{6})$/;
  } else {
    re = /(?:^|\s)(\d{4})$/;
  }
  if (re.test(value)) {
    e.preventDefault();
    return QJ.val(target, value + ' ' + digit);
  } else if (re.test(value + digit)) {
    e.preventDefault();
    return QJ.val(target, value + digit + ' ');
  }
};

formatBackCardNumber = function(e) {
  var target, value;
  target = e.target;
  value = QJ.val(target);
  if (e.meta) {
    return;
  }
  if (e.which !== 8) {
    return;
  }
  if ((target.selectionStart != null) && target.selectionStart !== value.length) {
    return;
  }
  if (/\d\s$/.test(value)) {
    e.preventDefault();
    return QJ.val(target, value.replace(/\d\s$/, ''));
  } else if (/\s\d?$/.test(value)) {
    e.preventDefault();
    return QJ.val(target, value.replace(/\s\d?$/, ''));
  }
};

formatExpiry = function(e) {
  var digit, target, val;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  target = e.target;
  val = QJ.val(target) + digit;
  if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
    e.preventDefault();
    return QJ.val(target, "0" + val + " / ");
  } else if (/^\d\d$/.test(val)) {
    e.preventDefault();
    return QJ.val(target, val + " / ");
  }
};

formatMonthExpiry = function(e) {
  var digit, target, val;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  target = e.target;
  val = QJ.val(target) + digit;
  if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
    e.preventDefault();
    return QJ.val(target, "0" + val);
  } else if (/^\d\d$/.test(val)) {
    e.preventDefault();
    return QJ.val(target, "" + val);
  }
};

formatForwardExpiry = function(e) {
  var digit, target, val;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  target = e.target;
  val = QJ.val(target);
  if (/^\d\d$/.test(val)) {
    return QJ.val(target, val + " / ");
  }
};

formatForwardSlash = function(e) {
  var slash, target, val;
  slash = String.fromCharCode(e.which);
  if (slash !== '/') {
    return;
  }
  target = e.target;
  val = QJ.val(target);
  if (/^\d$/.test(val) && val !== '0') {
    return QJ.val(target, "0" + val + " / ");
  }
};

formatBackExpiry = function(e) {
  var target, value;
  if (e.metaKey) {
    return;
  }
  target = e.target;
  value = QJ.val(target);
  if (e.which !== 8) {
    return;
  }
  if ((target.selectionStart != null) && target.selectionStart !== value.length) {
    return;
  }
  if (/\d(\s|\/)+$/.test(value)) {
    e.preventDefault();
    return QJ.val(target, value.replace(/\d(\s|\/)*$/, ''));
  } else if (/\s\/\s?\d?$/.test(value)) {
    e.preventDefault();
    return QJ.val(target, value.replace(/\s\/\s?\d?$/, ''));
  }
};

restrictNumeric = function(e) {
  var input;
  if (e.metaKey || e.ctrlKey) {
    return true;
  }
  if (e.which === 32) {
    return e.preventDefault();
  }
  if (e.which === 0) {
    return true;
  }
  if (e.which < 33) {
    return true;
  }
  input = String.fromCharCode(e.which);
  if (!/[\d\s]/.test(input)) {
    return e.preventDefault();
  }
};

restrictCardNumber = function(e) {
  var card, digit, target, value;
  target = e.target;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  if (hasTextSelected(target)) {
    return;
  }
  value = (QJ.val(target) + digit).replace(/\D/g, '');
  card = cardFromNumber(value);
  if (card) {
    if (!(value.length <= card.length[card.length.length - 1])) {
      return e.preventDefault();
    }
  } else {
    if (!(value.length <= 16)) {
      return e.preventDefault();
    }
  }
};

restrictExpiry = function(e, length) {
  var digit, target, value;
  target = e.target;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  if (hasTextSelected(target)) {
    return;
  }
  value = QJ.val(target) + digit;
  value = value.replace(/\D/g, '');
  if (value.length > length) {
    return e.preventDefault();
  }
};

restrictCombinedExpiry = function(e) {
  return restrictExpiry(e, 6);
};

restrictMonthExpiry = function(e) {
  return restrictExpiry(e, 2);
};

restrictYearExpiry = function(e) {
  return restrictExpiry(e, 4);
};

restrictCVC = function(e) {
  var digit, target, val;
  target = e.target;
  digit = String.fromCharCode(e.which);
  if (!/^\d+$/.test(digit)) {
    return;
  }
  if (hasTextSelected(target)) {
    return;
  }
  val = QJ.val(target) + digit;
  if (!(val.length <= 4)) {
    return e.preventDefault();
  }
};

setCardType = function(e) {
  var allTypes, card, cardType, target, val;
  target = e.target;
  val = QJ.val(target);
  cardType = Payment.fns.cardType(val) || 'unknown';
  if (!QJ.hasClass(target, cardType)) {
    allTypes = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = cards.length; i < len; i++) {
        card = cards[i];
        results.push(card.type);
      }
      return results;
    })();
    QJ.removeClass(target, 'unknown');
    QJ.removeClass(target, allTypes.join(' '));
    QJ.addClass(target, cardType);
    QJ.toggleClass(target, 'identified', cardType !== 'unknown');
    return QJ.trigger(target, 'payment.cardType', cardType);
  }
};

Payment = (function() {
  function Payment() {}

  Payment.fns = {
    cardExpiryVal: function(value) {
      var month, prefix, ref, year;
      value = value.replace(/\s/g, '');
      ref = value.split('/', 2), month = ref[0], year = ref[1];
      if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
        prefix = (new Date).getFullYear();
        prefix = prefix.toString().slice(0, 2);
        year = prefix + year;
      }
      month = parseInt(month, 10);
      year = parseInt(year, 10);
      return {
        month: month,
        year: year
      };
    },
    validateCardNumber: function(num) {
      var card, ref;
      num = (num + '').replace(/\s+|-/g, '');
      if (!/^\d+$/.test(num)) {
        return false;
      }
      card = cardFromNumber(num);
      if (!card) {
        return false;
      }
      return (ref = num.length, indexOf.call(card.length, ref) >= 0) && (card.luhn === false || luhnCheck(num));
    },
    validateCardExpiry: function(month, year) {
      var currentTime, expiry, prefix, ref;
      if (typeof month === 'object' && 'month' in month) {
        ref = month, month = ref.month, year = ref.year;
      }
      if (!(month && year)) {
        return false;
      }
      month = QJ.trim(month);
      year = QJ.trim(year);
      if (!/^\d+$/.test(month)) {
        return false;
      }
      if (!/^\d+$/.test(year)) {
        return false;
      }
      if (!(parseInt(month, 10) <= 12)) {
        return false;
      }
      if (year.length === 2) {
        prefix = (new Date).getFullYear();
        prefix = prefix.toString().slice(0, 2);
        year = prefix + year;
      }
      expiry = new Date(year, month);
      currentTime = new Date;
      expiry.setMonth(expiry.getMonth() - 1);
      expiry.setMonth(expiry.getMonth() + 1, 1);
      return expiry > currentTime;
    },
    validateCardCVC: function(cvc, type) {
      var ref, ref1;
      cvc = QJ.trim(cvc);
      if (!/^\d+$/.test(cvc)) {
        return false;
      }
      if (type && cardFromType(type)) {
        return ref = cvc.length, indexOf.call((ref1 = cardFromType(type)) != null ? ref1.cvcLength : void 0, ref) >= 0;
      } else {
        return cvc.length >= 3 && cvc.length <= 4;
      }
    },
    cardType: function(num) {
      var ref;
      if (!num) {
        return null;
      }
      return ((ref = cardFromNumber(num)) != null ? ref.type : void 0) || null;
    },
    formatCardNumber: function(num) {
      var card, groups, ref, upperLength;
      card = cardFromNumber(num);
      if (!card) {
        return num;
      }
      upperLength = card.length[card.length.length - 1];
      num = num.replace(/\D/g, '');
      num = num.slice(0, +upperLength + 1 || 9e9);
      if (card.format.global) {
        return (ref = num.match(card.format)) != null ? ref.join(' ') : void 0;
      } else {
        groups = card.format.exec(num);
        if (groups != null) {
          groups.shift();
        }
        return groups != null ? groups.join(' ') : void 0;
      }
    }
  };

  Payment.restrictNumeric = function(el) {
    return QJ.on(el, 'keypress', restrictNumeric);
  };

  Payment.cardExpiryVal = function(el) {
    return Payment.fns.cardExpiryVal(QJ.val(el));
  };

  Payment.formatCardCVC = function(el) {
    Payment.restrictNumeric(el);
    QJ.on(el, 'keypress', restrictCVC);
    return el;
  };

  Payment.formatCardExpiry = function(el) {
    var month, year;
    Payment.restrictNumeric(el);
    if (el.length && el.length === 2) {
      month = el[0], year = el[1];
      this.formatCardExpiryMultiple(month, year);
    } else {
      QJ.on(el, 'keypress', restrictCombinedExpiry);
      QJ.on(el, 'keypress', formatExpiry);
      QJ.on(el, 'keypress', formatForwardSlash);
      QJ.on(el, 'keypress', formatForwardExpiry);
      QJ.on(el, 'keydown', formatBackExpiry);
    }
    return el;
  };

  Payment.formatCardExpiryMultiple = function(month, year) {
    QJ.on(month, 'keypress', restrictMonthExpiry);
    QJ.on(month, 'keypress', formatMonthExpiry);
    return QJ.on(year, 'keypress', restrictYearExpiry);
  };

  Payment.formatCardNumber = function(el) {
    Payment.restrictNumeric(el);
    QJ.on(el, 'keypress', restrictCardNumber);
    QJ.on(el, 'keypress', formatCardNumber);
    QJ.on(el, 'keydown', formatBackCardNumber);
    QJ.on(el, 'keyup', setCardType);
    QJ.on(el, 'paste', reFormatCardNumber);
    return el;
  };

  Payment.getCardArray = function() {
    return cards;
  };

  Payment.setCardArray = function(cardArray) {
    cards = cardArray;
    return true;
  };

  Payment.addToCardArray = function(cardObject) {
    return cards.push(cardObject);
  };

  Payment.removeFromCardArray = function(type) {
    var key, value;
    for (key in cards) {
      value = cards[key];
      if (value.type === type) {
        cards.splice(key, 1);
      }
    }
    return true;
  };

  return Payment;

})();

module.exports = Payment;

global.Payment = Payment;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"qj/src/qj.coffee":5}],5:[function(_dereq_,module,exports){
var QJ, rreturn, rtrim;

QJ = function(selector) {
  if (QJ.isDOMElement(selector)) {
    return selector;
  }
  return document.querySelectorAll(selector);
};

QJ.isDOMElement = function(el) {
  return el && (el.nodeName != null);
};

rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

QJ.trim = function(text) {
  if (text === null) {
    return "";
  } else {
    return (text + "").replace(rtrim, "");
  }
};

rreturn = /\r/g;

QJ.val = function(el, val) {
  var ret;
  if (arguments.length > 1) {
    return el.value = val;
  } else {
    ret = el.value;
    if (typeof ret === "string") {
      return ret.replace(rreturn, "");
    } else {
      if (ret === null) {
        return "";
      } else {
        return ret;
      }
    }
  }
};

QJ.preventDefault = function(eventObject) {
  if (typeof eventObject.preventDefault === "function") {
    eventObject.preventDefault();
    return;
  }
  eventObject.returnValue = false;
  return false;
};

QJ.normalizeEvent = function(e) {
  var original;
  original = e;
  e = {
    which: original.which != null ? original.which : void 0,
    target: original.target || original.srcElement,
    preventDefault: function() {
      return QJ.preventDefault(original);
    },
    originalEvent: original,
    data: original.data || original.detail
  };
  if (e.which == null) {
    e.which = original.charCode != null ? original.charCode : original.keyCode;
  }
  return e;
};

QJ.on = function(element, eventName, callback) {
  var el, i, j, len, len1, multEventName, originalCallback, ref;
  if (element.length) {
    for (i = 0, len = element.length; i < len; i++) {
      el = element[i];
      QJ.on(el, eventName, callback);
    }
    return;
  }
  if (eventName.match(" ")) {
    ref = eventName.split(" ");
    for (j = 0, len1 = ref.length; j < len1; j++) {
      multEventName = ref[j];
      QJ.on(element, multEventName, callback);
    }
    return;
  }
  originalCallback = callback;
  callback = function(e) {
    e = QJ.normalizeEvent(e);
    return originalCallback(e);
  };
  if (element.addEventListener) {
    return element.addEventListener(eventName, callback, false);
  }
  if (element.attachEvent) {
    eventName = "on" + eventName;
    return element.attachEvent(eventName, callback);
  }
  element['on' + eventName] = callback;
};

QJ.addClass = function(el, className) {
  var e;
  if (el.length) {
    return (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = el.length; i < len; i++) {
        e = el[i];
        results.push(QJ.addClass(e, className));
      }
      return results;
    })();
  }
  if (el.classList) {
    return el.classList.add(className);
  } else {
    return el.className += ' ' + className;
  }
};

QJ.hasClass = function(el, className) {
  var e, hasClass, i, len;
  if (el.length) {
    hasClass = true;
    for (i = 0, len = el.length; i < len; i++) {
      e = el[i];
      hasClass = hasClass && QJ.hasClass(e, className);
    }
    return hasClass;
  }
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
};

QJ.removeClass = function(el, className) {
  var cls, e, i, len, ref, results;
  if (el.length) {
    return (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = el.length; i < len; i++) {
        e = el[i];
        results.push(QJ.removeClass(e, className));
      }
      return results;
    })();
  }
  if (el.classList) {
    ref = className.split(' ');
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      cls = ref[i];
      results.push(el.classList.remove(cls));
    }
    return results;
  } else {
    return el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

QJ.toggleClass = function(el, className, bool) {
  var e;
  if (el.length) {
    return (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = el.length; i < len; i++) {
        e = el[i];
        results.push(QJ.toggleClass(e, className, bool));
      }
      return results;
    })();
  }
  if (bool) {
    if (!QJ.hasClass(el, className)) {
      return QJ.addClass(el, className);
    }
  } else {
    return QJ.removeClass(el, className);
  }
};

QJ.append = function(el, toAppend) {
  var e;
  if (el.length) {
    return (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = el.length; i < len; i++) {
        e = el[i];
        results.push(QJ.append(e, toAppend));
      }
      return results;
    })();
  }
  return el.insertAdjacentHTML('beforeend', toAppend);
};

QJ.find = function(el, selector) {
  if (el instanceof NodeList || el instanceof Array) {
    el = el[0];
  }
  return el.querySelectorAll(selector);
};

QJ.trigger = function(el, name, data) {
  var e, error, ev;
  try {
    ev = new CustomEvent(name, {
      detail: data
    });
  } catch (error) {
    e = error;
    ev = document.createEvent('CustomEvent');
    if (ev.initCustomEvent) {
      ev.initCustomEvent(name, true, true, data);
    } else {
      ev.initEvent(name, true, true, data);
    }
  }
  return el.dispatchEvent(ev);
};

module.exports = QJ;


},{}],6:[function(_dereq_,module,exports){
module.exports = _dereq_('cssify');
},{"cssify":7}],7:[function(_dereq_,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],8:[function(_dereq_,module,exports){
(function (global){
var Card, QJ, extend, payment;

_dereq_('../scss/card.scss');

QJ = _dereq_('qj/src/qj.coffee');

payment = _dereq_('payment/src/payment');

extend = _dereq_('node.extend');

Card = (function() {
  var bindVal;

  Card.prototype.cardTemplate = '' + '<div class="jp-card-container">' + '<div class="jp-card">' + '<div class="jp-card-front">' + '<div class="jp-card-logo jp-card-elo">' + '<div class="e">e</div>' + '<div class="l">l</div>' + '<div class="o">o</div>' + '</div>' + '<div class="jp-card-logo jp-card-visa">visa</div>' + '<div class="jp-card-logo jp-card-mastercard">MasterCard</div>' + '<div class="jp-card-logo jp-card-maestro">Maestro</div>' + '<div class="jp-card-logo jp-card-amex"></div>' + '<div class="jp-card-logo jp-card-discover">discover</div>' + '<div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div>' + '<div class="jp-card-lower">' + '<div class="jp-card-shiny"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-number jp-card-display">{{number}}</div>' + '<div class="jp-card-name jp-card-display">{{name}}</div>' + '<div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div>' + '</div>' + '</div>' + '<div class="jp-card-back">' + '<div class="jp-card-bar"></div>' + '<div class="jp-card-cvc jp-card-display">{{cvc}}</div>' + '<div class="jp-card-shiny"></div>' + '</div>' + '</div>' + '</div>';

  Card.prototype.template = function(tpl, data) {
    return tpl.replace(/\{\{(.*?)\}\}/g, function(match, key, str) {
      return data[key];
    });
  };

  Card.prototype.cardTypes = ['jp-card-amex', 'jp-card-dankort', 'jp-card-dinersclub', 'jp-card-discover', 'jp-card-jcb', 'jp-card-laser', 'jp-card-maestro', 'jp-card-mastercard', 'jp-card-unionpay', 'jp-card-visa', 'jp-card-visaelectron', 'jp-card-elo'];

  Card.prototype.defaults = {
    formatting: true,
    formSelectors: {
      numberInput: 'input[name="number"]',
      expiryInput: 'input[name="expiry"]',
      cvcInput: 'input[name="cvc"]',
      nameInput: 'input[name="name"]'
    },
    cardSelectors: {
      cardContainer: '.jp-card-container',
      card: '.jp-card',
      numberDisplay: '.jp-card-number',
      expiryDisplay: '.jp-card-expiry',
      cvcDisplay: '.jp-card-cvc',
      nameDisplay: '.jp-card-name'
    },
    messages: {
      validDate: 'valid\nthru',
      monthYear: 'month/year'
    },
    placeholders: {
      number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
      cvc: '&bull;&bull;&bull;',
      expiry: '&bull;&bull;/&bull;&bull;',
      name: 'Full Name'
    },
    classes: {
      valid: 'jp-card-valid',
      invalid: 'jp-card-invalid'
    },
    debug: false
  };

  function Card(opts) {
    this.options = extend(true, this.defaults, opts);
    if (!this.options.form) {
      console.log("Please provide a form");
      return;
    }
    this.$el = QJ(this.options.form);
    if (!this.options.container) {
      console.log("Please provide a container");
      return;
    }
    this.$container = QJ(this.options.container);
    this.render();
    this.attachHandlers();
    this.handleInitialPlaceholders();
  }

  Card.prototype.render = function() {
    var $cardContainer, baseWidth, name, obj, ref, ref1, selector, ua;
    QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders)));
    ref = this.options.cardSelectors;
    for (name in ref) {
      selector = ref[name];
      this["$" + name] = QJ.find(this.$container, selector);
    }
    ref1 = this.options.formSelectors;
    for (name in ref1) {
      selector = ref1[name];
      selector = this.options[name] ? this.options[name] : selector;
      obj = QJ.find(this.$el, selector);
      if (!obj.length && this.options.debug) {
        console.error("Card can't find a " + name + " in your form.");
      }
      this["$" + name] = obj;
    }
    if (this.options.formatting) {
      Payment.formatCardNumber(this.$numberInput);
      Payment.formatCardCVC(this.$cvcInput);
      Payment.formatCardExpiry(this.$expiryInput);
    }
    if (this.options.width) {
      $cardContainer = QJ(this.options.cardSelectors.cardContainer)[0];
      baseWidth = parseInt($cardContainer.clientWidth);
      $cardContainer.style.transform = "scale(" + (this.options.width / baseWidth) + ")";
    }
    if (typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent : void 0) {
      ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
        QJ.addClass(this.$card, 'jp-card-safari');
      }
    }
    if (/MSIE 10\./i.test(navigator.userAgent)) {
      QJ.addClass(this.$card, 'jp-card-ie-10');
    }
    if (/rv:11.0/i.test(navigator.userAgent)) {
      return QJ.addClass(this.$card, 'jp-card-ie-11');
    }
  };

  Card.prototype.attachHandlers = function() {
    var expiryFilters;
    bindVal(this.$numberInput, this.$numberDisplay, {
      fill: false,
      filters: this.validToggler('cardNumber')
    });
    QJ.on(this.$numberInput, 'payment.cardType', this.handle('setCardType'));
    expiryFilters = [
      function(val) {
        return val.replace(/(\s+)/g, '');
      }
    ];
    expiryFilters.push(this.validToggler('cardExpiry'));
    bindVal(this.$expiryInput, this.$expiryDisplay, {
      join: function(text) {
        if (text[0].length === 2 || text[1]) {
          return "/";
        } else {
          return "";
        }
      },
      filters: expiryFilters
    });
    bindVal(this.$cvcInput, this.$cvcDisplay, {
      filters: this.validToggler('cardCVC')
    });
    QJ.on(this.$cvcInput, 'focus', this.handle('flipCard'));
    QJ.on(this.$cvcInput, 'blur', this.handle('unflipCard'));
    return bindVal(this.$nameInput, this.$nameDisplay, {
      fill: false,
      filters: this.validToggler('cardHolderName'),
      join: ' '
    });
  };

  Card.prototype.handleInitialPlaceholders = function() {
    var el, name, ref, results, selector;
    ref = this.options.formSelectors;
    results = [];
    for (name in ref) {
      selector = ref[name];
      el = this["$" + name];
      if (QJ.val(el)) {
        QJ.trigger(el, 'paste');
        results.push(setTimeout(function() {
          return QJ.trigger(el, 'keyup');
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Card.prototype.handle = function(fn) {
    return (function(_this) {
      return function(e) {
        var args;
        args = Array.prototype.slice.call(arguments);
        args.unshift(e.target);
        return _this.handlers[fn].apply(_this, args);
      };
    })(this);
  };

  Card.prototype.validToggler = function(validatorName) {
    var isValid;
    if (validatorName === "cardExpiry") {
      isValid = function(val) {
        var objVal;
        objVal = Payment.fns.cardExpiryVal(val);
        return Payment.fns.validateCardExpiry(objVal.month, objVal.year);
      };
    } else if (validatorName === "cardCVC") {
      isValid = (function(_this) {
        return function(val) {
          return Payment.fns.validateCardCVC(val, _this.cardType);
        };
      })(this);
    } else if (validatorName === "cardNumber") {
      isValid = function(val) {
        return Payment.fns.validateCardNumber(val);
      };
    } else if (validatorName === "cardHolderName") {
      isValid = function(val) {
        return val !== "";
      };
    }
    return (function(_this) {
      return function(val, $in, $out) {
        var result;
        result = isValid(val);
        _this.toggleValidClass($in, result);
        _this.toggleValidClass($out, result);
        return val;
      };
    })(this);
  };

  Card.prototype.toggleValidClass = function(el, test) {
    QJ.toggleClass(el, this.options.classes.valid, test);
    return QJ.toggleClass(el, this.options.classes.invalid, !test);
  };

  Card.prototype.handlers = {
    setCardType: function($el, e) {
      var cardType;
      cardType = e.data;
      if (!QJ.hasClass(this.$card, cardType)) {
        QJ.removeClass(this.$card, 'jp-card-unknown');
        QJ.removeClass(this.$card, this.cardTypes.join(' '));
        QJ.addClass(this.$card, "jp-card-" + cardType);
        QJ.toggleClass(this.$card, 'jp-card-identified', cardType !== 'unknown');
        return this.cardType = cardType;
      }
    },
    flipCard: function() {
      return QJ.addClass(this.$card, 'jp-card-flipped');
    },
    unflipCard: function() {
      return QJ.removeClass(this.$card, 'jp-card-flipped');
    }
  };

  bindVal = function(el, out, opts) {
    var joiner, o, outDefaults;
    if (opts == null) {
      opts = {};
    }
    opts.fill = opts.fill || false;
    opts.filters = opts.filters || [];
    if (!(opts.filters instanceof Array)) {
      opts.filters = [opts.filters];
    }
    opts.join = opts.join || "";
    if (!(typeof opts.join === "function")) {
      joiner = opts.join;
      opts.join = function() {
        return joiner;
      };
    }
    outDefaults = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = out.length; j < len; j++) {
        o = out[j];
        results.push(o.textContent);
      }
      return results;
    })();
    QJ.on(el, 'focus', function() {
      return QJ.addClass(out, 'jp-card-focused');
    });
    QJ.on(el, 'blur', function() {
      return QJ.removeClass(out, 'jp-card-focused');
    });
    QJ.on(el, 'keyup change paste', function(e) {
      var elem, filter, i, j, join, k, len, len1, outEl, outVal, ref, results, val;
      val = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = el.length; j < len; j++) {
          elem = el[j];
          results.push(QJ.val(elem));
        }
        return results;
      })();
      join = opts.join(val);
      val = val.join(join);
      if (val === join) {
        val = "";
      }
      ref = opts.filters;
      for (j = 0, len = ref.length; j < len; j++) {
        filter = ref[j];
        val = filter(val, el, out);
      }
      results = [];
      for (i = k = 0, len1 = out.length; k < len1; i = ++k) {
        outEl = out[i];
        if (opts.fill) {
          outVal = val + outDefaults[i].substring(val.length);
        } else {
          outVal = val || outDefaults[i];
        }
        results.push(outEl.textContent = outVal);
      }
      return results;
    });
    return el;
  };

  return Card;

})();

module.exports = Card;

global.Card = Card;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../scss/card.scss":9,"node.extend":1,"payment/src/payment":4,"qj/src/qj.coffee":5}],9:[function(_dereq_,module,exports){
module.exports = _dereq_('sassify')('.jp-card.jp-card-safari.jp-card-identified .jp-card-front:before, .jp-card.jp-card-safari.jp-card-identified .jp-card-back:before {   background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);   background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }  .jp-card.jp-card-ie-10.jp-card-flipped, .jp-card.jp-card-ie-11.jp-card-flipped {   -webkit-transform: 0deg;   -moz-transform: 0deg;   -ms-transform: 0deg;   -o-transform: 0deg;   transform: 0deg; }   .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-front, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-front {     -webkit-transform: rotateY(0deg);     -moz-transform: rotateY(0deg);     -ms-transform: rotateY(0deg);     -o-transform: rotateY(0deg);     transform: rotateY(0deg); }   .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back {     -webkit-transform: rotateY(0deg);     -moz-transform: rotateY(0deg);     -ms-transform: rotateY(0deg);     -o-transform: rotateY(0deg);     transform: rotateY(0deg); }     .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back:after {       left: 18%; }     .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-cvc, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-cvc {       -webkit-transform: rotateY(180deg);       -moz-transform: rotateY(180deg);       -ms-transform: rotateY(180deg);       -o-transform: rotateY(180deg);       transform: rotateY(180deg);       left: 5%; }     .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny {       left: 84%; }       .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny:after {         left: -480%;         -webkit-transform: rotateY(180deg);         -moz-transform: rotateY(180deg);         -ms-transform: rotateY(180deg);         -o-transform: rotateY(180deg);         transform: rotateY(180deg); }  .jp-card.jp-card-ie-10.jp-card-amex .jp-card-back, .jp-card.jp-card-ie-11.jp-card-amex .jp-card-back {   display: none; }  .jp-card-logo {   height: 36px;   width: 60px;   font-style: italic; }   .jp-card-logo, .jp-card-logo:before, .jp-card-logo:after {     box-sizing: border-box; }  .jp-card-logo.jp-card-amex {   text-transform: uppercase;   font-size: 4px;   font-weight: bold;   color: white;   background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);   background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);   border: 1px solid #EEE; }   .jp-card-logo.jp-card-amex:before, .jp-card-logo.jp-card-amex:after {     width: 28px;     display: block;     position: absolute;     left: 16px; }   .jp-card-logo.jp-card-amex:before {     height: 28px;     content: "american";     top: 3px;     text-align: left;     padding-left: 2px;     padding-top: 11px;     background: #267AC3; }   .jp-card-logo.jp-card-amex:after {     content: "express";     bottom: 11px;     text-align: right;     padding-right: 2px; }  .jp-card.jp-card-amex.jp-card-flipped {   -webkit-transform: none;   -moz-transform: none;   -ms-transform: none;   -o-transform: none;   transform: none; }  .jp-card.jp-card-amex.jp-card-identified .jp-card-front:before, .jp-card.jp-card-amex.jp-card-identified .jp-card-back:before {   background-color: #108168; }  .jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-logo.jp-card-amex {   opacity: 1; }  .jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-cvc {   visibility: visible; }  .jp-card.jp-card-amex.jp-card-identified .jp-card-front:after {   opacity: 1; }  .jp-card-logo.jp-card-discover {   background: #FF6600;   color: #111;   text-transform: uppercase;   font-style: normal;   font-weight: bold;   font-size: 10px;   text-align: center;   overflow: hidden;   z-index: 1;   padding-top: 9px;   letter-spacing: .03em;   border: 1px solid #EEE; }   .jp-card-logo.jp-card-discover:before, .jp-card-logo.jp-card-discover:after {     content: " ";     display: block;     position: absolute; }   .jp-card-logo.jp-card-discover:before {     background: white;     width: 200px;     height: 200px;     border-radius: 200px;     bottom: -5%;     right: -80%;     z-index: -1; }   .jp-card-logo.jp-card-discover:after {     width: 8px;     height: 8px;     border-radius: 4px;     top: 10px;     left: 27px;     background-color: #FF6600;     background-image: -webkit-radial-gradient(#FF6600, #fff);     background-image: radial-gradient(  #FF6600, #fff);     content: "network";     font-size: 4px;     line-height: 24px;     text-indent: -7px; }  .jp-card .jp-card-front .jp-card-logo.jp-card-discover {   right: 12%;   top: 18%; }  .jp-card.jp-card-discover.jp-card-identified .jp-card-front:before, .jp-card.jp-card-discover.jp-card-identified .jp-card-back:before {   background-color: #86B8CF; }  .jp-card.jp-card-discover.jp-card-identified .jp-card-logo.jp-card-discover {   opacity: 1; }  .jp-card.jp-card-discover.jp-card-identified .jp-card-front:after {   -webkit-transition: 400ms;   -moz-transition: 400ms;   transition: 400ms;   content: " ";   display: block;   background-color: #FF6600;   background-image: -webkit-linear-gradient(#FF6600, #ffa366, #FF6600);   background-image: linear-gradient(#FF6600, #ffa366, #FF6600);   height: 50px;   width: 50px;   border-radius: 25px;   position: absolute;   left: 100%;   top: 15%;   margin-left: -25px;   box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5); }  .jp-card-logo.jp-card-visa {   background: white;   text-transform: uppercase;   color: #1A1876;   text-align: center;   font-weight: bold;   font-size: 15px;   line-height: 18px; }   .jp-card-logo.jp-card-visa:before, .jp-card-logo.jp-card-visa:after {     content: " ";     display: block;     width: 100%;     height: 25%; }   .jp-card-logo.jp-card-visa:before {     background: #1A1876; }   .jp-card-logo.jp-card-visa:after {     background: #E79800; }  .jp-card.jp-card-visa.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visa.jp-card-identified .jp-card-back:before {   background-color: #191278; }  .jp-card.jp-card-visa.jp-card-identified .jp-card-logo.jp-card-visa {   opacity: 1; }  .jp-card-logo.jp-card-mastercard {   color: white;   font-weight: bold;   text-align: center;   font-size: 9px;   line-height: 36px;   z-index: 1;   text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }   .jp-card-logo.jp-card-mastercard:before, .jp-card-logo.jp-card-mastercard:after {     content: " ";     display: block;     width: 36px;     top: 0;     position: absolute;     height: 36px;     border-radius: 18px; }   .jp-card-logo.jp-card-mastercard:before {     left: 0;     background: #FF0000;     z-index: -1; }   .jp-card-logo.jp-card-mastercard:after {     right: 0;     background: #FFAB00;     z-index: -2; }  .jp-card.jp-card-mastercard.jp-card-identified .jp-card-front .jp-card-logo.jp-card-mastercard, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back .jp-card-logo.jp-card-mastercard {   box-shadow: none; }  .jp-card.jp-card-mastercard.jp-card-identified .jp-card-front:before, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back:before {   background-color: #0061A8; }  .jp-card.jp-card-mastercard.jp-card-identified .jp-card-logo.jp-card-mastercard {   opacity: 1; }  .jp-card-logo.jp-card-maestro {   color: white;   font-weight: bold;   text-align: center;   font-size: 14px;   line-height: 36px;   z-index: 1;   text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }   .jp-card-logo.jp-card-maestro:before, .jp-card-logo.jp-card-maestro:after {     content: " ";     display: block;     width: 36px;     top: 0;     position: absolute;     height: 36px;     border-radius: 18px; }   .jp-card-logo.jp-card-maestro:before {     left: 0;     background: #0064CB;     z-index: -1; }   .jp-card-logo.jp-card-maestro:after {     right: 0;     background: #CC0000;     z-index: -2; }  .jp-card.jp-card-maestro.jp-card-identified .jp-card-front .jp-card-logo.jp-card-maestro, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back .jp-card-logo.jp-card-maestro {   box-shadow: none; }  .jp-card.jp-card-maestro.jp-card-identified .jp-card-front:before, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back:before {   background-color: #0B2C5F; }  .jp-card.jp-card-maestro.jp-card-identified .jp-card-logo.jp-card-maestro {   opacity: 1; }  .jp-card-logo.jp-card-dankort {   width: 60px;   height: 36px;   padding: 3px;   border-radius: 8px;   border: #000000 1px solid;   background-color: #FFFFFF; }   .jp-card-logo.jp-card-dankort .dk {     position: relative;     width: 100%;     height: 100%;     overflow: hidden; }     .jp-card-logo.jp-card-dankort .dk:before {       background-color: #ED1C24;       content: \'\';       position: absolute;       width: 100%;       height: 100%;       display: block;       border-radius: 6px; }     .jp-card-logo.jp-card-dankort .dk:after {       content: \'\';       position: absolute;       top: 50%;       margin-top: -7.7px;       right: 0;       width: 0;       height: 0;       border-style: solid;       border-width: 7px 7px 10px 0;       border-color: transparent #ED1C24 transparent transparent;       z-index: 1; }   .jp-card-logo.jp-card-dankort .d, .jp-card-logo.jp-card-dankort .k {     position: absolute;     top: 50%;     width: 50%;     display: block;     height: 15.4px;     margin-top: -7.7px;     background: white; }   .jp-card-logo.jp-card-dankort .d {     left: 0;     border-radius: 0 8px 10px 0; }     .jp-card-logo.jp-card-dankort .d:before {       content: \'\';       position: absolute;       top: 50%;       left: 50%;       display: block;       background: #ED1C24;       border-radius: 2px 4px 6px 0px;       height: 5px;       width: 7px;       margin: -3px 0 0 -4px; }   .jp-card-logo.jp-card-dankort .k {     right: 0; }     .jp-card-logo.jp-card-dankort .k:before, .jp-card-logo.jp-card-dankort .k:after {       content: \'\';       position: absolute;       right: 50%;       width: 0;       height: 0;       border-style: solid;       margin-right: -1px; }     .jp-card-logo.jp-card-dankort .k:before {       top: 0;       border-width: 8px 5px 0 0;       border-color: #ED1C24 transparent transparent transparent; }     .jp-card-logo.jp-card-dankort .k:after {       bottom: 0;       border-width: 0 5px 8px 0;       border-color: transparent transparent #ED1C24 transparent; }  .jp-card.jp-card-dankort.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dankort.jp-card-identified .jp-card-back:before {   background-color: #0055C7; }  .jp-card.jp-card-dankort.jp-card-identified .jp-card-logo.jp-card-dankort {   opacity: 1; }  .jp-card-logo.jp-card-elo {   height: 50px;   width: 50px;   border-radius: 100%;   background: black;   color: white;   text-align: center;   text-transform: lowercase;   font-size: 21px;   font-style: normal;   letter-spacing: 1px;   font-weight: bold;   padding-top: 13px; }   .jp-card-logo.jp-card-elo .e, .jp-card-logo.jp-card-elo .l, .jp-card-logo.jp-card-elo .o {     display: inline-block;     position: relative; }   .jp-card-logo.jp-card-elo .e {     -webkit-transform: rotate(-15deg);     -moz-transform: rotate(-15deg);     -ms-transform: rotate(-15deg);     -o-transform: rotate(-15deg);     transform: rotate(-15deg); }   .jp-card-logo.jp-card-elo .o {     position: relative;     display: inline-block;     width: 12px;     height: 12px;     right: 0;     top: 7px;     border-radius: 100%;     background-image: -webkit-linear-gradient( yellow 50%, red 50%);     background-image: linear-gradient( yellow 50%, red 50%);     -webkit-transform: rotate(40deg);     -moz-transform: rotate(40deg);     -ms-transform: rotate(40deg);     -o-transform: rotate(40deg);     transform: rotate(40deg);     text-indent: -9999px; }     .jp-card-logo.jp-card-elo .o:before {       content: "";       position: absolute;       width: 49%;       height: 49%;       background: black;       border-radius: 100%;       text-indent: -99999px;       top: 25%;       left: 25%; }  .jp-card.jp-card-elo.jp-card-identified .jp-card-front:before, .jp-card.jp-card-elo.jp-card-identified .jp-card-back:before {   background-color: #6F6969; }  .jp-card.jp-card-elo.jp-card-identified .jp-card-logo.jp-card-elo {   opacity: 1; }  .jp-card-container {   -webkit-perspective: 1000px;   -moz-perspective: 1000px;   perspective: 1000px;   width: 350px;   max-width: 100%;   height: 200px;   margin: auto;   z-index: 1;   position: relative; }  .jp-card {   font-family: "Helvetica Neue";   line-height: 1;   position: relative;   width: 100%;   height: 100%;   min-width: 315px;   border-radius: 10px;   -webkit-transform-style: preserve-3d;   -moz-transform-style: preserve-3d;   -ms-transform-style: preserve-3d;   -o-transform-style: preserve-3d;   transform-style: preserve-3d;   -webkit-transition: all 400ms linear;   -moz-transition: all 400ms linear;   transition: all 400ms linear; }   .jp-card > *, .jp-card > *:before, .jp-card > *:after {     -moz-box-sizing: border-box;     -webkit-box-sizing: border-box;     box-sizing: border-box;     font-family: inherit; }   .jp-card.jp-card-flipped {     -webkit-transform: rotateY(180deg);     -moz-transform: rotateY(180deg);     -ms-transform: rotateY(180deg);     -o-transform: rotateY(180deg);     transform: rotateY(180deg); }   .jp-card .jp-card-front, .jp-card .jp-card-back {     -webkit-backface-visibility: hidden;     backface-visibility: hidden;     -webkit-transform-style: preserve-3d;     -moz-transform-style: preserve-3d;     -ms-transform-style: preserve-3d;     -o-transform-style: preserve-3d;     transform-style: preserve-3d;     -webkit-transition: all 400ms linear;     -moz-transition: all 400ms linear;     transition: all 400ms linear;     width: 100%;     height: 100%;     position: absolute;     top: 0;     left: 0;     overflow: hidden;     border-radius: 10px;     background: #DDD; }     .jp-card .jp-card-front:before, .jp-card .jp-card-back:before {       content: " ";       display: block;       position: absolute;       width: 100%;       height: 100%;       top: 0;       left: 0;       opacity: 0;       border-radius: 10px;       -webkit-transition: all 400ms ease;       -moz-transition: all 400ms ease;       transition: all 400ms ease; }     .jp-card .jp-card-front:after, .jp-card .jp-card-back:after {       content: " ";       display: block; }     .jp-card .jp-card-front .jp-card-display, .jp-card .jp-card-back .jp-card-display {       color: white;       font-weight: normal;       opacity: 0.5;       -webkit-transition: opacity 400ms linear;       -moz-transition: opacity 400ms linear;       transition: opacity 400ms linear; }       .jp-card .jp-card-front .jp-card-display.jp-card-focused, .jp-card .jp-card-back .jp-card-display.jp-card-focused {         opacity: 1;         font-weight: 700; }     .jp-card .jp-card-front .jp-card-cvc, .jp-card .jp-card-back .jp-card-cvc {       font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;       font-size: 14px; }     .jp-card .jp-card-front .jp-card-shiny, .jp-card .jp-card-back .jp-card-shiny {       width: 50px;       height: 35px;       border-radius: 5px;       background: #CCC;       position: relative; }       .jp-card .jp-card-front .jp-card-shiny:before, .jp-card .jp-card-back .jp-card-shiny:before {         content: " ";         display: block;         width: 70%;         height: 60%;         border-top-right-radius: 5px;         border-bottom-right-radius: 5px;         background: #d9d9d9;         position: absolute;         top: 20%; }   .jp-card .jp-card-front .jp-card-logo {     position: absolute;     opacity: 0;     right: 5%;     top: 8%;     -webkit-transition: 400ms;     -moz-transition: 400ms;     transition: 400ms; }   .jp-card .jp-card-front .jp-card-lower {     width: 80%;     position: absolute;     left: 10%;     bottom: 30px; }     @media only screen and (max-width: 480px) {       .jp-card .jp-card-front .jp-card-lower {         width: 90%;         left: 5%; } }     .jp-card .jp-card-front .jp-card-lower .jp-card-cvc {       visibility: hidden;       float: right;       position: relative;       bottom: 5px; }     .jp-card .jp-card-front .jp-card-lower .jp-card-number {       font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;       font-size: 24px;       clear: both;       margin-bottom: 30px; }     .jp-card .jp-card-front .jp-card-lower .jp-card-expiry {       font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;       letter-spacing: 0em;       position: relative;       float: right;       width: 25%; }       .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before, .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {         font-family: "Helvetica Neue";         font-weight: bold;         font-size: 7px;         white-space: pre;         display: block;         opacity: .5; }       .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before {         content: attr(data-before);         margin-bottom: 2px;         font-size: 7px;         text-transform: uppercase; }       .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {         position: absolute;         content: attr(data-after);         text-align: right;         right: 100%;         margin-right: 5px;         margin-top: 2px;         bottom: 0; }     .jp-card .jp-card-front .jp-card-lower .jp-card-name {       text-transform: uppercase;       font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;       font-size: 20px;       max-height: 45px;       position: absolute;       bottom: 0;       width: 190px;       display: -webkit-box;       -webkit-line-clamp: 2;       -webkit-box-orient: horizontal;       overflow: hidden;       text-overflow: ellipsis; }   .jp-card .jp-card-back {     -webkit-transform: rotateY(180deg);     -moz-transform: rotateY(180deg);     -ms-transform: rotateY(180deg);     -o-transform: rotateY(180deg);     transform: rotateY(180deg); }     .jp-card .jp-card-back .jp-card-bar {       background-color: #444;       background-image: -webkit-linear-gradient(#444, #333);       background-image: linear-gradient(#444, #333);       width: 100%;       height: 20%;       position: absolute;       top: 10%; }     .jp-card .jp-card-back:after {       content: " ";       display: block;       background-color: #FFF;       background-image: -webkit-linear-gradient(#FFF, #FFF);       background-image: linear-gradient(#FFF, #FFF);       width: 80%;       height: 16%;       position: absolute;       top: 40%;       left: 2%; }     .jp-card .jp-card-back .jp-card-cvc {       position: absolute;       top: 40%;       left: 85%;       -webkit-transition-delay: 600ms;       -moz-transition-delay: 600ms;       transition-delay: 600ms; }     .jp-card .jp-card-back .jp-card-shiny {       position: absolute;       top: 66%;       left: 2%; }       .jp-card .jp-card-back .jp-card-shiny:after {         content: "This card has been issued by Jesse Pollak and is licensed for anyone to use anywhere for free.\AIt comes with no warranty.\A For support issues, please visit: github.com/jessepollak/card.";         position: absolute;         left: 120%;         top: 5%;         color: white;         font-size: 7px;         width: 230px;         opacity: .5; }   .jp-card.jp-card-identified {     box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }     .jp-card.jp-card-identified .jp-card-front, .jp-card.jp-card-identified .jp-card-back {       background-color: #000;       background-color: rgba(0, 0, 0, 0.5); }       .jp-card.jp-card-identified .jp-card-front:before, .jp-card.jp-card-identified .jp-card-back:before {         -webkit-transition: all 400ms ease;         -moz-transition: all 400ms ease;         transition: all 400ms ease;         background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);         background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);         opacity: 1; }       .jp-card.jp-card-identified .jp-card-front .jp-card-logo, .jp-card.jp-card-identified .jp-card-back .jp-card-logo {         box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); }     .jp-card.jp-card-identified.no-radial-gradient .jp-card-front:before, .jp-card.jp-card-identified.no-radial-gradient .jp-card-back:before {       background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);       background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); } ');;
},{"sassify":6}]},{},[8])(8)
});

/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});

/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.1.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n,e.addEventListener("click",function(n){n.preventDefault();var a=e.href.split("#")[1],l=i.content_.querySelector("#"+a);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),l.classList.add(i.CssClasses_.IS_ACTIVE)})}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<h.length;s++)if(h[s].className===e)return"undefined"!=typeof t&&(h[s]=t),h[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return-1!==i.indexOf(s)}function i(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var a=0;a<h.length;a++)i(h[a].className,h[a].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)n(r[_],l)}}function n(i,n){if(!("object"==typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=t(i),l=[];if(n)s(i,n)||l.push(e(n));else{var o=i.classList;h.forEach(function(e){o.contains(e.cssClass)&&-1===l.indexOf(e)&&!s(i,e.className)&&l.push(e)})}for(var r,_=0,d=l.length;d>_;_++){if(r=l[_],!r)throw new Error("Unable to find a registered component for the given class.");a.push(r.className),i.setAttribute("data-upgraded",a.join(","));var C=new r.classConstructor(i);C[p]=r,c.push(C);for(var u=0,E=r.callbacks.length;E>u;u++)r.callbacks[u](i);r.widget&&(i[r.className]=C);var m=document.createEvent("Events");m.initEvent("mdl-componentupgraded",!0,!0),i.dispatchEvent(m)}}function a(e){Array.isArray(e)||(e="function"==typeof e.item?Array.prototype.slice.call(e):[e]);for(var t,s=0,i=e.length;i>s;s++)t=e[s],t instanceof HTMLElement&&(n(t),t.children.length>0&&a(t.children))}function l(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(h.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(p))throw new Error("MDL component classes must not have "+p+" defined as a property.");var a=e(t.classAsString,n);a||h.push(n)}function o(t,s){var i=e(t);i&&i.callbacks.push(s)}function r(){for(var e=0;e<h.length;e++)i(h[e].className)}function _(e){var t=c.indexOf(e);c.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),i=s.indexOf(e[p].classAsString);s.splice(i,1),e.element_.setAttribute("data-upgraded",s.join(","));var n=document.createEvent("Events");n.initEvent("mdl-componentdowngraded",!0,!0),e.element_.dispatchEvent(n)}function d(e){var t=function(e){c.filter(function(t){return t.element_===e}).forEach(_)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var h=[],c=[],p="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:n,upgradeElements:a,upgradeAllRegistered:r,registerUpgradedCallback:o,register:l,downgradeElements:d}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.updateClasses_()},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.updateClasses_()},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,
this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,0>i+a?(this.element_.style.top=0,this.element_.style.marginTop=0):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):0>s+n?(this.element_.style.left=0,this.element_.style.marginLeft=0):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.handleMouseLeave_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveHandler=this.handleMouseLeave_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveHandler,!1),window.addEventListener("touchstart",this.boundMouseLeaveHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)||(this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)))},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_);for(var s=this.element_.childNodes,i=s.length,n=0;i>n;n++){var a=s[n];a.classList&&a.classList.contains(this.CssClasses_.HEADER)&&(this.header_=a),a.classList&&a.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=a),a.classList&&a.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=a)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var l=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?l=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(l=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(l=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),l===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.SEAMED||l===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var o=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!o){o=document.createElement("div"),o.setAttribute("aria-expanded","false"),o.setAttribute("role","button"),o.setAttribute("tabindex","0"),o.classList.add(this.CssClasses_.DRAWER_BTN);var r=document.createElement("i");r.classList.add(this.CssClasses_.ICON),r.innerHTML=this.Constant_.MENU_ICON,o.appendChild(r)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?o.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&o.classList.add(this.CssClasses_.ON_SMALL_SCREEN),o.addEventListener("click",this.drawerToggleHandler_.bind(this)),o.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(o,this.header_.firstChild):this.element_.insertBefore(o,this.content_);var _=document.createElement("div");_.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(_),_.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=_,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var d=document.createElement("div");d.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(d,this.tabBar_),this.header_.removeChild(this.tabBar_);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_BAR_BUTTON),h.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var c=document.createElement("i");c.classList.add(this.CssClasses_.ICON),c.textContent=this.Constant_.CHEVRON_LEFT,h.appendChild(c),h.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var p=document.createElement("div");p.classList.add(this.CssClasses_.TAB_BAR_BUTTON),p.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var C=document.createElement("i");C.classList.add(this.CssClasses_.ICON),C.textContent=this.Constant_.CHEVRON_RIGHT,p.appendChild(C),p.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),d.appendChild(h),d.appendChild(this.tabBar_),d.appendChild(p);var u=function(){this.tabBar_.scrollLeft>0?h.classList.add(this.CssClasses_.IS_ACTIVE):h.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?p.classList.add(this.CssClasses_.IS_ACTIVE):p.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",u),u(),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var E=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),m=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),L=0;L<E.length;L++)new t(E[L],E,m,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var y=function(e){this.element_=e,this.init()};window.MaterialRipple=y,y.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},y.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},y.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},y.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},y.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:y,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map

/*jquery.mb.YTPlayer 16-10-2015
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.9.5",build:"{{ build }}",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(a){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filtersEnabled=!0,YTPlayer.filters={grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options,property)),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.6*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),jQuery.mbYTPlayer.checkForState(YTPlayer);var b=jQuery.Event("YTPUnstarted");b.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(b)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}})}}))})}})},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.dataReceived=!0,jQuery(a).trigger("YTPChanged");var b=jQuery.Event("YTPData");b.prop={};for(var c in a.videoData)b.prop[c]=a.videoData[c];jQuery(a).trigger(b)},500),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0,jQuery(a).trigger("YTPChanged"),c(b.items[0].snippet),a.hasData=!0;var d=jQuery.Event("YTPData");d.prop={};for(var e in a.videoData)d.prop[e]=a.videoData[e];jQuery(a).trigger(d)});else{if(setTimeout(function(){jQuery(a).trigger("YTPChanged")},50),a.isPlayer&&!a.opt.autoPlay){var b=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/hqdefault.jpg";a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).one("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),d},playNext:function(){var a=this.get(0);return a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,b.hasData=!1,b.hasChanged=!0,a&&jQuery.extend(b.opt,b.defaultOpt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b.playerEl).CSSAnimate({opacity:0},200,function(){return jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,b.opt.quality),jQuery.mbYTPlayer.checkForState(b),jQuery(b).optimizeDisplay(),jQuery.mbYTPlayer.getDataFromAPI(b),this})},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;return b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(a.isReady){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),jQuery(a).css("background-image","none"),this}},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo(),this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},applyFilter:function(a,b){var c=this.get(0);return c.filters[a].value=b,c.filtersEnabled&&this.YTPEnableFilters(),this},applyFilters:function(a){var b=this.get(0);return this.on("YTPReady",function(){for(var c in a)b.filters[c].value=a[c],jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")}),this},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){"function"==typeof a&&(b=a,a=null);var c=this;if(a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,void jQuery(YTPlayer).trigger(YTPEnd)}data.loop?(startAt=startAt||1,YTPlayer.player.pauseVideo(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground||YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})}))}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(jQuery.browser.chrome&&(a.opt.quality="default"),a.player.pauseVideo(),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});a.checkForStartAt=setInterval(function(){jQuery(a).YTPMute();var c=a.opt.startAt?a.opt.startAt:1,d=a.player.getVideoLoadedFraction()>c/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=c&&d){clearInterval(a.checkForStartAt),a.isReady=!0,"function"==typeof a.opt.onReady&&a.opt.onReady(a);var e=jQuery.Event("YTPReady");jQuery(a).trigger(e),a.player.pauseVideo(),a.opt.mute||jQuery(a).YTPUnmute(),a.canTrigger=!0,a.opt.autoPlay?(b.YTPPlay(),b.css("background-image","none"),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3)):(a.player.pauseVideo(),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3))),a.isPlayer&&!a.opt.autoPlay&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.slideDown(1e3)}else c>=0&&a.player.seekTo(c,!0)},1e3)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),
"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id);var o=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=o,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),!function(a){/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var b="ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1;a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b?"touchstart":"mousedown",end:b?"touchend":"mouseup",move:b?"touchmove":"mousemove"},init:function(c){return this.each(function(){var d=this,e=a(d);e.addClass("simpleSlider"),d.opt={},a.extend(d.opt,a.simpleSlider.defaults,c),a.extend(d.opt,e.data());var f="h"==d.opt.orientation?"horizontal":"vertical",g=a("<div/>").addClass("level").addClass(f);e.prepend(g),d.level=g,e.css({cursor:"default"}),"auto"==d.opt.scale&&(d.opt.scale=a(d).outerWidth()),e.updateSliderVal(),d.opt.readonly||(e.on(a.simpleSlider.events.start,function(a){b&&(a=a.changedTouches[0]),d.canSlide=!0,e.updateSliderVal(a),e.css({cursor:"col-resize"}),a.preventDefault(),a.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(c){b&&(c=c.changedTouches[0]),d.canSlide&&(a(document).css({cursor:"default"}),e.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),d.canSlide=!1,e.css({cursor:"auto"})}))})},updateSliderVal:function(b){function c(a,b){return Math.floor(100*a/b)}var d=this,e=d.get(0);e.opt.initialval="number"==typeof e.opt.initialval?e.opt.initialval:e.opt.initialval(e);var f=a(e).outerWidth(),g=a(e).outerHeight();e.x="object"==typeof b?b.clientX+document.body.scrollLeft-d.offset().left:"number"==typeof b?b*f/e.opt.scale:e.opt.initialval*f/e.opt.scale,e.y="object"==typeof b?b.clientY+document.body.scrollTop-d.offset().top:"number"==typeof b?(e.opt.scale-e.opt.initialval-b)*g/e.opt.scale:e.opt.initialval*g/e.opt.scale,e.y=d.outerHeight()-e.y,e.scaleX=e.x*e.opt.scale/f,e.scaleY=e.y*e.opt.scale/g,e.outOfRangeX=e.scaleX>e.opt.scale?e.scaleX-e.opt.scale:e.scaleX<0?e.scaleX:0,e.outOfRangeY=e.scaleY>e.opt.scale?e.scaleY-e.opt.scale:e.scaleY<0?e.scaleY:0,e.outOfRange="h"==e.opt.orientation?e.outOfRangeX:e.outOfRangeY,e.value="undefined"!=typeof b?"h"==e.opt.orientation?e.x>=d.outerWidth()?e.opt.scale:e.x<=0?0:e.scaleX:e.y>=d.outerHeight()?e.opt.scale:e.y<=0?0:e.scaleY:"h"==e.opt.orientation?e.scaleX:e.scaleY,"h"==e.opt.orientation?e.level.width(c(e.x,f)+"%"):e.level.height(c(e.y,g)),"function"==typeof e.opt.callback&&e.opt.callback(e)}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var e,f=new Date;f.setTime(f.getTime()+864e5*c),e="; expires="+f.toGMTString(),document.cookie=a+"="+b+e+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);

View('account nav', function() {
    var view = View({ tag: 'a' })
        .bem('mdl navigation', 'link')
        .click(function() {
            View('login modal').focus();
        });

    
    view.add('Login');

    return view;
});

View('material calendar control', function(firebase) {
	var base
	if(Is.str(firebase)) {
		base = firebase
	}else{
		base = 'https://tcal.firebaseio.com'
	}

	var view = View();

	var card = View('material card', {
		header: 'Filter Calendar',
		subtitle: 'Select the calendars you would like to display',
		padding: true,
	});

	var databank = New('calendarFirebase', base)


	var calendar = View('material calendar', {
		subscriptions: 'default', //Never remove the default calendar
		firebase: base
	});

	window.c = calendar


	databank.getCalendarList(function(list) {
		
		Each.value(list, function(c) {
			calendar.can.addSubscriptions(list)


			if(c != 'default') {
				var toggle = View('material checkbox', {
					text: c
				})
				toggle.setval(true)

				
				toggle.on('click', function() {
					if(toggle.val()) {
						calendar.can.addSubscriptions(c)
					}else{
						calendar.can.removeSubscriptions(c)
					}
				})
				card.can.add(toggle)
			}
			
		})
	})

	

	//card.can.add(toggle)

	view.add(card)


	

	view.add(calendar);

	return view;
})
/**
 * @view material calendar
 */
View('calendar', function() {
	var view = View().type('calendar');

	// Reference to the schedule object.
	view.can.schedule = null;

	var events = [];
	window.ee = events;

	$('[data-calendar-event]').each(function() {
		var e = {}, re;
		e.id = $(this).data('calendar-event');
		e.title = $(this).data('calendar-title') || $(this).data('title');
		e.start = $(this).data('start');
		e.end = $(this).data('end');
		e.color = $(this).data('color');
		e.url = $(this).data('url');
		//e.repeat = $(this).data('repeat');

		if ($(this).data('repeat')) {
			for (var o = 0 ; o < $(this).data('repeat') ; o++) {
				re = $.extend(true, {}, e);
				re.start = moment(re.start).add(o * 7, 'days');
				re.end = moment(re.end).add(o * 7, 'days');
				events.push(re);
			}
		}
		else events.push(e);
	});

	// When the calendar view is created, create the fullCalendar instance.
	view.on('birth', function() {
		window.calendar = view;

        view.$.fullCalendar({
        	// Header for the calendar controls
            header: {
				left: '',
                center: 'title',
				right: ''
            },

            // Option flags
            theme: true,
            selectable: true, //User.isAdmin(),
            selectHelper: true,
            displayEventEnd: true,
            editable: true, //User.isAdmin(),

            // Event adding callback
            events: function(start, end, timezone, callback) {
				Each.value(events, function(ev) {
					if (ev.start && ev.end && ev.start.isAfter(start) && ev.end.isBefore(end))
						view.$.fullCalendar('renderEvent', ev);
				});
            	// view.can.schedule = New('schedule', { start: start.valueOf(), end: end.valueOf() });
            	// view.can.schedule.onEvent(function(event) {
            	// 	view.$.fullCalendar('renderEvent', event);
            	// });
            },

            select: function(start, end) {
            	// if (start.valueOf() == view.can.selectStart &&
            	// 	new Date().getTime() - view.can.selectStartAtTime < 500) {
            	// 	view.can.createEvent();
            	// }
            	// view.can.selectStart = start.valueOf();
            	// view.can.selectStartAtTime = new Date().getTime();
            },

            eventDrop: function(event, delta, revertFunc) {
            	// var e = view.can.schedule.getEvent(event.id);
            	// console.log(delta.valueOf());
            	// e.changeTimeBy(delta.valueOf());

//                databank.editEvent(event.id, {
//                    start: event.start.format('YYYY-MM-DD HH:mm'),
//                    end: (Is.def(event.end))? event.end.format('YYYY-MM-DD HH:mm') : event.start.format('YYYY-MM-DD HH:mm')
//                })
            },

            eventClick: function(event) {
//             	if (event.id == view.can.selectEvent &&
//                 		new Date().getTime() - view.can.selectEventAtTime < 500) {
//             			view.can.editEvent(event);
//                 }
//             	view.can.selectEvent = event.id;
//                 view.can.selectEventAtTime = new Date().getTime();
//
//                 if (User.isAdmin()) {
// //                    databank.getDataForID(event.id, function(data) {
// //                        modal.show()
// //                        nextOneIsEdit = true
// //                        modal.add('delete', View('material button', {text:'Delete', color:'danger', block: true, size: 'lg'}).on('click', function() {
// //                            databank.deleteEvent(event.id);
// //                            view.can.reload()
// //                            modal.on('blur')
// //                        }))
// //                        modal.can.getReferenceToElementName('start').setval(event.start.format('YYYY-MM-DD HH:mm'))
// //                        modal.can.getReferenceToElementName('end').setval(Is.def(event.end)? event.end.format('YYYY-MM-DD HH:mm') : '')
// //                        modal.can.getReferenceToElementName('eventname').setval(event.title)
// //                        modal.can.getReferenceToElementName('allDay').setval(event.allDay)
// //                        modal.can.getReferenceToElementName('description').setval(data.description)
// //                        modal.can.getReferenceToElementName('calendar').can.hide()
// //                        modal.can.getReferenceToElementName('color').setval(data.className)
// //                        modal.can.getReferenceToElementName('repeats').can.hide()
// //                        nextOneIsEdit = event.id
// //                        console.log(nextOneIsEdit)
// //                    })
//                 } else {
//                     $('.fc-event').not(this).popover('hide')
//                 }
            },

            eventRender: function(event, element) {
//                 if(! User.isAdmin()) {
// //                    var buyID = randomString(10);
// //                    var dismissID = randomString(10);
// //                    if(event.id.split('/')[0] == 'default') {
// //                        element.popover({html:true,title:event.title,placement:'bottom',container:'body',
// //                        content:event.description + "<br/><br/>" + "<button style='color: grey' class='btn btn-link' id='" +
// //                        dismissID + "' onClick='On.broadcast(\"calendarPopoverDismiss\", \"" + dismissID +
// //                        "\")'>dismiss</button>"}).popover('show')
// //                    }else{
// //                        element.popover({html:true,title:event.title,placement:'bottom',container:'body',
// //                        content:event.description + "<br/><br/>" +"<button class='btn btn-success' id='" +
// //                        buyID + "' onClick='On.broadcast(\"calendarPopoverBuy\", \"" + buyID + "\")'>Add to cart</button>" +
// //                        "<button style='color: grey' class='btn btn-link' id='" + dismissID +
// //                        "' onClick='On.broadcast(\"calendarPopoverDismiss\", \"" + dismissID + "\")'>dismiss</button>"}).popover('show')
// //                    }
//                 }
            },

            eventMouseover: function(event) {
               // $(this).popover('show')
            },
            eventMouseout: function(event) {
               // $(this).popover('hide')
            }
        });

		// var renderEvents = function() {
		// 	$('[data-calendar-event]').each(function() {
		// 		var e = {}, re;
		// 		e.id = $(this).data('calendar-event');
		// 		e.title = $(this).data('title');
		// 		e.start = $(this).data('start');
		// 		e.end = $(this).data('end');
		// 		e.color = $(this).data('color');
		// 		e.url = $(this).data('url');
		// 		//e.repeat = $(this).data('repeat');
		//
		// 		if ($(this).data('repeat')) {
		// 			for (var o = 0 ; o < $(this).data('repeat') ; o++) {
		// 				re = $.extend({}, e);
		// 				re.start = moment(re.start).add(o * 7, 'days');
		// 				re.end = moment(re.end).add(o * 7, 'days');
		// 				view.$.fullCalendar('renderEvent', re);
		// 			}
		// 		}
		// 		else view.$.fullCalendar('renderEvent', e);
		// 	});
		// };
		//
		$('[data-calendar]').each(function() {
			var m = $(this).data('calendar');
			$(this).click(function() {
				view.$.fullCalendar('gotoDate', moment(m));
				renderEvents();
			});
		});

		//renderEvents();
	});
	return view;
})

$(document).ready(function() {
    $('.mdl-form .mdl-submit').click(function() {
        alert('test');
    });
});

$(document).ready(function() {
    $('[data-view]').each(function() {
        var viewName = $(this).data('view');
        $(this).replaceWith(View(viewName).$);
    });

});

View('modal', function() {
    var view = View().bem('mdl-modal', 'background');



    view.focus(function() {
        View('body').add()
    });

    view.blur(function() {
        
    });

    return view;
});