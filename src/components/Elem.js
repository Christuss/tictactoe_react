
import './Elem.css'

function Elem(props) {

  function click() {
    console.log('pop');
    props.click(props.index)
  }

  return (
    <div className="Elem" onClick={click}>
      <p>{props.ertek}</p>
    </div>
  );
}

export default Elem;
