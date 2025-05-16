
import { useState } from "react";
import  "./Tabs.css";

function Tabs (){
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }


    return(
        <div className="tabcontainer">
            <div className="tabblock">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(1)} >TED</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(2)}>TEDX</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(3)}>TEDX PONDICHERRY UNIVERSITY</button>
            </div>
            <div className="tabcontent">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <hr />
                    <p>
                        TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
            TED stands for technology, entertainment, and design. TED's main aim is to inform and educate global
            audiences in an accessible way. Through TED, many thinkers, creators, designers, artists, and other
            experts get to showcase their talents and <strong>"ideas worth spreading"</strong> to the world.
            TED is viewed by more than 3 billion enthusiasts annually, making a lasting impact.
                    </p>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <hr />
                    <p>TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover
            <strong> “ideas worth spreading.”</strong> TEDx brings TED to local communities through independently organized events.
            It gives students and communities a platform to explore, share, and connect ideas beyond the classroom.</p>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio numquam praesentium sit laborum magni, saepe, tempora similique, totam dolorem itaque accusamus! Aperiam perferendis architecto, reiciendis odio reprehenderit repudiandae dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet excepturi a eius accusamus magnam adipisci suscipit pariatur neque. Officia, temporibus! Dolorum voluptate labore consectetur laborum. Est, sapiente omnis. Earum.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;