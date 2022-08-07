import {  useRef } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import axios from "axios";




function SearchBar (props) {



    const textInput = useRef(null);

    async function getMovie(moviequery) {
        const result = await axios(`/movie/${moviequery}` 
        );
        const movieResult = result.data;
        console.log(result.data);
        props.setmovie(movieResult);
        props.handleopen();

      }

    return(
        <React.Fragment>
            <form id="searchform">
                <TextField
                inputRef={textInput}
                required
                id="search-bar"
                className="text"
                label="Enter a movie name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                <IconButton 
                onClick={(e) => {
                        e.preventDefault();
                        textInput.current.focus();
                        console.log(textInput.current.value);
                        getMovie(textInput.current.value);           
                }}
                type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>

      </React.Fragment>
    )
}

export default SearchBar;

//   export default function App() {
//     const [searchQuery, setSearchQuery] = useState("");
//     const dataFiltered = filterData(searchQuery, data);
  
//     return (
//       <div
//         style={{
//           display: "flex",
//           alignSelf: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           padding: 20
//         }}
//       >
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         <div style={{ padding: 3 }}>
//           {dataFiltered.map((d) => (
//             <div
//               className="text"
//               style={{
//                 padding: 5,
//                 justifyContent: "normal",
//                 fontSize: 20,
//                 color: "blue",
//                 margin: 1,
//                 width: "250px",
//                 BorderColor: "green",
//                 borderWidth: "10px"
//               }}
//               key={d.id}
//             >
//               {d}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }