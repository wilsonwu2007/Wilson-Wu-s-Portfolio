import { defineConfig } from 'astro/config';

// This site is hosted at the domain root: the repository is named
// wilsonwu2007.github.io, which GitHub Pages treats as a user site and
// serves at https://wilsonwu2007.github.io/ directly (no subpath), unlike
// a regular project repo which would be served at a /repo-name/ subpath.
// `base` stays empty (Astro defaults to "/") so internal links and asset
// paths resolve correctly. If this site is ever moved back to a project
// repo hosted at a subpath, set base to that subpath here again.
const base = '';

// Markdown images are referenced as root-relative paths (e.g. "/images/...").
// This plugin would prefix them with `base` if one is set, so content
// authoring doesn't need to change even if the hosting subpath changes.
function remarkBaseImages() {
	return (tree) => {
		function visit(node) {
			if (
				node.type === 'image' &&
				typeof node.url === 'string' &&
				node.url.startsWith('/') &&
				!node.url.startsWith('//')
			) {
				node.url = base + node.url;
			}
			if (node.children) {
				node.children.forEach(visit);
			}
		}
		visit(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://wilsonwu2007.github.io',
	markdown: {
		remarkPlugins: [remarkBaseImages],
	},
});
