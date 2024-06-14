import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <h1>
        "Register" remote works! <span class="lightning">⚡️</span>
      </h1>
      <a class="mindblow" href="/about/">
        Successful navigation to 'register' remote /about
      </a>
    </main>
  );
});
