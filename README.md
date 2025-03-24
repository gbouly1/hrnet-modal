# hrnet-modal

> A simple React library for displaying modals with customizable styles. This Modal component can be used in any React application to display modal dialogs with overlay and a close button.
> IDE : VSCode
> Node version : 22.14

## Install

```bash
npm install hrnet-net-gbouly
```

## Use

```jsx
import React, { useState } from "react";
import Modal from "hrnet-net-gbouly";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <h1>Hello, this is a modal!</h1>
      </Modal>
    </div>
  );
};

export default App;
```

## Custom

```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title="Custom Modal"
  style={{
    container: {
      backgroundColor: "#f8f9fa",
      borderRadius: "16px",
    },
  }}
>
  <p>Content with a customized modal</p>
</Modal>
```

| Prop       | Type     | Required | Description                                 |
| ---------- | -------- | -------- | ------------------------------------------- |
| `isOpen`   | Boolean  | Yes      | Controls the visibility of the modal        |
| `onClose`  | Function | Yes      | Function called when the modal should close |
| `title`    | String   | Yes      | Title displayed in the modal header         |
| `children` | Node     | No       | Content to display in the modal body        |
| `style`    | Object   | No       | Custom styles for the modal                 |
