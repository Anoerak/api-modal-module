import React from 'react';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

import './Modal.css';

const Modal = (props) => {
	const navigate = useNavigate();

	// We store the props in variables
	const { apiResponse, modal__display, redirectPath } = props;

	// We can use the variables to style the modal
	const modalStyle = {
		modal__display,
		redirectPath,
	};

	// We handle the click event to redirect the user to the path
	const handleClick = () => {
		navigate(redirectPath);
	};

	return (
		// We use the variables to style the modal
		<div className='modal__display' style={modalStyle.modal__display}>
			<div className='modal__background'>
				Modal
				<div className='modal__container'>
					<div className='modal__header'>
						{/* We define the title based on the apiResponse (code) */}
						<h2 className='modal__title'>
							{apiResponse.status === 200 || apiResponse.status === 201
								? 'Congratulations'
								: 'Something went wrong'}
						</h2>
						{/* We handle the click on the close button to close the modal and redirect the user to the path */}
						<button
							className='modal__closeButton'
							onClick={() => {
								handleClick();
							}}
						>
							X
						</button>
					</div>
					{/* We display the message based on the apiResponse (message) */}
					<div className='modal__body'>
						<p>{apiResponse.statusText}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	apiResponse: PropTypes.object,
	modal__display: PropTypes.object,
	redirectPath: PropTypes.string,
};

Modal.defaultProps = {
	apiResponse: {
		status: 408,
		statusText: "I'm a teapot",
	},
	modal_display: {
		display: 'none',
	},
	redirectPath: '/',
};

export default Modal;
