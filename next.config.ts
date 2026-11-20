// Adapted from mars-workbench@3f741cc next.config.ts: no next-intl plugin, no
// /oauth headers, no local-Supabase guard (the site has no data layer).
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // `next dev` would otherwise append a managed block to AGENTS.md whenever an
  // agent starts it; its one rule (read the installed version's docs) lives in
  // AGENTS.md › Session start instead
  agentRules: false,
  // A stopgap: until the home page is built from its spec, "/" serves the
  // mockup's page as a static file (public/home.html). `beforeFiles` puts the
  // rewrite ahead of the app's own routes. Remove it with that file.
  rewrites: () => ({
    beforeFiles: [{source: '/', destination: '/home.html'}],
    afterFiles: [],
    fallback: [],
  }),
};

export default nextConfig;
