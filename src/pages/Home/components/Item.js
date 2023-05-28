const Item = ({ id, note, date, time, delete_data, submitting_status }) => {
  function delete_item() {
    submitting_status.current = true;
    delete_data(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>

      <button className="remove" onClick={delete_item}>
        刪除
      </button>
    </div>
  );
};

export default Item;
