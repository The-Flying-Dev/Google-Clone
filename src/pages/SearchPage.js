import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import './SearchPage.css';




function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    const {data} = useGoogleSearch(term);
    console.log(data);


  return (
    <div className='searchPage'>

        <div className='searchPage__header'>
            <Link to='/'>
                <img 
                    className='searchPage__logo'
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"

                />
            </Link>
        

        <div className='SearchPage__headerBody'>
            <Search hideButtons />       
            <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                    <div className='searchPage__option'>
                        <SearchIcon />
                        <Link to='/all'>All</Link>
                    </div>
                    <div className='searchPage__option'>
                        <DescriptionIcon />
                        <Link to='/news'>News</Link>
                    </div>
                    <div className='searchPage__option'>
                        <ImageIcon />
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className='searchPage__option'>
                        <LocalOfferIcon />
                        <Link to='/images'>shopping</Link>
                    </div>
                    <div className='searchPage__option'>
                        <RoomIcon />
                        <Link to='/images'>maps</Link>
                    </div>
                    <div className='searchPage__option'>
                        <MoreVertIcon />
                        <Link to='/images'>more</Link>
                    </div>                    
                </div>

                <div className='searchPage__optionsRight'>
                    <div className='searchPage__option'>
                        <Link to='/settings'>Settings</Link>
                    </div>
                    <div className='searchPage__option'>
                        <Link to='/tools'>Tools</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
        

    </div>
    
  );
}

export default SearchPage