import React, { useState, useEffect } from 'react'
import { Story } from '@storybook/react'
import {
  Modal,
  ModalProps,
  Box,
  Flex,
  Typography,
  Button,
  Select,
} from '../components'

export default {
  title: 'Design System/Modal',
  component: Modal,
}
const options = [
  { id: '34', label: 'İSTANBUL' },
  { id: '35', label: 'İZMİR' },
  { id: '6', label: 'ANKARA' },
  { id: '1', label: 'ADANA' },
  { id: '2', label: 'ADIYAMAN' },
  { id: '3', label: 'AFYONKARAHİSAR' },
  { id: '4', label: 'AĞRI' },
  { id: '5', label: 'AMASYA' },
  { id: '7', label: 'ANTALYA' },
  { id: '8', label: 'ARTVİN' },
  { id: '9', label: 'AYDIN' },
  { id: '10', label: 'BALIKESİR' },
  { id: '11', label: 'BİLECİK' },
  { id: '12', label: 'BİNGÖL' },
  { id: '13', label: 'BİTLİS' },
  { id: '14', label: 'BOLU' },
  { id: '15', label: 'BURDUR' },
  { id: '16', label: 'BURSA' },
  { id: '17', label: 'ÇANAKKALE' },
  { id: '18', label: 'ÇANKIRI' },
  { id: '19', label: 'ÇORUM' },
  { id: '20', label: 'DENİZLİ' },
  { id: '21', label: 'DİYARBAKIR' },
  { id: '22', label: 'EDİRNE' },
  { id: '23', label: 'ELAZIĞ' },
  { id: '24', label: 'ERZİNCAN' },
  { id: '25', label: 'ERZURUM' },
  { id: '26', label: 'ESKİŞEHİR' },
  { id: '27', label: 'GAZİANTEP' },
  { id: '28', label: 'GİRESUN' },
  { id: '29', label: 'GÜMÜŞHANE' },
  { id: '30', label: 'HAKKARİ' },
  { id: '31', label: 'HATAY' },
  { id: '32', label: 'ISPARTA' },
  { id: '33', label: 'MERSİN' },
  { id: '36', label: 'KARS' },
  { id: '37', label: 'KASTAMONU' },
  { id: '38', label: 'KAYSERİ' },
  { id: '39', label: 'KIRKLARELİ' },
  { id: '40', label: 'KIRŞEHİR' },
  { id: '41', label: 'KOCAELİ' },
  { id: '42', label: 'KONYA' },
  { id: '43', label: 'KÜTAHYA' },
  { id: '44', label: 'MALATYA' },
  { id: '45', label: 'MANİSA' },
  { id: '46', label: 'KAHRAMANMARAŞ' },
  { id: '47', label: 'MARDİN' },
  { id: '48', label: 'MUĞLA' },
  { id: '49', label: 'MUŞ' },
  { id: '50', label: 'NEVŞEHİR' },
  { id: '51', label: 'NİĞDE' },
  { id: '52', label: 'ORDU' },
  { id: '53', label: 'RİZE' },
  { id: '54', label: 'SAKARYA' },
  { id: '55', label: 'SAMSUN' },
  { id: '56', label: 'SİİRT' },
  { id: '57', label: 'SİNOP' },
  { id: '58', label: 'SİVAS' },
  { id: '59', label: 'TEKİRDAĞ' },
  { id: '60', label: 'TOKAT' },
  { id: '61', label: 'TRABZON' },
  { id: '62', label: 'TUNCELİ' },
  { id: '63', label: 'ŞANLIURFA' },
  { id: '64', label: 'UŞAK' },
  { id: '65', label: 'VAN' },
  { id: '66', label: 'YOZGAT' },
  { id: '67', label: 'ZONGULDAK' },
  { id: '68', label: 'AKSARAY' },
  { id: '69', label: 'BAYBURT' },
  { id: '70', label: 'KARAMAN' },
  { id: '71', label: 'KIRIKKALE' },
  { id: '72', label: 'BATMAN' },
  { id: '73', label: 'ŞIRNAK' },
  { id: '74', label: 'BARTIN' },
  { id: '75', label: 'ARDAHAN' },
  { id: '76', label: 'IĞDIR' },
  { id: '77', label: 'YALOVA' },
  { id: '78', label: 'KARABüK' },
  { id: '79', label: 'KİLİS' },
  { id: '80', label: 'OSMANİYE' },
  { id: '81', label: 'DÜZCE' },
]
const Template: Story<ModalProps & { showImage: boolean }> = ({
  show: defaultShow = false,
  showImage,
  ...props
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(defaultShow)
  }, [defaultShow])

  const toggle = () => {
    setShow(!show)
  }
  return (
    <Box height="1000px">
      <Button size="medium" onClick={toggle}>
        Toggle Modal
      </Button>
      <Modal {...props} show={show} onClosed={toggle}>
        {showImage && (
          <img
            src="https://media.istockphoto.com/photos/mosque-in-istanbul-turkey-picture-id182468027?k=6&m=182468027&s=612x612&w=0&h=0ZIhG91VoujVVAyBZ9rCX27Gy-vmmYFEaytI163iFaY="
            alt="card"
            width="100%"
            height="230px"
          />
        )}
        <Box p="24px 16px">
          <Typography variant="h6">Title</Typography>
          <Typography variant="caption1">Subtitle</Typography>
          <Box height="1px" bg="grey.300" my={10} />
          <Typography>
            A nebula is an interstellar cloud of dust, hydrogen, helium and
            other ionized gases. Originally, nebula was a name for any diffuse
            astronomical object, including galaxies beyond the Milky Way.
          </Typography>
          <Select options={options} />
          <Flex justifyContent="space-between" alignItems="center" mt="40px">
            <Button size="medium" variant="ghost">
              Button
            </Button>
            <Flex>
              <Button size="medium" variant="outline" mr="10px">
                Button
              </Button>
              <Button size="medium">Button</Button>
            </Flex>
          </Flex>
        </Box>
      </Modal>
    </Box>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  width: 500,
  showImage: true,
}
