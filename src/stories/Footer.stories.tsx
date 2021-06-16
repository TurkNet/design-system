import React from 'react'
import { Story } from '@storybook/react'
import { DesktopFooter, FooterProps } from '../components'

export default {
  title: 'Design System/Footer',
  component: DesktopFooter,
}

const links = [
  {
    title: 'Biz Kimiz',
    items: [
      { title: 'Bizi Tanıyın', link: '/link' },
      { title: 'Şeffaflık raporu', link: '/link' },
      { title: 'TurkNet Akademi', link: '/link' },
      { title: 'Bizden haberler', link: '/link' },
      { title: 'Basında biz', link: '/link' },
      { title: 'Bilgi toplumu hizmetleri', link: '/link' },
      { title: 'İletişim', link: '/link' },
      { title: 'About TurkNet', link: '/link' },
      { title: 'Blog', link: '/link' },
    ],
  },
  {
    title: 'Hizmetler',
    items: [
      { title: 'Sınırsız internet özgür iletişim', link: '/link' },
      { title: 'Altyapı hızı sorgula', link: '/link' },
      { title: 'Fiber internet', link: '/link' },
      { title: 'Kurulum hizmeti', link: '/link' },
      { title: 'Engelsiz tarife', link: '/link' },
      { title: 'Web posta', link: '/link' },
      { title: 'Hız testi', link: '/link' },
      { title: 'TaahhütSayar', link: '/link' },
      { title: 'Güvenli internet', link: '/link' },
      { title: 'İnternet kampanyaları', link: '/link' },
      { title: 'Evde internet', link: '/link' },
      { title: 'Taahhütsüz internet', link: '/link' },
      { title: 'Yalın internet', link: '/link' },
    ],
  },
  {
    title: 'Bilgiler',
    items: [
      { title: 'Sözleşme ve formlar', link: '/link' },
      { title: 'Yasal bildirimler', link: '/link' },
      { title: 'Abone alımına kapalı ADSL tarifeleri', link: '/link' },
      { title: 'Telefon tarifeleri', link: '/link' },
      { title: 'Siber güvenlik', link: '/link' },
      { title: 'Kalite politikası', link: '/link' },
      { title: 'Çevre politikası', link: '/link' },
      { title: 'KVKK aydınlatma metni', link: '/link' },
      { title: 'Çalışan/çalışan adayı kişisel veri', link: '/link' },
      { title: 'Aydınlatma metni', link: '/link' },
      { title: 'Çerez politikası', link: '/link' },
      { title: 'TurkNet kişisel veri güvenliği politikası', link: '/link' },
    ],
  },
  {
    title: 'Yardım',
    items: [
      { title: 'İade sorgulama', link: '/link' },
      { title: 'Borç alacak sorgulama', link: '/link' },
      { title: 'Sık sorulan sorular', link: '/link' },
      { title: 'Tüketici şikayetleri', link: '/link' },
    ],
  },
]

const accounts = [
  {
    img: 'https://bit.ly/2S3J0hs',
    link: 'https://',
    name: 'facebook',
  },
  {
    img: 'https://bit.ly/3yUgz69',
    link: 'https://',
    name: 'instagram',
  },
  {
    img: 'https://bit.ly/3icfctK',
    link: 'https://',
    name: 'linkedin',
  },
  {
    img: 'https://bit.ly/2SR0OfC',
    link: 'https://',
    name: 'twitter',
  },
  {
    img: 'https://bit.ly/34CLw0V',
    link: 'https://',
    name: 'youtube',
  },
]

const Template: Story<FooterProps> = args => <DesktopFooter {...args} />

export const Standart = Template.bind({})
Standart.args = {
  links,
  accounts,
}
