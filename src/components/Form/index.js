import { useState } from 'react'

import TextLabel from '../TextLabel'
import DropdownList from '../DropdownList'
import Button from '../Button'

import styles from './Form.module.css'

const Form = (props) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const saveForm = (e) => {
    e.preventDefault()
    props.registerCollaborator({
      name,
      role,
      image,
      team
    })

    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }

  return (
    <section className={styles.form}>
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextLabel
          value={name}
          typed={value => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextLabel
          value={role}
          typed={value => setRole(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextLabel
          value={image}
          typed={value => setImage(value)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <DropdownList
          value={team}
          typed={value => setTeam(value)}
          required={true}
          label="Time"
          items={props.teams} />
        <Button>
          Criar Card
        </Button>
      </form>
    </section> 
  )
}

export default Form
