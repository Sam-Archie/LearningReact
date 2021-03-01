import Header from "./header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Heading from "./componentsTricksy/Heading"
import SideContent from "./componentsTricksy/SideContent";
import Paragraphs from "./componentsTricksy/Paragraphs";
import List from "./componentsTricksy/List";
import Pagination from "./componentsTricksy/Pagination";

const Stuff = () => (
<div className="container">
<>
    <Header />
    <Paragraph />
    <Square />
    <People />
    <Heading/>
    <SideContent/>
    <Paragraphs/>
</>
</div>

)

export default Stuff;