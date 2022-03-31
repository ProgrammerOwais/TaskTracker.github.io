import Button from "./Button";

function Header({ showHide, showAdd }) {
  let fu = () => {
    console.log("you clicked the function");
  };
  return (
    <div>
      <h1>Task Tracker</h1>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        showHide={showHide}
      />
    </div>
  );
}
export default Header;
