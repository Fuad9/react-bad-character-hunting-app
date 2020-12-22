import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import Loading from "../../../utilities/Loading";

const CharactersDetails = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [characters, setCharacters] = useState([]);
   const [singleCharacter, setSingleCharacter] = useState({});

   useEffect(() => {
      setSingleCharacter(characters.find((character) => character));
   }, [characters]);

   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await axios.get(`https://breakingbadapi.com/api/characters/${id}`);
            setCharacters(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [id]);

   return (
      <>
         <h1>
            <Link to="/home">Go to homepage</Link>
         </h1>

         {loading ? (
            <Loading />
         ) : (
            <div key={singleCharacter.char_id}>
               <div className="w-50">
                  <img className="w-50" src={singleCharacter.img} alt="" />
               </div>
               <h3>
                  <span>Name:</span> {singleCharacter.name}
               </h3>
               <h4 className={singleCharacter.birthday === "Unknown" ? "d-none" : "d-block"}>
                  <span>Birthday:</span> {singleCharacter.birthday}
               </h4>
               <h4 className={singleCharacter.occupation === "Unknown" ? "d-none" : "d-block"}>
                  <span>Occupation:</span> {singleCharacter.occupation}
               </h4>
               <h4 className={singleCharacter.status === "Unknown" ? "d-none" : "d-block"}>
                  <span>Status:</span> {singleCharacter.status}
               </h4>
               <h4 className={singleCharacter.nickname === "Unknown" ? "d-none" : "d-block"}>
                  <span>Nickname:</span> {singleCharacter.nickname}
               </h4>
               <h4 className={singleCharacter.portrayed === "Unknown" ? "d-none" : "d-block"}>
                  <span>Portrayed By:</span> {singleCharacter.portrayed}
               </h4>
            </div>
         )}
      </>
   );
};

export default CharactersDetails;
