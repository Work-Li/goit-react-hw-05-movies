import s from './BackBtn.module.css';
import { useNavigate } from 'react-router-dom';

export default function BackBtn({location}) {
    // const GoBack = () => {

    // }
    let navigate = useNavigate();
  const GoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
    return (
        <button type='button' className={s.btn} onClick={GoBack}>back</button>
    )
}