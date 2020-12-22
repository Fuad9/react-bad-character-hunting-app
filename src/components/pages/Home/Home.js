import React, { useEffect, useState } from "react";
import Axios from "axios";

import Loading from "../../../utilities/Loading";

import Pagination from "../Pagination/Pagination";
import Characters from "../Characters/Characters";

function Home() {
   const [loading, setLoading] = useState(false);
   const [characters, setCharacters] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [charactersPerPage] = useState(10);
   const [search, setSearch] = useState("");

   /* Fetching characters data by searching character name ===================== */
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get(
               "https://breakingbadapi.com/api/characters?name=" + search
            );
            setCharacters(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   /* Fetching characters data by searching category ===================== */
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get(
               "https://breakingbadapi.com/api/characters?category=" + search
            );
            setCharacters(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   /* Fetching all characters data ======================= */
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get("https://breakingbadapi.com/api/characters");
            setCharacters(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, []);

   /* to get current character ============================= */
   const indexOfLastCharacter = currentPage * charactersPerPage;
   const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
   const currentCharacter = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

   /* to change page ===================== */
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         {/* Search Area ============================= */}
         <div className="d-flex justify-content-center my-3">
            <input
               className="form-control w-50"
               type="text"
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search characters by character name or category"
            />

            <button className="btn btn-success">Search</button>
         </div>

         {/* Showing All Characters =========================== */}
         {loading ? <Loading /> : <Characters characters={currentCharacter} />}

         {/* Configuring Pagination ============================ */}
         <div className="d-flex justify-content-center">
            <Pagination
               charactersPerPage={charactersPerPage}
               totalCharacters={characters.length}
               paginate={paginate}
            />
         </div>
      </>
   );
}

export default Home;
