// #html2
// 1.Takrorlash, uyga vazifa
// 2.Html attrebute => tegga qoshimcha vazifa yuklovchi qism 
// vs content       => tegning ichida joylashgan narsalar
//  vs element      => teg+content

// 
// inline => faqat oziga kk bolgan qism
// block  => 
// 3.Div vs Span 
// div    => block .blocklarni orab turuvchi  
// span   => inline. kichik bolimlar uchun 
// 4.Link  a -> 
// tel    => tel:234132 
// email  => mailto
// id     => bir page ichida harakatlanish
// a href == home id  
// *{ scroll-behavior: smooth;}

// dowland => yuklash , value=>yuklash nomi
// href   => manzil
// target
// 5.Img -> 
// asosiy atribute arc alt
// qoshimcha
// width, height
// 6.Video -> 
// control =>  
// loop => qayta qayta qoyish
// autoplay => auto qoyish
// muted  => ovozsiz
// poster => oldindan chiquvchi rasm
// width  => eni
// height => boyi
// 7.Audio -> control, loop, autoplay, muted.

// 8.Iframe you tube => you tube da berilgan link orqali
// 9.Iframe web site => src sayt manzili qoyiladi
// target  => yangi bravzer sahifasida ochib beradi


// shift+alt+f

// inline & block

// block
// div h p 

// inline
// span i sub sup
// a img video audio



// lesson 3

// 2.Table -> 
// table => orab turuvchi
// tr => table row table qatori
// td => table katak ,table data'
// th => table header bosh qism malumotlari 
// td & th 
// td => oddiy left
// th => markaz bold
// colspan => ustunlarni birlashtirish 
// rowspan => qator birlashtirish

//     Style: collapse => borderni bitta qilib beradi
//  background => fon rangi 
//  border => atribute katta qiymatlar qalin qilib beradi chegara chiziq
//  color => text rangi
//  text align => textni joylashuvi 
//  cellpadding => border va content orasida masofa  
// <!-- th => table header 
// td => table data
// row qator
// column ustun
// -->
// thead tbody tfoot


// 3.List -> order, unorder, description


// Taglar: 
// ol => tartiblan list
// ul => unorder tartibsiz 
// li => list item list bolimlari
//  dl, dt, dd
//  Attrebute; type => ol tegishli, list turi:raqam rim raqamlari harflar
//  start =>nechinchi indexdan boshlanishi 

// Style: list-style-type => css tomonidan list turini ozgartirish 
//  circle, disc, none, latin, roman


// <!--unorder list  ul 
//   list item li
//   order list ol
// -->
// <!-- 
// inline 
// 1.yonma yon
// 2.width height qabul qilmaydi 
// 3.faqat content joyini egallaydi

// block 
// 1.ketma ket
// 2.widht height qabul qiladi 
// 3. parentini 100% egallaydi 

// inline-block 
// 1.yonma yon
// 2.widht height qabul qiladi 
// 3.faqat content joyini egallaydi agar width berilsa width ozgaradi 
//  -->


// 2.Input: 
// text => matn
// password => arol, dumaloq holatda bolib qoladi
// email  => email @gmail.com   
// number => son, . , e   
// checkbox => kop malumotlar ber nechta
// radio  =>  2tadan bitta ortga qaytish yoq
//  bir nechta radiodan faqat bittasini olish  
// name bir xil 
// color,range, date, time, file, 
// reset => barchasi ochiradi
// submit => jonatish 
// Attrebute: type =>input turi
// placeholder => input haqida malumot ,avtomatik ochadi 
// value => qiymat 
// minlength => min uzunlik 
// maxlength => max uzunlik 
// required  => ogohlantirish 
// readonly  => faqat oqish uchun, focus qilsa boladi,bazaga value ketadi 
// disabled  => value ketmaydi, bosh boradi
// id   => input kaliti 
// name => input nomi
// bravzer name
// pattern => qiymatlar fixed
// step    => osib borish darajasi
// 3.Label => tashqaridan input haqida malumot
// label+input
// input id == label for 
// 4.Form -> action.
// 5.textarea -> rows, cols
// 6.Select -> option, value.
// tanlov imkoniyati , asosan til tanlash 
// 7.Data list +input => 
// datalist id == input list 



// git download
// github account

// github new repo

// git init
// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/Munirabonu/bunker2.git
// git push -u origin master

// push
// git add . 
// git commit -m"commit"
// git push -u origin master


// css
// lesson 1
//
// 2.Css type 3: 
//  Inline => atribute css tasir qilish eng katta 
//  Internal =>  head teg orqali
//  External => link orqali fayl 
// qaysi biri pastda bolsa shu katta 
// 3.Css selector 5 -> class =>  . , bir nechta qiymat qabul qilad
// id => faqat bitta qiymat, #
// tag => 
// attrebute => [atribute] 
// universal
// >inline css > id > atribute = class > teg nomi >unversal 
// 4.Box style : 
// background =>  fon rangi
// width, height, 
// %      => orab turuvchiga olcham oladi
// vh  vw => ekranga
// px => ekran px lariga qarab oladi
// 5.Text style : color,
//  text-align:justify => 2chetga bir xil togri qiladi 
//  font-family: qaysi turini belgilaydi,stili 
//  font-style =>   italic
// font-wieght =>   qalinlik
// px,
// 1 rem =>  html font-size 
// 1 em  =>  parent font-size  

// 6.Color: 
//  rgb(red,green,blue) 0-255 000 qora
//  rgba(red,green,blue,alpha) alpha 0-1
//  hex,
// 0-9,a-f
// hsl.
// text-transform  => katta kichik harf
// text-decorition => chiziq boyicha ishlaydi 
// line-height => qator uzunligi
// letter-spacing => harf orasi
// word-spacing => sozni orasi
// text-shadow  => textlarga soya (x,y,z, color)
// 7.Font Awesome Icon -->




// 2.Text model: text-decoration, text-transform, 
// text-indent => abzast
// , letter-spacing, word-spacing, text-shadow, white-space.

// 3.Css Trick: display, inline, block, inline-block, 
// visibility:hidden (joy qoladi) vs display: none.(joy yoqol)
// 4.Float
// 5.background image : 
//  image =>url(manzil)
//  repeat => takrorlash
//  attachment => bg ni qotiradi
//  position => bg rasmni aynan rasmni qaysi joyini korsatsin
//  size => cover,contain,unser 
//  cover => 100%
//  unsver =>
//  contain => chegarafa yetib borguncha katalashtiradi
// 6.Liener gradient

// 2.Box model:
//  border => chegara border:color width style
//  radius => burilish qismi 
//  margin => tashqi masofa borderdan tashqaridagi masofa
// marginda auto ishlashiga sabab block elementlar ozidan qolgan joyni margin beradi
//  padding => ichki masofa (content bn border orasi)
// box sizing border box => border , padding ni width yoki heightni ichidan hisoblaydi 
// box-shadow  => box soya
// outline  =>  inputni bosganda paydo boladigan chiziq
// overflow => ortib qolgan contentni boshqaradi
// auto scroll
// scroll doimiy auto => kkli bolganda


// #css5
// 1.Flexbox -> Flex Container => orab turuvchi
// Flex Items => ichki itemlar
// 2.Flex Container -> display:flex, 
// align-items: y oqi  
// justify-content:x oqi 
// space-between: 1 va oxirgri divlar yopishtiriladi qolgan joy teng bolinadi
// space-around: teng joy
// space-evenly: oradagi joy chekadagi joydan 2 marta kop boladi. 
// ortada 2 tomon divlaring joyi boladi
// flex-direction: yonalishni ozgartiradi. column-reverse
// flex-wrap: sigmagan divlarni pastga tushuradi
// 3.Flex Items -> order, 
// flew-grow => bosh joylarni taqsimlash  
// flew-shrink  =>qisqarish, 0 berisa qisqarmaydi
// flex-basis  width 
// flex: yuqoridagi 3tasi yigindisi
// align-self 