# nunchee-language
Usage:

```
import language from 'nunchee-language';

let translatableObject = {
    original: 'This can be translated',
    es: 'Esto puede ser traducido',
    jp: 'これは、翻訳することができます'
}

let translatedToJp = language(translatableObject,'jp');

/*
 * console.log(translatedToJp)
 * ==> 'これは、翻訳することができます'
 */
```
