import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

const globals = {
	'isomorphic-fetch': 'isomorphicFetch',
	'@gdwc/drupal-state': 'DrupalState',
};
const external = ['isomorphic-fetch', '@gdwc/drupal-state'];

/** @type {import('vite').defineConfig} */
export default defineConfig(() => {
	return {
		plugins: [dts({ insertTypesEntry: true })],
		build: {
			lib: {
				entry: './index.ts',
				name: 'drupal-kit',
				formats: ['umd', 'es'],
				fileName: (format) => `drupal-kit.${format}.js`,
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
		},
	};
});
