import s from './SearchForm.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function SearchForm({onSubmit}) {
  const [request, setRequest] = useState('');
  

  const handleRequestChange = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(request.trim() === '') {
      toast.error('Please, enter request')
      return;
    }
    onSubmit(request);
    setRequest('');
  };

   
    return (
      
        <div className={s.searchbar}>
          <form className={s.searchForm} onSubmit={handleSubmit}>
            <button type="submit" className={s.searchBtn}>
              <span className={s.searchLabel}>Search</span>
            </button>

            <input
              className={s.searchInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={request}
              onChange={handleRequestChange}
            />
          </form>
        </div>
    
    );
  
}