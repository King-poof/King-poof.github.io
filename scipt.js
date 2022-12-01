$("#home").click(function () {
	$(".slide").toggle();
});

class LOL extends HTMLElement {
    constructor() {
      super()
      this.addEventListener('click', e => {
          alert('You Clicked Me!')
      });
      this.innerText="Hello There!"
    }
  }
  window.customElements.define('frfr', LOL);