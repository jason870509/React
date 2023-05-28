import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submitting_status }) => {
  const [note, set_note] = useState("");
  const [date, set_date] = useState("");
  const [time, set_time] = useState("");

  function note_change(e) {
    // Note Onchange Event
    set_note(e.target.value);
  }

  function date_change(e) {
    // Date Onchange Event
    set_date(e.target.value);
  }

  function time_change(e) {
    // Time Onchange Event
    set_time(e.target.value);
  }

  function addItem() {
    submitting_status.current = true;
    add(function (prev) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prev,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事: </p>
      <input type="text" value={note} onChange={note_change} />
      <p>日期</p>
      <input type="date" value={date} onChange={date_change} />
      <p>時間</p>
      <input type="time" value={time} onChange={time_change} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
