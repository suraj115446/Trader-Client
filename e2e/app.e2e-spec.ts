import { TraderUIPage } from './app.po';

describe('trader-ui App', () => {
  let page: TraderUIPage;

  beforeEach(() => {
    page = new TraderUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
