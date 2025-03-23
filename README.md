# hrnet-modal

Installation :

npm install hrnet-modal-gbouly

yarn add hrnet-net-gbouly

Props > Type > Required

isOpen > boolean > yes
onClose > function > yes
title > string > yes

- Close with Escape key
- Close by clicking outside the modal
- Automatic focus and accessibility management
- Prevents page scrolling when the modal is open
- Responsive design

Example :

<!--
<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  title="Modal personnalisée"
  style={{
    container: {
      backgroundColor: '#f8f9fa',
      borderRadius: '16px'
    }
  }}
>
  <p>Contenu avec une modal personnalisée</p>
</Modal>
-->

Licence ISC
