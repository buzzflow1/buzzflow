class Modal {
  constructor(modal, overlay, buttons = {}) {
    this.overlay = overlay;
    this.modal = modal;
    this.openButton = buttons.openButton;
    // this.closeButton = buttons.closeButton;
  }

  setEventListeners() {
    // this.closeButton.addEventListener('click', this.close.bind(this))
    this.overlay.addEventListener('click', this.close.bind(this))
    this.openButton.addEventListener('click', this.open.bind(this))
  }

  open() {
    this.overlay.classList.remove('is-hidden');
    this.modal.classList.remove('is-hidden')
  }

  close() {
    this.overlay.classList.add('is-hidden');
    this.modal.classList.add('is-hidden');
  }
}