// const axios = require('axios');
// const fs = require('fs');

// const block1 = [
//   {hira: 'あ', roumaji: 'a', type: 1, kata: 'ア'},
//   {hira: 'い', roumaji: 'i', type: 1, kata: 'イ'},
//   {hira: 'う', roumaji: 'u', type: 1, kata: 'ウ'},
//   {hira: 'え', roumaji: 'e', type: 1, kata: 'エ'},
//   {hira: 'お', roumaji: 'o', type: 1, kata: 'オ'},
//   {hira: 'か', roumaji: 'ka', type: 1, kata: 'カ'},
//   {hira: 'き', roumaji: 'ki', type: 1, kata: 'キ'},
//   {hira: 'く', roumaji: 'ku', type: 1, kata: 'ク'},
//   {hira: 'け', roumaji: 'ke', type: 1, kata: 'ケ'},
//   {hira: 'こ', roumaji: 'ko', type: 1, kata: 'コ'},
//   {hira: 'さ', roumaji: 'sa', type: 1, kata: 'サ'},
//   {hira: 'し', roumaji: 'shi', type: 1, kata: 'シ'},
//   {hira: 'す', roumaji: 'su', type: 1, kata: 'ス'},
//   {hira: 'せ', roumaji: 'se', type: 1, kata: 'セ'},
//   {hira: 'そ', roumaji: 'so', type: 1, kata: 'ソ'},
//   {hira: 'た', roumaji: 'ta', type: 1, kata: 'タ'},
//   {hira: 'ち', roumaji: 'chi', type: 1, kata: 'チ'},
//   {hira: 'つ', roumaji: 'tsu', type: 1, kata: 'ツ'},
//   {hira: 'て', roumaji: 'te', type: 1, kata: 'テ'},
//   {hira: 'と', roumaji: 'to', type: 1, kata: 'ト'},
//   {hira: 'な', roumaji: 'na', type: 1, kata: 'ナ'},
//   {hira: 'に', roumaji: 'ni', type: 1, kata: 'ニ'},
//   {hira: 'ぬ', roumaji: 'nu', type: 1, kata: 'ヌ'},
//   {hira: 'ね', roumaji: 'ne', type: 1, kata: 'ネ'},
//   {hira: 'の', roumaji: 'no', type: 1, kata: 'ノ'},
//   {hira: 'は', roumaji: 'ha', type: 1, kata: 'ハ'},
//   {hira: 'ひ', roumaji: 'hi', type: 1, kata: 'ヒ'},
//   {hira: 'ふ', roumaji: 'fu', type: 1, kata: 'フ'},
//   {hira: 'へ', roumaji: 'he', type: 1, kata: 'ヘ'},
//   {hira: 'ほ', roumaji: 'ho', type: 1, kata: 'ホ'},
//   {hira: 'ま', roumaji: 'ma', type: 1, kata: 'マ'},
//   {hira: 'み', roumaji: 'mi', type: 1, kata: 'ミ'},
//   {hira: 'む', roumaji: 'mu', type: 1, kata: 'ム'},
//   {hira: 'め', roumaji: 'me', type: 1, kata: 'メ'},
//   {hira: 'も', roumaji: 'mo', type: 1, kata: 'モ'},
//   {hira: 'や', roumaji: 'ya', type: 1, kata: 'ヤ'},
//   {hira: 'ゆ', roumaji: 'yu', type: 1, kata: 'ユ'},
//   {hira: 'よ', roumaji: 'yo', type: 1, kata: 'ヨ'},
//   {hira: 'ら', roumaji: 'ra', type: 1, kata: 'ラ'},
//   {hira: 'り', roumaji: 'ri', type: 1, kata: 'リ'},
//   {hira: 'る', roumaji: 'ru', type: 1, kata: 'ル'},
//   {hira: 'れ', roumaji: 're', type: 1, kata: 'レ'},
//   {hira: 'ろ', roumaji: 'ro', type: 1, kata: 'ロ'},
//   {hira: 'わ', roumaji: 'wa', type: 1, kata: 'ワ'},
//   {hira: 'を', roumaji: 'wo', type: 1, kata: 'ヲ'},
//   {hira: 'ん', roumaji: 'n', type: 1, kata: 'ン'},
// ];

// const block2 = [
//   {hira: 'が', roumaji: 'ga', type: 2, kata: 'ガ'},
//   {hira: 'ぎ', roumaji: 'gi', type: 2, kata: 'ギ'},
//   {hira: 'ぐ', roumaji: 'gu', type: 2, kata: 'グ'},
//   {hira: 'げ', roumaji: 'ge', type: 2, kata: 'ゲ'},
//   {hira: 'ご', roumaji: 'go', type: 2, kata: 'ゴ'},
//   {hira: 'ざ', roumaji: 'za', type: 2, kata: 'ザ'},
//   {hira: 'じ', roumaji: 'ji', type: 2, kata: 'ジ'},
//   {hira: 'ず', roumaji: 'zu', type: 2, kata: 'ズ'},
//   {hira: 'ぜ', roumaji: 'ze', type: 2, kata: 'ゼ'},
//   {hira: 'ぞ', roumaji: 'zo', type: 2, kata: 'ゾ'},
//   {hira: 'だ', roumaji: 'da', type: 2, kata: 'ダ'},
//   {hira: 'ぢ', roumaji: 'ji2', type: 2, kata: 'ヂ'},
//   {hira: 'づ', roumaji: 'zu2', type: 2, kata: 'ヅ'},
//   {hira: 'で', roumaji: 'de', type: 2, kata: 'デ'},
//   {hira: 'ど', roumaji: 'do', type: 2, kata: 'ド'},
//   {hira: 'ば', roumaji: 'ba', type: 2, kata: 'バ'},
//   {hira: 'び', roumaji: 'bi', type: 2, kata: 'ビ'},
//   {hira: 'ぶ', roumaji: 'bu', type: 2, kata: 'ブ'},
//   {hira: 'べ', roumaji: 'be', type: 2, kata: 'ベ'},
//   {hira: 'ぼ', roumaji: 'bo', type: 2, kata: 'ボ'},
//   {hira: 'ぱ', roumaji: 'pa', type: 2, kata: 'パ'},
//   {hira: 'ぴ', roumaji: 'pi', type: 2, kata: 'ピ'},
//   {hira: 'ぷ', roumaji: 'pu', type: 2, kata: 'プ'},
//   {hira: 'ぺ', roumaji: 'pe', type: 2, kata: 'ペ'},
//   {hira: 'ぽ', roumaji: 'po', type: 2, kata: 'ポ'},
// ];
// const fetchKana = (type) => {
//   block2.map(async (item) => {
//     const body = new URLSearchParams();
//     body.append('data', type === 'hira' ? item.hira : item.kata);
//     body.append('lang', 'ja');
//     const {data} = await axios.post(
//       'http://gooo.free.fr/animCJK/official/getOneFromSvgs.php',
//       body,
//       {
//         headers: {
//           Accept: '*/*',
//           'Content-type': 'application/x-www-form-urlencoded',
//           Referer: 'http://gooo.free.fr/animCJK/official/',
//           Origin: 'http://gooo.free.fr',
//         },
//       }
//     );

//     var writeStream = fs.createWriteStream(`${item.roumaji}.tsx`);
//     writeStream.write(data);
//     writeStream.end();
//   });
// };

// fetchKana('kata');
