import Autocomplete from './components/autocomplete';
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';


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


const appId = 'YC29CWFP9Y';
const apiKey = 'da737da8bb556ef6e01f04538cc50f4d';
const searchClient = algoliasearch(appId, apiKey);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: 'instant_search_demo_query_suggestions',
});

autocomplete({
  container: '#autocomplete',
  plugins: [querySuggestionsPlugin],
  openOnFocus: true,
});
