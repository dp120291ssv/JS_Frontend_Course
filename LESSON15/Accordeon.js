class Accordeon {
  static CONTENT_CLASS = "accordeon-content";
  static TITLE_CLASS = "accordeon-title";
  static VISIBLE_CLASS = "accordeon-visible";

  constructor(container) {
    this._container = container;
    this.bindClasses();
    this.bindEventListener();
  }

  bindClasses() {
    const contentElements = this._container.querySelectorAll(".content");
    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].classList.add(Accordeon.CONTENT_CLASS);
    }
    const titleElements = this._container.querySelectorAll(".title");
    for (let i = 0; i < titleElements.length; i++) {
      titleElements[i].classList.add(Accordeon.TITLE_CLASS);
    }
  }

  bindEventListener() {
    this._container.addEventListener("click", (event) => {
      this.toggleItem(event.target.parentNode.classList);
    });
  }

  toggleItem(targetElement) {
    if (targetElement.contains(Accordeon.VISIBLE_CLASS)) {
        targetElement.remove(Accordeon.VISIBLE_CLASS);
    } else {
      this._container.querySelectorAll(".title").forEach((child) => child.parentNode.classList.remove(Accordeon.VISIBLE_CLASS));
      targetElement.add(Accordeon.VISIBLE_CLASS);
    }
  }
}
