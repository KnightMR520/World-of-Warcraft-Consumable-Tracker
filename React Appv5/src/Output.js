import React from "react";
import { useState } from "react";
import "./App.css";
import { SSCTK, BTHYJAL } from "./wowData";
// import {najentusWeaponEnhanceQuery} from "./queries";
// import {ErrorBoundary} from 'react-error-boundary'

import {
    useQuery,
    gql
  } from "@apollo/client";

const rageWeaponEnhanceQuery = gql`
  query weaponEnhanceParam ($code: String) {
    reportData {
        report (code: $code) {
            table(startTime: 0, endTime: 99999999999999, encounterID: 618)
        }
    }
}
`;

const anetheronWeaponEnhanceQuery = gql`
  query weaponEnhanceParam ($code: String) {
    reportData {
        report (code: $code) {
            table(startTime: 0, endTime: 99999999999999, encounterID: 619)
        }
    }
}
`;

const kazrogalWeaponEnhanceQuery = gql`
  query weaponEnhanceParam ($code: String) {
    reportData {
        report (code: $code) {
            table(startTime: 0, endTime: 99999999999999, encounterID: 619)
        }
    }
}
`;

const azgalorWeaponEnhanceQuery = gql`
  query weaponEnhanceParam ($code: String) {
    reportData {
        report (code: $code) {
            table(startTime: 0, endTime: 99999999999999, encounterID: 619)
        }
    }
}
`;

const archimondeWeaponEnhanceQuery = gql`
  query weaponEnhanceParam ($code: String) {
    reportData {
        report (code: $code) {
            table(startTime: 0, endTime: 99999999999999, encounterID: 619)
        }
    }
}
`;

/* function ErrorHandler({error}) {
    return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
    )
} */

export function WowDataDisplay() {

    const [raidLog, setRaidLog] = useState('');
    var code = raidLog;
    const {loading, error, data: rage} = useQuery(rageWeaponEnhanceQuery, {
        variables: {code}
    }); 

    const {data: anetheron} = useQuery(anetheronWeaponEnhanceQuery, {
        variables: {code}
    }); 

    const {data: kazrogal} = useQuery(kazrogalWeaponEnhanceQuery, {
        variables: {code}
    }); 

    const {data: azgalor} = useQuery(azgalorWeaponEnhanceQuery, {
        variables: {code}
    }); 

    const {data: archimonde} = useQuery(archimondeWeaponEnhanceQuery, {
        variables: {code}
    }); 

    const [shouldShowTable, setShouldShowTable] = useState(false)
    const showWeaponEnhanceTable = () => setShouldShowTable(!shouldShowTable)
    
    console.log(rage);

    // console.log(najentus)
    // console.log(data.reportData.report.table.data.playerDetails.dps[0].combatantInfo.gear[15].temporaryEnchantName)
    
    /* data.reportData.report.table.data.playerDetails.dps.forEach(thing => {
        if (thing.combatantInfo.gear[15].temporaryEnchantName != undefined) {
            console.log(thing.combatantInfo.gear[15].temporaryEnchantName)
        }
    }) */

    if (loading) return <p className="header">Loading...</p>;
    // if (error) return <p className ="header">Error :(</p>
    
    return (

        <div>
            <div className="header">
            <form>
                <label>Copy and Paste Raid Log</label>
                <input
                    type="text"
                    required
                    value={raidLog}
                    onChange={(e) => setRaidLog(e.target.value)}
                />
            </form>
            <button>Submit</button>
            <select>
                    <option>Serpentshrine Cavern</option>
                    <option>Tempest Keep</option>
                    <option>Black Temple</option>
                    <option>Mount Hyjal</option>
            </select>
            
            <input className="rbButtons" type="radio" value="Food" name="consume" /> Food
            <input className="rbButtons" type="radio" value="Flask" name="consume" /> Flask
            <input className="rbButtons" type="radio" value="Elixir" name="consume" /> Elixir
            <input onClick={() => showWeaponEnhanceTable()} className="rbButtons" type="radio" value="WeaponEnhance" name="consume" /> Weapon Enhance
        </div>

            {/*<table>
                <thead>
                    <tr>
                        <th>Players</th>
                         {SSCTK.data.worldData.zone.encounters.map((boss, key) => {
                             return (
                                 <th key={key}>{boss.name}</th>
                             )
                         })}   
                    </tr>  
                        </thead>
                  
            </table>*/}
        {shouldShowTable && (

            
        <div>

            <h1 className="header">{BTHYJAL.data.worldData.zone.encounters[9].name}</h1>

            <h4 className="table-labels">Dps</h4>

            <table>
                    {rage.reportData.report.table.data.playerDetails.dps.map((name, key) => {
                        return (
                            <tr key={key}>
                                {name.name}
                            </tr>
                        )
                    })}
                </table>
            <table>
                {rage.reportData.report.table.data.playerDetails.dps.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Healers</h4>

            <table>
                {rage.reportData.report.table.data.playerDetails.healers.map((name, key) => {
                    return (
                        <tr key={key}>
                            {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {rage.reportData.report.table.data.playerDetails.healers.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Tanks</h4>

            <table>
                 {rage.reportData.report.table.data.playerDetails.tanks.map((name, key) => {
                    return (
                        <tr key={key}>
                           {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {rage.reportData.report.table.data.playerDetails.tanks.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h1 className="header">{BTHYJAL.data.worldData.zone.encounters[10].name}</h1>
            
            <h4 className="table-labels">Dps</h4>

            <table>
                {anetheron.reportData.report.table.data.playerDetails.dps.map((name, key) => {
                        return (
                            <tr key={key}>
                                {name.name}
                            </tr>
                        )
                    })}
                </table>
            <table>
                {anetheron.reportData.report.table.data.playerDetails.dps.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Healers</h4>

            <table>
                {anetheron.reportData.report.table.data.playerDetails.healers.map((name, key) => {
                    return (
                        <tr key={key}>
                            {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {anetheron.reportData.report.table.data.playerDetails.healers.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Tanks</h4>

            <table>
                 {anetheron.reportData.report.table.data.playerDetails.tanks.map((name, key) => {
                    return (
                        <tr key={key}>
                           {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {anetheron.reportData.report.table.data.playerDetails.tanks.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h1 className="header">{BTHYJAL.data.worldData.zone.encounters[11].name}</h1>

            <h4 className="table-labels">Dps</h4>

            <table>
                {kazrogal.reportData.report.table.data.playerDetails.dps.map((name, key) => {
                        return (
                            <tr key={key}>
                                {name.name}
                            </tr>
                        )
                    })}
                </table>
            <table>
                {kazrogal.reportData.report.table.data.playerDetails.dps.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Healers</h4>

            <table>
                {kazrogal.reportData.report.table.data.playerDetails.healers.map((name, key) => {
                    return (
                        <tr key={key}>
                            {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {kazrogal.reportData.report.table.data.playerDetails.healers.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Tanks</h4>

            <table>
                 {kazrogal.reportData.report.table.data.playerDetails.tanks.map((name, key) => {
                    return (
                        <tr key={key}>
                           {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {kazrogal.reportData.report.table.data.playerDetails.tanks.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h1 className="header">{BTHYJAL.data.worldData.zone.encounters[12].name}</h1>

            <h4 className="table-labels">Dps</h4>

            <table>
                {azgalor.reportData.report.table.data.playerDetails.dps.map((name, key) => {
                        return (
                            <tr key={key}>
                                {name.name}
                            </tr>
                        )
                    })}
                </table>
            <table>
                {azgalor.reportData.report.table.data.playerDetails.dps.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Healers</h4>

            <table>
                {azgalor.reportData.report.table.data.playerDetails.healers.map((name, key) => {
                    return (
                        <tr key={key}>
                            {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {azgalor.reportData.report.table.data.playerDetails.healers.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Tanks</h4>

            <table>
                 {azgalor.reportData.report.table.data.playerDetails.tanks.map((name, key) => {
                    return (
                        <tr key={key}>
                           {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {azgalor.reportData.report.table.data.playerDetails.tanks.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h1 className="header">{BTHYJAL.data.worldData.zone.encounters[13].name}</h1>

            <h4 className="table-labels">Dps</h4>

            <table>
                {archimonde.reportData.report.table.data.playerDetails.dps.map((name, key) => {
                        return (
                            <tr key={key}>
                                {name.name}
                            </tr>
                        )
                    })}
                </table>
            <table>
                {archimonde.reportData.report.table.data.playerDetails.dps.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Healers</h4>

            <table>
                {archimonde.reportData.report.table.data.playerDetails.healers.map((name, key) => {
                    return (
                        <tr key={key}>
                            {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {archimonde.reportData.report.table.data.playerDetails.healers.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>

            <h4 className="table-labels">Tanks</h4>

            <table>
                 {archimonde.reportData.report.table.data.playerDetails.tanks.map((name, key) => {
                    return (
                        <tr key={key}>
                           {name.name}
                        </tr>
                    )
                })}
            </table>
            <table>
                {archimonde.reportData.report.table.data.playerDetails.tanks.map((weapon, key) => {
                    return (
                        <tr key={key}>
                            {weapon.combatantInfo.gear[15].temporaryEnchantName}
                        </tr>
                    )
                })}
            </table>


        </div>)}
    </div>
    )
}
