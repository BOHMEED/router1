import MovieList from './MovieList';
import Navbar from './Navbar';
import Modal from './Modal';
import { useState } from 'react';

function Home() {
  // ----------------------List Of Films----------------------
    const [movies, setmovies] = useState([
        {
        title: "His House",
        description: "As a young couple from war-torn South Sudan seeks asylum and a fresh start in England, they're tormented by a sinister force living in their new home.",
        posterURL: "https://www.slashfilm.com/img/gallery/the-daily-stream-his-house-is-better-than-your-favorite-horror-movie/intro-1669132336.jpg",
        rating: 4,
        },
        {
        title: "Under the Shadow",
        description: "During the Iran-Iraq conflict, a Tehran woman caring for her daughter while her husband is at war is gradually convinced evil spirits are at work.",
        posterURL: "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/89/4a0277c2cd16d804a43f2f10e044a629_706x397.jpg?t=1636102095",
        rating: 5,
        },
        {
        title: "Emily The Criminal",
        description: "Saddled with student debt and locked out of the job market, a woman gets involved in credit card scams and is soon pulled deep into the world of crime.",
        posterURL: "https://www.whats-on-netflix.com/wp-content/uploads/2022/11/emily-the-criminal-netflix-release-date-confirmed.jpg",
        rating: 3,
        },
        {
        title: "Klaus",
        description: "A selfish postman and a reclusive toymaker form an unlikely friendship, delivering joy to a cold, dark town that desperately needs it.",
        posterURL: "https://pyxis.nymag.com/v1/imgs/8b7/7ae/23134a07f1a6b2a685e4fc46027f7028ad-22-klaus.rsquare.w700.jpg",
        rating: 2,
        },
        {
        title: "The Nice Guys",
        description: "A private eye and a tough guy for hire get tangled up in the seamy side of 1970s Los Angeles as they investigate an adult film star's mysterious death.",
        posterURL: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/10/The-Nice-Guys-2016.jpg",
        rating: 4,
        },
        {
        title: "THE TRIAL OF THE CHICAGO 7",
        description: "What was supposed to be a peaceful protest turned into a violent clash with the police. What followed was one of the most notorious trials in history.",
        posterURL: "https://occ-0-55-1433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVZ_vstRNHcDvo3xuyeez-CGP4Wmqta56uyK-VKU_LbPNaJCrsulfL2gHiZoEFPoYP3zUnJHWXTBM9WTpZVFOPHjZHIr10fC_y8H.jpg?r=c1e",
        rating: 3,
        }
    ])
    // ----------------------Enf of the List----------------------

    const [recherche, setrecherche] = useState("")  // -------state for the search input-------
    const [openModal, setopenModal] = useState(false) // -------state for the search input-------
    
    return (
        <div className="home">
            <Navbar openModal={openModal} setopenModal={setopenModal} recherche={recherche} setrecherche={setrecherche} movies={movies} setmovies={setmovies}  />
            <MovieList movies={movies}  recherche={recherche} />
        </div>
    );
    }

export default Home;
