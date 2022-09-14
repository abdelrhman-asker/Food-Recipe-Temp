import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Recipe from './Recipe'
import Footer from './Footer'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '60ch',
        },
      },
    },
  }));

const Home = () => {

    const APP_ID = "c3353a77";
    const APP_KEY = "02e882afef1f75d305421ef42b7450b8";

    const [recipes, setRecipes] = useState([]);
    const [ search, setSearch] = useState('');
    const [query, setQuery] = useState("chicken")

    useEffect( () => {

        getRecipes();
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
        
        
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    } 

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");


    }

  return (
    <div className='App'>
        <Navbar />
        <section>

            <form  onSubmit={getSearch} className="search-form">
                
            <StyledInputBase value={search} onChange= {updateSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
                <button className='search-button' type='submit' >Search</button>
            </form>
           
        </section>
        <div className='Data-Main'>
            {recipes.map(recipe => [
                <Recipe 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                key="{item}" />
                
            ])}
        </div>
        <Footer />
    </div>
  )
}

export default Home