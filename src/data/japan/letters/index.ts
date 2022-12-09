export interface JapaneseLetterType {
  hira: string;
  kata: string;
  roumaji: string;
  type: 'gojuuon' | 'dakuon' | 'handakuon' | 'sokuon' | 'youon';
}

export const block1Type = ['gojuuon'];

export const block1: JapaneseLetterType[] = [
  {hira: 'あ', roumaji: 'a', type: 'gojuuon', kata: 'ア'},
  {hira: 'い', roumaji: 'i', type: 'gojuuon', kata: 'イ'},
  {hira: 'う', roumaji: 'u', type: 'gojuuon', kata: 'ウ'},
  {hira: 'え', roumaji: 'e', type: 'gojuuon', kata: 'エ'},
  {hira: 'お', roumaji: 'o', type: 'gojuuon', kata: 'オ'},
  {hira: 'か', roumaji: 'ka', type: 'gojuuon', kata: 'カ'},
  {hira: 'き', roumaji: 'ki', type: 'gojuuon', kata: 'キ'},
  {hira: 'く', roumaji: 'ku', type: 'gojuuon', kata: 'ク'},
  {hira: 'け', roumaji: 'ke', type: 'gojuuon', kata: 'ケ'},
  {hira: 'こ', roumaji: 'ko', type: 'gojuuon', kata: 'コ'},
  {hira: 'さ', roumaji: 'sa', type: 'gojuuon', kata: 'サ'},
  {hira: 'し', roumaji: 'shi', type: 'gojuuon', kata: 'シ'},
  {hira: 'す', roumaji: 'su', type: 'gojuuon', kata: 'ス'},
  {hira: 'せ', roumaji: 'se', type: 'gojuuon', kata: 'セ'},
  {hira: 'そ', roumaji: 'so', type: 'gojuuon', kata: 'ソ'},
  {hira: 'た', roumaji: 'ta', type: 'gojuuon', kata: 'タ'},
  {hira: 'ち', roumaji: 'chi', type: 'gojuuon', kata: 'チ'},
  {hira: 'つ', roumaji: 'tsu', type: 'gojuuon', kata: 'ツ'},
  {hira: 'て', roumaji: 'te', type: 'gojuuon', kata: 'テ'},
  {hira: 'と', roumaji: 'to', type: 'gojuuon', kata: 'ト'},
  {hira: 'な', roumaji: 'na', type: 'gojuuon', kata: 'ナ'},
  {hira: 'に', roumaji: 'ni', type: 'gojuuon', kata: 'ニ'},
  {hira: 'ぬ', roumaji: 'nu', type: 'gojuuon', kata: 'ヌ'},
  {hira: 'ね', roumaji: 'ne', type: 'gojuuon', kata: 'ネ'},
  {hira: 'の', roumaji: 'no', type: 'gojuuon', kata: 'ノ'},
  {hira: 'は', roumaji: 'ha', type: 'gojuuon', kata: 'ハ'},
  {hira: 'ひ', roumaji: 'hi', type: 'gojuuon', kata: 'ヒ'},
  {hira: 'ふ', roumaji: 'fu', type: 'gojuuon', kata: 'フ'},
  {hira: 'へ', roumaji: 'he', type: 'gojuuon', kata: 'ヘ'},
  {hira: 'ほ', roumaji: 'ho', type: 'gojuuon', kata: 'ホ'},
  {hira: 'ま', roumaji: 'ma', type: 'gojuuon', kata: 'マ'},
  {hira: 'み', roumaji: 'mi', type: 'gojuuon', kata: 'ミ'},
  {hira: 'む', roumaji: 'mu', type: 'gojuuon', kata: 'ム'},
  {hira: 'め', roumaji: 'me', type: 'gojuuon', kata: 'メ'},
  {hira: 'も', roumaji: 'mo', type: 'gojuuon', kata: 'モ'},
  {hira: 'や', roumaji: 'ya', type: 'gojuuon', kata: 'ヤ'},
  {hira: 'ゆ', roumaji: 'yu', type: 'gojuuon', kata: 'ユ'},
  {hira: 'よ', roumaji: 'yo', type: 'gojuuon', kata: 'ヨ'},
  {hira: 'ら', roumaji: 'ra', type: 'gojuuon', kata: 'ラ'},
  {hira: 'り', roumaji: 'ri', type: 'gojuuon', kata: 'リ'},
  {hira: 'る', roumaji: 'ru', type: 'gojuuon', kata: 'ル'},
  {hira: 'れ', roumaji: 're', type: 'gojuuon', kata: 'レ'},
  {hira: 'ろ', roumaji: 'ro', type: 'gojuuon', kata: 'ロ'},
  {hira: 'わ', roumaji: 'wa', type: 'gojuuon', kata: 'ワ'},
  {hira: 'を', roumaji: 'wo', type: 'gojuuon', kata: 'ヲ'},
  {hira: 'ん', roumaji: 'n', type: 'gojuuon', kata: 'ン'},
];

export const block2: JapaneseLetterType[] = [
  {hira: 'が', roumaji: 'ga', type: 'dakuon', kata: 'ガ'},
  {hira: 'ぎ', roumaji: 'gi', type: 'dakuon', kata: 'ギ'},
  {hira: 'ぐ', roumaji: 'gu', type: 'dakuon', kata: 'グ'},
  {hira: 'げ', roumaji: 'ge', type: 'dakuon', kata: 'ゲ'},
  {hira: 'ご', roumaji: 'go', type: 'dakuon', kata: 'ゴ'},
  {hira: 'ざ', roumaji: 'za', type: 'dakuon', kata: 'ザ'},
  {hira: 'じ', roumaji: 'ji', type: 'dakuon', kata: 'ジ'},
  {hira: 'ず', roumaji: 'zu', type: 'dakuon', kata: 'ズ'},
  {hira: 'ぜ', roumaji: 'ze', type: 'dakuon', kata: 'ゼ'},
  {hira: 'ぞ', roumaji: 'zo', type: 'dakuon', kata: 'ゾ'},
  {hira: 'だ', roumaji: 'da', type: 'dakuon', kata: 'ダ'},
  {hira: 'ぢ', roumaji: 'ji', type: 'dakuon', kata: 'ヂ'},
  {hira: 'づ', roumaji: 'zu', type: 'dakuon', kata: 'ヅ'},
  {hira: 'で', roumaji: 'de', type: 'dakuon', kata: 'デ'},
  {hira: 'ど', roumaji: 'do', type: 'dakuon', kata: 'ド'},
  {hira: 'ば', roumaji: 'ba', type: 'dakuon', kata: 'バ'},
  {hira: 'び', roumaji: 'bi', type: 'dakuon', kata: 'ビ'},
  {hira: 'ぶ', roumaji: 'bu', type: 'dakuon', kata: 'ブ'},
  {hira: 'べ', roumaji: 'be', type: 'dakuon', kata: 'ベ'},
  {hira: 'ぼ', roumaji: 'bo', type: 'dakuon', kata: 'ボ'},
  {hira: 'ぱ', roumaji: 'pa', type: 'handakuon', kata: 'パ'},
  {hira: 'ぴ', roumaji: 'pi', type: 'handakuon', kata: 'ピ'},
  {hira: 'ぷ', roumaji: 'pu', type: 'handakuon', kata: 'プ'},
  {hira: 'ぺ', roumaji: 'pe', type: 'handakuon', kata: 'ペ'},
  {hira: 'ぽ', roumaji: 'po', type: 'handakuon', kata: 'ポ'},
  {hira: 'きゃ', roumaji: 'kya', type: 'youon', kata: 'キャ'},

  {hira: 'きゅ', roumaji: 'kyu', type: 'youon', kata: 'キュ'},

  {hira: 'きょ', roumaji: 'kyo', type: 'youon', kata: 'キョ'},
  {hira: 'しゃ', roumaji: 'sha', type: 'youon', kata: 'シャ'},

  {hira: 'しゅ', roumaji: 'shu', type: 'youon', kata: 'シュ'},

  {hira: 'しょ', roumaji: 'sho', type: 'youon', kata: 'ショ'},
  {hira: 'ちゃ', roumaji: 'cha', type: 'youon', kata: 'チャ'},

  {hira: 'ちゅ', roumaji: 'chu', type: 'youon', kata: 'チュ'},

  {hira: 'ちょ', roumaji: 'cho', type: 'youon', kata: 'チョ'},
  {hira: 'にゃ', roumaji: 'nya', type: 'youon', kata: 'ニャ'},

  {hira: 'にゅ', roumaji: 'nyu', type: 'youon', kata: 'ニュ'},

  {hira: 'にょ', roumaji: 'nyo', type: 'youon', kata: 'ニョ'},
  {hira: 'ひゃ', roumaji: 'hya', type: 'youon', kata: 'ヒャ'},

  {hira: 'ひゅ', roumaji: 'hyu', type: 'youon', kata: 'ヒュ'},

  {hira: 'ひょ', roumaji: 'hyo', type: 'youon', kata: 'ヒョ'},
  {hira: 'みゃ', roumaji: 'mya', type: 'youon', kata: 'ミャ'},

  {hira: 'みゅ', roumaji: 'myu', type: 'youon', kata: 'ミュ'},

  {hira: 'みょ', roumaji: 'myo', type: 'youon', kata: 'ミョ'},
  {hira: 'りゃ', roumaji: 'rya', type: 'youon', kata: 'リャ'},

  {hira: 'りゅ', roumaji: 'ryu', type: 'youon', kata: 'リュ'},

  {hira: 'りょ', roumaji: 'ryo', type: 'youon', kata: 'リョ'},
  {hira: 'ぎゃ', roumaji: 'gya', type: 'youon', kata: 'ギャ'},

  {hira: 'ぎゅ', roumaji: 'gyu', type: 'youon', kata: 'ギュ'},

  {hira: 'ぎょ', roumaji: 'gyo', type: 'youon', kata: 'ギョ'},
  {hira: 'じゃ', roumaji: 'ja', type: 'youon', kata: 'ジャ'},

  {hira: 'じゅ', roumaji: 'ju', type: 'youon', kata: 'ジュ'},

  {hira: 'じょ', roumaji: 'jo', type: 'youon', kata: 'ジョ'},
  {hira: 'びゃ', roumaji: 'bya', type: 'youon', kata: 'ビャ'},

  {hira: 'びゅ', roumaji: 'byu', type: 'youon', kata: 'ビュ'},

  {hira: 'びょ', roumaji: 'byo', type: 'youon', kata: 'ビョ'},
  {hira: 'ぴゃ', roumaji: 'pya', type: 'youon', kata: 'ピャ'},

  {hira: 'ぴゅ', roumaji: 'pyu', type: 'youon', kata: 'ピュ'},

  {hira: 'ぴょ', roumaji: 'pyo', type: 'youon', kata: 'ピョ'},
];
