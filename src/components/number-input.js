import React from 'react';

export default function NumberInput(props){
    return (
        <div className="form-group">
            <lablel htmlFor={props.id}>{props.label}</lablel>
            <input id={props.id} type="number" min={props.min} max={props.max} value={props.value} onChange={e => props.onChange(e.target.value)} />
        </div>
    );
}