import React from "react";
import { useState } from "react";

const Landing = () => {
  const [item1, setItem1] = useState("");
  const [itemArr1, setItemArr1] = useState(["Hello", "hi"]);

  const [item2, setItem2] = useState("");
  const [itemArr2, setItemArr2] = useState(["Welcome"]);

  const addItem1 = (e) => {
    e.preventDefault();
    console.log("Hello from Add");
    setItemArr1([...itemArr1, item1]);
  };

  const handleChange1 = (e) => {
    setItem1(e.target.value);
  };

  const addItem2 = (e) => {
    e.preventDefault();
    console.log("Hello from Add");
    setItemArr2([...itemArr2, item2]);
  };

  const handleChange2 = (e) => {
    setItem2(e.target.value);
  };

  const drag = (e, id) => {
    console.log("dragstart : " + id);
    e.dataTransfer.setData("text/plain", id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drop = (e, bag) => {
    e.preventDefault();
    console.log("dropped in:" + bag);
    var data = e.dataTransfer.getData("text/plain");
    console.log("data :" + data);
    if (bag === "bag1") {
      const filteredArray = itemArr2.filter((itemx) => itemx !== data);
      const addArray = [...itemArr1, data];
      console.log(filteredArray + addArray);
      setItemArr1(addArray);
      setItemArr2(filteredArray);
    } else {
      if (bag === "bag2") {
        const filteredArray = itemArr1.filter((itemx) => itemx !== data);
        const addArray = [...itemArr2, data];
        console.log(filteredArray + addArray);
        setItemArr2(addArray);
        setItemArr1(filteredArray);
      }
    }
  };

  return (
    <div className="landing-container">
      <section className="section-gen section-1">
        <h1>LIST BAG 1</h1>
        <form>
          <input
            type="text"
            value={item1}
            placeholder="item name"
            onChange={handleChange1}
          ></input>
          <button className="btn" onClick={addItem1}>
            Add Item
          </button>
        </form>
        <ul
          className="list-bag1"
          onDrop={(e) => drop(e, "bag1")}
          onDragOver={(e) => allowDrop(e)}
        >
          {itemArr1.length > 0
            ? itemArr1.map((myItem, index) => {
                let mtag = `idA${index}`;
                let mkey = `itemA${index}`;
                console.log("myItem:" + myItem);
                console.log(mtag + " " + mkey);
                return (
                  <li
                    id={mtag}
                    key={mkey}
                    draggable="true"
                    onDragStart={(e) => drag(e, myItem)}
                  >
                    {myItem}
                  </li>
                );
              })
            : null}
        </ul>
      </section>
      <section className="section-gen section-2">
        <h1>LIST BAG 2</h1>
        <form>
          <input
            type="text"
            value={item2}
            placeholder="item name"
            onChange={handleChange2}
          ></input>
          <button className="btn" onClick={addItem2}>
            Add Item
          </button>
        </form>
        <ul
          className="list-bag2"
          onDrop={(e) => drop(e, "bag2")}
          onDragOver={(e) => allowDrop(e)}
        >
          {itemArr2.length > 0
            ? itemArr2.map((myItem, index) => {
                let mtag = `idB${index}`;
                let mkey = `itemB${index}`;
                console.log(mtag + " " + mkey);
                return (
                  <li
                    id={mtag}
                    key={mkey}
                    draggable="true"
                    onDragStart={(e) => drag(e, myItem)}
                  >
                    {myItem}
                  </li>
                );
              })
            : null}
        </ul>
      </section>
    </div>
  );
};

export default Landing;
