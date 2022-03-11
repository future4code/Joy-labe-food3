import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import { base_URL } from '../../../constants/URL'
import { Main } from '../../restaurantsPage/styles'
import { ContainerItemProfile, IconProfile, ItemProfile } from './styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { getToken } from '../../../helpers/localStorage'
import { Footer } from '../../../components/footer/Footer'

export default function ProfilePage() {
  const [infoProfile, setInfoProfile] = useState({})
  const [historyOrders, setHistoryOrders] = useState({})

  useEffect(() => {
    const auth = getToken()
    axios.get(`${base_URL}profile`, {
      headers: {
        auth: auth
      }
    })
      .then((res) => {
        // console.log(res.data.user)
        setInfoProfile(res.data.user)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const auth = getToken()

    axios.get(`${base_URL}orders/history`, {
      headers: {
        auth: auth
      }
    })
      .then((res) => {
        // console.log(res.data)
        setHistoryOrders(res.data.user)
      })
      .catch((err) => console.log(err))
  }, [])



  return (
    <Main>
      <Header
        pageName={"Meu Perfil"}
      />
      <ContainerItemProfile>
        <ItemProfile>
          <p>{infoProfile?.name}</p>
          <p>{infoProfile?.email}</p>
          <p>{infoProfile?.cpf}</p>
        </ItemProfile>
        <IconProfile>
          <CreateOutlinedIcon />
        </IconProfile>
      </ContainerItemProfile>
      <ContainerItemProfile>
        <ItemProfile>
          <p>Endereço cadastrado</p>
          <p>{infoProfile?.address}</p>
        </ItemProfile>
        <IconProfile>
          <CreateOutlinedIcon />
        </IconProfile>
      </ContainerItemProfile>
      <p>Histórico de pedidos</p>
      {historyOrders ? "lista de pedidos" : "Você não realizou nenhum pedido"}

      <Footer />

    </Main>
  )
}
