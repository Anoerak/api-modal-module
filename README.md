# api-modal-for-react

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
| modal\_\_display | object | The display property for the modal.                | e.g.: { display: 'flex'/'none' },                           |
| redirectPath     | string | The path to redirect to after the modal is closed. | e.g.: '/'                                                   |
```

## License

MIT © [Anoerak](https://github.com/Anoerak)

---
