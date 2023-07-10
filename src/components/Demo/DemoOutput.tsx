const DemoOutput = ({ isParagraphShown }: { isParagraphShown: boolean }) => {
  console.log('DemoOutput Component Rendered');

  return <p>{isParagraphShown && 'This is new!'}</p>;
};

export default DemoOutput;
