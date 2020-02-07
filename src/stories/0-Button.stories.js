import { boolean, text, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../utils/wInfo';
import { Button } from '../components/button';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Button>
      {text('Label', 'Default')}
    </Button>
  )),
);

stories.add(
  'outline',
  wInfo()(() => (
    <Button outline>
      {text('Label', 'Default')}
    </Button>
  )),
);

stories.add(
  'select',
  wInfo()(() => (
    <Button
      className={boolean('Active', false) ? 'active' : ''}
      color={color('Color', 'rgba(126,211,33,1)')}
      select>
        {text('Label', 'Default')}
    </Button>
  )),
);
