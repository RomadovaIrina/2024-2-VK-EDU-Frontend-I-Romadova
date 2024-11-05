import React from "react";
import styles from "./EditInput.module.scss";

const handleChange = (e) => onChange(e.target.value)

const EditInput = ({ labelName, value, onChange, readOnly }) => {
    return (
      <div className={styles.inputPlace}>
        <label className={styles.label}>{labelName}
        <input
          type="text"
          value={value}
          className={styles.input}
          onChange={handleChange}
          readOnly={readOnly}
        />
        </label>
      </div>
    )
  }

export default EditInput;