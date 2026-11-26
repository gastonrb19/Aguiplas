export function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function icon(name, className = "") {
  const node = element("span", `material-symbols-outlined ${className}`.trim(), name);
  node.setAttribute("aria-hidden", "true");
  return node;
}

export function makeLink(href, label, className = "", nav = "") {
  const link = element("a", className, label);
  link.href = href;
  if (nav) link.dataset.nav = nav;
  return link;
}

export function defineElement(name, Component) {
  if (!customElements.get(name)) customElements.define(name, Component);
}

export function staticTemplate(markup) {
  const template = document.createElement("template");
  template.innerHTML = markup;
  return template.content.cloneNode(true);
}

export function enableTabArrowNavigation(container, selector) {
  container.addEventListener("keydown", (event) => {
    const tabs = [...container.querySelectorAll(selector)];
    const current = tabs.indexOf(event.target);
    if (current < 0) return;
    let next = current;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  });
}
