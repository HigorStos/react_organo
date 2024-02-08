import styles from './TextLabel.module.css'

const TextLabel = (props) => {
  return (
    <div className={styles.text_label}>
      <label>
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={(e) => props.typed(e.target.value)}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextLabel
