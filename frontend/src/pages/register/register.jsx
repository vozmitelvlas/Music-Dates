import {Button, Error, Input} from "../../components/index.js";
import {registerFormSchema} from "../../schemas.js";
import {yupResolver} from "@hookform/resolvers/yup";
import {apiClient} from "../../utils/index.js";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {registerUserAsync} from "../../actions/index.js";

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

    const onSubmit = (formState) => {
        dispatch(registerUserAsync(formState)).then(() => {
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
                    <div>
                        <label htmlFor="name">
                            <span>* </span>Имя
                        </label>
                        <Input name="name" type="text" {...register('name')}/>
                    </div>
                    <div>
                        <label htmlFor="number">
                            <span>* </span>Телефон
                        </label>
                        <Input name="number" type="tel" {...register('number')}/>
                    </div>
                    <div>
                        <label htmlFor="ciy">
                            <span>* </span>Ваш город
                        </label>
                        <Input name="city" type="text" {...register('city')}/>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span>* </span>Пароль
                        </label>
                        <Input name="password" type="password" {...register('password')}/>
                    </div>
                    <div>
                        <label htmlFor="repeat-password">
                            <span>* </span>Повторите пароль
                        </label>
                        <Input name="repeat-password" type="password" {...register('repeatPassword')}/>
                    </div>
                </div>
                <Error $margin="10px 0">{errorMessage}</Error>
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
  }

  .login {
    text-decoration: underline;
    cursor: pointer;
  }
`