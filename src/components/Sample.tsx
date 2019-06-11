import * as React from 'react';

import styles from './Sample.scss';

interface Props {
  compiler: string;
  framework: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

const Sample: React.FC<Props> = ({ compiler, framework, onClick, disabled }) => (
  <button className={styles.red} onClick={onClick} disabled={disabled}>
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
    <p role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </p>
  </button>
);

export default Sample;
