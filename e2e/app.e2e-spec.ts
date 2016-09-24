import { AngularCustomValidatorDemoPage } from './app.po';

describe('angular-custom-validator-demo App', function() {
  let page: AngularCustomValidatorDemoPage;

  beforeEach(() => {
    page = new AngularCustomValidatorDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
