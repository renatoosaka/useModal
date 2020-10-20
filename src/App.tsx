import React from 'react';
import Modal, {ModalHeader, ModalBody, ModalFooter, useModal} from './components/Modal'

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <button onClick={toggle}>
        Modal 
      </button>

      <Modal {...{isShowing, toggle}}>
        <ModalHeader {...{toggle}}>
          My Title
        </ModalHeader>
        <ModalBody>
          Hello World!
        </ModalBody>
        <ModalFooter>
          <button onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>        
      </Modal>
    </div>
  );
}

export default App;
