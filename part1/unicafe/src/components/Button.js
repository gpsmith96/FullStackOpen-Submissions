
function Button(props) {

  return (
    <input type="button" value={props.text} onClick={props.onClick}/>
  );
}

export default Button;
