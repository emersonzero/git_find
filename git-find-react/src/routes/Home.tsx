import { UserProps } from "../types/user"
import Search from "../components/Search"
import { useState } from "react"
import User from '../components/User'
import Error from "../components/Error"

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null) //start witch null to know when  there is a user
    const [error, setError] = useState(false)

        const loadUser =async (userName:string) => {

            setError(false) //reset for when not finding the user do not concatenate the error message in the next search.
            setUser(null)

            const res = await fetch(`https://api.github.com/users/${userName}`);

            const data = await res.json();

            if(res.status === 404){
                setError(true)
                return; //stops here and does not allow the function to continue 
            }

            //api destructuring

            const {avatar_url,login, location,followers,following} = data
           
            //construction of a new object

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following,
            };

            // say that this user has the data from userData

            setUser(userData);
        };

    return (
        <div>
            
            <Search loadUser={loadUser} />

       {/*  // show date to user
        // first checking if user is available, if available show login */}
        {user && <User {...user}/>}
        {error && <Error />}

        </div>
        
    );
};

export default Home;