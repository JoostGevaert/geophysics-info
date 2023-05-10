// From Flowbite Collapse:
// https://github.com/themesberg/flowbite/blob/main/src/components/collapse/index.ts

interface CollapseOptions {
  onCollapse?: () => void;
  onExpand?: () => void;
  onToggle?: () => void;
}

export class Collapse {
  _targetEl: HTMLElement;
  _triggerEl: HTMLElement;
  _options: CollapseOptions;
  _visible: boolean;

  constructor(
    targetEl: HTMLElement,
    triggerEl: HTMLElement,
    options?: CollapseOptions
  ) {
    this._targetEl = targetEl;
    this._triggerEl = triggerEl;
    this._options = { ...options };
    this._visible = false;
    this._init();
  }

  _init(): void {
    if (this._triggerEl.hasAttribute("aria-expanded")) {
      this._visible = this._triggerEl.getAttribute("aria-expanded") === "true";
    } else {
      this._visible = !this._targetEl.classList.contains("hidden");
    }

    this._triggerEl.addEventListener("click", () => {
      this.toggle();
    });
  }

  collapse(): void {
    this._targetEl.classList.add("hidden");
    this._triggerEl.setAttribute("aria-expanded", "false");
    this._visible = false;

    // callback function
    if (this._options.onCollapse != null) {
      this._options.onCollapse();
    }
  }

  expand(): void {
    this._targetEl.classList.remove("hidden");
    this._triggerEl.setAttribute("aria-expanded", "true");
    this._visible = true;

    // callback function
    if (this._options.onExpand != null) {
      this._options.onExpand();
    }
  }

  toggle(): void {
    if (this._visible) {
      this.collapse();
    } else {
      this.expand();
    }

    // callback function
    if (this._options.onToggle != null) {
      this._options.onToggle();
    }
  }
}
