/** Path with GitHub Pages base prefix (e.g. /karthik/) */
export function path(segment: string = ''): string {
	const base = import.meta.env.BASE_URL;
	const clean = segment.replace(/^\//, '');
	return clean ? `${base}${clean}` : base;
}
