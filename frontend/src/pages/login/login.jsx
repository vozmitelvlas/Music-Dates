import {Button, AuthFormError, Input} from "../../components";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../schemes/auth-schemes.js";
import {loginUserAsync} from "../../store/actions";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";

const LoginContainer = ({className}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [serverError, setServerError] = useState("")
    const {register, reset, handleSubmit, formState} = useForm({
        defaultValues: {
            number: "",
            password: "",
        },
        resolver: yupResolver(loginFormSchema)
    })

    const onSubmit = (formState) => {
        dispatch(loginUserAsync(formState)).then(userData => {
            if(userData){
                sessionStorage.setItem('userData', JSON.stringify(userData))
                navigate("/")
            }
        }).catch((error) => {
            setServerError(error.message)
        })
    }

    const formError = Object.values(formState.errors)[0]?.message
    const errorMessage = formError || serverError


    return (
        <div className={className}>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text">
                    Войдите в личный кабинет, чтобы
                    <div>записываться на события и создавать их.</div>
                </div>
                <div className="payload">
                    <Input type="tel" placeholder="Номер телефона"{...register('number')}/>
                    <Input type="password" placeholder="Пароль"{...register('password')}/>
                </div>
                <AuthFormError>{errorMessage}</AuthFormError>
                <div className="help">
                    <span>Забыли пароль?</span>
                    <span onClick={() => navigate('/register')}>Регистрация</span>
                </div>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    )
}


export const Login = styled(LoginContainer)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  height: 400px;
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
  }

  .help {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`