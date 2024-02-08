import styles from './Collaborator.module.css'

const Collaborator = ({ name, role, image, bgColor }) => {
  return (  
    <div className={styles.collaborator}>
      <div className={styles.header} style={{backgroundColor: bgColor}}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default Collaborator
