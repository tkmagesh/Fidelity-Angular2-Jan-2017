import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Angular';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should display the message when greeted', function(){
  	var txtName = element(by.css("#txtName"));
  	txtName.sendKeys('Magesh');

  	var btn = element(by.buttonText('Greet'));
  	btn.click();

  	var div = element(by.css("div"));
  	console.log(div.getText());
  	expect(div.getText()).toBe(`Hi Magesh, Have a nice day!`);
  });
});
