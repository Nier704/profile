import { useState } from 'react';
import { createContext } from "react";
import axios from 'axios';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

   const [gitData, setGitData] = useState();

   async function getGitData(){
      try {
         const url = 'https://api.github.com/users/HIDE-SX';
         const git_token = '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';
         const response = await axios.get(url, {
            headers: {
               Authorization: `Bearer ${git_token}`
            }
         });
         setGitData(response.data);
      } catch (error) {
         console.error(error);
      }
   }

   return <DataContext.Provider value={{  gitData, setGitData, getGitData }}>
      { children }
   </DataContext.Provider>
}