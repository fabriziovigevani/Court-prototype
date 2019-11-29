import React from 'react'
import requestIcon from '../../assets/icono.svg'
import MainButton from '../MainButton'
import { Header } from '@aragon/ui'
import TaskBox from './TasksBox'

const Tasks = () => {
  return (
    <>
      <Header
        primary="Tasks"
        secondary={
          <MainButton
            label="Buy ANJ"
            onClick={() => {}}
            icon={<img src={requestIcon} height="30px" alt="" />}
          />
        }
      />
      <TaskBox />
    </>
  )
}

export default Tasks
