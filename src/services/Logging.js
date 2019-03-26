import * as Sentry from '@sentry/browser';

const Logging = {
  Remote: {
    initialize: () => {
      console.log('Sentry added for logging purposes');
      Sentry.init({dsn: 'https://615f72f5a48048af8c2152ef6c70a382@sentry.io/1423259'});
    },
  },
};

export default Logging