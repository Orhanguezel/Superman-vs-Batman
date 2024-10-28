Bu alıştırma, nesne yöntemlerini (method) kullanarak pratik yapmayı amaçlar.

## Görev 1

[task-1.js](task-1.js) dosyasını inceleyin.

`people` dizisini nesnelerle doldurmak için diğer dizileri kaynak veri olarak kullanarak bir döngü yazın. Ayrıca her nesne için 2 ek özellik oluşturun:

- `fullName`: Ad ve soyadın birleştiği bir string
- `introduce`: şu şekilde bir string döndüren bir method: `"Merhaba, benim adım Mark Shark, New York'ta yaşıyorum ve 18 yaşındayım."`

`people` içindeki ilk kişi nesnesi şu şekilde görünmelidir:

```javascript
{
    firstName: "Mark",
    lastName: "Shark",
    age: 18,
    city: "New York",
    fullName: "Mark Shark",
    introduce: function() {...},
}
```

## Görev 2

[task-2.js](task-2.js) dosyasını inceleyin.

`person` nesnesine `greet` adlı bir method ekleyin. Bu method bir string girdi olarak almalı ve girdiğe göre özel bir karşılama mesajı döndürmelidir.

```javascript
// Mesajdaki karşılama sözcüklerinin ilk harfi büyük olmalıdır

console.log(person.greet("hi")) // "Hi, my name is Tim"
console.log(person.greet("hey")) // "Hey, my name is Tim"
console.log(person.greet("hello")) // "Hello, my name is Tim"
```

## Görev 3

[task-3.js](task-3.js) dosyasını inceleyin.

Bir dövüş oyununda çalışıyorsunuz.

İki karakter oyuncu nesnesi oluşturun ve bu özellikleri ekleyin:

- `name`: Karakterin adı olarak bir string
- `health`: Karakterin kalan sağlığını temsil eden bir sayı
- `attackSkill`: Karakterin saldırıda kullandığı beceriyi temsil eden bir string
- `attackDamage`: Saldırı becerisinin ne kadar hasar verdiğini temsil eden bir sayı

Bir `attack` fonksiyonu oluşturun ve bu fonksiyonu her iki karaktere de method olarak ekleyin.

`attack` methodu bir başka karakter nesnesini parametre olarak almalıdır. `attack` methodunu çalıştırdığınızda:

- Saldırıya uğrayan karakterin `health` (sağlık) değeri, saldıran karakterin `attackDamage` (saldırı hasarı) kadar azalmalıdır.
- Konsola aşağıdaki gibi bir mesaj yazdırmalıdır: "Ryu, Ken'e bir yumrukla saldırdı ve 16 hasar verdi. Ken'in sağlığı şimdi 8."

Mesaj, saldıran ve saldırıya uğrayan karakterlere göre değişmelidir.

Örneğin, `ryu` ve `ken` adında 2 karakterimiz varsa:

```javascript
ryu.attack(ken); // "Ryu, Ken'e bir yumrukla saldırdı ve 16 hasar verdi. Ken'in sağlığı şimdi 8."
ken.attack(ryu); // "Ken, Ryu'ya bir uçan tekme ile saldırdı ve 24 hasar verdi. Ryu'nun sağlığı şimdi 2."
```

### Bonus

Bir karakterin sağlığı kalmadığında durumu kontrol eden ek işlevler gibi ekstra özellikler eklemekten çekinmeyin.