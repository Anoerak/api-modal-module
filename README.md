# api-modal-for-react

> A modal component for displaying API responses in React. This package is part of the OpenClassrooms' Front-End Developer path. It is not meant to be used outside of this context. Once the path is completed, and the project validated, this package won't be maintained.

[![NPM](https://img.shields.io/npm/v/api-modal-for-react.svg)](https://www.npmjs.com/package/api-modal-for-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install api-modal-for-react
```

## Usage

```tsx
import Modal from 'api-modal-module';

const App = () => {

	// Variables for the Modal Node Package
	const [showModal, setShowModal] = useState({ display: 'none' });
	const [apiResponse, setApiResponse] = useState({ status: 418, statusText: "I'm a teapot", data: {} });
	const [redirectPath, setRedirectPath] = useState('/');


  return (
	<div>
		<Modal apiResponse={apiResponse} modal__display={showModal} />
			<div>Modal Content</div>
	  	</Modal>
	</div>
  );
};
```

## Props

```bash
| Prop Name        | Type   | Description                                        |
| ---------------- | ------ | -------------------------------------------------- | ----------------------------------------------------------- |
| apiResponse      | object | The response from the API call.                    | e.g.: { status: 418, statusText: "I'm a teapot", data: {} } |
| modal\display | object | The display property for the modal.                | e.g.: { display: 'flex'/'none' },                           |
| redirectPath     | string | The path to redirect to after the modal is closed. | e.g.: '/'                                                   |
```

## License

MIT © [Anoerak](https://github.com/Anoerak)

---
