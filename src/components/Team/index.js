import Collaborator from '../Collaborator'
import styles from './Team.module.css'

const Team = (props) => {
  return (
    props.collaborators.length > 0 && <section className={styles.team} style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className={styles.collaborators}>
        {props.collaborators.map(collaborator => 
          <Collaborator
            key={collaborator.name}
            name={collaborator.name}
            role={collaborator.role}
            image={collaborator.image}
            bgColor={props.primaryColor}
          />
        )}
      </div>
    </section>
  )
}

export default Team
