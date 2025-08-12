
import { useState } from "react";
import  "./Tabs.css";

function Tabs (){
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }


    return(
        <div className="outer">
            <div className="tabcontainer">
            <div className="tabblock">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(1)} >TED</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(2)}>TEDx</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}  onClick={()=>toggleTab(3)}>TEDxPONDICHERRY UNIVERSITY</button>
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
                    <p>TEDxPondicherry University is an independently organized TEDx event, licensed by TED, dedicated to sharing ideas that inspire change, spark conversation, and celebrate innovation. Rooted in the rich French–Tamil heritage of Pondicherry, our event brings together thinkers, creators, visionaries, and changemakers from diverse fields to share their unique journeys and transformative ideas with a curated audience.</p>
                </div>
            </div>
            </div>
            <div className="wtedevent">
                <h1><b>Why should you attend a TED event ?</b></h1>
                <p>Attending a TED event will be on everyone's bucket list and with TEDx, you get a TED-like experience. If you are keen on listening to mind-blowing ideas by talented speakers, TEDx is your way to go!. The “ideas worth spreading” in TEDx events gives you a fresh set of perspective. TEDx is a unique gathering of like-minded people that can unleash ideas and inspiration for tomorrow.</p>
                
            </div>
        </div>
    )
}

export default Tabs;