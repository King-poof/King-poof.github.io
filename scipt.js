$("#home").click(function () {
	$(".slide").toggle();
});

class CodingDudeGravatar extends HTMLElement {
    constructor() {
      super()
      this.addEventListener('click', e => {
          alert('You Clicked Me!')
      });
      this.innerText="Hello There!"
    }
  }
  window.customElements.define('codingdude-gravatar', CodingDudeGravatar);