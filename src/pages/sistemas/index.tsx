import { Button, FormControlLabel, makeStyles, Paper, Switch, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    flex: '0 1 25rem',
    // height: '20rem',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    '& form': {
      marginTop: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // height: '20rem',

      '& div': {
        marginBottom: '1rem',
      },
      '& label': {
        marginBottom: '1rem',
      },
    },
  },
}));

interface IFormData {
  nome: string;
  ativo: boolean;
}

const Sistema = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm<IFormData>();

  const submitForm = handleSubmit(async (data, event) => {
    event?.preventDefault();
    console.log(data);

    await axios.post('http://localhost:8080/sistemas', data)

    reset({nome: '', ativo: true})
    alert('Sistema inserido com sucesso!')
  });

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Cadastro de Sistema</Typography>
        <form onSubmit={submitForm} noValidate autoComplete="off">
          <TextField label="Informe o nome do sistema" name="nome" variant="outlined" inputRef={register} required autoFocus />
          <FormControlLabel label="Sistema Ativo ?" control={<Switch name="ativo" inputRef={register} defaultChecked />} />
          <Button type="submit" fullWidth color="primary" variant="contained">
            salvar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Sistema;
