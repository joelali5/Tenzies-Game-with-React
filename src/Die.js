import React  from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFF"
    }

    let val;
    if(props.value === 1) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot center middle" style={styles}></span>
        </div>
    } else if(props.value === 2) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot top left" style={styles}></span>
            <span className="dot bottom right" style={styles}></span>
        </div>
    } else if(props.value === 3) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot top left" style={styles}></span>
            <span className="dot middle center" style={styles}></span>
            <span className="dot bottom right" style={styles}></span>
        </div>
    } else if(props.value === 4) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot top left" style={styles}></span>
            <span className="dot top right" style={styles}></span>
            <span className="dot bottom left" style={styles}></span>
            <span className="dot bottom right" style={styles}></span>
        </div>
    } else if(props.value === 5) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot top left" style={styles}></span>
            <span className="dot top right" style={styles}></span>
            <span className="dot middle center" style={styles}></span>
            <span className="dot bottom left" style={styles}></span>
            <span className="dot bottom right" style={styles}></span>
        </div>
    } else if(props.value === 6) {
        val = <div className="die-face" onClick={props.holdDice}>
            <span className="dot top left" style={styles}></span>
            <span className="dot top right" style={styles}></span>
            <span className="dot left middle" style={styles}></span>
            <span className="dot right middle" style={styles}></span>
            <span className="dot left bottom" style={styles}></span>
            <span className="dot right bottom" style={styles}></span>
        </div>
    }
    return (
        val
    )
}