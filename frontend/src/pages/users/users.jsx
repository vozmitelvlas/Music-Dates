import {deleteUserAsync, getRolesASync, getUsersAsync} from "../../api";
import {checkAccess} from "../../utils/check-access.js";
import {selectUserRole} from "../../store/selectors";
import {SearchPanel, UsersTable} from "./components";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ROLE} from "../../constants";
import styled from "styled-components";

const UsersContainer = ({className}) => {
    const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const userRole = useSelector(selectUserRole)
    const [roles, setRoles] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (!checkAccess([ROLE.ADMIN], userRole)) return

        Promise.all([
            getUsersAsync(),
            getRolesASync(),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error)
                return
            }
            setUsers(usersRes)
            setRoles(rolesRes)
        })
    }, [shouldUpdateUsers, userRole])

    const onUserRemove = (id) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) return

        deleteUserAsync(id).then(() =>
            setShouldUpdateUsers(!shouldUpdateUsers)
        )
    }

    return (
        <div className={className}>
            <SearchPanel/>
            <table className="table-fill">
                <thead>
                <tr>
                    <th><strong>Доступ</strong></th>
                    <th><strong>Имя</strong></th>
                    <th><strong>Номер</strong></th>
                    <th><strong>Дата регистрации</strong></th>
                    <th><strong>Роль</strong></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map(({id, name, number, registeredAt, roleId}) => (
                    <UsersTable
                        key={id}
                        id={id}
                        number={number}
                        name={name}
                        registeredAt={registeredAt}
                        roleId={roleId}
                        roles={roles}
                        onUserRemove={() => onUserRemove(id)}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export const Users = styled(UsersContainer)`
  color: #fff;
  justify-content: space-between;
  width: 100%;
  flex: 1;

  .table-container {
    margin: 70px 0;
  }

  .table-fill {
    overflow: auto;
    margin: 10px auto;
    background-color: transparent;
    border-radius: 8px;
    border-collapse: collapse;
    max-width: 1000px;
    padding: 5px;
    width: 100%;
  }

  th {
    color: #fff;
    vertical-align: middle;
    font-size: 20px;
    padding: 14px;
    text-align: center;
  }

  tr {
    border-top: 1px solid #C1C3D1;
    color: #1439ec;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  td {
    background: #ffffff;
    color: black;
    padding-bottom: 8px;
    padding-top: 8px;
    text-align: center;
    vertical-align: middle;
    font-weight: 375;
    font-size: 18px;
    border-bottom: 2px solid #d3d3d3;
  }

  tr:hover td {
    background: var(--accent-color);
    color: #FFFFFF;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd):hover td {
    background: var(--accent-color);
  }
`