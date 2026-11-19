// Adapted from mars-workbench@3f741cc next.config.ts: no next-intl plugin, no
// /oauth headers, no local-Supabase guard (the site has no data layer).
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // `next dev` would otherwise append a managed block to AGENTS.md whenever an
  // agent starts it; its one rule (read the installed version's docs) lives in
  // AGENTS.md › Session start instead
  agentRules: false,
};

export default nextConfig;
