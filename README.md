# nunchee-language
Usage:

```
import language from 'nunchee-language';

let translatableObject = {
    original: 'This can be translated',
    es: 'Esto puede ser traducido',
    jp: 'これは、翻訳することができます'
};

/* set the default language */
language('jp');

/* translate object */
let translatedToJp = language()._(translatableObject);

/*
 * console.log(translatedToJp)
 * ==> 'これは、翻訳することができます'
 */
```
