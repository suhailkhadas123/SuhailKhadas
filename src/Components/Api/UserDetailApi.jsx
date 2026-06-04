import react from 'react';
import {useState,useEffect, createContext,useContext} from 'react';

const GithubUserContext= createContext();

export function GithubUserProvider({children}){
    const [user, setUser]= useState(null);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState(null);

    const githubUserName= "suhailkhadas123";
    useEffect(()=>{
        async function fetchGithubUser(){
            try{
                setLoading(true);
                const response =await fetch(`https://api.github.com/users/${githubUserName}`);
                if(!response.ok){
                    throw new Error("User not found");
                }
                const data= await response.json();
                console.table(data);
                setUser(
                    {
                        username: data.name,
                        avatarUrl: data.avatar_url,
                        profileUrl: data.html_url,
                        bio: data.bio,
                    }
                )}
                catch (error){
                    setError(error.message);
                }
                finally{
                    setLoading(false);
                }
            
        }
    fetchGithubUser();
    },[]
)
return(
    <GithubUserContext.Provider value={{user,loading,error}}>
        {children}
    </GithubUserContext.Provider>
)
}
export function useGithubUser(){
     const context = useContext(GithubUserContext)

  if (!context) {
    throw new Error('useGithub must be used within GithubProvider')
  }

  return context;
}