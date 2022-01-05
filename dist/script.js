/* __ DATACENTER __ */

const db = [
{
  type: `folder`,
  name: `Samak`,
  items: [
  {
    type: `file`,
    name: `Attendance`,
    src: `https://codepen.io/miko-github/full/QWMmbxp` },

  {
    type: `file`,
    name: `Logo Motion`,
    src: `https://codepen.io/miko-github/full/abyYGmN` }] },



{
  type: "folder",
  name: "YEK",
  items: [
  {
    type: "folder",
    name: "Objects",
    items: [
    {
      type: "file",
      name: "Password Fields Effect",
      src: `https://codepen.io/miko-github/full/mdBORvg` },

    {
      type: "file",
      name: "Primary Buttons Effect",
      src: `https://codepen.io/miko-github/full/PoJQBRL` },

    {
      type: "file",
      name: "Motion Concepts Form Sliding - Horizontally",
      src: `https://codepen.io/miko-github/full/KKXWYad` },

    {
      type: "file",
      name: "Motion Concepts Form Sliding - Vertically",
      src: `https://codepen.io/miko-github/full/abLJPgK` }] },




  {
    type: "file",
    name: "Login/Signin Form",
    src: "https://codepen.io/miko-github/full/eYGBwGz" },

  {
    type: "file",
    name: "Verification Form",
    src: "https://codepen.io/miko-github/full/wvrdpJZ" },

  {
    type: `file`,
    name: `Calendar`,
    src: `https://codepen.io/miko-github/full/BaWLyMB` }] },



{
  type: `folder`,
  name: `Personal`,
  items: [
  {
    type: `folder`,
    name: `Object`,
    items: [
    {
      type: `file`,
      name: `Concept Window`,
      src: `https://codepen.io/miko-github/full/eYGMWQw` },

    {
      type: `file`,
      name: `Concept Folder`,
      src: `https://codepen.io/miko-github/full/dyVmNrK` },

    {
      type: `file`,
      name: `Concept File`,
      src: `https://codepen.io/miko-github/full/NWaYjpX` }] },



  {
    type: `file`,
    name: `Contextmenu`,
    src: `https://codepen.io/miko-github/full/MWEQLPd` },

  {
    type: `file`,
    name: `Profile`,
    src: `https://codepen.io/miko-github/full/mdmQedQ` },

  {
    type: `file`,
    name: `Mini Music Player`,
    src: `https://codepen.io/miko-github/full/gORYWeQ` },

  {
    type: `file`,
    name: `3D SOCIAL MEDIA ICON`,
    src: `https://codepen.io/miko-github/full/NWpMwXd` },

  {
    type: `file`,
    name: `Loading`,
    src: `https://codepen.io/miko-github/full/rNwOwEW` },

  {
    type: `file`,
    name: `not-complte`,
    src: `https://codepen.io/miko-github/full/dyzaRjN` },

  {
    type: `file`,
    name: `Codepen Redesign`,
    src: `https://codepen.io/miko-github/full/vYxrJmG` }] }];





/* __ RENDER __ */

const App = () => {
  const [state, setState] = React.useState({
    isWindowOpen: false,
    data: {},
    currentWindowName: ``,
    currentFolderPath: "",
    currentFilePath: "" });


  const handleToggleFolder = ([currentState, setToggle], data, current) => {
    setToggle(!currentState);
    setState(state => ({
      isWindowOpen: true,
      data: data,
      currentWindowName: current }));

  };
  const handleToggleFile = ([currentState, setToggle], data, current) => {
    setToggle(!currentState);
    setState(state => ({
      isWindowOpen: true,
      data: data,
      currentWindowName: current }));

  };
  const handleCloseWindow = () => {
    setState(state => ({ isWindowOpen: false, data: {} }));
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null,
    db.map(
    (item) =>
    item.type === "folder" && /*#__PURE__*/
    React.createElement(Folder, {
      handleToggle: handleToggleFolder,
      name: item.name,
      items: item.items }) || /*#__PURE__*/


    React.createElement(File, {
      handleToggle: handleToggleFile,
      name: item.name,
      src: item.src })), /*#__PURE__*/




    React.createElement(Window, {
      handleClose: handleCloseWindow,
      isOpen: state.isWindowOpen,
      data: state.data,
      name: state.currentWindowName,
      handleToggleFolder: handleToggleFolder,
      handleToggleFile: handleToggleFile })));



};

/* __ COMPONENTS __ */

/*
<Folder /> 
================= */
function Folder({
  handleToggle,
  name = "New Folder",
  items = [],
  isEmpty = false })
{
  const [openState, setToggle] = React.useState(false);

  return /*#__PURE__*/(
    React.createElement("div", {
      onClick: () => {
        handleToggle(
        [openState, setToggle],
        {
          view: "folder",
          data: items },

        name);

      },
      className: classJoin(
      `folder`,
      classIf(isEmpty, `folder--empty`),
      classIf(openState, `folder--open`)),

      tabindex: "1" }, /*#__PURE__*/

    React.createElement("header", { className: "folder__header" }, /*#__PURE__*/
    React.createElement("span", null, name)), /*#__PURE__*/

    React.createElement("div", { className: "folder__icon" }, /*#__PURE__*/
    React.createElement("div", { className: "folder__badge" }), /*#__PURE__*/
    React.createElement("div", { className: "folder__back" }), /*#__PURE__*/
    React.createElement("div", { className: "folder__thumb" }), /*#__PURE__*/
    React.createElement("div", { className: "folder__front" }))));



}

/*
<File /> 
================= */
function File({ name = "New File", src, handleToggle }) {
  const [openState, setToggle] = React.useState(false);

  return /*#__PURE__*/(
    React.createElement("div", {
      onClick: () =>
      handleToggle([openState, setToggle], { view: "file", data: src }, name),

      className: `file ${classIf(openState, `file--open`)}`,
      tabindex: "1" }, /*#__PURE__*/

    React.createElement("header", { className: "file__header" }, /*#__PURE__*/
    React.createElement("span", null, name)), /*#__PURE__*/

    React.createElement("div", { className: "file__icon" })));


}

/*
<WindowFolder /> 
================= */
function WindowFolderView({ data, handleToggleFile, handleToggleFolder }) {
  return /*#__PURE__*/(
    React.createElement("ul", { className: "window__files" },
    data && data.length !== 0 ?
    data.map((item) => /*#__PURE__*/
    React.createElement("li", { className: "window__file" },
    item.type === `folder` ? /*#__PURE__*/
    React.createElement(Folder, {
      handleToggle: handleToggleFolder,
      name: item.name,
      items: item.items }) : /*#__PURE__*/


    React.createElement(File, {
      handleToggle: handleToggleFile,
      name: item.name,
      src: item.src }))) : /*#__PURE__*/





    React.createElement("span", null, "Empty Files")));



}

/*
<WindowFile /> 
================= */
function WindowFileView({ data }) {
  return /*#__PURE__*/(
    React.createElement("iframe", {
      className: "window__content",
      title: "IFrame",
      width: "300",
      height: "200",
      src: data }));


}

/*
Movable
================= */
let globalState = {
  isMovable: false };

let rootStyle = document.documentElement.style;
document.documentElement.onmousemove = ev => {
  if (!globalState.isMovable) return;

  let positionX = ev.clientX;
  let positionY = ev.clientY;

  rootStyle.setProperty("--window-position-x", `${positionX}px`);
  rootStyle.setProperty("--window-position-y", `${positionY}px`);
};

/*
<Window /> 
================= */
function Window({
  handleClose,
  isOpen,
  data,
  handleToggleFile,
  handleToggleFolder,
  name = `App` })
{
  const [openState, setToggle] = React.useState(isOpen);
  const [viewType, setViewType] = React.useState(data.view);
  const [isMovable, setIsMovable] = React.useState(globalState.isMovable);
  const [isCollaps, setIsCollaps] = React.useState(false);

  const handleMouseDown = () => {
    globalState.isMovable = true;
    setIsMovable(true);
  };
  const handleMouseUp = () => {
    globalState.isMovable = false;
    setIsMovable(false);
  };
  function handleCollaps() {
    setIsCollaps(current => !current);
  }
  function handleCloseButton() {
    setIsCollaps(false);
    handleClose();
  }

  return /*#__PURE__*/(
    React.createElement("div", {
      className: classJoin(
      `window`,
      classIf(isOpen, `window--open`),
      classIf(isCollaps && isOpen, `window--collaps`),
      classIf(isMovable, `window--movable`)) }, /*#__PURE__*/


    React.createElement("header", {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      className: "window__header" }, /*#__PURE__*/

    React.createElement("div", { className: "window__actions" }, /*#__PURE__*/
    React.createElement("button", {
      className: "window__btn window__btn--close",
      onClick: () => handleCloseButton() }), /*#__PURE__*/

    React.createElement("button", {
      className: "window__btn window__btn--minimum",
      onClick: () => handleCollaps() }), /*#__PURE__*/

    React.createElement("button", {
      className: "window__btn window__btn--maximum",
      onClick: () => handleCloseButton() }), /*#__PURE__*/

    React.createElement("button", { className: "window__btn window__btn--backward", ss: true }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-chevron-left" })), /*#__PURE__*/

    React.createElement("button", { className: "window__btn window__btn--forward", ss: true }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-chevron-right" }))), /*#__PURE__*/


    React.createElement("span", { className: "window__title" }, name)), /*#__PURE__*/

    React.createElement("main", {
      className: classJoin(
      `window__view`,
      classIf(data && data.view === "file", "window__view--iframe")) },


    data ?
    data.view === `file` || viewType === `file` ? /*#__PURE__*/
    React.createElement(WindowFileView, { data: data.data }) : /*#__PURE__*/

    React.createElement(WindowFolderView, {
      data: data.data,
      handleToggleFolder: handleToggleFolder,
      handleToggleFile: handleToggleFile }) : /*#__PURE__*/



    React.createElement("span", null, "Hi!"))));




}

// TODO : give credit from => https://codepen.io/miko-github/pen/MWEQLPd?editors=0100
function Contextmenu() {
  retturn("");
}

// TODO : make credit from => https://codepen.io/syndicatefx/pen/RwZdgGa

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("blog-os"));

// UTILS //

function classJoin(...classList) {
  return classList.join(" ");
}

function classIf(statement, ifTrue, ifFalse = "") {
  return statement ? ifTrue : ifFalse;
}

/* __ REAL DOM __ */
window.oncontextmenu = e => {
  // e.preventDefualt();
  return false;
};