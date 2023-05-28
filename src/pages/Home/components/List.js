import Item from "./Item";

const List = ({ list_data, delete_data, submitting_status }) => {
  // console.log("list_data: ", list_data);
  return (
    <div className="list">
      {list_data.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            delete_data={delete_data}
            submitting_status={submitting_status}
          />
        );
      })}
    </div>
  );
};

export default List;
