import md5 from 'md5';
import {siteConfig} from '../siteConfig';

function convertJptoHex(kana: string) {
  if (null == kana || '' == kana) return '';
  -1 != kana.indexOf('\u300c') &&
    (kana = (kana = kana.replace(new RegExp('\u300c', 'g'), '')).replace(
      new RegExp('\u300d', 'g'),
      ''
    )),
    (kana = kana.trim());
  let e = '';
  for (let n = 0; n < kana.length; n++)
    (e += ('0000' + kana.charCodeAt(n).toString(16)).substr(-4)),
      n != kana.length - 1 && (e += '_');
  return md5(e.toUpperCase());
}

export function convertMp3(kana: string) {
  return siteConfig.baseAudioUrl + '/' + convertJptoHex(kana) + '.mp3';
}
