import { useState } from 'react';

const Search = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchQuery);
  };

  return (
    <div className='mb-4 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <div className='d-flex'>
          <input
            className='form-control mr-2'
            onChange={(e) => setSearchQuery(e.target.value)}
            type='text'
            placeholder='Search Country Name'
          ></input>
          <button className='btn btn-light'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
