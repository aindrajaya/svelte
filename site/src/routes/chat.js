import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export function get(req, res) {
	res.writeHead(302, { Location: 'https://discord.gg/yy75DKs' });
	res.end();
}