import {BallTriangle} from  'react-loader-spinner';


const Spinner = () => {
  return (
    <BallTriangle
      type="BallTriangle"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
      position='center'
      // className={s.loader}
    />
  );
};

export  {Spinner};