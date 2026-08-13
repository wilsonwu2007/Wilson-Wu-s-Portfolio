import { defineConfig } from 'astro/config';

const base = '/Wilson-Wu-s-Portfolio';

// Markdown images are referenced as root-relative paths (e.g. "/images/...")
// which only work when the site is hosted at the domain root. On GitHub
// Pages this site is hosted at a subpath (`base`), so this plugin rewrites
// any root-relative image URL in Markdown content to include that subpath.
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
	base: `${base}/`,
	markdown: {
		remarkPlugins: [remarkBaseImages],
	},
});
