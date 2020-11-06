import { applyPolyfills, defineCustomElements } from 'img-comparison-slider/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});
