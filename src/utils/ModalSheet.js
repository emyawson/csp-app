import React, { useState } from 'react';
import Modal, {
  Sheets, ModalHeader, ModalFooter, ModalBody,
} from '@ingka/modal';

import '@ingka/svg-icon/style.scss';
import '@ingka/button/style.scss';
import '@ingka/modal/style.scss';
import '@ingka/focus/style.scss';
import Button from '@ingka/button';

const ModalSheet = ({ text, body, title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <>
      <Button onClick={() => setModalOpen(true)} text={text}/>
        <Modal
          visible={modalOpen}
          handleCloseBtn={() => setModalOpen(false)}
        >
          <Sheets
            header={
              <ModalHeader title={title}
              />
            }
          >
            <ModalBody>
              <p>{body}</p>
            </ModalBody>
          </Sheets>
        </Modal>
        </>
  );
};

export default ModalSheet;
