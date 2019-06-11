import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import Hello from './Hello';
import Sample from './components/Sample';

ReactDOM.render(
  <Sample compiler='TypeScript' framework='React' onClick={() => {}} disabled={false} />,
  document.getElementById('app'),
);
