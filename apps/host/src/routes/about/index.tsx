import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { RemoteMfe } from '../../components/remote-mfe/remote-mfe';

export default component$(() => {
  return <>This is the "about" page in the shell app</>;
});

export const head: DocumentHead = {
  title: 'Qwik About',
};
