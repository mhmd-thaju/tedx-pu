import "./Test.css";

const Test = () =>{
    return(
        <div className="outer">
            <button id="start">Repeat</button>
  <div class="calendar">
    <div class="counter clearfix">

      <div class="sheet" data-target="2">
        <div class="up">
          <span>2</span>
        </div>
        <div class="down">
          <span>2</span>
        </div>
      </div>

      <div class="sheet" data-target="6">
        <div class="up">
          <span>6</span>
        </div>
        <div class="down">
          <span>6</span>
        </div>
      </div>

    </div>

    <div class="month">
      Month
    </div>
  </div>
        </div>
    )
}

export default Test;