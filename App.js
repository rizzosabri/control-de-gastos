import { firebaseConfig } from './src/utils/UtilsDB';
import RouterPath from './RouterPath';

export default function App() {
  firebaseConfig();
  return (
    <RouterPath />
  );
}
