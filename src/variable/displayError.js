import dispatchUpdate from "./dispatchUpdate";

export default function displayError(variable, error) {
  var node = variable._node;
  if (!node) return;
  node.className = "d3 d3--error";
  node.textContent = error + ""; // TODO Pretty stack trace.
  dispatchUpdate(node);
}
