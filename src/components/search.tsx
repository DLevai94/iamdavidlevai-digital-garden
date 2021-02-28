import { useState } from 'react';

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'tags']
};

const names: Array<string> = ['react', 'tailwind', 'freelancing', 'saas', 'youtube'];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Search() {
  const [results, setResults] = useState();

  return (
    <>
      <input
        type="text"
        className="h-16"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import('fuse.js')).default;
          const fuse = new Fuse(names, fuseOptions);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setResults(fuse.search(value) as any);
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </>
  );
}
