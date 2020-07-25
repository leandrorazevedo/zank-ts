import { yupResolver } from '@hookform/resolvers';
import { Button, FormControlLabel, Paper, Switch, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import helper, { ISistemasFormData } from './helper';

const Sistema = () => {
    const classes = helper.useStyles();
    const { register, handleSubmit, reset, errors } = useForm<ISistemasFormData>({
        defaultValues: helper.defaultValues,
        resolver: yupResolver(helper.schema),
    });

    // const submitForm = handleSubmit( async (data: ISistemasFormData, event: React.BaseSyntheticEvent | undefined) => {
    const submitForm = handleSubmit(async (data, event) => {
        event?.preventDefault();
        console.log(data);

        await axios.post('http://localhost:8080/sistemas', data);

        reset({ ...helper.defaultValues });
        alert('Sistema inserido com sucesso!');
    });

    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <Typography variant='h4'>Cadastro de Sistema</Typography>
                <form onSubmit={submitForm} className={classes.form} noValidate autoComplete='off'>
                    <TextField
                        label='Informe o nome do sistema'
                        name='nome'
                        variant='outlined'
                        error={!!errors.nome}
                        helperText={errors.nome?.message}
                        inputRef={register}
                        fullWidth
                        required
                        autoFocus
                    />
                    <FormControlLabel
                        label='Sistema Ativo ?'
                        control={<Switch name='ativo' inputRef={register} defaultChecked />}
                    />
                    <Button type='submit' className={classes.button} color='primary' variant='contained' fullWidth >
                        salvar
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default Sistema;
