describe('Tabs component', () => {
  it("shows 4 tabs Navigation", () => {
    const tabsComponent = jQuery(window.__html__['index.html']).find( 'input[name ="container__tab__radio"]' );

    assert.lengthOf(tabsComponent, 4)
  });

  it('should active first tab when view init', () => {
    const tabsComponent = jQuery(jQuery(window.__html__['index.html']).find( '#container__tab__radio-label-1' ))[0]

    expect(jQuery(tabsComponent).prop("checked")).be.true
  });
});
