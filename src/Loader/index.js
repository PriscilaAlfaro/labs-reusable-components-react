import React from 'react';
import './loader.css';


const Loader = ({ color, size, loading, setLoading })=> {
    const handleDisable = () => {
        setLoading(!loading)
    }
    return (
        <div className="loader-container" >
            <button className={`loader-img ${loading ? "turn": ""}`} style={{ backgroundColor: color, width: size }} onClick={handleDisable}></button>
        </div>
    );
}

export default Loader;
