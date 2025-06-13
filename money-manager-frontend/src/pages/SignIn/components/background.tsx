
import './../style.css' 

function Background() {
  return (
    <div className="fullscreen-background">

        {/* Floating mathematical symbols */}
        <div className="symbol symbol-dollar">$</div>
        <div className="symbol symbol-percent">%</div>
        <div className="symbol symbol-sum">∑</div>
        <div className="symbol symbol-pi">π</div>
        <div className="symbol symbol-plusminus">±</div>
        <div className="symbol symbol-infinity">∞</div>
       
        {/* Chart-like lines */}
        <svg className="fullscreen-background" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
        </svg>
    </div>
  );
}
export default Background;
