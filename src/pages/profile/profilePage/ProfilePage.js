import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import { base_URL } from '../../../constants/URL'
import { Main } from '../../restaurantsPage/styles'
import { ContainerHistoryOrders, MainContainerProfile, TitleSection } from './styles'
import { getToken } from '../../../helpers/localStorage'
import { Footer } from '../../../components/footer/Footer'
import { CardPersonalData } from '../../../components/profile/CardPersonalData'
import { CardAddressData } from '../../../components/profile/CardAddressData'
import { CardHistoryOrders } from '../../../components/profile/CardHistoryOrders'
import { CardMessage } from '../../../components/profile/CardMessage'

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
        setHistoryOrders(res.data.user)
      })
      .catch((err) => console.log(err))
  }, [])



  return (
    <Main>
      <Header
        pageName={"Meu Perfil"}
      />
      <MainContainerProfile>
        <CardPersonalData
          name={infoProfile?.name}
          email={infoProfile?.email}
          cpf={infoProfile?.cpf}
        />
        <CardAddressData
          address={infoProfile?.address}
        />
        <TitleSection>Histórico de pedidos</TitleSection>
        <ContainerHistoryOrders>
        {historyOrders ? <CardHistoryOrders/> : <CardMessage/>}
        </ContainerHistoryOrders>
        <Footer />
    </MainContainerProfile>
  </Main>
  )
}
