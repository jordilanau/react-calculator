import { KeyGrid } from '../../../components/KeyGrid/KeyGrid';
import keys from '../../../data/keys';

export default {
  title: 'KeyGrid',
  component: KeyGrid,
};

export const Grid = () => <KeyGrid keys={keys} />;
