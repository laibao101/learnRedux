import React from 'react';

const Select = ({ onChange, options }) => {
	return (
		<select name="" id="" onChange={e => onChange(e.target.value)}>
			{options.map(option => {
				return (
					<option value={option} key={option}>{option}</option>
				);
			})}
		</select>
	);
}


export default Select;
