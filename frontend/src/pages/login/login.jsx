import {Button, Error, Input} from "../../components";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginFormSchema} from "../../schemas.js";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {apiClient} from "../../utils";
import {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {loginUserAsync} from "../../actions/index.js";

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
        dispatch(loginUserAsync(formState)).then(() => {
            navigate("/")
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
                    <Input type="tel" placeholder="Номер телефона"
                           {...register('number')}
                    />
                    <Input type="password" placeholder="Пароль"
                           {...register('password')}
                    />
                </div>
                <Error>{errorMessage}</Error>
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
  margin: 0 auto;

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