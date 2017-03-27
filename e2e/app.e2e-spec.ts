import { AppWebpackPage } from './app.po';

describe('app-webpack App', () => {
  let page: AppWebpackPage;

  beforeEach(() => {
    page = new AppWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
