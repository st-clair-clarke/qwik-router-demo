import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { RemoteMfe } from '../components/remote-mfe/remote-mfe';

export default component$(() => {
//  return <ShellMain />
  
  return (
    <main>
      <h1>
        "Shell (Host)" works! <span class = 'lightning'>⚡️</span>
      </h1>
      <a class = 'mindblow'
         href = '/about/'>
        Navigate to /about in 'host'
      </a>
      
      <br />
      <a class = 'mindblow'
         href = '/about/'>
        Navigate to /about in 'register' remote
      </a>
    </main>
  );
} );

export const ShellMain = component$(() => {
  return (
    <main>
      <h1>
        "Shell (Host)" works! <span class = 'lightning'>⚡️</span>
      </h1>
      <a class = 'mindblow'
         href = '/about/'>
        Navigate to /about in 'host'
      </a>
      
      <br />
      <a class = 'mindblow'
         href = '/about/'>
        Navigate to /about in 'register' remote
      </a>
    </main>
  );
})

export const head: DocumentHead = {
  title: 'Medsoft | Shell',
};
