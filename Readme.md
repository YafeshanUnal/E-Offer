# E-Offer

## Bu uygulamada giriş yapılan kullanıcıların verilerini saklayan bir backend servisi ve bu verileri gösteren bir frontend uygulaması bulunmaktadır. Giriş yapan kişiler uygulama içindeki ürünlere girebilirler giriş yapmadan ürünleri göremezler ve teklif veremezler uygulama da herhangi bir kaydı bulunmayan kişiler signup kısmından kayıt olabilirler.

## Gereksinimler

- Docker
- Docker Compose

## Kurulum

1. Projeyi klonlayın: `git clone https://github.com/YafeshanUnal/E-Offer.git`
2. Terminali açın ve projenin klonlandığı dizine gidin: `cd staj-challenge`
3. Docker container'larını oluşturun: `docker-compose build`
4. Docker container'larını başlatın: `docker-compose up`
5. Proje şimdi `localhost:3000` adresinde çalışıyor.

## Kullanım

- Ön uç uygulamasına `localhost:3000` adresinden erişilebilir.
- Backend servisi `localhost:5000` adresinde çalışıyor ve Redis kullanarak veri saklıyor.
