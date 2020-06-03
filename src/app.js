/* global algoliasearch instantsearch */

const searchClient = algoliasearch('95HZZXC3SI', '87e85b8c8c79e8b86be58576229d0441');

const search = instantsearch({
  indexName: 'mbhackathon_API',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    searchAsYouType: true,
    placeholder: 'Search for a character, a place, or title, from the show'
  }),  
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
        <div class="hit-name">
        {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
        </div>
        <img src="{{image.medium}}" align="left" alt="{{name}}" />
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "summary" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.rangeSlider({
    container: '#range-slider',
    attribute: 'season',
    min: 1,
    max: 8,
    step: 1,
  }),
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  }),
  // instantsearch.widgets.refinementList({
  //   container: '#characters',
  //   attribute: '',
  //   operator: 'or',
  // }),  
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
