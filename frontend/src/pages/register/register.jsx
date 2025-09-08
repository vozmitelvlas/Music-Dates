import {Button, AuthFormError, Input} from "../../components/index.js";
import {registerFormSchema} from "../../schemes/auth-schemes.js";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {registerUserAsync} from "../../store/actions/index.js";

const RegisterContainer = ({className}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [serverError, setServerError] = useState("")
    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
            name: "",
            number: "",
            city: "",
            password: "",
            repeatPassword: "",
        },
        resolver: yupResolver(registerFormSchema)
    })

    const onSubmit = ({repeatPassword, ...formState}) => {
        dispatch(registerUserAsync(formState)).then(userData => {
            sessionStorage.setItem('userData', JSON.stringify(userData))
            navigate("/")
        }).catch((error) => {
            setServerError(error.message)
        })
    }

    const formError = Object.values(formState.errors)[0]?.message
    const errorMessage = formError || serverError

    return (
        <div className={className}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text">
                    Если Вы уже зарегистрированы,
                    <div>перейдите на страницу <span className="login" onClick={() => navigate('/login')}>
                    входа в систему.</span>
                    </div>
                </div>
                <div className="payload">
                    <div className="field">
                        <label htmlFor="name">
                            <span>*</span>Имя
                        </label>
                        <Input id="name" type="text" {...register('name')} width="100%"/>
                    </div>
                    <div className="field">
                        <label htmlFor="number">
                            <span>* </span>Телефон
                        </label>
                        <Input id="number" type="tel" {...register('number')} width="100%"/>
                    </div>
                    <div className="field">
                        <label htmlFor="city">
                            <span>* </span>Ваш город
                        </label>
                        <Input id="city" type="text" {...register('city')} width="100%"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">
                            <span>* </span>Пароль
                        </label>
                        <Input id="password" type="password" {...register('password')} width="100%"/>
                    </div>
                    <div className="field">
                        <label htmlFor="repeat-password">
                            <span>* </span>Повторите пароль
                        </label>
                        <Input id="repeat-password" type="password" {...register('repeatPassword')} width="100%"/>
                    </div>
                </div>
                <AuthFormError $margin="10px 0">{errorMessage}</AuthFormError>
                <Button type="submit">Зарегистрироваться</Button>
            </form>
        </div>
    )
}

export const Register = styled(RegisterContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
  border-radius: 8px;
  width: 500px;
  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-top: 20px;
  }

  h1 {
    margin-top: 0;
    font-weight: 800;
    font-size: 30px;
  }

  .text {
    text-align: center;
    color: #9b9b9b;
    font-size: 18px;
  }

  .payload {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
  }

  .field {
    display: flex;
    width: 100%;
    align-items: center;
    label{
      display: flex;
      width: 150px;
    }
  }

  .login {
    text-decoration: underline;
    cursor: pointer;
  }
`