import {HELLO_TITLE} from './constants';

export default function HomePage() {
  return (
    <main className="mx-auto grid min-h-dvh max-w-3xl content-center gap-6 px-6 py-24">
      <p className="font-mono text-xs tracking-widest text-ink-mid uppercase">
        Mars Chu · Full-stack product engineer
      </p>
      <h1 className="font-serif text-5xl font-light tracking-tight text-ink">
        {HELLO_TITLE}
      </h1>
      <p className="max-w-prose text-lg text-ink-strong">
        This site is being built. The work will be here soon.
      </p>
    </main>
  );
}
