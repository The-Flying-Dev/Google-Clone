import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import './Search.css';

function Search({ hideButtons = false}) {

    const [{}, dispatch] = useStateValue();
    const [term, setTerm] = useState('');    
    const history = useHistory();

    const search =(e) => {
        e.preventDefault();

        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: term,
        });


        history.push('/search')
    };


  return (
    
    <form className='search'>
        <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input 
          value={term} 
          onChange={(e) => setTerm(e.target.value)}           
        />

        <MicIcon />

        </div>

        {!hideButtons ? (
          <div className='search__buttons'>
            <Button 
              
              variant='outlined' 
              type='submit' 
              onClick={search}>Google Search
            </Button>  {/* makes button work with a click and when enter is pressed */}

            <Button              
              variant='outlined'>
                I'm Feeling Lucky
            </Button>

          </div>

        ) : (
          <div className='search__buttons'>
            <Button 
              className='seacr__buttonsHiden'
              onClick={search}
              type='submit'
              variant='outlined'
            >
              Google Search
            </Button>
            <Button 
              className='search__buttonsHidden'
              variant='outlined'
            >I'm Feeling Lucky
            </Button>
          </div>
        )}
    </form>
    
  )
}

export default Search
