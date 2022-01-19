// import modules
import * as d3 from '/node_modules/d3/dist/d3.js';
// const [books, setBooks] = useState(initialBooks);
// const initialBooks = [
//     {
//         name: "Harry Potter and the Philosophers Stone",
//         author: "J. K. Rowling",
//         genre: "fantasy"
//     },{
//         name: "The Pedagogy of Freedom",
//         author: "Bell hooks",
//         genre: "non-fiction"
//     },{
//         name: "Harry Potter and the Chamber of Secrets",
//         author: "J. K. Rowling",
//         genre: "fantasy"
//     },{
//         name: "Gilgamesh",
//         author: "Derrek Hines",
//         genre: "poetry"
//     }
// ];
// setBooks(books.concat(
//     {
//         name: "50 vegan dishes",
//         author: "Antti Leppänen",
//         genre: "non-fiction"
//     }
// ));
var svg = d3.select("#dataviz_area")
svg.append("circle").attr("cx", 2).attr("cy", 2).attr("r", 40).style("fill", "blue");
svg.append("circle").attr("cx", 70).attr("cy", 100).attr("r", 40).style("fill", "red");
svg.append("circle").attr("cx", 200).attr("cy", 150).attr("r", 40).style("fill", "green");
