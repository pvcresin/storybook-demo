import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Sample from './Sample';
import markdown from './Sample.md';

storiesOf('Sample', module)
  .addDecorator(withKnobs)
  .add(
    'with some emoji',
    () => (
      <Sample
        compiler='TypeScript'
        framework='React'
        onClick={action('clicked')}
        disabled={boolean('Disabled', false)}
      />
    ),
    {
      notes: { markdown },
    },
  );
