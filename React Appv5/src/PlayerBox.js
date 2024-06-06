import React from 'react';
import './App.css';

function PlayerBox(){
    return(
        <div className="playerBox">
            <h2>Player Name</h2>
            <select>
                <option>Alar</option>
                <option>Solarion</option>
                <option>Void Reaver</option>
                <option>Kel'Thuzad</option>
            </select>
            <div>
                <input className="rbButtons" type="radio" value="Food" name="consume" /> Food
                <input className="rbButtons" type="radio" value="Flask" name="consume" /> Flask
                <input className="rbButtons" type="radio" value="Elixir" name="consume" /> Elixir
                <input className="rbButtons" type="radio" value="WeaponEnhance" name="consume" /> Weapon Enhance
            </div>
            <h2> 1/1 </h2>
            <h5> Consumable Type </h5>
        </div>
    )
    
}

export default PlayerBox;