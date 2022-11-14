'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

require('./Modal.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
	var navigate = (0, _reactRouter.useNavigate)();

	var apiResponse = props.apiResponse,
	    modal__display = props.modal__display,
	    redirectPath = props.redirectPath;


	var modalStyle = {
		modal__display: modal__display,
		redirectPath: redirectPath
	};

	var handleClick = function handleClick() {
		navigate(redirectPath);
	};

	return _react2.default.createElement(
		'div',
		{ className: 'modal__display', style: modalStyle.modal__display },
		_react2.default.createElement(
			'div',
			{ className: 'modal__background' },
			'Modal',
			_react2.default.createElement(
				'div',
				{ className: 'modal__container' },
				_react2.default.createElement(
					'div',
					{ className: 'modal__header' },
					_react2.default.createElement(
						'h2',
						{ className: 'modal__title' },
						apiResponse.status === 200 || apiResponse.status === 201 ? 'Congratulations' : 'Something went wrong'
					),
					_react2.default.createElement(
						'button',
						{
							className: 'modal__closeButton',
							onClick: function onClick() {
								handleClick();
							}
						},
						'X'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'modal__body' },
					_react2.default.createElement(
						'p',
						null,
						apiResponse.statusText
					)
				)
			)
		)
	);
};

Modal.propTypes = {
	apiResponse: _propTypes.PropTypes.object,
	modal__display: _propTypes.PropTypes.object,
	redirectPath: _propTypes.PropTypes.string
};

Modal.defaultProps = {
	apiResponse: {
		status: 800,
		statusText: 'Default Message'
	},
	modal_display: {
		display: 'none'
	},
	redirectPath: '/'
};

exports.default = Modal;