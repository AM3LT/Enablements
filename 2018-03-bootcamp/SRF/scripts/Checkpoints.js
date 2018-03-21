var LFT = require('leanft');
var SDK = LFT.SDK;
var Web = LFT.Web;
var SAPUI5 = LFT.SAPUI5;
var whenDone = LFT.whenDone;
var verify = require('leanft/verify');

describe('demo',function(){
	var browser;
	var url="http://www.advantageonlineshopping.com/#/";
	var expectedPrice="1,279.00";
	

	before(function(done){
		LFT.init({});

		whenDone(done);
	});

	beforeEach(function(done){
		LFT.beforeTest();

		Web.Browser.launch(Web.BrowserType.Chrome).then(function(b){
			browser = b;
		});

		whenDone(done);
	});

	it('should work',function(done){
		browser.navigate(url);

		var tablets = browser.$(Web.Link({
				innerText: "TABLETS",
				tagName: "SPAN"
			}));
		tablets.click();

		var fetchimageimageId3200 = browser.$(Web.Image({
				alt: "",
				tagName: "IMG",
				type: "normal",
				index: 2
			}));

		var link = browser.$(Web.Element({
				innerText: "$1,279.00 ",
				tagName: "A"
			}));
		verify(link.innerText()).toContain(expectedPrice);

		link.click();

		var saveToCart = browser.$(Web.Button({
				buttonType: "submit",
				name: "ADD TO CART",
				tagName: "BUTTON"
			}));
		saveToCart.click();

/* <== Placeholder for next recorded step. Cut and paste this line to start recording from a different line in your code. Do not delete or duplicate this line.  ==> */

		whenDone(done);
	});

	afterEach(function(done){
		LFT.afterTest();

		if(browser){
			browser.close();
		}

		whenDone(done);
	});

	after(function(done){
		LFT.cleanup();

		whenDone(done);
	});
});
