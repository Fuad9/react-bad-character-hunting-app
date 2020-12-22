import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ paginate, charactersPerPage, totalCharacters }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <nav>
         <ul className="pagination">
            {pageNumbers.map((number) => (
               <li key={number} className="page-item">
                  <Link onClick={() => paginate(number)} to="/" className="page-link">
                     {number}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Pagination;
