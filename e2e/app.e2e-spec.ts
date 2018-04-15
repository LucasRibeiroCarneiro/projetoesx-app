import { ProjetoesxAppPage } from './app.po';

describe('projetoesx-app App', function() {
  let page: ProjetoesxAppPage;

  beforeEach(() => {
    page = new ProjetoesxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
