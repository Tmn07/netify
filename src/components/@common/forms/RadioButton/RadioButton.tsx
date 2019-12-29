import React, {memo, ReactNode} from 'react';
import classNames from 'classnames';
import {useField} from 'formik';
import styles from './radioButton.css';

interface RadioButtonProps {
	className?: string;
	name: string;
	value: string;
	disabled?: boolean;
	children?: ReactNode;
}

export const RadioButton = memo<RadioButtonProps>(({className, name, value, disabled, children}) => {
	const [{value: currentValue, onChange, onBlur}] = useField<string>(name);

	return (
		<label className={classNames(styles.root, className)}>
			<input
				className={styles.input}
				name={name}
				type='radio'
				value={value}
				disabled={disabled}
				checked={value === currentValue}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<div className={styles.imitator} />
			<p className={styles.label}>{children}</p>
		</label>
	);
});

RadioButton.displayName = 'RadioButton';
