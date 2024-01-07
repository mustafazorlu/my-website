# Next.JS Notlarım

<b>Bu notları React bilen birisi olarak yazdığım için her kavramı detaylı açıklamayacağım.Anlayamadığınız yerler olursa Javascript ve React öğrenmenizi tavsiye ediyorum.</b>

Öğrenmeye başladığım sırada npm versiyonumun ve node.js versiyonumum eski olduğunu ve bu yüzden "npm run dev" komutunun çalışmayacağına dair bir hata aldım.Eğer siz de bu hatayı alırsanız npm sürümünüzü güncellemek için "npm update -g" komutunu kullanın.Node.js sürümünüzü de güncellemek için nvm modülünü indirmeniz gerekmekte.
<a href="https://github.com/coreybutler/nvm-windows/releases">https://github.com/coreybutler/nvm-windows/releases</a> şu linkten bilgisayarınıza uygun uzantıyı seçip indirin ve daha sonra Microsoft Powershell i açıp "nvm install latest" komutunu yazın.Son sürümü indirmiş olucaksınız fakat henüz son sürümü kullanmadınız.Bunun için de "nvm use latest" yazmanız gerek.Artık son npm ve node.js in son sürümlerini gönül rahatlığıyla kullanabilirsiniz.Düzeltme veya ekleme yapmak için benimle iletişime geçebilirsin.

### Proje Oluşturmak

"npx create-next-app@latest" komutu ile projemizi oluşturuyoruz.

### Routing

`Static Routing`

Statik routing oluşturmak için app klasörünün altında yönlendirmek istediğimiz sayfa nın adıyla bir klasör oluşturuyoruz.Klasörün için görüntelemek istediğimiz sayfa için page.jsx dosyamızı ekliyoruz.Artık erişebiliriz.

app>hakkimizda>page.jsx

localhost:3000/hakkimizda

`Dinamic Routing`

Dinamik route oluşturmak için yine app klasörünün altına yönlendirmek istediğimiz sayfanın adını yazıyoruz fakat etrafına köşeli parantezler koyarak.Örnek vericek olursak şu şekilde [blog]. Ardından içine page.jsx dosyamızı ekliyoruz.Artık ne yazarsak yazalım bizi yazdığımız metnin sitesine yönlendiricek.

app>[blog]>page.jsx

localhost:3000/blablaba
localhost:3000/routing-1
localhost:3000/asldakfadl

Gönderdiğimiz parametreyi componentte yerleşik olarak bulunan params değişkeninden params.blog şeklinde alabilirsin.

> return <span>{params.blog}</span>

`Catch All Routes`

Burada ise derinlikten bağımsız bütün dinamik yönlendirmelere erişebilmek için klasörümüzün içine spread operatörü ekliyoruz -> [...blog] Bu sayede istediğimiz kadar iç içe yönlendirme yapabiliriz.

localhost:3000/route-1/route-2/route-3

Yine bunları params ile alabilirsin.

> params dizi şeklinde döner.

`Optional Catch All Routes`

...burayı atlıyorum...

`Route Grouping`

App klasörü bi zaman sonra çok karmaşıklaşmasın diye klasörleri organize etmemiz için oluşturulmuş bir özellik.Kullanımı şu şekilde:

{user}>hakkimizda>page.jsx
{admin}>docs>[...post]>page.jsx

`Sayfa Değiştirme next/link`

"a" etiketinin next versiyonu denebilir.

import Link from 'next/link'; yazdıktan sonra kullanabilirsiniz.

`<Link href="/docs/post">Post</Link>`

Optimizasyon işlemleri için kullanabileceğin prefetch adında bir parametre mevcut.Detaylı bilgisine next.js dökümantasyonundan bakabilirsin.
