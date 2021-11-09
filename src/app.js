import Autocomplete from './components/autocomplete';
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
<script type="module" src="app.js"></script>

const appId = 'YC29CWFP9Y';
const apiKey = 'da737da8bb556ef6e01f04538cc50f4d';
const searchClient = algoliasearch(appId, apiKey);


/*const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: 'test_PRODUCTS_query_suggestions',
    getSearchParams( { state } ) {
      return {
        hitsPerPage: state.query ? 5 : 10,
      };
    },
  });*/

  /*autocomplete({
    container: '.autocomplete',
    plugins: [querySuggestionsPlugin],
    openOnFocus: true

    
  });*/

  /*const search = instantsearch({
    indexName: 'test_PRODUCTS_query_suggestions',
    searchClient,
  });
  
  search.addWidgets([
    
    searchBox({
      container: "#searchbox"
    }),
  
    hits({
      container: "#hits"
    })
  ]);
  
  search.start();*/

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
  }

  _initSearch() {
   this.autocompleteDropdown = new Autocomplete();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');

    searchbox.addEventListener('click', () => {
      autocomplete.style.display = 'block';
    });

    searchbox.addEventListener('blur', () => {
      autocomplete.style.display = 'none';
    });
  }
}

const app = new SpencerAndWilliamsSearch();


