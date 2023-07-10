import { useState } from 'react';
import Button from './components/UI/Button';
import styles from './App.module.css';

const App = () => {
  console.log('App Component Rendered');

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  const handleToggleParagraph = () => {
    setIsParagraphShown((prevState) => !prevState);
  };

  return (
    <div className={styles.app}>
      <h1>Hi there!</h1>
      <Button onClick={handleToggleParagraph} disabled={false}>
        Toggle Paragraph
      </Button>
      {isParagraphShown && <p>This is new!</p>}
    </div>
  );
};

export default App;
