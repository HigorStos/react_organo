import styles from './DropdownList.module.css'

const DropdownList = (props) => {
  return (
    <div className={styles.dropdown}>
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(e) => props.typed(e.target.value)}
        required={props.required}
      >
      <option value=''></option>
        {props.items.map(
            (item) => <option key={item}>{item}</option>
        )}
      </select>
    </div>
  )
}

export default DropdownList
