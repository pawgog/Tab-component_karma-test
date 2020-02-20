describe('Tabs component', () => {
  it("shows 4 tabs Navigation", () => {
    const tabsComponent = jQuery(window.__html__['index.html']).find( 'input[name ="container__tab__radio"]' );

    assert.lengthOf(tabsComponent, 4)
  });
});
