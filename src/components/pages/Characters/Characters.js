import React from "react";
import { Link } from "react-router-dom";

const Characters = ({ characters }) => {
   return (
      <>
         <div className="row d-flex justify-content-center">
            {characters.map((character) => (
               <div
                  key={character.char_id}
                  className="character-container col-12 col-sm-12 col-md-5"
               >
                  <h3>
                     <span>Name:</span> {character.name}
                  </h3>
                  <h4 className={character.birthday === "Unknown" ? "d-none" : "d-block"}>
                     <span>Birthday:</span> {character.birthday}
                  </h4>
                  <h4 className={character.occupation === "Unknown" ? "d-none" : "d-block"}>
                     <span>Occupation:</span> {character.occupation}
                  </h4>
                  <h4 className={character.status === "Unknown" ? "d-none" : "d-block"}>
                     <span>Status:</span> {character.status}
                  </h4>

                  <Link to={"/characterDetails/" + character.char_id}>
                     <button className="btn btn-warning">View Details</button>
                  </Link>
               </div>
            ))}
         </div>
      </>
   );
};

export default Characters;
