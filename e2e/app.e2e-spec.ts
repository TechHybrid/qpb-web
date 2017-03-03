import { QpbWebPage } from './app.po';

describe('qpb-web App', () => {
  let page: QpbWebPage;

  beforeEach(() => {
    page = new QpbWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
