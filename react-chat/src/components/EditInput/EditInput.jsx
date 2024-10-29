import React from "react";
import styles from "./EditInput.module.scss";

const EditInput = ({ labelName, value, onChange, readOnly, extra }) => {
    return (
      <div className={styles.inputPlace}>
        <label className={styles.label}>{labelName}</label>
        <input
          type="text"
          value={value}
          className={styles.input}
          onChange={e => onChange(e.target.value)}
          readOnly={readOnly}
        />
      </div>
    )
  }

export default EditInput;