import Header from "./header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Heading from "./componentsTricksy/Heading";
import SideContent from "./componentsTricksy/SideContent";
import Clicked from "./stateComponents/Clicked";
import SquareNew from "./stateComponents/SquareNew";
import ToggleText from "./stateComponents/ToggleText";
import Counter from "./stateComponents/Counter";
import StepCounter from "./stateComponents/StepCounter";
import CatchMeIfYouCan from "./stateComponents/CatchMeIfYouCan";
import RollCall from "./stateComponents/RollCall";

const Stuff = ( {displaySquare} ) => (
<div className="container ">
<>
    <Header>
        <h1>Hello World</h1>
    </Header>
    <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos."
        />
        
    { displaySquare ? <Square color="green"/> : null}
    
    <People 
       names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}
    />
    <Heading/>
    <SideContent/>
    <Clicked/>
    <SquareNew 
    color="hotpink"/>
    <ToggleText
    initial="Hello"
    alternate="World"
    />
    <Counter initial={ 50 } max={ 100 } 
    />
    <StepCounter max={ 100 } step={ 5 } />
    <CatchMeIfYouCan jump={ 100 }
    />
    <RollCall 
      names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}
    />
</>
</div>

)

export default Stuff;