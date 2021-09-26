## ¡Prepárate para el próximo encuentro!

### Profundiza

📹 ****[Estimación para metodologías ágiles en 10 minutos](https://www.youtube.com/watch?v=Hwu438QSb_g)

📹 [Planning poker - Mike Cohn](https://www.youtube.com/watch?v=gE7srp2BzoM)

### Challenge

📝 ¿Conocías la sucesión de números de Fibonacci que presentamos en esta bitácora? La lógica de esta secuencia fue una solución de este matemático italiano a un problema vinculado a la cría de conejos:

[https://lh3.googleusercontent.com/I21Ahv3A4ZJtxbiRLyQ0VviG_9dkUn0TG3DSCL5cK4PUkUMwqRTwsNwaOGd5fkDby0Mm24Sm4wotVUlNkYwQDHftjyydwUuFDa1aBKaASoRnyVSqqjuPLs3td-uG2mi7fH2Lv5Jb](https://lh3.googleusercontent.com/I21Ahv3A4ZJtxbiRLyQ0VviG_9dkUn0TG3DSCL5cK4PUkUMwqRTwsNwaOGd5fkDby0Mm24Sm4wotVUlNkYwQDHftjyydwUuFDa1aBKaASoRnyVSqqjuPLs3td-uG2mi7fH2Lv5Jb)

Es una sucesión que empieza desde la dupla de los números { 0 , 1 , 1 } y el siguiente número en la secuencia es generado por la sumatoria de los anteriores dos:

( 0 + 1 ) = 1

( 1 + 1 ) = 2

La sucesión será: 0, 1, 1, 2. Luego, para sacar el siguiente número, se toman los dos últimos valores de la sucesión y se suman:

0 ( 1 + 2 ) = 3

La sucesión ahora es: 0, 1, 2, 3.

📝 El challenge de hoy consiste en generar un algoritmo en JavaScript que pueda calcular una sucesión de números finitas. Deberá tener en cuenta un parámetro que indique la cantidad de posiciones que deba tener la secuencia. Por ejemplo, si ejecutamos: `fibonacci(7)`

Deberá devolver el siguiente resultado: `0 1 2 3 5 8 13`