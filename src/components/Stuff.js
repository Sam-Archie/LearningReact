import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
import Length from "./formComponents/Length";
import PasswordStrength from "./formComponents/PasswordStrength";
import List from "./formComponents/List";
import TempConverter from "./formComponents/TempConverter";
import Adder from "./formComponents/Adder";
import GodCounter from "./lifeCycleMethodComponents/GodCounter";
import TwoCounters from "./lifeCycleMethodComponents/TwoCounters";
import Squared from "./formComponents/Squared";
import Transform from "./formComponents/Transform";
import Footer from "./Footer";
import FourOhFour from "./FourOhFour";
import ClickedHook from "./hooks/ClickedHook";
import SquareHook from "./hooks/SquareHook";
import ToggleTextHook from "./hooks/ToggleTextHook";
import CounterHook from "./hooks/CounterHook";
import StepCounterHook from "./hooks/StepCounterHook";
import CatchMeHook from "./hooks/CatchMeHook";
import RollCallHook from "./hooks/RollCallHook";
import PasswordStrengthHook from "./hooks/PasswordStrengthHook";
import TempConverterHook from "./hooks/TempConverterHook";
import ListHook from "./hooks/ListHook";
import ColoursHook from "./hooks/ColoursHook";
import DieHook from "./hooks/DieHook";

const Stuff = ( {displaySquare} ) => (
<Router>
    <div className="container ">
        <> 

        <Header>
            <h1>The Monstrosity</h1>
        </Header>
        <Heading />
        <Paragraph className="lead"
            content="A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose."
            />

        <Switch>
            <Route exact path="/">
                <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
                <SideContent/>
            </Route>

            <Route path="/state-components">
                <CatchMeIfYouCan jump={ 100 }/>
                <Counter initial={ 50 } max={ 100 } />
                <RollCall names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
                { displaySquare ? <Square color="green"/> : null}
                <SquareNew
                color="hotpink"/>
                <StepCounter max={ 100 } step={ 5 } />
                <ToggleText initial="Hello" alternate="World"/>
                <Clicked/>
            </Route>

            <Route path="/squares/:color" render={ ({match})  => (
                <Square square={ match.params.color } />
            )}/>

            <Route path="/steps/:max/:step" render={({match}) => (
                <StepCounter max={+match.params.max} step={+match.params.step} />
            )}/>

            <Route path="/form-components">
                <Adder/>
                <Length/>
                <List/>
                <PasswordStrength/>
                <TempConverter/>
                <Transform transform={Squared}>
                </Transform>

            </Route>

            <Route path="/lifecycle-components">
                {true ? <GodCounter/> : null}
                <TwoCounters />
            </Route>

            <Route path="/hooks">
                <ClickedHook/>
                <SquareHook colour="hotpink" />
                <ToggleTextHook initial="Hello" alternate="World" />
                <CounterHook initial={ 50 } max={ 100 } />
                <StepCounterHook max={ 100 } step={ 5 } /> 
                <CatchMeHook jump={ 100 }/>
                <RollCallHook names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
                <PasswordStrengthHook />
                <TempConverterHook />
                <ListHook />
                <ColoursHook
                colours={[
                    "#C14412",
                    "#EBB31A",
                    "#8F5318",
                    "#009EAD",
                    "#395967",
                    ]} />
                <DieHook sides={ 6 }/>
            </Route>

            <FourOhFour/>
        </Switch>
        <Footer/>
        </>
    </div>
</Router>

)

export default Stuff;