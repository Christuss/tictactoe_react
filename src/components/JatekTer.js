
import Elem from "./Elem";

function JatekTer(props) {


  function click(index) {
    console.log("pop9");
    props.click(index);
  }

  return (
    <div className="JatekTer">
      {
        props.list.map((e, i) => {
            return <Elem ertek={e} click={click} key = {i} index = {i} />
        })
      }
    </div>
  );
}

export default JatekTer;
