import React from 'react';
import md5 from 'md5';
import {siteConfig} from '../../siteConfig';

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

function convertMp3(kana: string) {
  return siteConfig.baseAudioUrl + '/' + convertJptoHex(kana) + '.mp3';
}

export default function Speak({
  kana,
  children,
  k,
}: {
  kana?: string;
  k?: string;
  children: React.ReactNode;
}) {
  const handleSpeak = () => {
    let url = '';
    if (kana) {
      url = `https://mina.mazii.net/db/alphabet/${kana}.mp3`;
    } else if (k) {
      url = convertMp3(k);
    }
    const audio = new Audio(url);
    const promise = audio.play();

    if (promise !== undefined) {
      promise
        .then(function () {
          // Automatic playback started!
        })
        .catch(function (error) {
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
          const audio = new Audio('/amazed-onniich.mp3');
          audio.play();
        });
    }
  };

  return (
    <div onClick={handleSpeak} className="inline-block cursor-pointer">
      {children}
    </div>
  );
}
