import './ChartBar.css';


const ChartBar = (props)=>{

    let barFillHeight = '0%';
    let colorProp = 'blue';

    if(props.maxValue>0){
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%';
    }

    console.log(props.value)

    props.value>=1000 ? colorProp='red': (props.value>=100 ? colorProp='yellow': colorProp='blue')
    

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div 
                className="chart-bar__fill"
                style={{height:barFillHeight, backgroundColor:colorProp} }>
                </div>
            </div>
            <div className="chart-bar__label">{props.label }</div>
        </div>
    );
}

export default ChartBar;